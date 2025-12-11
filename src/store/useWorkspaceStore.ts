import { create } from 'zustand';
import type { Workspace, WorkspaceSettings } from '@/types';
import {
    createWorkspace,
    getWorkspace,
    getWorkspacesByProfile,
    getDefaultWorkspace,
    updateWorkspace,
    updateWorkspaceSettings,
    setDefaultWorkspace,
    deleteWorkspace,
    updateLastBackup,
} from '@/lib/workspaceStorage';

interface WorkspaceStore {
    // State
    currentWorkspace: Workspace | null;
    workspaces: Workspace[];
    isLoading: boolean;

    // Actions
    loadWorkspaces: (profileId: string) => Promise<void>;
    setCurrentWorkspace: (workspace: Workspace | null) => void;
    switchWorkspace: (workspaceId: string) => Promise<void>;
    createNewWorkspace: (
        profileId: string,
        name: string,
        icon?: string,
        color?: string,
        description?: string
    ) => Promise<Workspace>;
    updateCurrentWorkspace: (updates: Partial<Omit<Workspace, 'id' | 'profileId' | 'created_at'>>) => Promise<void>;
    updateSettings: (settings: Partial<WorkspaceSettings>) => Promise<void>;
    setAsDefault: (workspaceId: string) => Promise<void>;
    deleteWorkspaceById: (workspaceId: string) => Promise<void>;
    loadDefaultWorkspace: (profileId: string) => Promise<void>;
    markBackupComplete: (workspaceId: string) => Promise<void>;
}

export const useWorkspaceStore = create<WorkspaceStore>((set, get) => ({
    // Initial state
    currentWorkspace: null,
    workspaces: [],
    isLoading: false,

    // Load all workspaces for a profile
    loadWorkspaces: async (profileId) => {
        set({ isLoading: true });
        try {
            const workspaces = await getWorkspacesByProfile(profileId);
            set({ workspaces, isLoading: false });
        } catch (error) {
            console.error('Failed to load workspaces:', error);
            set({ isLoading: false });
        }
    },

    // Set current workspace
    setCurrentWorkspace: (workspace) => {
        set({ currentWorkspace: workspace });
    },

    // Switch to a different workspace
    switchWorkspace: async (workspaceId) => {
        try {
            const workspace = await getWorkspace(workspaceId);
            if (workspace) {
                get().setCurrentWorkspace(workspace);
            } else {
                throw new Error('Workspace not found');
            }
        } catch (error) {
            console.error('Failed to switch workspace:', error);
            throw error;
        }
    },

    // Create a new workspace
    createNewWorkspace: async (profileId, name, icon, color, description) => {
        try {
            const workspace = await createWorkspace(profileId, name, icon, color, description);
            set(state => ({
                workspaces: [...state.workspaces, workspace],
            }));
            return workspace;
        } catch (error) {
            console.error('Failed to create workspace:', error);
            throw error;
        }
    },

    // Update current workspace
    updateCurrentWorkspace: async (updates) => {
        const { currentWorkspace } = get();
        if (!currentWorkspace) {
            throw new Error('No workspace is currently active');
        }

        try {
            await updateWorkspace(currentWorkspace.id, updates);
            const updatedWorkspace = await getWorkspace(currentWorkspace.id);
            if (updatedWorkspace) {
                set(state => ({
                    currentWorkspace: updatedWorkspace,
                    workspaces: state.workspaces.map(w =>
                        w.id === currentWorkspace.id ? updatedWorkspace : w
                    ),
                }));
            }
        } catch (error) {
            console.error('Failed to update workspace:', error);
            throw error;
        }
    },

    // Update workspace settings
    updateSettings: async (settings) => {
        const { currentWorkspace } = get();
        if (!currentWorkspace) {
            throw new Error('No workspace is currently active');
        }

        try {
            await updateWorkspaceSettings(currentWorkspace.id, settings);
            const updatedWorkspace = await getWorkspace(currentWorkspace.id);
            if (updatedWorkspace) {
                set(state => ({
                    currentWorkspace: updatedWorkspace,
                    workspaces: state.workspaces.map(w =>
                        w.id === currentWorkspace.id ? updatedWorkspace : w
                    ),
                }));
            }
        } catch (error) {
            console.error('Failed to update settings:', error);
            throw error;
        }
    },

    // Set workspace as default
    setAsDefault: async (workspaceId) => {
        try {
            await setDefaultWorkspace(workspaceId);
            const workspace = await getWorkspace(workspaceId);
            const { currentWorkspace } = get();

            if (workspace) {
                set(state => ({
                    workspaces: state.workspaces.map(w => ({
                        ...w,
                        isDefault: w.id === workspaceId,
                    })),
                    currentWorkspace: currentWorkspace?.id === workspaceId ? workspace : currentWorkspace,
                }));
            }
        } catch (error) {
            console.error('Failed to set default workspace:', error);
            throw error;
        }
    },

    // Delete a workspace
    deleteWorkspaceById: async (workspaceId) => {
        try {
            await deleteWorkspace(workspaceId);
            const { currentWorkspace } = get();

            set(state => ({
                workspaces: state.workspaces.filter(w => w.id !== workspaceId),
                currentWorkspace: currentWorkspace?.id === workspaceId ? null : currentWorkspace,
            }));
        } catch (error) {
            console.error('Failed to delete workspace:', error);
            throw error;
        }
    },

    // Load default workspace for a profile
    loadDefaultWorkspace: async (profileId) => {
        console.log('🏢 loadDefaultWorkspace called for profile:', profileId);
        set({ isLoading: true });
        try {
            const workspace = await getDefaultWorkspace(profileId);
            if (workspace) {
                console.log('✅ Found existing default workspace:', workspace.id, workspace.name);
                set({
                    currentWorkspace: workspace,
                    isLoading: false,
                });
            } else {
                console.log('⚠️  No default workspace found - creating new one');
                // If no default workspace exists, create one AND mark it as default
                const newWorkspace = await createWorkspace(
                    profileId,
                    'My Workspace',
                    '💼',
                    '#6366f1'
                );
                console.log('💾 Created new workspace:', newWorkspace.id);

                // CRITICAL FIX: Mark the newly created workspace as default
                await setDefaultWorkspace(newWorkspace.id);
                console.log('✅ Set new workspace as default');

                // Fetch the updated workspace with isDefault: true
                const updatedWorkspace = await getWorkspace(newWorkspace.id);

                set({
                    currentWorkspace: updatedWorkspace || newWorkspace,
                    workspaces: [updatedWorkspace || newWorkspace],
                    isLoading: false,
                });
                console.log('✅ Default workspace loaded:', updatedWorkspace?.id);
            }
        } catch (error) {
            console.error('❌ Failed to load default workspace:', error);
            set({ isLoading: false });
        }
    },

    // Mark backup as complete
    markBackupComplete: async (workspaceId) => {
        try {
            await updateLastBackup(workspaceId);
            const updatedWorkspace = await getWorkspace(workspaceId);
            const { currentWorkspace } = get();

            if (updatedWorkspace) {
                set(state => ({
                    workspaces: state.workspaces.map(w =>
                        w.id === workspaceId ? updatedWorkspace : w
                    ),
                    currentWorkspace: currentWorkspace?.id === workspaceId ? updatedWorkspace : currentWorkspace,
                }));
            }
        } catch (error) {
            console.error('Failed to mark backup complete:', error);
            throw error;
        }
    },
}));
