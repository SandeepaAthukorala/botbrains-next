import { type SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

export function Select({ label, error, options, className = '', ...props }: SelectProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-foreground mb-1.5">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    className={`
                        w-full px-3 py-2
                        bg-transparent
                        border border-input
                        rounded-md
                        text-sm
                        text-foreground
                        focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary
                        disabled:cursor-not-allowed disabled:opacity-50
                        transition-all
                        appearance-none
                        cursor-pointer
                        ${error ? 'border-destructive focus:ring-destructive' : ''}
                        ${className}
                    `}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="bg-popover text-popover-foreground">
                            {option.label}
                        </option>
                    ))}
                </select>
                {/* Custom Arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
        </div>
    );
}
