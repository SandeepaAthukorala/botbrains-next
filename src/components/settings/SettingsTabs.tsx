'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, Key } from 'lucide-react';
import { motion } from 'framer-motion';

export function SettingsTabs() {
    const pathname = usePathname();

    const tabs = [
        {
            path: '/settings/variable-defaults',
            label: 'Variable Defaults',
            icon: Settings,
        },
        {
            path: '/settings/api',
            label: 'API Keys',
            icon: Key,
        },
    ];

    return (
        <div className="border-b border-white/10 mb-8">
            <div className="flex gap-1">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.path;
                    const Icon = tab.icon;

                    return (
                        <Link
                            key={tab.path}
                            href={tab.path}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ y: -2 }}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-t-xl transition-colors
                                    ${isActive
                                        ? 'bg-white/5 text-primary border-b-2 border-primary'
                                        : 'text-secondary hover:text-primary hover:bg-white/5'
                                    }
                                `}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="font-medium">{tab.label}</span>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

