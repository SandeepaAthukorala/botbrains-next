import { useState, useEffect } from 'react';
import { Copy, Eye } from 'lucide-react';
import type { Prompt, Variable } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { resolveTemplate } from '@/utils/templateResolver';
import { copyToClipboard } from '@/utils/clipboard';
import { useToast } from '@/hooks/useToast';
import { usePromptStore } from '@/store/usePromptStore';
import { useDefaultsStore } from '@/store/useDefaultsStore';

interface ResolveModalProps {
    prompt: Prompt;
    isOpen: boolean;
    onClose: () => void;
}

export function ResolveModal({ prompt, isOpen, onClose }: ResolveModalProps) {
    const toast = useToast();
    const trackUsage = usePromptStore((state) => state.trackUsage);
    const { globalDefaults, loadDefaults } = useDefaultsStore();
    const [values, setValues] = useState<Record<string, string>>({});
    const [showPreview, setShowPreview] = useState(false);

    // Load global defaults on mount
    useEffect(() => {
        loadDefaults();
    }, [loadDefaults]);

    // Initialize with default values (per-prompt defaults override global defaults)
    useEffect(() => {
        if (isOpen) {
            const defaults: Record<string, string> = {};
            prompt.variables.forEach((v) => {
                // Priority: per-prompt default > global default > empty
                if (v.default) {
                    defaults[v.name] = v.default;
                } else {
                    const globalDefault = globalDefaults.find((d: any) => d.variableName === v.name);
                    defaults[v.name] = globalDefault?.defaultValue || '';
                }
            });
            setValues(defaults);
            setShowPreview(false);
        }
    }, [isOpen, prompt.variables, globalDefaults]);

    const resolved = resolveTemplate(prompt.prompt_template, values);

    const handleCopy = async () => {
        const success = await copyToClipboard(resolved);
        if (success) {
            // Track usage for analytics
            await trackUsage(prompt.id);
            toast.success('Copied to clipboard ✓');
            onClose();
        } else {
            toast.error('Failed to copy');
        }
    };

    const handleValueChange = (varName: string, value: string) => {
        setValues((prev) => ({ ...prev, [varName]: value }));
    };

    const renderVariableInput = (variable: Variable) => {
        const value = values[variable.name] || '';

        switch (variable.type) {
            case 'textarea':
                return (
                    <Textarea
                        key={variable.name}
                        label={variable.name}
                        placeholder={variable.placeholder}
                        value={value}
                        onChange={(e) => handleValueChange(variable.name, e.target.value)}
                        rows={3}
                    />
                );

            case 'select':
                return (
                    <Select
                        key={variable.name}
                        label={variable.name}
                        value={value}
                        onChange={(e) => handleValueChange(variable.name, e.target.value)}
                        options={
                            variable.options?.map((opt) => ({ value: opt, label: opt })) || []
                        }
                    />
                );

            default:
                return (
                    <Input
                        key={variable.name}
                        label={variable.name}
                        placeholder={variable.placeholder}
                        value={value}
                        onChange={(e) => handleValueChange(variable.name, e.target.value)}
                    />
                );
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Use: ${prompt.title}`} size="lg">
            <div className="space-y-6">
                {/* Variables Section */}
                {prompt.variables.length > 0 ? (
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            Fill Variables
                        </h3>
                        {prompt.variables.map(renderVariableInput)}
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground">No variables in this prompt.</p>
                )}

                {/* Preview Section */}
                <div>
                    <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-2"
                    >
                        <Eye className="w-4 h-4" />
                        {showPreview ? 'Hide' : 'Show'} Preview
                    </button>

                    {showPreview && (
                        <div className="p-4 bg-muted/50 border border-border rounded-md">
                            <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                                {resolved}
                            </pre>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleCopy}>
                        <Copy className="w-4 h-4" />
                        Copy Prompt
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
