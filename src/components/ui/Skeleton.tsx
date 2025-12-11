export function Skeleton({ className = '' }: { className?: string }) {
    return (
        <div
            className={`
                animate-pulse rounded-md bg-muted/60
                relative overflow-hidden
                before:absolute before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent before:via-white/10 before:to-transparent
                ${className}
            `}
        />
    );
}
