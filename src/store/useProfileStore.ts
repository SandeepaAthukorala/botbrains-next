import { create } from 'zustand';
import type { Profile, ProfilePreferences } from '@/types';
import {
    getAllProfiles,
    getProfile,
    getProfileByGoogleId,
    createProfile,
    updateProfile,
    updateProfilePreferences,
    deleteProfile,
} from '@/lib/profileStorage';

interface ProfileStore {
    // State
    currentProfile: Profile | null;
    profiles: Profile[];
    isAuthenticated: boolean;
    isLoading: boolean;

    // Actions
    loadProfiles: () => Promise<void>;
    setCurrentProfile: (profile: Profile | null) => void;
    switchProfile: (profileId: string) => Promise<void>;
    createNewProfile: (googleId: string, email: string, name: string, avatar?: string) => Promise<Profile>;
    updateCurrentProfile: (updates: Partial<Omit<Profile, 'id' | 'googleId' | 'created_at'>>) => Promise<void>;
    updatePreferences: (preferences: Partial<ProfilePreferences>) => Promise<void>;
    deleteCurrentProfile: () => Promise<void>;
    logout: () => void;
    getOrCreateProfile: (googleId: string, email: string, name: string, avatar?: string) => Promise<Profile>;
}

export const useProfileStore = create<ProfileStore>((set, get) => ({
    // Initial state
    currentProfile: null,
    profiles: [],
    isAuthenticated: false,
    isLoading: false,

    // Load all profiles
    loadProfiles: async () => {
        set({ isLoading: true });
        try {
            const profiles = await getAllProfiles();
            set({ profiles, isLoading: false });
        } catch (error) {
            console.error('Failed to load profiles:', error);
            set({ isLoading: false });
        }
    },

    // Set current profile
    setCurrentProfile: (profile) => {
        set({
            currentProfile: profile,
            isAuthenticated: profile !== null,
        });
    },

    // Switch to a different profile
    switchProfile: async (profileId) => {
        try {
            const profile = await getProfile(profileId);
            if (profile) {
                get().setCurrentProfile(profile);
            } else {
                throw new Error('Profile not found');
            }
        } catch (error) {
            console.error('Failed to switch profile:', error);
            throw error;
        }
    },

    // Create a new profile
    createNewProfile: async (googleId, email, name, avatar) => {
        try {
            const profile = await createProfile(googleId, email, name, avatar);
            set(state => ({
                profiles: [...state.profiles, profile],
            }));
            return profile;
        } catch (error) {
            console.error('Failed to create profile:', error);
            throw error;
        }
    },

    // Update current profile
    updateCurrentProfile: async (updates) => {
        const { currentProfile } = get();
        if (!currentProfile) {
            throw new Error('No profile is currently active');
        }

        try {
            await updateProfile(currentProfile.id, updates);
            const updatedProfile = await getProfile(currentProfile.id);
            if (updatedProfile) {
                set(state => ({
                    currentProfile: updatedProfile,
                    profiles: state.profiles.map(p =>
                        p.id === currentProfile.id ? updatedProfile : p
                    ),
                }));
            }
        } catch (error) {
            console.error('Failed to update profile:', error);
            throw error;
        }
    },

    // Update preferences
    updatePreferences: async (preferences) => {
        const { currentProfile } = get();
        if (!currentProfile) {
            throw new Error('No profile is currently active');
        }

        try {
            await updateProfilePreferences(currentProfile.id, preferences);
            const updatedProfile = await getProfile(currentProfile.id);
            if (updatedProfile) {
                set(state => ({
                    currentProfile: updatedProfile,
                    profiles: state.profiles.map(p =>
                        p.id === currentProfile.id ? updatedProfile : p
                    ),
                }));
            }
        } catch (error) {
            console.error('Failed to update preferences:', error);
            throw error;
        }
    },

    // Delete current profile
    deleteCurrentProfile: async () => {
        const { currentProfile } = get();
        if (!currentProfile) {
            throw new Error('No profile is currently active');
        }

        try {
            await deleteProfile(currentProfile.id);
            set(state => ({
                currentProfile: null,
                isAuthenticated: false,
                profiles: state.profiles.filter(p => p.id !== currentProfile.id),
            }));
        } catch (error) {
            console.error('Failed to delete profile:', error);
            throw error;
        }
    },

    // Logout
    logout: () => {
        set({
            currentProfile: null,
            isAuthenticated: false,
        });
    },

    // Get existing profile or create new one
    getOrCreateProfile: async (googleId, email, name, avatar) => {
        try {
            // Try to find existing profile
            let profile = await getProfileByGoogleId(googleId);

            if (!profile) {
                // Create new profile
                profile = await get().createNewProfile(googleId, email, name, avatar);
            } else {
                // Update profile list if needed
                const profiles = await getAllProfiles();
                set({ profiles });
            }

            return profile;
        } catch (error) {
            console.error('Failed to get or create profile:', error);
            throw error;
        }
    },
}));
