import { X } from 'lucide-react';
import type { SearchFilters } from '@/types';
import { Button } from '@/components/ui/Button';

interface FilterChipsProps {
    filters: SearchFilters;
    onRemoveFilter: (filterKey: keyof SearchFilters, value?: string) => void;
    onClearAll: () => void;
}

export function FilterChips({ filters, onRemoveFilter, onClearAll }: FilterChipsProps) {
    // Build filter chip list
    const filterChips: Array<{ key: keyof SearchFilters; label: string; value?: string }> = [];

    if (filters.type) {
        filterChips.push({ key: 'type', label: filters.type });
    }

    if (filters.category) {
        filterChips.push({ key: 'category', label: `📁 ${filters.category}` });
    }

    filters.tags?.forEach((tag) => {
        filterChips.push({ key: 'tags', label: `#${tag}`, value: tag });
    });

    filters.keywords?.forEach((kw) => {
        filterChips.push({ key: 'keywords', label: `@${kw}`, value: kw });
    });

    if (filters.minRating && filters.minRating > 0) {
        filterChips.push({ key: 'minRating', label: `⭐ ${filters.minRating}+` });
    }

    if (filterChips.length === 0) {
        return null;
    }

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-text-muted">Active Filters:</span>

            {filterChips.map((chip, idx) => (
                <span
                    key={`${chip.key}-${chip.value || idx}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 text-accent border border-accent/20 rounded text-sm font-medium"
                >
                    {chip.label}
                    <button
                        onClick={() => onRemoveFilter(chip.key, chip.value)}
                        className="hover:text-accent/80 transition-colors"
                        title="Remove filter"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                </span>
            ))}

            {filterChips.length > 1 && (
                <Button variant="ghost" size="sm" onClick={onClearAll}>
                    Clear All
                </Button>
            )}
        </div>
    );
}
