import { create } from 'zustand';
import type { Category } from '@/types';
import {
    getAllCategories,
    createCategory as dbCreateCategory,
    updateCategory as dbUpdateCategory,
    deleteCategory as dbDeleteCategory,
    getCategoryUsageCount,
} from '@/lib/categoryStorage';

interface CategoryStore {
    // State
    categories: Category[];
    isLoading: boolean;

    // Actions
    loadCategories: () => Promise<void>;
    createCategory: (name: string, color: string, description?: string) => Promise<Category>;
    updateCategory: (id: string, updates: Partial<Category>) => Promise<void>;
    deleteCategory: (id: string) => Promise<void>;
    getCategoryUsageCount: (categoryName: string) => Promise<number>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
    // Initial state
    categories: [],
    isLoading: false,

    // Load all categories
    loadCategories: async () => {
        set({ isLoading: true });
        try {
            const categories = await getAllCategories();
            set({ categories, isLoading: false });
        } catch (error) {
            console.error('Failed to load categories:', error);
            set({ isLoading: false });
        }
    },

    // Create a new category
    createCategory: async (name, color, description?) => {
        const category = await dbCreateCategory(name, color, description);
        set(state => ({ categories: [...state.categories, category] }));
        return category;
    },

    // Update a category
    updateCategory: async (id, updates) => {
        await dbUpdateCategory(id, updates);
        set(state => ({
            categories: state.categories.map(c =>
                c.id === id ? { ...c, ...updates } : c
            ),
        }));
    },

    // Delete a category
    deleteCategory: async (id) => {
        await dbDeleteCategory(id);
        set(state => ({
            categories: state.categories.filter(c => c.id !== id),
        }));
    },

    // Get usage count
    getCategoryUsageCount: async (categoryName) => {
        return getCategoryUsageCount(categoryName);
    },
}));
