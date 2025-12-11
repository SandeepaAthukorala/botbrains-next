import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { BackdropPanel } from './BackdropPanel';

interface AnimatedModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    footer?: ReactNode;
}

const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full m-4',
};

export function AnimatedModal({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
    footer,
}: AnimatedModalProps) {
    return (
        <BackdropPanel show={isOpen} onClose={onClose} blur="medium">
            <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.22, ease: [0.16, 0.84, 0.24, 1] }}
                className={`
          w-full ${sizeClasses[size]}
          bg-elevated
          rounded-2xl
          shadow-2xl
          overflow-hidden
        `}
            >
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
                    <h2 className="font-display text-xl font-semibold">{title}</h2>
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        onClick={onClose}
                        className="p-2 hover:bg-hover rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-3">
                        {footer}
                    </div>
                )}
            </motion.div>
        </BackdropPanel>
    );
}
