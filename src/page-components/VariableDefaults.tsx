import { useEffect, useState } from 'react';
import { Plus, Trash2, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDefaultsStore } from '@/store/useDefaultsStore';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/hooks/useToast';
import { SettingsTabs } from '@/components/settings/SettingsTabs';

export function VariableDefaults() {
    const toast = useToast();
    const { globalDefaults, loadDefaults, setDefault, deleteDefault, isLoading } = useDefaultsStore();
    const [isAdding, setIsAdding] = useState(false);
    const [newVarName, setNewVarName] = useState('');
    const [newVarValue, setNewVarValue] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        loadDefaults();
    }, [loadDefaults]);

    const handleAdd = async () => {
        if (!newVarName.trim() || !newVarValue.trim()) {
            toast.error('Variable name and value are required');
            return;
        }

        try {
            await setDefault(newVarName.trim(), newVarValue.trim());
            toast.success('Default added successfully');
            setNewVarName('');
            setNewVarValue('');
            setIsAdding(false);
        } catch (error) {
            toast.error('Failed to add default');
        }
    };

    const handleUpdate = async (variableName: string) => {
        if (!editValue.trim()) {
            toast.error('Value cannot be empty');
            return;
        }

        try {
            await setDefault(variableName, editValue.trim());
            toast.success('Default updated');
            setEditingId(null);
            setEditValue('');
        } catch (error) {
            toast.error('Failed to update default');
        }
    };

    const handleDelete = async (variableName: string) => {
        if (confirm(`Delete default for "${variableName}"?`)) {
            try {
                await deleteDefault(variableName);
                toast.success('Default deleted');
            } catch (error) {
                toast.error('Failed to delete default');
            }
        }
    };

    const startEditing = (varDefault: any) => {
        setEditingId(varDefault.id);
        setEditValue(varDefault.defaultValue);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditValue('');
    };

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center p-8">
                <p className="text-muted-foreground">Loading defaults...</p>
            </div>
        );
    }

    return (
        <div className="flex-1 p-8 max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
            >
                <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
                <p className="text-muted-foreground">
                    Configure your BotBrains preferences and API keys
                </p>
            </motion.div>

            {/* Settings Tabs */}
            <SettingsTabs />

            {/* Add New Default */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
            >
                {!isAdding ? (
                    <Button onClick={() => setIsAdding(true)}>
                        <Plus className="w-4 h-4" />
                        Add New Default
                    </Button>
                ) : (
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Add New Default</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <Input
                                label="Variable Name"
                                placeholder="e.g., tone, audience, style"
                                value={newVarName}
                                onChange={(e) => setNewVarName(e.target.value)}
                            />
                            <Input
                                label="Default Value"
                                placeholder="e.g., professional"
                                value={newVarValue}
                                onChange={(e) => setNewVarValue(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <Button variant="ghost" onClick={() => {
                                setIsAdding(false);
                                setNewVarName('');
                                setNewVarValue('');
                            }}>
                                <X className="w-4 h-4" />
                                Cancel
                            </Button>
                            <Button onClick={handleAdd}>
                                <Save className="w-4 h-4" />
                                Save
                            </Button>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Defaults List */}
            {globalDefaults.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card border border-border border-dashed rounded-lg p-16 text-center"
                >
                    <div className="text-5xl mb-4 opacity-70">⚙️</div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">No defaults set</h2>
                    <p className="text-muted-foreground mb-8">
                        Add global defaults to auto-fill your most commonly used variable values
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                >
                    {globalDefaults.map((varDefault) => (
                        <motion.div
                            key={varDefault.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-card border border-border rounded-lg p-4 flex items-center justify-between"
                        >
                            <div className="flex-1">
                                {editingId === varDefault.id ? (
                                    <div className="flex gap-3 items-center">
                                        <div className="font-mono text-primary font-medium">
                                            {'{{'}{varDefault.variableName}{'}}'}
                                        </div>
                                        <Input
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            className="flex-1"
                                        />
                                        <div className="flex gap-2">
                                            <Button
                                                onClick={() => handleUpdate(varDefault.variableName)}
                                                className="px-2"
                                            >
                                                <Save className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" onClick={cancelEditing} className="px-2">
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex gap-4 items-center">
                                        <div className="font-mono text-primary font-medium min-w-[150px]">
                                            {'{{'}{varDefault.variableName}{'}}'}
                                        </div>
                                        <div className="text-muted-foreground">→</div>
                                        <div className="text-foreground font-medium">
                                            "{varDefault.defaultValue}"
                                        </div>
                                    </div>
                                )}
                            </div>

                            {editingId !== varDefault.id && (
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        onClick={() => startEditing(varDefault)}
                                        className="h-8 text-xs"
                                    >
                                        Edit
                                    </Button>
                                    <button
                                        onClick={() => handleDelete(varDefault.variableName)}
                                        className="p-2 hover:bg-destructive/10 rounded-md text-muted-foreground hover:text-destructive transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
