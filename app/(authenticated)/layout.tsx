'use client';

import { type ReactNode, useEffect } from 'react';
import { useProfileStore } from '@/store/useProfileStore';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { AppShell } from '@/components/layout/AppShell';

interface AuthenticatedLayoutProps {
    children: ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
    const currentProfile = useProfileStore((state) => state.currentProfile);
    const router = useRouter();

    useEffect(() => {
        // If not authenticated, redirect to setup
        if (!currentProfile) {
            router.push('/setup');
        }
    }, [currentProfile, router]);

    // Don't render anything if not authenticated
    if (!currentProfile) {
        return null;
    }

    return (
        <AppShell
            sidebar={<Sidebar />}
            header={<Header />}
        >
            {children}
        </AppShell>
    );
}
