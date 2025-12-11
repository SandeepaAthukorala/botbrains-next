import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import matter from 'gray-matter';
import type { Prompt, Workspace, Category, Keyword } from '@/types';
import { getAllPrompts } from './storage';
import { getWorkspacesByProfile } from './workspaceStorage';
import { getAllCategories } from './categoryStorage';
import { getAllKeywords } from './keywordStorage';

// ============================================================================
// TYPES
// ============================================================================

export interface ExportManifest {
    version: string;
    exportedAt: string;
    appVersion: string;
    profileId: string;
    counts: {
        workspaces: number;
        prompts: number;
        categories: number;
        keywords: number;
    };
}

export interface WorkspaceExportData {
    workspace: Workspace;
    prompts: Prompt[];
}

export interface FullExportData {
    manifest: ExportManifest;
    workspaces: WorkspaceExportData[];
    categories: Category[];
    keywords: Keyword[];
}

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Sanitize a string for use as a folder/file name
 * - Lowercase
 * - Replace spaces and special chars with hyphens
 * - Max 50 characters
 * - Remove leading/trailing hyphens
 */
export function sanitizeFolderName(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
        .slice(0, 50); // Max 50 chars
}

/**
 * Generate a unique folder name by appending -1, -2, etc if duplicates exist
 */
export function generateUniqueFolderName(baseName: string, existingNames: Set<string>): string {
    let sanitized = sanitizeFolderName(baseName);
    let uniqueName = sanitized;
    let counter = 1;

    while (existingNames.has(uniqueName)) {
        uniqueName = `${sanitized}-${counter}`;
        counter++;
    }

    existingNames.add(uniqueName);
    return uniqueName;
}

// ============================================================================
// MARKDOWN GENERATION
// ============================================================================

/**
 * Generate Markdown file with YAML frontmatter for a prompt
 */
export function generatePromptMarkdown(prompt: Prompt): string {
    // Frontmatter data (subset of prompt data that's human-readable)
    const frontmatter = {
        title: prompt.title,
        type: prompt.type,
        category: prompt.category,
        tags: prompt.tags,
        keywords: prompt.keywords,
        description: prompt.performance.notes || '',
        isFavorite: prompt.isFavorite || false,
    };

    // Manually generate YAML frontmatter (avoid gray-matter.stringify which uses Buffer)
    const yamlLines = ['---'];

    // Add each frontmatter field
    for (const [key, value] of Object.entries(frontmatter)) {
        if (Array.isArray(value)) {
            if (value.length === 0) {
                yamlLines.push(`${key}: []`);
            } else {
                yamlLines.push(`${key}:`);
                value.forEach(item => {
                    yamlLines.push(`  - ${JSON.stringify(item)}`);
                });
            }
        } else if (typeof value === 'string') {
            // Escape strings with colons or special characters
            const needsQuotes = value.includes(':') || value.includes('#') || value.includes('"');
            yamlLines.push(`${key}: ${needsQuotes ? JSON.stringify(value) : value}`);
        } else {
            yamlLines.push(`${key}: ${value}`);
        }
    }

    yamlLines.push('---');
    yamlLines.push('');
    yamlLines.push(prompt.prompt_template);

    return yamlLines.join('\n');
}

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================

/**
 * Export all data for a profile
 */
export async function exportAllData(profileId: string): Promise<FullExportData> {
    console.log('🔄 Starting export for profile:', profileId);

    // Fetch all workspaces for this profile
    const workspaces = await getWorkspacesByProfile(profileId);
    console.log(`📊 Found ${workspaces.length} workspaces`);

    // Fetch prompts for each workspace
    const workspaceData: WorkspaceExportData[] = [];
    let totalPrompts = 0;

    for (const workspace of workspaces) {
        const prompts = await getAllPrompts(workspace.id);
        totalPrompts += prompts.length;
        workspaceData.push({
            workspace,
            prompts,
        });
        console.log(`  ✅ Workspace "${workspace.name}": ${prompts.length} prompts`);
    }

    // Fetch all categories and keywords
    const categories = await getAllCategories();
    const keywords = await getAllKeywords();

    console.log(`📋 Total: ${totalPrompts} prompts, ${categories.length} categories, ${keywords.length} keywords`);

    // Create manifest
    const manifest: ExportManifest = {
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        appVersion: '1.0.0', // TODO: Get from package.json
        profileId,
        counts: {
            workspaces: workspaces.length,
            prompts: totalPrompts,
            categories: categories.length,
            keywords: keywords.length,
        },
    };

    return {
        manifest,
        workspaces: workspaceData,
        categories,
        keywords,
    };
}

/**
 * Create a ZIP archive from export data
 */
export async function createExportArchive(data: FullExportData): Promise<Blob> {
    const zip = new JSZip();

    // Add manifest at root
    zip.file('manifest.json', JSON.stringify(data.manifest, null, 2));

    // Add global categories and keywords
    zip.file('categories.json', JSON.stringify(data.categories, null, 2));
    zip.file('keywords.json', JSON.stringify(data.keywords, null, 2));

    // Track folder names to ensure uniqueness
    const workspaceFolderNames = new Set<string>();

    // Process each workspace
    for (const { workspace, prompts } of data.workspaces) {
        const workspaceFolderName = generateUniqueFolderName(
            `workspace-${workspace.name}`,
            workspaceFolderNames
        );

        // Add workspace config.json
        zip.file(
            `${workspaceFolderName}/config.json`,
            JSON.stringify(workspace, null, 2)
        );

        // Track prompt folder names within this workspace
        const promptFolderNames = new Set<string>();

        // Add each prompt
        for (const prompt of prompts) {
            const promptFolderName = generateUniqueFolderName(
                prompt.title,
                promptFolderNames
            );

            const promptPath = `${workspaceFolderName}/prompts/${promptFolderName}`;

            // Add content.md (human-readable)
            const markdown = generatePromptMarkdown(prompt);
            zip.file(`${promptPath}/content.md`, markdown);

            // Add metadata.json (complete data)
            zip.file(`${promptPath}/metadata.json`, JSON.stringify(prompt, null, 2));
        }
    }

    console.log('📦 Generating ZIP archive...');
    // Generate blob without using workers to avoid CSP blob: restrictions
    const blob = await zip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 6
        }
    });
    console.log(`✅ Archive created: ${(blob.size / 1024 / 1024).toFixed(2)} MB`);

    return blob;
}

/**
 * Export and download all data as a ZIP file
 */
export async function exportAndDownload(profileId: string): Promise<void> {
    try {
        // Export data
        const data = await exportAllData(profileId);

        // Create ZIP
        const blob = await createExportArchive(data);

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const filename = `infinite-viking-backup-${timestamp}.zip`;

        // Trigger download
        saveAs(blob, filename);

        console.log(`✅ Export complete: ${filename}`);
    } catch (error) {
        console.error('❌ Export failed:', error);
        throw error;
    }
}

// ============================================================================
// IMPORT FUNCTIONS
// ============================================================================

/**
 * Parse Markdown file with YAML frontmatter
 */
export function parseMarkdownWithFrontmatter(markdown: string): {
    frontmatter: any;
    content: string;
} {
    const parsed = matter(markdown);
    return {
        frontmatter: parsed.data,
        content: parsed.content,
    };
}

/**
 * Clear all workspace data for a profile (DESTRUCTIVE)
 * This deletes: workspaces, prompts, categories, keywords
 */
export async function clearAllWorkspaceData(profileId: string): Promise<void> {
    console.log('⚠️ CLEARING ALL DATA for profile:', profileId);

    const { deleteWorkspace } = await import('./workspaceStorage');
    const workspaces = await getWorkspacesByProfile(profileId);

    for (const workspace of workspaces) {
        console.log(`  🗑️ Deleting workspace: ${workspace.name}`);
        await deleteWorkspace(workspace.id);
    }

    console.log('✅ All data cleared');
}

/**
 * Import a full archive from a ZIP blob
 */
export async function importFullArchive(zipBlob: Blob, profileId: string): Promise<void> {
    console.log('📥 Starting import...');

    try {
        // Load ZIP
        const zip = await JSZip.loadAsync(zipBlob);

        // Read and validate manifest
        const manifestFile = zip.file('manifest.json');
        if (!manifestFile) {
            throw new Error('Invalid backup: manifest.json not found');
        }

        const manifestText = await manifestFile.async('text');
        const manifest: ExportManifest = JSON.parse(manifestText);
        console.log('📋 Manifest loaded:', manifest);

        // Validate version compatibility
        if (manifest.version !== '1.0.0') {
            console.warn('⚠️ Version mismatch. Current: 1.0.0, Archive:', manifest.version);
        }

        // Clear existing data (NUCLEAR OPTION)
        await clearAllWorkspaceData(profileId);

        // Import global data
        const categoriesFile = zip.file('categories.json');
        const keywordsFile = zip.file('keywords.json');

        let categories: Category[] = [];
        let keywords: Keyword[] = [];

        if (categoriesFile) {
            const categoriesText = await categoriesFile.async('text');
            categories = JSON.parse(categoriesText);
        }

        if (keywordsFile) {
            const keywordsText = await keywordsFile.async('text');
            keywords = JSON.parse(keywordsText);
        }

        console.log(`📊 Importing ${categories.length} categories, ${keywords.length} keywords`);

        // Import categories
        const { createCategory } = await import('./categoryStorage');
        for (const category of categories) {
            await createCategory(category.name, category.color, category.description, category.workspaceId);
        }

        // Import keywords
        const { createKeyword } = await import('./keywordStorage');
        for (const keyword of keywords) {
            await createKeyword(keyword.name, keyword.workspaceId);
        }

        // Import workspaces and prompts
        const { createWorkspace } = await import('./workspaceStorage');
        const { createPrompt } = await import('./storage');

        const workspaceFolders = Object.keys(zip.files).filter(
            (path) => path.startsWith('workspace-') && path.endsWith('/config.json')
        );

        console.log(`📁 Found ${workspaceFolders.length} workspace folders`);

        for (const configPath of workspaceFolders) {
            const configFile = zip.file(configPath);
            if (!configFile) continue;

            const configText = await configFile.async('text');
            const workspaceData: Workspace = JSON.parse(configText);

            console.log(`  📂 Importing workspace: ${workspaceData.name}`);

            // Create workspace
            const newWorkspace = await createWorkspace(
                profileId,
                workspaceData.name,
                workspaceData.icon,
                workspaceData.color,
                workspaceData.description
            );

            // Find all prompts in this workspace
            const workspaceFolder = configPath.replace('/config.json', '');
            const promptFolders = Object.keys(zip.files).filter(
                (path) =>
                    path.startsWith(`${workspaceFolder}/prompts/`) &&
                    path.endsWith('/metadata.json')
            );

            console.log(`    📝 Found ${promptFolders.length} prompts`);

            for (const metadataPath of promptFolders) {
                const metadataFile = zip.file(metadataPath);
                if (!metadataFile) continue;

                const metadataText = await metadataFile.async('text');
                const promptData: Prompt = JSON.parse(metadataText);

                // Create prompt with new workspace ID
                const { id, created_at, updated_at, workspaceId, ...promptFields } = promptData;

                await createPrompt(promptFields, newWorkspace.id);
            }
        }

        console.log('✅ Import complete!');
    } catch (error) {
        console.error('❌ Import failed:', error);
        throw error;
    }
}

/**
 * Import from a file input
 */
export async function importFromFile(file: File, profileId: string): Promise<void> {
    if (!file.name.endsWith('.zip')) {
        throw new Error('Please select a .zip file');
    }

    const blob = new Blob([file], { type: 'application/zip' });
    await importFullArchive(blob, profileId);
}
