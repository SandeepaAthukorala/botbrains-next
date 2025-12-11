import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToastStore } from '@/hooks/useToast';

const iconMap = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
};

const colorMap = {
    success: 'border-success/30 bg-success/5',
    error: 'border-danger/30 bg-danger/5',
    info: 'border-accent-primary/30 bg-accent-primary/5',
};

const textColorMap = {
    success: 'text-success',
    error: 'text-danger',
    info: 'text-accent-primary',
};

export function ToastContainer() {
    const toasts = useToastStore((state) => state.toasts);
    const removeToast = useToastStore((state) => state.removeToast);

    return (
        <div className="fixed bottom-4 right-4 z-[100] space-y-3 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => {
                    const Icon = iconMap[toast.type];
                    return (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 100, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 50, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="pointer-events-auto"
                        >
                            <div className={`
                                relative overflow-hidden
                                bg-card border rounded-xl
                                shadow-xl
                                min-w-[320px] max-w-[400px]
                                ${colorMap[toast.type]}
                            `}>
                                <div className="p-4 flex items-start gap-3">
                                    <Icon className={`w-5 h-5 flex-shrink-0 ${textColorMap[toast.type]}`} />
                                    <p className="text-sm flex-1">{toast.message}</p>
                                    <button
                                        onClick={() => removeToast(toast.id)}
                                        className="text-secondary hover:text-primary transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Progress bar */}
                                <motion.div
                                    className={`absolute bottom-0 left-0 h-1 ${textColorMap[toast.type]}`}
                                    style={{ backgroundColor: 'currentColor', opacity: 0.5 }}
                                    initial={{ width: '100%' }}
                                    animate={{ width: '0%' }}
                                    transition={{ duration: 3, ease: 'linear' }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
