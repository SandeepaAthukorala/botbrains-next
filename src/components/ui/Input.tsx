import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-foreground mb-2 transition-colors">
                    {label}
                </label>
            )}
            <input
                className={`
                    w-full px-4 py-2.5
                    bg-background/50
                    border border-input
                    rounded-md
                    text-sm
                    text-foreground
                    placeholder:text-muted-foreground
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-primary/50 
                    focus:border-primary
                    focus:bg-background/80
                    disabled:cursor-not-allowed disabled:opacity-50
                    transition-all duration-300 ease-out
                    hover:border-input/80
                    shadow-sm focus:shadow-md
                    ${error ? 'border-destructive focus:ring-destructive/50 focus:border-destructive' : ''}
                    ${className}
                `}
                {...props}
            />
            {error && <p className="mt-2 text-xs text-destructive animate-slide-up">{error}</p>}
        </div>
    );
}
