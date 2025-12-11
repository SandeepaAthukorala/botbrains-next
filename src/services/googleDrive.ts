/**
 * Google Drive Backup Service
 * Handles backup/restore of workspace data to Google Drive
 */

import { gapi } from 'gapi-script';
import { googleAuth } from './googleAuth';
import type { Workspace, Prompt, Category, Keyword } from '@/types';
import { db } from '@/lib/db';

const APP_FOLDER_NAME = 'InfiniteViking';

export interface BackupMetadata {
    workspaceId: string;
    workspaceName: string;
    timestamp: string;
    version: string;
    checksum: string;
}

export interface BackupData {
    metadata: BackupMetadata;
    workspace: Workspace;
    prompts: Prompt[];
    categories: Category[];
    keywords: Keyword[];
}

export interface BackupFile {
    id: string;
    name: string;
    metadata: BackupMetadata;
    createdTime: string;
    modifiedTime: string;
    size: number;
}

class GoogleDriveService {
    private appFolderId: string | null = null;

    /**
     * Get or create the app folder in Google Drive
     */
    async getOrCreateAppFolder(): Promise<string> {
        if (this.appFolderId) {
            return this.appFolderId;  // Already checked it's not null
        }

        const accessToken = await googleAuth.getAccessToken();
        if (!accessToken) {
            throw new Error('Not authenticated');
        }

        try {
            // Search for existing folder
            const response = await gapi.client.drive.files.list({
                q: `name='${APP_FOLDER_NAME}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
                fields: 'files(id, name)',
                spaces: 'drive',
            });

            if (response.result.files && response.result.files.length > 0) {
                const fileId = response.result.files[0].id;
                if (!fileId) {
                    throw new Error('File ID is null');
                }
                this.appFolderId = fileId;
                console.log('📁 Found existing app folder:', this.appFolderId);
                return fileId;  // Return the validated fileId directly
            }

            // Create new folder
            const createResponse = await gapi.client.drive.files.create({
                resource: {
                    name: APP_FOLDER_NAME,
                    mimeType: 'application/vnd.google-apps.folder',
                },
                fields: 'id',
            });

            const createdId = createResponse.result.id;
            if (!createdId) {
                throw new Error('Failed to create folder - no ID returned');
            }

            this.appFolderId = createdId;
            console.log('✅ Created app folder:', this.appFolderId);
            return createdId;  // Return the validated createdId directly
        } catch (error) {
            console.error('❌ Failed to get/create app folder:', error);
            throw error;
        }
    }

    /**
     * Create a backup of workspace data
     */
    async createBackup(workspaceId: string): Promise<string> {
        const accessToken = await googleAuth.getAccessToken();
        if (!accessToken) {
            throw new Error('Not authenticated');
        }

        try {
            // Get workspace data
            const workspace = await db.workspaces.get(workspaceId);
            if (!workspace) {
                throw new Error('Workspace not found');
            }

            const prompts = await db.prompts.where('workspaceId').equals(workspaceId).toArray();
            const categories = await db.categories.where('workspaceId').equals(workspaceId).toArray();
            const keywords = await db.keywords.where('workspaceId').equals(workspaceId).toArray();

            // Create backup data
            const backup: BackupData = {
                metadata: {
                    workspaceId,
                    workspaceName: workspace.name,
                    timestamp: new Date().toISOString(),
                    version: '1.0',
                    checksum: this.generateChecksum({ workspace, prompts, categories, keywords }),
                },
                workspace,
                prompts,
                categories,
                keywords,
            };

            // Get app folder
            const folderId = await this.getOrCreateAppFolder();

            // Create file name
            const fileName = `backup_${workspace.name.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.json`;

            // Upload to Google Drive
            const fileMetadata = {
                name: fileName,
                parents: [folderId],
                mimeType: 'application/json',
            };

            const file = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });

            const form = new FormData();
            form.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }));
            form.append('file', file);

            const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,createdTime', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: form,
            });

            if (!response.ok) {
                throw new Error(`Upload failed: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('✅ Backup created:', result.id);
            return result.id;
        } catch (error) {
            console.error('❌ Failed to create backup:', error);
            throw error;
        }
    }

    /**
     * List all backups for a workspace
     */
    async listBackups(workspaceId?: string): Promise<BackupFile[]> {
        const accessToken = await googleAuth.getAccessToken();
        if (!accessToken) {
            throw new Error('Not authenticated');
        }

        try {
            const folderId = await this.getOrCreateAppFolder();

            const response = await gapi.client.drive.files.list({
                q: `'${folderId}' in parents and mimeType='application/json' and trashed=false`,
                fields: 'files(id, name, createdTime, modifiedTime, size)',
                orderBy: 'createdTime desc',
                spaces: 'drive',
            });

            const files = response.result.files || [];
            const backupFiles: BackupFile[] = [];

            // Fetch metadata for each file
            for (const file of files) {
                try {
                    const contentResponse = await gapi.client.drive.files.get({
                        fileId: file.id!,
                        alt: 'media',
                    });

                    const backup: BackupData = JSON.parse(contentResponse.body);

                    // Filter by workspace if specified
                    if (workspaceId && backup.metadata.workspaceId !== workspaceId) {
                        continue;
                    }

                    backupFiles.push({
                        id: file.id!,
                        name: file.name!,
                        metadata: backup.metadata,
                        createdTime: file.createdTime!,
                        modifiedTime: file.modifiedTime!,
                        size: parseInt(file.size || '0'),
                    });
                } catch (error) {
                    console.warn('Failed to read backup file:', file.name, error);
                }
            }

            return backupFiles;
        } catch (error) {
            console.error('❌ Failed to list backups:', error);
            throw error;
        }
    }

    /**
     * Restore from a backup
     */
    async restoreBackup(fileId: string): Promise<void> {
        const accessToken = await googleAuth.getAccessToken();
        if (!accessToken) {
            throw new Error('Not authenticated');
        }

        try {
            // Download backup file
            const response = await gapi.client.drive.files.get({
                fileId,
                alt: 'media',
            });

            const backup: BackupData = JSON.parse(response.body);

            // Verify checksum
            const calculatedChecksum = this.generateChecksum({
                workspace: backup.workspace,
                prompts: backup.prompts,
                categories: backup.categories,
                keywords: backup.keywords,
            });

            if (calculatedChecksum !== backup.metadata.checksum) {
                console.warn('⚠️ Checksum mismatch - backup may be corrupted');
            }

            // Check if workspace already exists
            const existingWorkspace = await db.workspaces.get(backup.workspace.id);

            if (existingWorkspace) {
                // Ask user for confirmation
                const overwrite = confirm(
                    `Workspace "${backup.workspace.name}" already exists. Overwrite?`
                );
                if (!overwrite) {
                    throw new Error('Restore cancelled by user');
                }

                // Delete existing data
                await db.prompts.where('workspaceId').equals(backup.workspace.id).delete();
                await db.categories.where('workspaceId').equals(backup.workspace.id).delete();
                await db.keywords.where('workspaceId').equals(backup.workspace.id).delete();
            }

            // Restore workspace
            await db.workspaces.put(backup.workspace);

            // Restore data
            await db.prompts.bulkPut(backup.prompts);
            await db.categories.bulkPut(backup.categories);
            await db.keywords.bulkPut(backup.keywords);

            console.log('✅ Backup restored successfully');
        } catch (error) {
            console.error('❌ Failed to restore backup:', error);
            throw error;
        }
    }

    /**
     * Delete a backup file
     */
    async deleteBackup(fileId: string): Promise<void> {
        const accessToken = await googleAuth.getAccessToken();
        if (!accessToken) {
            throw new Error('Not authenticated');
        }

        try {
            await gapi.client.drive.files.delete({
                fileId,
            });

            console.log('✅ Backup deleted:', fileId);
        } catch (error) {
            console.error('❌ Failed to delete backup:', error);
            throw error;
        }
    }

    /**
     * Generate checksum for backup data
     */
    private generateChecksum(data: Omit<BackupData, 'metadata'>): string {
        const str = JSON.stringify(data);
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash.toString(36);
    }
}

// Export singleton instance
export const googleDrive = new GoogleDriveService();
