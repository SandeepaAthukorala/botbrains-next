'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePromptStore } from '@/store/usePromptStore';
import { SearchBar } from '@/components/library/SearchBar';
import { PromptCard } from '@/components/library/PromptCard';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';

export function Library() {
    const router = useRouter();
    const prompts = usePromptStore((state) => state.prompts);
    const searchQuery = usePromptStore((state) => state.searchQuery);
    const filters = usePromptStore((state) => state.filters);
    const setSearchQuery = usePromptStore((state) => state.setSearchQuery);
    const setFilters = usePromptStore((state) => state.setFilters);
    const loadPrompts = usePromptStore((state) => state.loadPrompts);
    const searchAndFilter = usePromptStore((state) => state.searchAndFilter);
    const [loading, setLoading] = useState(true);

    // Load all prompts initially
    useEffect(() => {
        const init = async () => {
            try {
                console.log('📚 Library: Loading prompts...');
                await loadPrompts();
                console.log('✅ Library: Prompts loaded successfully');
            } catch (error) {
                console.error('❌ Library: Failed to load prompts', error);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, [loadPrompts]);

    // Trigger search when searchQuery or filters change
    useEffect(() => {
        if (!loading) {
            searchAndFilter();
        }
    }, [searchQuery, filters, searchAndFilter, loading]);

    const toggleFavoritesFilter = () => {
        setFilters({
            ...filters,
            favorites: !filters.favorites,
        });
    };

    if (loading) {
        return (
            <div className="flex-1 px-8 py-6 max-w-7xl mx-auto w-full">
                {/* Header Skeleton */}
                <div className="flex items-center justify-between mb-8">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-10 w-32" />
                </div>

                {/* Search Skeleton */}
                <div className="mb-6 space-y-3">
                    <Skeleton className="h-10 w-full rounded-md" />
                    <Skeleton className="h-6 w-32 rounded-md" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="flex flex-col p-5 bg-card border border-border rounded-lg h-64 space-y-4">
                            <div className="flex justify-between">
                                <Skeleton className="h-6 w-20" />
                                <Skeleton className="h-5 w-5 rounded-full" />
                            </div>
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-20 w-full flex-1" />
                            <div className="flex gap-2 pt-2">
                                <Skeleton className="h-5 w-16" />
                                <Skeleton className="h-5 w-16" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 px-8 py-6 max-w-7xl mx-auto w-full">
            {/* Header with stagger animation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between mb-8"
            >
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-1">
                        Library
                    </h1>
                    <p className="text-muted-foreground">{prompts.length} prompt{prompts.length !== 1 ? 's' : ''}</p>
                </div>
                <Button variant="primary" onClick={() => router.push('/prompt/new')}>
                    <Plus className="w-5 hs-5" />
                    New Prompt
                </Button>
            </motion.div>

            {/* Search */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mb-6 space-y-3"
            >
                <SearchBar value={searchQuery} onChange={setSearchQuery} />

                {/* Favorites Filter */}
                <div className="flex gap-2">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={toggleFavoritesFilter}
                        className={`
                            flex items-center gap-2 px-3 py-1.5 rounded-md text-sm border
                            transition-all duration-200
                            ${filters.favorites
                                ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                : 'bg-background border-border text-muted-foreground hover:text-foreground hover:bg-secondary'
                            }
                        `}
                    >
                        <Star
                            className="w-3.5 h-3.5"
                            fill={filters.favorites ? 'currentColor' : 'none'}
                        />
                        <span className="font-medium">
                            {filters.favorites ? 'Showing Favorites' : 'Show Favorites'}
                        </span>
                    </motion.button>
                </div>
            </motion.div>

            {/* Prompt Grid with staggered loading */}
            {prompts.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border border-border border-dashed rounded-lg p-16 text-center bg-card/50"
                >
                    <div className="text-6xl mb-6 opacity-50">📝</div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">No prompts found</h2>
                    {searchQuery ? (
                        <p className="text-muted-foreground mb-6">
                            Try adjusting your search
                        </p>
                    ) : (
                        <p className="text-muted-foreground mb-6">
                            Get started by creating your first prompt
                        </p>
                    )}
                    <Button variant="primary" onClick={() => router.push('/prompt/new')}>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Prompt
                    </Button>
                </motion.div>
            ) : (
                <motion.div
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.05,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {prompts.map((prompt) => (
                        <motion.div
                            key={prompt.id}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.16, 0.84, 0.24, 1],
                            }}
                        >
                            <PromptCard prompt={prompt} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

