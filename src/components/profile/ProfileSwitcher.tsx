'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, ChevronDown, Settings } from 'lucide-react';
import { useProfileStore } from '@/store/useProfileStore';
import { googleAuth } from '@/services/googleAuth';
import { useRouter } from 'next/navigation';

export function ProfileSwitcher() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { currentProfile, profiles, switchProfile, logout } = useProfileStore();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSwitchProfile = async (profileId: string) => {
        try {
            await switchProfile(profileId);
            setIsOpen(false);
        } catch (error) {
            console.error('Failed to switch profile:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await googleAuth.signOut();
            logout();
            router.push('/setup');
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    if (!currentProfile) {
        return null;
    }

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Profile button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-border/50"
            >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                    <User className="w-4 h-4 text-muted-foreground" />
                </div>

                {/* Name */}
                <div className="text-left hidden md:block">
                    <p className="text-sm font-medium text-foreground">{currentProfile.name}</p>
                    <p className="text-xs text-muted-foreground">{currentProfile.email}</p>
                </div>

                {/* Chevron */}
                <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-72 bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50"
                    >
                        {/* Current profile info */}
                        <div className="p-4 border-b border-border">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                    <User className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground truncate">
                                        {currentProfile.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground truncate">
                                        {currentProfile.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Other profiles */}
                        {profiles.length > 1 && (
                            <div className="border-b border-border">
                                <div className="px-4 py-2">
                                    <p className="text-xs text-muted-foreground font-medium">Switch Profile</p>
                                </div>
                                {profiles
                                    .filter((p) => p.id !== currentProfile.id)
                                    .map((profile) => (
                                        <button
                                            key={profile.id}
                                            onClick={() => handleSwitchProfile(profile.id)}
                                            className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-white/5 transition-colors duration-150"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                                <User className="w-4 h-4 text-muted-foreground" />
                                            </div>
                                            <div className="text-left flex-1 min-w-0">
                                                <p className="text-sm text-foreground truncate">{profile.name}</p>
                                                <p className="text-xs text-muted-foreground truncate">
                                                    {profile.email}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="p-1">
                            <button
                                onClick={() => {
                                    router.push('/settings/api');
                                    setIsOpen(false);
                                }}
                                className="w-full px-3 py-2 flex items-center space-x-3 hover:bg-white/5 rounded-md transition-colors duration-150"
                            >
                                <Settings className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-foreground">Settings</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full px-3 py-2 flex items-center space-x-3 hover:bg-destructive/10 rounded-md transition-colors duration-150 group"
                            >
                                <LogOut className="w-4 h-4 text-muted-foreground group-hover:text-destructive" />
                                <span className="text-sm text-foreground group-hover:text-destructive">Sign Out</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

