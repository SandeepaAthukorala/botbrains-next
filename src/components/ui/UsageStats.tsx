import { Clock, Flame } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface UsageStatsProps {
    usageCount?: number;
    lastUsedAt?: string;
}

export function UsageStats({ usageCount = 0, lastUsedAt }: UsageStatsProps) {
    const isHot = usageCount >= 10;
    const isNew = usageCount === 0;

    return (
        <div className="flex items-center gap-3 text-xs text-zinc-400">
            {/* Usage count */}
            <div className="flex items-center gap-1">
                <span className="font-medium">{usageCount}</span>
                <span>uses</span>
            </div>

            {/* Last used timestamp */}
            {lastUsedAt && (
                <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{formatDistanceToNow(new Date(lastUsedAt), { addSuffix: true })}</span>
                </div>
            )}

            {/* Hot badge for frequently used prompts */}
            {isHot && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Flame size={12} />
                    <span className="font-medium">Hot</span>
                </div>
            )}

            {/* New badge for unused prompts */}
            {isNew && (
                <div className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <span className="font-medium">New</span>
                </div>
            )}
        </div>
    );
}
