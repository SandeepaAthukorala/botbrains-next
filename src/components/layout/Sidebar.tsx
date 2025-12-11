'use client';

import { Library as LibraryIcon, FolderOpen, Tag, ChevronLeft, ChevronRight, Settings, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { WorkspaceSwitcher } from '@/components/workspace/WorkspaceSwitcher';

interface NavItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    collapsed: boolean;
}

function NavItem({ href, icon, label, collapsed }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href + '/');

    return (
        <Link
            href={href}
            className={cn(
                "relative flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 group",
                isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-primary rounded-r-full"
                    initial={false}
                />
            )}
            <span className={cn(isActive && "text-primary")}>
                {icon}
            </span>
            <AnimatePresence>
                {!collapsed && (
                    <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium whitespace-nowrap overflow-hidden text-sm"
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </Link>
    );
}

export function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <motion.aside
            animate={{ width: collapsed ? 70 : 240 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="border-r border-border bg-card/50 backdrop-blur-xl flex flex-col relative z-20"
        >
            {/* Logo Area */}
            <div className="p-4 h-16 flex items-center border-b border-border/50">
                <AnimatePresence mode="wait">
                    {!collapsed ? (
                        <motion.div
                            key="full-logo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                                B
                            </div>
                            <h1 className="font-semibold text-lg tracking-tight text-foreground">
                                BotBrains
                            </h1>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="icon-logo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full flex justify-center"
                        >
                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                                B
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Workspace Switcher - Only show when not collapsed */}
            <div className="px-3 py-3">
                {!collapsed && <WorkspaceSwitcher />}
            </div>

            {/* Nav Items */}
            <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
                <NavItem href="/library" icon={<LibraryIcon className="w-4 h-4" />} label="Library" collapsed={collapsed} />
                <NavItem href="/categories" icon={<FolderOpen className="w-4 h-4" />} label="Categories" collapsed={collapsed} />
                <NavItem href="/keywords" icon={<Tag className="w-4 h-4" />} label="Keywords" collapsed={collapsed} />

                {/* Builder Prompts Section */}
                <div className="pt-4 mt-4 border-t border-border/50">
                    <NavItem href="/builder" icon={<Sparkles className="w-4 h-4" />} label="Builder Prompts" collapsed={collapsed} />
                </div>

                {/* Settings Section */}
                <div className="pt-4 mt-4 border-t border-border/50">
                    <NavItem href="/settings" icon={<Settings className="w-4 h-4" />} label="Settings" collapsed={collapsed} />
                </div>
            </nav>

            {/* Collapse Toggle */}
            <div className="p-3 border-t border-border/50">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center gap-2 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                >
                    {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                    {!collapsed && <span className="text-xs font-medium">Collapse</span>}
                </button>
            </div>

            {/* Footer */}
            {!collapsed && (
                <div className="p-3 text-center">
                    <p className="text-[10px] text-muted-foreground font-mono opacity-50">v1.0.0</p>
                </div>
            )}
        </motion.aside>
    );
}
