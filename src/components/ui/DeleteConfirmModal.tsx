import { X, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DeleteConfirmModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    promptTitle: string;
}

export function DeleteConfirmModal({ isOpen, onConfirm, onCancel, promptTitle }: DeleteConfirmModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-card border border-border rounded-xl shadow-2xl max-w-md w-full pointer-events-auto">
                            {/* Header */}
                            <div className="flex items-center gap-3 p-6 border-b border-border">
                                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-destructive" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-foreground">
                                        Delete Prompt?
                                    </h2>
                                </div>
                                <button
                                    onClick={onCancel}
                                    className="p-2 rounded-lg hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-muted-foreground mb-2">
                                    Are you sure you want to delete this prompt?
                                </p>
                                <p className="text-sm font-medium text-foreground bg-muted/50 p-3 rounded-lg">
                                    {promptTitle}
                                </p>
                                <p className="text-sm text-destructive/80 mt-3">
                                    This action cannot be undone.
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-background/50">
                                <button
                                    onClick={onCancel}
                                    className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-background transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={onConfirm}
                                    className="px-4 py-2 rounded-lg bg-destructive text-white hover:bg-destructive/90 transition-colors font-medium"
                                >
                                    Delete Prompt
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
