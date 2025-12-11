'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { googleAuth } from '@/services/googleAuth';
import { useProfileStore } from '@/store/useProfileStore';
import { useWorkspaceStore } from '@/store/useWorkspaceStore';
import { useRouter } from 'next/navigation';

export function ProfileSetup() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { getOrCreateProfile, setCurrentProfile } = useProfileStore();
    const { loadDefaultWorkspace } = useWorkspaceStore();

    // Check if already authenticated
    useEffect(() => {
        const checkAuth = async () => {
            const isAuth = await googleAuth.isAuthenticated();
            if (isAuth) {
                const user = await googleAuth.getCurrentUser();
                if (user) {
                    handleAuthSuccess(user);
                }
            }
        };
        checkAuth();
    }, []);

    const handleAuthSuccess = async (user: { id: string; email: string; name: string; picture?: string }) => {
        try {
            // Get or create profile
            const profile = await getOrCreateProfile(
                user.id,
                user.email,
                user.name,
                user.picture
            );

            // Set as current profile
            setCurrentProfile(profile);

            // Load default workspace (creates one if doesn't exist)
            await loadDefaultWorkspace(profile.id);

            // Navigate to library
            router.push('/');
        } catch (err) {
            console.error('Failed to setup profile:', err);
            setError('Failed to setup your profile. Please try again.');
            setIsLoading(false);
        }
    };

    const handleSignIn = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Initialize Google Auth
            await googleAuth.init();

            // Sign in with Google
            const user = await googleAuth.signIn();

            // Handle successful authentication
            await handleAuthSuccess(user);
        } catch (err) {
            console.error('Sign in failed:', err);
            setError('Failed to sign in with Google. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
            >
                {/* Glass card */}
                <div className="glass-panel rounded-3xl p-8 shadow-2xl">
                    {/* Logo/Icon */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <span className="text-4xl">🧠</span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <h1 className="font-display text-3xl font-bold mb-2 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                            Welcome to BotBrains
                        </h1>
                        <p className="text-secondary text-sm">
                            Organize your prompts with powerful workspace management
                        </p>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-3 mb-8"
                    >
                        {[
                            { icon: '🌐', text: 'Multi-profile workspaces' },
                            { icon: '☁️', text: 'Google Drive auto-backup' },
                            { icon: '🔄', text: 'Cross-device sync' },
                            { icon: '🎨', text: 'Beautiful glassmorphism UI' },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="flex items-center space-x-3 text-sm"
                            >
                                <span className="text-2xl">{feature.icon}</span>
                                <span className="text-secondary">{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Sign in button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Button
                            variant="primary"
                            onClick={handleSignIn}
                            disabled={isLoading}
                            className="w-full"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5" />
                                    Sign in with Google
                                </>
                            )}
                        </Button>
                    </motion.div>

                    {/* Error message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20"
                        >
                            <p className="text-sm text-red-400 text-center">{error}</p>
                        </motion.div>
                    )}

                    {/* Privacy note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-xs text-secondary text-center mt-6"
                    >
                        We only access files created by this app in your Google Drive
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}

