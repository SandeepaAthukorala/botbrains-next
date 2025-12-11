import type { Prompt } from '@/types';
import { getPrompt, getAllPrompts } from './storage';

export class CompositionService {
    /**
     * Resolve the final template content by composing a prompt with its parents
     */
    static async resolveTemplate(promptId: string): Promise<string> {
        // We need to fetch the prompt first
        const prompt = await getPrompt(promptId);
        if (!prompt) return '';

        return this.resolvePromptContent(prompt);
    }

    /**
     * Recursive helper to resolve content given a prompt object
     */
    private static async resolvePromptContent(prompt: Prompt): Promise<string> {
        // Base case: no parent
        if (!prompt.parentId) {
            return prompt.prompt_template || '';
        }

        // Fetch parent
        const parent = await getPrompt(prompt.parentId);

        // If parent not found (deleted?), treat as standalone
        if (!parent) {
            return prompt.prompt_template || '';
        }

        // Recursively resolve parent's content
        const parentContent = await this.resolvePromptContent(parent);
        const childContent = prompt.prompt_template || '';

        // Compose based on mode
        const mode = prompt.compositionMode || 'inherit';

        switch (mode) {
            case 'inherit':
                // Parent + newline + Child
                return `${parentContent}\n\n${childContent}`;

            case 'extend':
                // Replace {{@prompt:parent-id}} placeholder
                if (childContent.includes(`{{@prompt:${parent.id}}}`)) {
                    return childContent.replace(new RegExp(`\\{\\{@prompt:${parent.id}\\}\\}`, 'g'), parentContent);
                }
                // Fallback: return child content
                return childContent;

            case 'standalone':
            default:
                return childContent;
        }
    }

    /**
     * Detect if setting newParentId as parent of promptId would create a circular reference
     */
    static async detectCircularReference(promptId: string, newParentId: string): Promise<boolean> {
        // Walk up from newParentId. If we hit promptId, it's a cycle.
        let currentId: string | null | undefined = newParentId;
        const visited = new Set<string>();

        // Set a max depth safety to prevent infinite loops in the checker itself
        const MAX_STEPS = 100;
        let steps = 0;

        while (currentId && steps < MAX_STEPS) {
            if (currentId === promptId) {
                return true; // Cycle detected
            }

            if (visited.has(currentId)) {
                return true; // Cycle in existing chain detected
            }
            visited.add(currentId);

            const parent: Prompt | undefined = await getPrompt(currentId);
            currentId = parent?.parentId;
            steps++;
        }

        return false;
    }

    /**
     * Calculate depth of a prompt (0 = root)
     * Used to enforce strict depth limit
     */
    static async getPromptDepth(promptId: string): Promise<number> {
        let depth = 0;
        let currentId: string | null | undefined = promptId;
        const visited = new Set<string>(); // Safety check

        while (currentId) {
            const prompt = await getPrompt(currentId);
            if (!prompt || !prompt.parentId) {
                break;
            }

            // Safety: if we somehow have a cycle that wasn't caught, break
            if (visited.has(currentId)) break;
            visited.add(currentId);

            currentId = prompt.parentId;
            depth++;

            if (depth > 20) break; // Hard safety limit
        }

        return depth;
    }

    /**
     * Get parent candidates for a prompt (filtering out self and descendants)
     */
    static async getEligibleParents(promptId: string | null, workspaceId: string): Promise<Prompt[]> {
        console.log(`🔍 [CompositionService] getEligibleParents called with promptId: ${promptId}, workspaceId: ${workspaceId}`);
        const allPrompts = await getAllPrompts(workspaceId);
        console.log(`🔍 [CompositionService] Found ${allPrompts.length} prompts in workspace ${workspaceId}`);

        if (!promptId) {
            console.log('🔍 [CompositionService] Returning all prompts (new prompt mode)');
            return allPrompts; // New prompt can pick anyone
        }

        // Exclude self
        const candidates = allPrompts.filter(p => p.id !== promptId);

        // Exclude descendants (BFS or DFS)
        const childrenMap = new Map<string, string[]>();
        allPrompts.forEach(p => {
            if (p.parentId) {
                const list = childrenMap.get(p.parentId) || [];
                list.push(p.id);
                childrenMap.set(p.parentId, list);
            }
        });

        const descendants = new Set<string>();
        const queue = [promptId];

        while (queue.length > 0) {
            const current = queue.shift()!;
            descendants.add(current);
            const children = childrenMap.get(current) || [];
            children.forEach(c => {
                if (!descendants.has(c)) {
                    queue.push(c);
                }
            });
        }

        return candidates.filter(p => !descendants.has(p.id));
    }
}
