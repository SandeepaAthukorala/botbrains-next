import { create } from 'zustand';
import type { GlobalVariableDefault } from '@/types';
import {
    getAllDefaults,
    setDefault as dbSetDefault,
    deleteDefault as dbDeleteDefault,
} from '@/lib/defaultsStorage';

interface DefaultsStore {
    // State
    globalDefaults: GlobalVariableDefault[];
    isLoading: boolean;

    // Actions
    loadDefaults: () => Promise<void>;
    setDefault: (variableName: string, defaultValue: string) => Promise<void>;
    deleteDefault: (variableName: string) => Promise<void>;
    getDefaultValue: (variableName: string) => string | undefined;
}

export const useDefaultsStore = create<DefaultsStore>((set, get) => ({
    // Initial state
    globalDefaults: [],
    isLoading: false,

    // Load all global defaults
    loadDefaults: async () => {
        set({ isLoading: true });
        try {
            const defaults = await getAllDefaults();
            set({ globalDefaults: defaults, isLoading: false });
        } catch (error) {
            console.error('Failed to load global defaults:', error);
            set({ isLoading: false });
        }
    },

    // Set or update a global default
    setDefault: async (variableName, defaultValue) => {
        try {
            const updatedDefault = await dbSetDefault(variableName, defaultValue);
            set(state => {
                const existing = state.globalDefaults.find(d => d.variableName === variableName);
                if (existing) {
                    return {
                        globalDefaults: state.globalDefaults.map(d =>
                            d.variableName === variableName ? updatedDefault : d
                        ),
                    };
                } else {
                    return {
                        globalDefaults: [...state.globalDefaults, updatedDefault],
                    };
                }
            });
        } catch (error) {
            console.error('Failed to set default:', error);
            throw error;
        }
    },

    // Delete a global default
    deleteDefault: async (variableName) => {
        try {
            await dbDeleteDefault(variableName);
            set(state => ({
                globalDefaults: state.globalDefaults.filter(d => d.variableName !== variableName),
            }));
        } catch (error) {
            console.error('Failed to delete default:', error);
            throw error;
        }
    },

    // Get default value for a variable name
    getDefaultValue: (variableName) => {
        const defaultItem = get().globalDefaults.find(d => d.variableName === variableName);
        return defaultItem?.defaultValue;
    },
}));
