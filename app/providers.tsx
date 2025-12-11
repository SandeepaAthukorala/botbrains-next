'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useProfileStore } from '@/store/useProfileStore';
import { useWorkspaceStore } from '@/store/useWorkspaceStore';
import { usePromptStore } from '@/store/usePromptStore';
import { googleAuth } from '@/services/googleAuth';
import { initDatabase } from '@/lib/db';
import { ToastContainer } from '@/components/ui/Toast';

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [initError, setInitError] = useState<string | null>(null);
    const { currentProfile, setCurrentProfile, loadProfiles, getOrCreateProfile } = useProfileStore();
    const { loadWorkspaces, loadDefaultWorkspace, currentWorkspace } = useWorkspaceStore();
    const { setWorkspace } = usePromptStore();

    // Initialize database on mount
    useEffect(() => {
        const initApp = async () => {
            try {
                // Initialize database first
                await initDatabase();

                // Load all profiles
                await loadProfiles();

                // Check if user is authenticated with Google
                const isAuth = await googleAuth.isAuthenticated();

                if (isAuth) {
                    const user = await googleAuth.getCurrentUser();
                    if (user) {
                        // Get or create profile
                        const profile = await getOrCreateProfile(
                            user.id,
                            user.email,
                            user.name,
                            user.picture
                        );

                        setCurrentProfile(profile);

                        // Load workspaces for this profile
                        await loadWorkspaces(profile.id);

                        // Load or create default workspace
                        await loadDefaultWorkspace(profile.id);
                    }
                }
            } catch (error) {
                console.error('App initialization failed:', error);
                setInitError(error instanceof Error ? error.message : 'Failed to initialize app');
            } finally {
                setIsCheckingAuth(false);
            }
        };

        initApp();
    }, [loadProfiles, getOrCreateProfile, setCurrentProfile, loadWorkspaces, loadDefaultWorkspace]);

    // Update prompt workspace when workspace changes
    useEffect(() => {
        if (currentWorkspace) {
            setWorkspace(currentWorkspace.id);
        }
    }, [currentWorkspace, setWorkspace]);

    // Show loading while checking auth
    if (isCheckingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-pulse">
                        <span className="text-3xl">🧠</span>
                    </div>
                    <p className="text-secondary">Loading...</p>
                </div>
            </div>
        );
    }

    // Show error if initialization failed
    if (initError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4">
                <div className="max-w-md w-full bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 shadow-2xl text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                        <span className="text-3xl">⚠️</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Initialization Error</h1>
                    <p className="text-secondary mb-6">Failed to load the application</p>
                    <div className="bg-dark-900/50 rounded-lg p-3 mb-6">
                        <p className="text-sm font-mono text-red-400">{initError}</p>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all"
                    >
                        Reload Page
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
}
