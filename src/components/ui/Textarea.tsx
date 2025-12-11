import type { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    mono?: boolean;
}

export function Textarea({ label, error, mono = false, className = '', ...props }: TextareaProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-foreground mb-2 transition-colors">
                    {label}
                </label>
            )}
            <textarea
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
                    resize-y
                    transition-all duration-300 ease-out
                    hover:border-input/80
                    shadow-sm focus:shadow-md
                    ${mono ? 'font-mono' : ''}
                    ${error ? 'border-destructive focus:ring-destructive/50 focus:border-destructive' : ''}
                    ${className}
                `}
                {...props}
            />
            {error && <p className="mt-2 text-xs text-destructive animate-slide-up">{error}</p>}
        </div>
    );
}
