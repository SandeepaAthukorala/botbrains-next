import { useState, useEffect } from 'react';
import type { Category } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

interface CategoryFormProps {
    category?: Category; // undefined for new, provided for edit
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: { name: string; color: string; description?: string }) => Promise<void>;
}

const PRESET_COLORS = [
    '#00C2FF', // LLM cyan
    '#B78BFF', // Image violet
    '#FFB86B', // Video amber
    '#57D78A', // Automation green
    '#FF6B6B', // Danger red
    '#9AA9B6', // Other grey
    '#FFD600', // Yellow
    '#FF1744', // Pink
];

export function CategoryForm({ category, isOpen, onClose, onSave }: CategoryFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        color: '#00C2FF',
        description: '',
    });
    const [isSaving, setIsSaving] = useState(false);

    // Initialize form with category data if editing
    useEffect(() => {
        if (category) {
            setFormData({
                name: category.name,
                color: category.color,
                description: category.description || '',
            });
        } else {
            // Reset form for new category
            setFormData({
                name: '',
                color: '#00C2FF',
                description: '',
            });
        }
    }, [category, isOpen]);

    const handleSave = async () => {
        if (!formData.name.trim()) {
            return;
        }

        setIsSaving(true);
        try {
            await onSave(formData);
            onClose();
        } catch (error) {
            console.error('Failed to save category:', error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={category ? 'Edit Category' : 'Create Category'}
            size="md"
        >
            <div className="space-y-4">
                {/* Name Input */}
                <Input
                    label="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Content Marketing"
                    autoFocus
                />

                {/* Color Picker */}
                <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                        Color *
                    </label>

                    {/* Preset Colors */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {PRESET_COLORS.map((color) => (
                            <button
                                key={color}
                                type="button"
                                onClick={() => setFormData({ ...formData, color })}
                                className={`w-8 h-8 rounded-full border-2 transition-all ${formData.color === color
                                        ? 'border-accent scale-110'
                                        : 'border-muted hover:border-accent/50'
                                    }`}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>

                    {/* Custom Color Input */}
                    <div className="flex items-center gap-3">
                        <input
                            type="color"
                            value={formData.color}
                            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                            className="w-12 h-10 rounded border border-muted cursor-pointer bg-transparent"
                        />
                        <Input
                            value={formData.color}
                            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                            placeholder="#00C2FF"
                            className="flex-1"
                        />
                    </div>
                </div>

                {/* Description */}
                <Textarea
                    label="Description (optional)"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description of this category..."
                    rows={3}
                />

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4">
                    <Button variant="ghost" onClick={onClose} disabled={isSaving}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        isLoading={isSaving}
                        disabled={!formData.name.trim()}
                    >
                        {category ? 'Update' : 'Create'} Category
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
