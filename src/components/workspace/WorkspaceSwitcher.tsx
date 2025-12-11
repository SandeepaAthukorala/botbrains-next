import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import { useWorkspaceStore } from '@/store/useWorkspaceStore';
import { useProfileStore } from '@/store/useProfileStore';
import { usePromptStore } from '@/store/usePromptStore';
import { useState } from 'react';

export function WorkspaceSwitcher() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newWorkspaceName, setNewWorkspaceName] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('💼');
    const [selectedColor, setSelectedColor] = useState('#6366f1');

    const { currentWorkspace, workspaces, switchWorkspace, createNewWorkspace } = useWorkspaceStore();
    const { currentProfile } = useProfileStore();
    const { setWorkspace: setPromptWorkspace } = usePromptStore();

    const workspaceIcons = ['💼', '🏠', '🎨', '🚀', '📊', '🎯', '💡', '🔬', '📚', '⚡'];
    const workspaceColors = [
        '#6366f1', // Indigo
        '#8b5cf6', // Purple
        '#ec4899', // Pink
        '#f59e0b', // Amber
        '#10b981', // Green
        '#06b6d4', // Cyan
        '#f97316', // Orange
        '#ef4444', // Red
    ];

    const handleSwitchWorkspace = async (workspaceId: string) => {
        try {
            await switchWorkspace(workspaceId);
            // Update prompt store to use new workspace
            setPromptWorkspace(workspaceId);
        } catch (error) {
            console.error('Failed to switch workspace:', error);
        }
    };

    const handleCreateWorkspace = async () => {
        if (!currentProfile || !newWorkspaceName.trim()) return;

        try {
            const workspace = await createNewWorkspace(
                currentProfile.id,
                newWorkspaceName.trim(),
                selectedIcon,
                selectedColor
            );

            // Switch to new workspace
            await handleSwitchWorkspace(workspace.id);

            // Reset form
            setNewWorkspaceName('');
            setSelectedIcon('💼');
            setSelectedColor('#6366f1');
            setShowCreateForm(false);
        } catch (error) {
            console.error('Failed to create workspace:', error);
        }
    };

    if (!currentProfile) {
        return null;
    }

    return (
        <div className="mb-6">
            {/* Section header */}
            <div className="px-3 flex items-center justify-between mb-2">
                <h3 className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Workspaces
                </h3>
                <button
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="p-1 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded transition-colors duration-150"
                    title="New workspace"
                >
                    <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${showCreateForm ? 'rotate-45' : ''}`} />
                </button>
            </div>

            {/* Create workspace form */}
            {showCreateForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mx-3 mb-3 p-3 rounded-lg border border-border bg-card"
                >
                    <input
                        type="text"
                        value={newWorkspaceName}
                        onChange={(e) => setNewWorkspaceName(e.target.value)}
                        placeholder="Workspace name"
                        className="w-full px-2 py-1.5 mb-2 bg-background border border-border rounded text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleCreateWorkspace();
                            }
                        }}
                    />

                    {/* Icon selector */}
                    <div className="mb-2">
                        <p className="text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wide">Icon</p>
                        <div className="flex flex-wrap gap-1.5">
                            {workspaceIcons.map((icon) => (
                                <button
                                    key={icon}
                                    onClick={() => setSelectedIcon(icon)}
                                    className={`w-7 h-7 rounded flex items-center justify-center text-sm transition-all duration-150 ${selectedIcon === icon
                                        ? 'bg-primary/20 ring-1 ring-primary'
                                        : 'bg-background hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color selector */}
                    <div className="mb-3">
                        <p className="text-[10px] text-muted-foreground mb-1.5 uppercase tracking-wide">Color</p>
                        <div className="flex flex-wrap gap-1.5">
                            {workspaceColors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-5 h-5 rounded-full transition-all duration-150 ${selectedColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-background' : ''
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleCreateWorkspace}
                        disabled={!newWorkspaceName.trim()}
                        className="w-full px-3 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed rounded text-xs font-medium transition-colors duration-150"
                    >
                        Create Workspace
                    </button>
                </motion.div>
            )}

            {/* Workspace list */}
            <div className="space-y-0.5 px-2">
                {workspaces.map((workspace) => (
                    <button
                        key={workspace.id}
                        onClick={() => handleSwitchWorkspace(workspace.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-150 group ${currentWorkspace?.id === workspace.id
                            ? 'bg-secondary'
                            : 'hover:bg-white/5'
                            }`}
                    >
                        {/* Icon with color */}
                        <div
                            className="w-6 h-6 rounded flex items-center justify-center text-sm flex-shrink-0"
                            style={{ backgroundColor: workspace.color + '20' }}
                        >
                            <span>{workspace.icon}</span>
                        </div>

                        {/* Name */}
                        <span className={`flex-1 text-left text-sm font-medium truncate ${currentWorkspace?.id === workspace.id ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                            {workspace.name}
                        </span>

                        {/* Active indicator */}
                        {currentWorkspace?.id === workspace.id && (
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
