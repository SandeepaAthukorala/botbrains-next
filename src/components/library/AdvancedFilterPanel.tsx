import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import type { SearchFilters, PromptType } from '@/types';
import { usePromptStore } from '@/store/usePromptStore';
import { useCategoryStore } from '@/store/useCategoryStore';
import { useKeywordStore } from '@/store/useKeywordStore';
import { ChipInput } from '@/components/ui/ChipInput';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

interface AdvancedFilterPanelProps {
    filters: SearchFilters;
    onFiltersChange: (filters: SearchFilters) => void;
}

const PROMPT_TYPES: PromptType[] = ['LLM', 'Image', 'Video', 'Automation', 'Other'];

export function AdvancedFilterPanel({ filters, onFiltersChange }: AdvancedFilterPanelProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const prompts = usePromptStore((state) => state.prompts);
    const categories = useCategoryStore((state) => state.categories);
    const usedKeywords = useKeywordStore((state) => state.usedKeywords);
    const loadCategories = useCategoryStore((state) => state.loadCategories);
    const loadUsedKeywords = useKeywordStore((state) => state.loadUsedKeywords);

    useEffect(() => {
        loadCategories();
        loadUsedKeywords();
    }, [loadCategories, loadUsedKeywords]);

    // Get all unique tags from prompts for suggestions
    const allTags = useMemo(() => {
        const tagSet = new Set<string>();
        prompts.forEach((p) => p.tags?.forEach((t) => tagSet.add(t)));
        return Array.from(tagSet).sort();
    }, [prompts]);

    const handleTypeToggle = (type: PromptType) => {
        if (filters.type === type) {
            // Unselect if already selected
            const newFilters = { ...filters };
            delete newFilters.type;
            onFiltersChange(newFilters);
        } else {
            onFiltersChange({ ...filters, type });
        }
    };

    const handleClearAll = () => {
        onFiltersChange({});
    };

    const hasActiveFilters = Object.keys(filters).length > 0;

    return (
        <div className="glass rounded-lg overflow-hidden">
            {/* Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-4 hover:bg-panel/50 transition-colors"
            >
                <div className="flex items-center gap-2">
                    {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-accent" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-text-muted" />
                    )}
                    <span className="font-semibold text-text-primary">Advanced Filters</span>
                    {hasActiveFilters && !isExpanded && (
                        <span className="text-xs px-2 py-0.5 rounded bg-accent/20 text-accent">
                            {Object.keys(filters).length} active
                        </span>
                    )}
                </div>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClearAll();
                        }}
                    >
                        Clear All
                    </Button>
                )}
            </button>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="p-4 pt-0 space-y-4 border-t border-muted">
                    {/* Type Filter */}
                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                            Type
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {PROMPT_TYPES.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => handleTypeToggle(type)}
                                    className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${filters.type === type
                                            ? 'bg-accent text-surface'
                                            : 'bg-panel text-text-muted hover:text-text-primary border border-muted hover:border-accent/50'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <Select
                            label="Category"
                            value={filters.category || ''}
                            onChange={(e) =>
                                onFiltersChange({
                                    ...filters,
                                    category: e.target.value || undefined,
                                })
                            }
                            options={[
                                { value: '', label: 'All Categories' },
                                ...categories.map((c) => ({ value: c.name, label: c.name })),
                            ]}
                        />
                    </div>

                    {/* Tags Filter */}
                    <div>
                        <ChipInput
                            label="Tags"
                            value={filters.tags || []}
                            onChange={(tags) => onFiltersChange({ ...filters, tags })}
                            suggestions={allTags}
                            placeholder="Filter by tags..."
                        />
                    </div>

                    {/* Keywords Filter */}
                    <div>
                        <ChipInput
                            label="Keywords"
                            value={filters.keywords || []}
                            onChange={(keywords) => onFiltersChange({ ...filters, keywords })}
                            suggestions={usedKeywords}
                            placeholder="Filter by keywords..."
                        />
                    </div>

                    {/* Rating Filter */}
                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                            Minimum Rating
                        </label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={filters.minRating || 0}
                                onChange={(e) =>
                                    onFiltersChange({
                                        ...filters,
                                        minRating: parseInt(e.target.value) || undefined,
                                    })
                                }
                                className="flex-1 accent-accent"
                            />
                            <span className="text-sm font-medium text-accent min-w-[40px] text-center">
                                {filters.minRating || 0}+
                            </span>
                            {filters.minRating !== undefined && filters.minRating > 0 && (
                                <button
                                    onClick={() => {
                                        const newFilters = { ...filters };
                                        delete newFilters.minRating;
                                        onFiltersChange(newFilters);
                                    }}
                                    className="p-1 hover:bg-danger/10 rounded text-text-muted hover:text-danger transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
