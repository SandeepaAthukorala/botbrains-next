import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface BackdropPanelProps {
    show: boolean;
    onClose: () => void;
    children: ReactNode;
    blur?: 'light' | 'medium' | 'heavy';
    className?: string;
}

const blurLevels = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    heavy: 'backdrop-blur-lg',
};

export function BackdropPanel({
    show,
    onClose,
    children,
    blur = 'medium',
    className = '',
}: BackdropPanelProps) {
    // ESC key handler
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (show) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [show, onClose]);

    return createPortal(
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className={`
            fixed inset-0 z-[var(--z-modal)]
            bg-black/60 ${blurLevels[blur]}
            flex items-center justify-center
            ${className}
          `}
                >
                    {/* Prevent click propagation on content */}
                    <div onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
