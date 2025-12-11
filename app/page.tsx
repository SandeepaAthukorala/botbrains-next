'use client';

import { useProfileStore } from '@/store/useProfileStore';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
    const currentProfile = useProfileStore((state) => state.currentProfile);

    useEffect(() => {
        // If not authenticated, redirect to setup
        if (!currentProfile) {
            redirect('/setup');
        }
    }, [currentProfile]);

    // If authenticated, redirect to library (will be handled by authenticated layout)
    if (currentProfile) {
        redirect('/library');
    }

    return null;
}
