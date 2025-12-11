'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import type { Prompt, PromptType, Variable } from '@/types';
import { usePromptStore } from '@/store/usePromptStore';
import { getPrompt } from '@/lib/storage';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { ChipInput } from '@/components/ui/ChipInput';
import { ParentPromptSelector } from '@/components/editor/ParentPromptSelector';
import { extractVariables } from '@/utils/templateResolver';
import { useToast } from '@/hooks/useToast';

const PROMPT_TYPES: { value: PromptType; label: string }[] = [
    { value: 'LLM', label: 'LLM' },
    { value: 'Image', label: 'Image' },
    { value: 'Video', label: 'Video' },
    { value: 'Automation', label: 'Automation' },
    { value: 'Other', label: 'Other' },
];

export function PromptEditor() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const toast = useToast();
    const createPrompt = usePromptStore((state) => state.createPrompt);
    const updatePrompt = usePromptStore((state) => state.updatePrompt);
    const currentWorkspaceId = usePromptStore((state) => state.currentWorkspaceId);

    const isNewPrompt = !id || id === 'new';

    const [formData, setFormData] = useState<Partial<Prompt>>({
        title: '',
        type: 'LLM',
        prompt_template: '',
        variables: [],
        category: '',
        tags: [],
        keywords: [],
        color_tag: '#00C2FF',
        version: 1,
        performance: { rating: 0, notes: '' },
        examples: [],
    });

    const [isSaving, setIsSaving] = useState(false);
    const pathname = usePathname();

    // Load existing prompt OR initial data from navigation state
    useEffect(() => {
        const state = location.state as { initialData?: Partial<Prompt> } | null;

        if (state?.initialData) {
            // Pre-fill with initial data from builder prompts
            setFormData({
                ...formData,
                ...state.initialData,
            });
            // Clear the state so it doesn't persist on refresh
            window.history.replaceState({}, document.title);
        } else if (!isNewPrompt && id) {
            // Load existing prompt
            getPrompt(id).then((prompt) => {
                if (prompt) {
                    setFormData({
                        ...prompt,
                        keywords: prompt.keywords || [],
                    });
                }
            });
        }
    }, [id, isNewPrompt, location.state]);

    // Auto-detect variables from template
    useEffect(() => {
        if (formData.prompt_template) {
            const detected = extractVariables(formData.prompt_template);
            const existingVars = formData.variables || [];

            // Merge: keep existing config, add new ones
            const mergedVars: Variable[] = detected.map((varName) => {
                const existing = existingVars.find((v) => v.name === varName);
                return existing || { name: varName, type: 'text' };
            });

            setFormData((prev) => ({ ...prev, variables: mergedVars }));
        }
    }, [formData.prompt_template]);

    const handleSave = async () => {
        console.log('💾 handleSave called');

        if (!formData.title?.trim()) {
            toast.error('Title is required');
            return;
        }

        if (!formData.prompt_template?.trim()) {
            toast.error('Prompt template is required');
            return;
        }

        setIsSaving(true);

        try {
            const data: Omit<Prompt, 'id' | 'created_at' | 'updated_at' | 'order'> = {
                title: formData.title!,
                type: formData.type || 'LLM',
                prompt_template: formData.prompt_template!,
                variables: formData.variables || [],
                category: formData.category || '',
                tags: formData.tags || [],
                keywords: formData.keywords || [],
                color_tag: formData.color_tag || '#00C2FF',
                version: formData.version || 1,
                performance: formData.performance || { rating: 0, notes: '' },
                examples: formData.examples || [],
                parentId: formData.parentId || null,
                compositionMode: formData.compositionMode || 'inherit',
            };

            if (isNewPrompt) {
                await createPrompt(data);
                toast.success('Prompt created');
            } else if (id) {
                await updatePrompt(id, data);
                toast.success('Prompt updated');
            }

            router.push('/');
        } catch (error) {
            console.error('❌ Save failed with error:', error);
            toast.error('Failed to save');
        } finally {
            setIsSaving(false);
        }
    };

    const updateVariable = (index: number, updates: Partial<Variable>) => {
        const newVars = [...(formData.variables || [])];
        newVars[index] = { ...newVars[index], ...updates };
        setFormData((prev) => ({ ...prev, variables: newVars }));
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 px-8 py-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => router.push(-1)} className="px-2">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <h1 className="text-2xl font-bold text-foreground">
                    {isNewPrompt ? 'New Prompt' : 'Edit Prompt'}
                </h1>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 shadow-sm">
                {/* Title & Type */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <Input
                            label="Title *"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="e.g., Blog Post Generator"
                        />
                    </div>
                    <Select
                        label="Type *"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value as PromptType })}
                        options={PROMPT_TYPES}
                    />
                </div>

                {/* Parent Prompt Selector */}
                {currentWorkspaceId && (
                    <div className="border-t border-border pt-6">
                        <ParentPromptSelector
                            currentPromptId={id === 'new' ? null : id || null}
                            selectedParentId={formData.parentId || null}
                            workspaceId={currentWorkspaceId}
                            onSelect={(parentId) => setFormData(prev => ({ ...prev, parentId }))}
                        />
                    </div>
                )}

                {/* Template */}
                <Textarea
                    label="Prompt Template *"
                    value={formData.prompt_template}
                    onChange={(e) => setFormData({ ...formData, prompt_template: e.target.value })}
                    placeholder="Write your prompt here. Use {{variableName}} for dynamic content."
                    rows={10}
                    mono
                />

                {/* Variables */}
                {formData.variables && formData.variables.length > 0 && (
                    <div className="border-t border-border pt-6">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                            Detected Variables ({formData.variables.length})
                        </h3>
                        <div className="space-y-4">
                            {formData.variables.map((variable, index) => (
                                <div key={variable.name} className="bg-secondary/30 p-4 rounded-md border border-border space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            label="Variable Name"
                                            value={variable.name}
                                            disabled
                                            className="opacity-70"
                                        />
                                        <Select
                                            label="Input Type"
                                            value={variable.type}
                                            onChange={(e) =>
                                                updateVariable(index, { type: e.target.value as Variable['type'] })
                                            }
                                            options={[
                                                { value: 'text', label: 'Text' },
                                                { value: 'textarea', label: 'Textarea' },
                                                { value: 'select', label: 'Select' },
                                            ]}
                                        />
                                    </div>
                                    <Input
                                        label="Default Value"
                                        value={variable.default || ''}
                                        onChange={(e) => updateVariable(index, { default: e.target.value })}
                                        placeholder="Optional default value"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Category, Tags & Keywords */}
                <div className="grid grid-cols-1 gap-6 pt-2">
                    <Input
                        label="Category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        placeholder="e.g., Content, Design"
                    />
                    <ChipInput
                        label="Tags"
                        value={formData.tags || []}
                        onChange={(tags) => setFormData({ ...formData, tags })}
                        placeholder="Type a tag..."
                    />
                    <ChipInput
                        label="Keywords"
                        value={formData.keywords || []}
                        onChange={(keywords) => setFormData({ ...formData, keywords })}
                        placeholder="Type a keyword..."
                    />
                </div>

                {/* Performance */}
                <div className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <Input
                            label="Version"
                            type="number"
                            value={formData.version}
                            onChange={(e) => setFormData({ ...formData, version: parseInt(e.target.value) || 1 })}
                            min={1}
                        />
                    </div>
                    <div>
                        <Input
                            label="Rating (1-10)"
                            type="number"
                            value={formData.performance?.rating}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    performance: { ...formData.performance!, rating: parseInt(e.target.value) || 0 },
                                })
                            }
                            min={0}
                            max={10}
                        />
                    </div>
                    <div className="md:col-span-3">
                        <Textarea
                            label="Performance Notes"
                            value={formData.performance?.notes}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    performance: { ...formData.performance!, notes: e.target.value },
                                })
                            }
                            placeholder="Notes about testing, performance, improvements..."
                            rows={3}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
                    <Button variant="ghost" onClick={() => router.push(-1)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} isLoading={isSaving}>
                        <Save className="w-4 h-4" />
                        Save Prompt
                    </Button>
                </div>
            </div>
        </div>
    );
}

