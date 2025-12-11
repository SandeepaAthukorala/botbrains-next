import type { ReactNode } from 'react';

interface GlowBadgeProps {
    children: ReactNode;
    color?: 'accent' | 'success' | 'danger' | 'muted';
    intensity?: 'low' | 'medium' | 'high';
    className?: string;
}

const colorMap = {
    accent: 'bg-accent/20 text-accent',
    success: 'bg-success/20 text-success',
    danger: 'bg-danger/20 text-danger',
    muted: 'bg-muted/40 text-text-muted',
};

const glowMap = {
    accent: 'rgba(0, 194, 255, 0.3)',
    success: 'rgba(76, 224, 166, 0.3)',
    danger: 'rgba(255, 107, 107, 0.3)',
    muted: 'rgba(154, 169, 182, 0.2)',
};

export function GlowBadge({ children, color = 'accent', intensity = 'medium', className = '' }: GlowBadgeProps) {
    const opacityClass = intensity === 'high' ? 'opacity-100' : intensity === 'medium' ? 'opacity-70' : 'opacity-40';

    return (
        <span className={`relative inline-flex items-center px-2.5 py-1 rounded-full ${className}`}>
            {/* Glow layer */}
            <span
                className={`absolute inset-0 rounded-full blur-sm ${opacityClass}`}
                style={{ backgroundColor: glowMap[color] }}
                aria-hidden="true"
            />

            {/* Content layer */}
            <span className={`relative text-sm font-medium ${colorMap[color]}`}>
                {children}
            </span>
        </span>
    );
}
