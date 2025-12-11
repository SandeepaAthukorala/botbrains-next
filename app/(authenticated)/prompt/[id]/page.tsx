'use client';

import { PromptEditor } from '@/page-components/PromptEditor';

interface PromptPageProps {
    params: {
        id: string;
    };
}

export default function PromptPage({ params: _params }: PromptPageProps) {
    // The PromptEditor component will read the id from the URL using useParams hook
    return <PromptEditor />;
}
