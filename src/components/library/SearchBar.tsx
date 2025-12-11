import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search prompts...' }: SearchBarProps) {
    const [localValue, setLocalValue] = useState(value);

    // Sync with external value
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(localValue);
        }, 300);

        return () => clearTimeout(timer);
    }, [localValue, onChange]);

    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
                type="text"
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                placeholder={placeholder}
                className="
                    w-full pl-9 pr-9 py-2
                    rounded-md text-sm
                    bg-background border border-input
                    focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary
                    transition-all
                    placeholder:text-muted-foreground
                    text-foreground
                "
            />
            {localValue && (
                <button
                    onClick={() => setLocalValue('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            )}
        </div>
    );
}
