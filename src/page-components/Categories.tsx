import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import type { Category } from '@/types';
import { useCategoryStore } from '@/store/useCategoryStore';
import { useToast } from '@/hooks/useToast';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';
import { CategoryForm } from '@/components/category/CategoryForm';

export function Categories() {
    const categories = useCategoryStore((state) => state.categories);
    const loadCategories = useCategoryStore((state) => state.loadCategories);
    const createCategory = useCategoryStore((state) => state.createCategory);
    const updateCategory = useCategoryStore((state) => state.updateCategory);
    const deleteCategory = useCategoryStore((state) => state.deleteCategory);
    const getCategoryUsageCount = useCategoryStore((state) => state.getCategoryUsageCount);

    const toast = useToast();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | undefined>();
    const [usageCounts, setUsageCounts] = useState<Record<string, number>>({});

    const [isLoading, setIsLoading] = useState(true);

    // Load categories on mount
    useEffect(() => {
        const init = async () => {
            await loadCategories();
            setIsLoading(false);
        };
        init();
    }, [loadCategories]);

    // Load usage counts for all categories
    useEffect(() => {
        const loadUsageCounts = async () => {
            const counts: Record<string, number> = {};
            for (const category of categories) {
                counts[category.name] = await getCategoryUsageCount(category.name);
            }
            setUsageCounts(counts);
        };

        if (categories.length > 0) {
            loadUsageCounts();
        }
    }, [categories, getCategoryUsageCount]);

    const handleSaveCategory = async (data: { name: string; color: string; description?: string }) => {
        try {
            if (editingCategory) {
                await updateCategory(editingCategory.id, data);
                toast.success('Category updated');
            } else {
                await createCategory(data.name, data.color, data.description);
                toast.success('Category created');
            }
            setIsFormOpen(false);
            setEditingCategory(undefined);
        } catch (error) {
            toast.error('Failed to save category');
            console.error(error);
        }
    };

    const handleEdit = (category: Category) => {
        setEditingCategory(category);
        setIsFormOpen(true);
    };

    const handleDelete = async (category: Category) => {
        const count = usageCounts[category.name] || 0;

        if (count > 0) {
            const confirmed = confirm(
                `"${category.name}" is used in ${count} prompt(s). Delete anyway? Prompts will lose this category.`
            );
            if (!confirmed) return;
        }

        try {
            await deleteCategory(category.id);
            toast.success('Category deleted');
        } catch (error) {
            toast.error('Failed to delete category');
            console.error(error);
        }
    };

    const handleNewCategory = () => {
        setEditingCategory(undefined);
        setIsFormOpen(true);
    };

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto space-y-6 px-8 py-6">
                <div className="flex items-center justify-between">
                    <div>
                        <Skeleton className="h-8 w-48 mb-2" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                    <Skeleton className="h-10 w-32" />
                </div>
                <div className="space-y-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="bg-card border border-border rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 flex-1">
                                    <Skeleton className="w-4 h-4 rounded-full" />
                                    <div className="space-y-2 flex-1">
                                        <Skeleton className="h-5 w-32" />
                                        <Skeleton className="h-4 w-48" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 px-8 py-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground mb-1">Categories</h1>
                    <p className="text-muted-foreground text-sm">
                        Organize your prompts with color-coded categories
                    </p>
                </div>
                <Button onClick={handleNewCategory}>
                    <Plus className="w-4 h-4" />
                    New Category
                </Button>
            </div>

            {/* Categories List */}
            {categories.length === 0 ? (
                <div className="bg-card/50 border border-border border-dashed rounded-lg p-16 text-center">
                    <div className="text-6xl mb-6 opacity-50">📁</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                        No categories yet
                    </h3>
                    <p className="text-muted-foreground mb-8">
                        Create your first category to organize your prompts
                    </p>
                    <Button onClick={handleNewCategory}>
                        <Plus className="w-4 h-4" />
                        Create Category
                    </Button>
                </div>
            ) : (
                <div className="space-y-3">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-card border border-border rounded-lg p-4 transition-all hover:border-primary/40 group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 flex-1">
                                    {/* Color Badge */}
                                    <div
                                        className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
                                        style={{ backgroundColor: category.color }}
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-foreground">
                                            {category.name}
                                        </h3>
                                        {category.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {category.description}
                                            </p>
                                        )}
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Used in {usageCounts[category.name] || 0} prompt(s)
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleEdit(category)}
                                        className="p-2 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors"
                                        title="Edit"
                                        aria-label="Edit"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(category)}
                                        className="p-2 hover:bg-destructive/10 rounded text-muted-foreground hover:text-destructive transition-colors"
                                        title="Delete"
                                        aria-label="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Category Form Modal */}
            <CategoryForm
                category={editingCategory}
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setEditingCategory(undefined);
                }}
                onSave={handleSaveCategory}
            />
        </div>
    );
}
