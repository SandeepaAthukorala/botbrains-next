import type { Variants } from 'framer-motion';

// Animation variants for common patterns
export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const slideUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

export const slideDown: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
};

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
};

export const slideInRight: Variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.03,
        },
    },
};

export const listItem: Variants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
};

// Transition presets
export const transitions = {
    fast: {
        duration: 0.16,
        ease: [0.16, 0.84, 0.24, 1],
    },
    base: {
        duration: 0.28,
        ease: [0.16, 0.84, 0.24, 1],
    },
    slow: {
        duration: 0.42,
        ease: [0.16, 0.84, 0.24, 1],
    },
};

// Spring presets
export const springs = {
    gentle: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
    },
    bouncy: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 25,
    },
};
