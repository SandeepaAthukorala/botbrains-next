import { create } from 'zustand';
import type { Keyword } from '@/types';
import {
    getAllKeywords,
    createKeyword as dbCreateKeyword,
    deleteKeyword as dbDeleteKeyword,
    getKeywordUsageCount,
    getAllUsedKeywords,
} from '@/lib/keywordStorage';

interface KeywordStore {
    // State
    keywords: Keyword[];
    usedKeywords: string[]; // for autocomplete
    isLoading: boolean;

    // Actions
    loadKeywords: () => Promise<void>;
    loadUsedKeywords: () => Promise<void>;
    createKeyword: (name: string) => Promise<Keyword>;
    deleteKeyword: (id: string) => Promise<void>;
    getKeywordUsageCount: (keywordName: string) => Promise<number>;
}

export const useKeywordStore = create<KeywordStore>((set) => ({
    // Initial state
    keywords: [],
    usedKeywords: [],
    isLoading: false,

    // Load all keywords
    loadKeywords: async () => {
        set({ isLoading: true });
        try {
            const keywords = await getAllKeywords();
            set({ keywords, isLoading: false });
        } catch (error) {
            console.error('Failed to load keywords:', error);
            set({ isLoading: false });
        }
    },

    // Load used keywords from prompts (for autocomplete)
    loadUsedKeywords: async () => {
        try {
            const usedKeywords = await getAllUsedKeywords();
            set({ usedKeywords });
        } catch (error) {
            console.error('Failed to load used keywords:', error);
        }
    },

    // Create a new keyword
    createKeyword: async (name) => {
        const keyword = await dbCreateKeyword(name);
        set(state => ({ keywords: [...state.keywords, keyword] }));
        return keyword;
    },

    // Delete a keyword
    deleteKeyword: async (id) => {
        await dbDeleteKeyword(id);
        set(state => ({
            keywords: state.keywords.filter(k => k.id !== id),
        }));
    },

    // Get usage count
    getKeywordUsageCount: async (keywordName) => {
        return getKeywordUsageCount(keywordName);
    },
}));
