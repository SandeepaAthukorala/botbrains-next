import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AppShellProps {
    children: ReactNode;
    sidebar: ReactNode;
    header: ReactNode;
    className?: string;
}

export function AppShell({ children, sidebar, header, className }: AppShellProps) {
    return (
        <div className={cn("flex h-screen overflow-hidden bg-background", className)}>
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
            >
                {sidebar}
            </motion.aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="shrink-0"
                >
                    {header}
                </motion.header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto px-8 py-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
