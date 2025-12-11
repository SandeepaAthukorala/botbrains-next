'use client';

import { Edit2, Copy, Trash2, PlayCircle, Star, GitMerge } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Prompt } from '@/types';
import { usePromptStore } from '@/store/usePromptStore';
import { useState, useMemo } from 'react';
import { ResolveModal } from '@/components/resolve/ResolveModal';
import { UsageStats } from '@/components/ui/UsageStats';
import { DeleteConfirmModal } from '@/components/ui/DeleteConfirmModal';

interface PromptCardProps {
    prompt: Prompt;
}

const typeColorMap: Record<string, string> = {
    LLM: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Image: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    Video: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    Automation: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    Other: 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20',
};

export function PromptCard({ prompt }: PromptCardProps) {
    const deletePrompt = usePromptStore((state) => state.deletePrompt);
    const duplicatePrompt = usePromptStore((state) => state.duplicatePrompt);
    const toggleFavorite = usePromptStore((state) => state.toggleFavorite);
    const prompts = usePromptStore((state) => state.prompts);
    const [showResolveModal, setShowResolveModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const parentPrompt = useMemo(() =>
        prompt.parentId ? prompts.find(p => p.id === prompt.parentId) : null
        , [prompt.parentId, prompts]);

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🗑️ Delete button clicked for prompt:', prompt.id);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        console.log('Calling deletePrompt...');
        try {
            await deletePrompt(prompt.id);
            console.log('✅ Prompt deleted successfully');
            setShowDeleteConfirm(false);
        } catch (error) {
            console.error('❌ Delete failed:', error);
        }
    };

    const handleDuplicate = async (e: React.MouseEvent) => {
        e.preventDefault();
        await duplicatePrompt(prompt.id);
    };

    const handleResolve = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowResolveModal(true);
    };

    const handleToggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        await toggleFavorite(prompt.id);
    };

    return (
        <>
            <motion.div
                layout
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors h-full"
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${typeColorMap[prompt.type] || typeColorMap['Other']}`}>
                            {prompt.type}
                        </span>

                        {/* Composition Badge */}
                        {parentPrompt && (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-secondary/20 text-secondary border border-secondary/30" title={`Inherits from: ${parentPrompt.title}`}>
                                <GitMerge size={10} />
                                <span className="max-w-[80px] truncate">{parentPrompt.title}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-1">
                        {/* Favorite Star */}
                        <button
                            onClick={handleToggleFavorite}
                            className={`p-1 rounded hover:bg-muted transition-colors ${prompt.isFavorite ? 'text-yellow-500' : 'text-muted-foreground opacity-0 group-hover:opacity-100'}`}
                        >
                            <Star className={`w-3.5 h-3.5 ${prompt.isFavorite ? 'fill-current' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <Link href={`/prompt/${prompt.id}`} className="block mb-2">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {prompt.title}
                    </h3>
                </Link>

                {/* Template Preview */}
                <p className="text-xs text-muted-foreground line-clamp-3 mb-4 font-mono leading-relaxed bg-muted/30 p-2 rounded">
                    {prompt.prompt_template}
                </p>

                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                    <UsageStats usageCount={prompt.usageCount} lastUsedAt={prompt.lastUsedAt} />

                    {/* Actions - visible on hover */}
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 right-4 bg-card border border-border shadow-sm rounded-md p-1">
                        <button onClick={handleResolve} className="p-1.5 hover:bg-primary/10 hover:text-primary rounded" title="Run">
                            <PlayCircle className="w-3.5 h-3.5" />
                        </button>
                        <Link href={`/prompt/${prompt.id}`} className="p-1.5 hover:bg-muted hover:text-foreground rounded" title="Edit">
                            <Edit2 className="w-3.5 h-3.5" />
                        </Link>
                        <button onClick={handleDuplicate} className="p-1.5 hover:bg-muted hover:text-foreground rounded" title="Duplicate">
                            <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={handleDelete} className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded" title="Delete">
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {showResolveModal && (
                <ResolveModal
                    prompt={prompt}
                    isOpen={showResolveModal}
                    onClose={() => setShowResolveModal(false)}
                />
            )}

            <DeleteConfirmModal
                isOpen={showDeleteConfirm}
                onConfirm={confirmDelete}
                onCancel={() => setShowDeleteConfirm(false)}
                promptTitle={prompt.title}
            />
        </>
    );
}

