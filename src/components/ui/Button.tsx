import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', isLoading, className = '', children, disabled, ...props }, ref) => {
        const baseStyles = `
            inline-flex items-center justify-center gap-2 
            font-medium rounded-md text-sm
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
            disabled:opacity-50 disabled:cursor-not-allowed
            relative overflow-hidden
        `;

        const variants = {
            primary: `
                bg-primary
                hover:bg-primary/90
                text-primary-foreground
                shadow-md hover:shadow-lg
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
            `,
            secondary: `
                bg-secondary
                hover:bg-secondary/80
                text-secondary-foreground
                border border-border
                shadow-sm hover:shadow-md
                hover:border-border/80
            `,
            ghost: `
                hover:bg-muted
                text-muted-foreground
                hover:text-foreground
                hover:shadow-sm
            `,
            danger: `
                bg-destructive
                hover:bg-destructive/90
                text-destructive-foreground
                shadow-md hover:shadow-lg
            `,
        };

        const sizeStyles = {
            sm: 'px-3 py-1.5 text-xs',
            md: 'px-4 py-2',
            lg: 'px-6 py-3 text-base',
        };

        const MotionButton = motion.button;

        return (
            <MotionButton
                ref={ref}
                whileHover={!disabled && !isLoading ? { y: -2, scale: 1.02 } : {}}
                whileTap={!disabled && !isLoading ? { scale: 0.98, y: 0 } : {}}
                transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                }}
                className={`${baseStyles} ${variants[variant]} ${sizeStyles[size]} ${className}`}
                disabled={disabled || isLoading}
                {...(props as any)}
            >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {children}
            </MotionButton>
        );
    }
);

Button.displayName = 'Button';
