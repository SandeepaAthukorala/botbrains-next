import { useState, useRef, type KeyboardEvent } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ChipInputProps {
    label?: string;
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    suggestions?: string[];
    error?: string;
}

export function ChipInput({ label, value, onChange, placeholder = 'Add...', suggestions = [], error }: ChipInputProps) {
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredSuggestions = suggestions
        .filter((s) => !value.includes(s) && s.toLowerCase().includes(inputValue.toLowerCase()))
        .slice(0, 7);

    const addChip = (chip: string) => {
        const trimmed = chip.trim();
        if (trimmed && !value.includes(trimmed)) {
            onChange([...value, trimmed]);
        }
        setInputValue('');
        setShowSuggestions(false);
    };

    const removeChip = (index: number) => {
        onChange(value.filter((_, i) => i !== index));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addChip(inputValue);
        } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
            removeChip(value.length - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowSuggestions(e.target.value.length > 0);
    };

    const handleBlur = () => {
        setTimeout(() => setShowSuggestions(false), 200);
    };

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-foreground mb-1.5">
                    {label}
                </label>
            )}

            <div
                className={`
                    min-h-[42px] px-3 py-1.5
                    bg-transparent
                    rounded-md
                    border transition-colors
                    flex flex-wrap gap-2 items-center
                    ${error ? 'border-destructive focus-within:ring-1 focus-within:ring-destructive' : 'border-input focus-within:border-primary focus-within:ring-1 focus-within:ring-primary'}
                `}
                onClick={() => inputRef.current?.focus()}
            >
                {/* Chips */}
                <AnimatePresence mode="popLayout">
                    {value.map((chip, index) => (
                        <motion.span
                            key={`${chip}-${index}`}
                            layout
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-secondary rounded text-xs font-medium text-secondary-foreground"
                        >
                            <span>{chip}</span>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeChip(index);
                                }}
                                className="hover:text-destructive transition-colors focus:outline-none"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </motion.span>
                    ))}
                </AnimatePresence>

                {/* Input */}
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    onFocus={() => inputValue && setShowSuggestions(true)}
                    placeholder={value.length === 0 ? placeholder : ''}
                    className="flex-1 min-w-[120px] bg-transparent border-none outline-none placeholder:text-muted-foreground text-sm text-foreground h-7 p-0"
                />
            </div>

            {/* Autocomplete Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="relative">
                    <div className="absolute z-10 w-full mt-1 bg-popover rounded-md border border-border shadow-md max-h-48 overflow-y-auto">
                        {filteredSuggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => addChip(suggestion)}
                                className="w-full px-3 py-2 text-left text-sm text-popover-foreground hover:bg-muted transition-colors"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
        </div>
    );
}
