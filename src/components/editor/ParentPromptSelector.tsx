import { useState, useEffect } from 'react';
import { Search, X, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Prompt } from '@/types';
import { CompositionService } from '@/lib/composition';
import { getPrompt } from '@/lib/storage';

interface ParentPromptSelectorProps {
    currentPromptId: string | null;
    selectedParentId: string | null;
    workspaceId: string;
    onSelect: (parentId: string | null) => void;
}

export function ParentPromptSelector({
    currentPromptId,
    selectedParentId,
    workspaceId,
    onSelect
}: ParentPromptSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [candidates, setCandidates] = useState<Prompt[]>([]);
    const [selectedParent, setSelectedParent] = useState<Prompt | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Load initial selected parent
    useEffect(() => {
        if (selectedParentId) {
            getPrompt(selectedParentId).then(p => {
                if (p) setSelectedParent(p);
            });
        } else {
            setSelectedParent(null);
        }
    }, [selectedParentId]);

    // Load candidates when opening
    useEffect(() => {
        if (isOpen) {
            loadCandidates();
        }
    }, [isOpen]);

    const loadCandidates = async () => {
        setIsLoading(true);
        try {
            const all = await CompositionService.getEligibleParents(currentPromptId, workspaceId);
            setCandidates(all);
        } catch (err) {
            console.error('Failed to load parent candidates', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelect = async (prompt: Prompt) => {
        setError(null);

        // Double check cycle detection (redundant but safe)
        if (currentPromptId && await CompositionService.detectCircularReference(currentPromptId, prompt.id)) {
            setError('Cannot select this parent: would create a circular reference');
            return;
        }

        // Check depth
        const depth = await CompositionService.getPromptDepth(prompt.id);
        if (depth >= 10) {
            setError('Cannot select this parent: depth limit exceeded (max 10)');
            return;
        }

        onSelect(prompt.id);
        setSelectedParent(prompt);
        setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onSelect(null);
        setSelectedParent(null);
    };

    const filteredCandidates = candidates.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="relative">
            <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-medium text-foreground">
                    Parent Prompt <span className="text-muted-foreground font-normal text-xs">(Optional)</span>
                </label>
                {selectedParent && (
                    <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">
                        Inherits content
                    </span>
                )}
            </div>

            {/* Selector Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full min-h-[40px] px-3 py-2 rounded-md border flex items-center justify-between cursor-pointer transition-colors
                    ${isOpen
                        ? 'border-primary ring-1 ring-primary bg-background'
                        : 'bg-background border-input hover:border-primary/50'
                    }
                `}
            >
                {selectedParent ? (
                    <div className="flex items-center gap-2 overflow-hidden">
                        <span className={`w-2 h-2 rounded-full bg-${getPromptColor(selectedParent.type)} shrink-0`} />
                        <span className="text-sm text-foreground truncate">{selectedParent.title}</span>
                    </div>
                ) : (
                    <span className="text-sm text-muted-foreground">Search to select a parent prompt...</span>
                )}

                <div className="flex items-center gap-1 ml-2">
                    {selectedParent && (
                        <button
                            onClick={handleClear}
                            className="p-1 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X size={14} />
                        </button>
                    )}
                    <span className="text-muted-foreground/50 text-[10px]">▼</span>
                </div>
            </div>

            {/* Dropdown & Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Transparent Overlay to close */}
                        <div
                            className="fixed inset-0 z-40 bg-transparent"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 4, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.98 }}
                            transition={{ duration: 0.1 }}
                            className="absolute z-50 top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg overflow-hidden flex flex-col max-h-[300px]"
                        >
                            {/* Search Input */}
                            <div className="p-2 border-b border-border sticky top-0 bg-popover z-10">
                                <div className="relative">
                                    <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <input
                                        type="text"
                                        autoFocus
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Type to search..."
                                        className="w-full bg-muted/50 border-none rounded-sm pl-8 pr-3 py-1.5 text-sm text-foreground focus:ring-1 focus:ring-primary outline-none h-8"
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mx-2 mt-2 p-2 bg-destructive/10 border border-destructive/20 rounded text-xs text-destructive flex items-center gap-2">
                                    <AlertCircle size={12} />
                                    {error}
                                </div>
                            )}

                            {/* Candidates List */}
                            <div className="overflow-y-auto flex-1 p-1 custom-scrollbar">
                                {isLoading ? (
                                    <div className="p-4 text-center text-xs text-muted-foreground animate-pulse">Loading...</div>
                                ) : filteredCandidates.length === 0 ? (
                                    <div className="p-8 text-center">
                                        <p className="text-sm text-foreground font-medium">No prompts found</p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {searchQuery ? `No results for "${searchQuery}"` : "This workspace has no other prompts yet."}
                                        </p>
                                    </div>
                                ) : (
                                    filteredCandidates.map(prompt => (
                                        <button
                                            key={prompt.id}
                                            onClick={() => handleSelect(prompt)}
                                            className={`
                                                w-full text-left px-3 py-2 rounded-sm flex items-center justify-between group transition-colors
                                                ${prompt.id === selectedParentId ? 'bg-primary/10' : 'hover:bg-muted'}
                                            `}
                                        >
                                            <div className="min-w-0">
                                                <div className="text-sm text-foreground font-medium truncate">
                                                    {prompt.title}
                                                </div>
                                                <div className="text-[10px] text-muted-foreground flex items-center gap-2 mt-0.5">
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-${getPromptColor(prompt.type)}`} />
                                                    {prompt.type}
                                                </div>
                                            </div>
                                            {prompt.id === selectedParentId && <Check size={14} className="text-primary ml-2 shrink-0" />}
                                        </button>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

// Helper for type colors
function getPromptColor(type: string): string {
    switch (type) {
        case 'LLM': return 'cyan-400';
        case 'Image': return 'violet-400';
        case 'Video': return 'amber-400';
        case 'Automation': return 'green-400';
        default: return 'gray-400';
    }
}
