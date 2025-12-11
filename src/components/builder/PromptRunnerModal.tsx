import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Variable {
    name: string;
    type: string;
    placeholder: string;
    default: string;
}

interface PromptRunnerModalProps {
    isOpen: boolean;
    onClose: () => void;
    template: {
        title: string;
        template: string;
        variables: Variable[];
        color: string;
        emoji: string;
    };
}

export function PromptRunnerModal({ isOpen, onClose, template }: PromptRunnerModalProps) {
    const [variableValues, setVariableValues] = useState<Record<string, string>>({});
    const [copied, setCopied] = useState(false);

    // Initialize variable values with defaults
    const initializeVariables = () => {
        const initial: Record<string, string> = {};
        template.variables.forEach(v => {
            initial[v.name] = v.default || '';
        });
        setVariableValues(initial);
    };

    // Generate final prompt by replacing variables
    const generatePrompt = () => {
        let result = template.template;
        Object.entries(variableValues).forEach(([name, value]) => {
            result = result.replace(new RegExp(`{{${name}}}`, 'g'), value || `[${name}]`);
        });
        return result;
    };

    const handleCopy = async () => {
        const prompt = generatePrompt();
        await navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleOpen = () => {
        initializeVariables();
        setCopied(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onAnimationStart={handleOpen}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-card border border-border rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden pointer-events-auto">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                                        style={{ backgroundColor: `${template.color}20` }}
                                    >
                                        {template.emoji}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-foreground">
                                            Run {template.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            Fill in variables and copy the prompt
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
                                {/* Variables Section */}
                                {template.variables.length > 0 && (
                                    <div className="p-6 space-y-4 border-b border-border">
                                        <h3 className="text-sm font-semibold text-foreground mb-3">
                                            Variables
                                        </h3>
                                        {template.variables.map((variable) => (
                                            <div key={variable.name} className="space-y-2">
                                                <label className="text-sm font-medium text-foreground capitalize">
                                                    {variable.name.replace(/_/g, ' ')}
                                                </label>
                                                <textarea
                                                    value={variableValues[variable.name] || ''}
                                                    onChange={(e) =>
                                                        setVariableValues({
                                                            ...variableValues,
                                                            [variable.name]: e.target.value,
                                                        })
                                                    }
                                                    placeholder={variable.placeholder}
                                                    rows={3}
                                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-primary/50 resize-none"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Preview Section */}
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-semibold text-foreground">
                                            Generated Prompt
                                        </h3>
                                        <button
                                            onClick={handleCopy}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors text-sm font-medium"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check size={16} />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={16} />
                                                    Copy
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <div className="bg-background border border-border rounded-lg p-4 max-h-96 overflow-y-auto">
                                        <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                                            {generatePrompt()}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-background/50">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-background transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
