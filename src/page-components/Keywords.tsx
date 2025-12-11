import { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Keyword } from '@/types';
import { useKeywordStore } from '@/store/useKeywordStore';
import { useToast } from '@/hooks/useToast';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Skeleton } from '@/components/ui/Skeleton';
import { SearchBar } from '@/components/library/SearchBar';

export function Keywords() {
    const keywords = useKeywordStore((state) => state.keywords);
    const loadKeywords = useKeywordStore((state) => state.loadKeywords);
    const createKeyword = useKeywordStore((state) => state.createKeyword);
    const deleteKeyword = useKeywordStore((state) => state.deleteKeyword);
    const getKeywordUsageCount = useKeywordStore((state) => state.getKeywordUsageCount);

    const toast = useToast();

    const [newKeywordName, setNewKeywordName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [usageCounts, setUsageCounts] = useState<Record<string, number>>({});
    const [isAdding, setIsAdding] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Load keywords on mount
    useEffect(() => {
        const init = async () => {
            await loadKeywords();
            setIsLoading(false);
        };
        init();
    }, [loadKeywords]);

    // Load usage counts for all keywords
    useEffect(() => {
        const loadUsageCounts = async () => {
            const counts: Record<string, number> = {};
            for (const keyword of keywords) {
                counts[keyword.name] = await getKeywordUsageCount(keyword.name);
            }
            setUsageCounts(counts);
        };

        if (keywords.length > 0) {
            loadUsageCounts();
        }
    }, [keywords, getKeywordUsageCount]);

    const handleAddKeyword = async () => {
        const trimmed = newKeywordName.trim();
        if (!trimmed) {
            toast.error('Keyword name cannot be empty');
            return;
        }

        // Check for duplicates
        const exists = keywords.some((k) => k.name.toLowerCase() === trimmed.toLowerCase());
        if (exists) {
            toast.error('Keyword already exists');
            return;
        }

        setIsAdding(true);
        try {
            await createKeyword(trimmed);
            setNewKeywordName('');
            toast.success('Keyword added');
        } catch (error) {
            toast.error('Failed to add keyword');
            console.error(error);
        } finally {
            setIsAdding(false);
        }
    };

    const handleDelete = async (keyword: Keyword) => {
        const count = usageCounts[keyword.name] || 0;

        if (count > 0) {
            const confirmed = confirm(
                `"${keyword.name}" is used in ${count} prompt(s). Delete anyway? It will be removed from those prompts.`
            );
            if (!confirmed) return;
        }

        try {
            await deleteKeyword(keyword.id);
            toast.success('Keyword deleted');
        } catch (error) {
            toast.error('Failed to delete keyword');
            console.error(error);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddKeyword();
        }
    };

    // Filter keywords by search query
    const filteredKeywords = keywords.filter((k) =>
        k.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto space-y-6 px-8 py-6">
                <div>
                    <Skeleton className="h-8 w-48 mb-2" />
                    <Skeleton className="h-4 w-64" />
                </div>
                <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <div className="flex gap-2">
                        <Skeleton className="h-10 flex-1 rounded-md" />
                        <Skeleton className="h-10 w-20 rounded-md" />
                    </div>
                </div>
                <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="bg-card border border-border rounded-lg p-3 flex justify-between">
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-6 w-24 rounded-md" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 px-8 py-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">Keywords</h1>
                <p className="text-muted-foreground text-sm">
                    Manage keywords for better prompt organization and discovery
                </p>
            </div>

            {/* Add Keyword Section */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
                <label className="block text-sm font-medium text-foreground mb-2">
                    Add Keyword
                </label>
                <div className="flex gap-2">
                    <Input
                        value={newKeywordName}
                        onChange={(e) => setNewKeywordName(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="e.g., SEO, Marketing, Tutorial"
                        className="flex-1"
                    />
                    <Button onClick={handleAddKeyword} isLoading={isAdding}>
                        <Plus className="w-4 h-4" />
                        Add
                    </Button>
                </div>
            </div>

            {/* Search */}
            {keywords.length > 0 && (
                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search keywords..."
                />
            )}

            {/* Keywords List */}
            {keywords.length === 0 ? (
                <div className="bg-card/50 border border-border border-dashed rounded-lg p-16 text-center">
                    <div className="text-6xl mb-6 opacity-50">🏷️</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                        No keywords yet
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Add your first keyword to improve prompt searchability
                    </p>
                </div>
            ) : filteredKeywords.length === 0 ? (
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                    <p className="text-muted-foreground">No keywords match your search</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {filteredKeywords.map((keyword) => (
                        <div
                            key={keyword.id}
                            className="bg-card border border-border rounded-lg p-3 transition-all hover:border-primary/40 group flex items-center justify-between shadow-sm"
                        >
                            <div className="flex items-center gap-3 flex-1">
                                <span className="inline-flex items-center px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                                    {keyword.name}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Used in {usageCounts[keyword.name] || 0} prompt(s)
                                </span>
                            </div>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(keyword)}
                                className="p-2 opacity-0 group-hover:opacity-100 hover:bg-destructive/10 rounded text-muted-foreground hover:text-destructive transition-all"
                                title="Delete"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Stats */}
            {keywords.length > 0 && (
                <div className="text-center text-xs text-muted-foreground">
                    {filteredKeywords.length} of {keywords.length} keyword(s)
                </div>
            )}
        </div>
    );
}
