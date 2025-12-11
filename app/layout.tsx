import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = {
    title: 'InfiniteViking - Prompt Management System',
    description: 'Professional prompt management and organization system with workspace support',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <ErrorBoundary>
                    <Providers>
                        {children}
                    </Providers>
                </ErrorBoundary>
            </body>
        </html>
    );
}
