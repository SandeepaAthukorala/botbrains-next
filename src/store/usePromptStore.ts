import { create } from 'zustand';
import type { Prompt, SearchFilters } from '@/types';
import {
    getAllPrompts,
    createPrompt as dbCreatePrompt,
    updatePrompt as dbUpdatePrompt,
    deletePrompt as dbDeletePrompt,
    searchPrompts,
    reorderPrompts as dbReorderPrompts,
    duplicatePrompt as dbDuplicatePrompt,
    toggleFavorite as dbToggleFavorite,
    trackPromptUsage as dbTrackPromptUsage,
} from '@/lib/storage';
import { CompositionService } from '@/lib/composition';

interface PromptStore {
    // State
    prompts: Prompt[];
    selectedPrompt: Prompt | null;
    currentWorkspaceId: string | null;   // Current workspace context
    searchQuery: string;
    filters: SearchFilters;
    viewMode: 'card' | 'list';
    isLoading: boolean;

    // Actions
    setWorkspace: (workspaceId: string | null) => void;
    loadPrompts: (workspaceId?: string) => Promise<void>;
    refreshPrompts: () => Promise<void>;
    createPrompt: (data: Omit<Prompt, 'id' | 'created_at' | 'updated_at' | 'order'>) => Promise<Prompt>;
    updatePrompt: (id: string, updates: Partial<Prompt>) => Promise<void>;
    deletePrompt: (id: string) => Promise<void>;
    duplicatePrompt: (id: string) => Promise<void>;
    selectPrompt: (prompt: Prompt | null) => void;
    setSearchQuery: (query: string) => void;
    setFilters: (filters: SearchFilters) => void;
    setViewMode: (mode: 'card' | 'list') => void;
    reorderPrompts: (promptIds: string[]) => Promise<void>;
    searchAndFilter: () => Promise<void>;
    // Analytics & Favorites
    toggleFavorite: (id: string) => Promise<void>;
    trackUsage: (id: string) => Promise<void>;

    // Composition
    resolveTemplate: (id: string) => Promise<string>;
    setParent: (childId: string, parentId: string | null) => Promise<void>;
}

export const usePromptStore = create<PromptStore>((set, get) => ({
    // Initial state
    prompts: [],
    selectedPrompt: null,
    currentWorkspaceId: null,  // No workspace selected initially
    searchQuery: '',
    filters: {},
    viewMode: 'card',
    isLoading: false,

    // Set current workspace
    setWorkspace: (workspaceId) => {
        set({ currentWorkspaceId: workspaceId });
        // Reload prompts for new workspace
        if (workspaceId) {
            get().loadPrompts(workspaceId);
        } else {
            set({ prompts: [] });
        }
    },

    // Load all prompts (optionally for a specific workspace)
    loadPrompts: async (workspaceId) => {
        const wsId = workspaceId || get().currentWorkspaceId;
        set({ isLoading: true });
        try {
            const prompts = await getAllPrompts(wsId || undefined);
            set({ prompts, isLoading: false });
        } catch (error) {
            console.error('Failed to load prompts:', error);
            set({ isLoading: false });
        }
    },

    // Refresh prompts (re-fetch from DB)
    refreshPrompts: async () => {
        await get().loadPrompts();
    },

    // Create a new prompt
    createPrompt: async (data) => {
        const { currentWorkspaceId } = get();
        console.log('🏪 Store: Creating prompt', data);
        const prompt = await dbCreatePrompt(data, currentWorkspaceId || undefined);
        console.log('🏪 Store: Prompt created, adding to state', prompt);
        set(state => ({ prompts: [...state.prompts, prompt] }));
        console.log('🏪 Store: State updated');
        return prompt;
    },

    // Update a prompt
    updatePrompt: async (id, updates) => {
        await dbUpdatePrompt(id, updates);
        set(state => ({
            prompts: state.prompts.map(p =>
                p.id === id ? { ...p, ...updates, updated_at: new Date().toISOString() } : p
            ),
            selectedPrompt: state.selectedPrompt?.id === id
                ? { ...state.selectedPrompt, ...updates, updated_at: new Date().toISOString() }
                : state.selectedPrompt,
        }));
    },

    // Delete a prompt
    deletePrompt: async (id) => {
        await dbDeletePrompt(id);
        set(state => ({
            prompts: state.prompts.filter(p => p.id !== id),
            selectedPrompt: state.selectedPrompt?.id === id ? null : state.selectedPrompt,
        }));
    },

    // Duplicate a prompt
    duplicatePrompt: async (id) => {
        const duplicate = await dbDuplicatePrompt(id);
        set(state => ({ prompts: [...state.prompts, duplicate] }));
    },

    // Select a prompt
    selectPrompt: (prompt) => {
        set({ selectedPrompt: prompt });
    },

    // Set search query
    setSearchQuery: (query) => {
        set({ searchQuery: query });
    },

    // Set filters
    setFilters: (filters) => {
        set({ filters });
    },

    // Set view mode
    setViewMode: (mode) => {
        set({ viewMode: mode });
    },

    // Reorder prompts
    reorderPrompts: async (promptIds) => {
        await dbReorderPrompts(promptIds);
        await get().loadPrompts();
    },

    // Search and filter prompts
    searchAndFilter: async () => {
        set({ isLoading: true });
        try {
            const { searchQuery, filters, currentWorkspaceId } = get();
            const results = await searchPrompts(searchQuery, filters, currentWorkspaceId || undefined);
            set({ prompts: results, isLoading: false });
        } catch (error) {
            console.error('Search failed:', error);
            set({ isLoading: false });
        }
    },

    // Toggle favorite status
    toggleFavorite: async (id) => {
        // Optimistic update
        set(state => ({
            prompts: state.prompts.map(p =>
                p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
            ),
        }));

        try {
            await dbToggleFavorite(id);
        } catch (error) {
            console.error('Failed to toggle favorite:', error);
            // Revert on error
            await get().loadPrompts();
        }
    },

    trackUsage: async (id) => {
        // Optimistic update
        const now = new Date().toISOString();
        set(state => ({
            prompts: state.prompts.map(p =>
                p.id === id
                    ? { ...p, usageCount: (p.usageCount || 0) + 1, lastUsedAt: now }
                    : p
            ),
        }));

        try {
            await dbTrackPromptUsage(id);
        } catch (error) {
            console.error('Failed to track usage:', error);
            // Revert on error
            await get().loadPrompts();
        }
    },

    // Resolve template with parents
    resolveTemplate: async (id) => {
        return await CompositionService.resolveTemplate(id);
    },

    // Set parent with validation
    setParent: async (childId, parentId) => {
        if (parentId) {
            // Check for circular reference
            const isCircular = await CompositionService.detectCircularReference(childId, parentId);
            if (isCircular) {
                throw new Error('Circular reference detected: A prompt cannot be its own ancestor.');
            }

            // Check depth limit
            const depth = await CompositionService.getPromptDepth(parentId);
            if (depth >= 10) {
                throw new Error('Depth limit exceeded: Maximum 10 levels of inheritance allowed.');
            }
        }

        await get().updatePrompt(childId, { parentId });
    },
}));
