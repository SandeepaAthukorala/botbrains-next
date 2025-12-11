import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    glow?: 'none' | 'subtle' | 'medium' | 'strong';
    glowColor?: 'accent' | 'success' | 'warning' | 'danger';
    hover?: boolean;
    onClick?: () => void;
}

const glowIntensity = {
    none: '',
    subtle: 'bloom-subtle',
    medium: 'bloom-medium',
    strong: 'bloom-strong',
};

const glowColors = {
    accent: 'bloom-accent',
    success: 'bloom-success',
    warning: 'bloom-warning',
    danger: 'bloom-danger',
};

export function GlowCard({
    children,
    className = '',
    glow = 'none',
    glowColor = 'accent',
    hover = true,
    onClick
}: GlowCardProps) {
    return (
        <motion.div
            whileHover={hover && onClick ? { y: -4, scale: 1.01 } : {}}
            transition={{ duration: 0.2, ease: [0.16, 0.84, 0.24, 1] }}
            className={`
        relative
        bg-card
        rounded-xl
        shadow-lg
        ${hover ? 'hover:shadow-xl' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${glow !== 'none' ? `${glowIntensity[glow]} ${glowColors[glowColor]}` : ''}
        transition-all duration-base
        ${className}
      `}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}
