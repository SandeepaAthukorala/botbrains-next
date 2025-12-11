import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    glow?: boolean;
    hover?: boolean;
    onClick?: () => void;
}

export function GlassCard({ children, className = '', glow = false, hover = true, onClick }: GlassCardProps) {
    return (
        <motion.div
            whileHover={hover && onClick ? { y: -4, scale: 1.01 } : hover ? { y: -2 } : {}}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 20
            }}
            className={`
        relative rounded-lg
        backdrop-blur-xl saturate-150
        bg-card/70 border border-border/50
        ${glow ? 'shadow-lg hover:shadow-xl hover:shadow-primary/5' : 'shadow-md hover:shadow-lg'}
        ${onClick ? 'cursor-pointer' : ''}
        ${hover ? 'hover:border-primary/30' : ''}
        transition-all duration-300
        ${className}
      `}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}
