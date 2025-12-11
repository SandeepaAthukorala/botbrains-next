import type { PromptType } from '@/types';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | PromptType;
    size?: 'sm' | 'md';
    className?: string;
}

export function Badge({ children, variant = 'default', size = 'sm', className = '' }: BadgeProps) {
    const variants = {
        default: 'bg-muted/80 text-muted-foreground border border-muted/40',
        LLM: 'bg-type-llm/15 text-[#00D4FF] border border-type-llm/30 shadow-sm shadow-[#00C2FF]/10',
        Image: 'bg-type-image/15 text-[#C29DFF] border border-type-image/30 shadow-sm shadow-[#B78BFF]/10',
        Video: 'bg-type-video/15 text-[#FFBD72] border border-type-video/30 shadow-sm shadow-[#FFB86B]/10',
        Automation: 'bg-type-automation/15 text-[#5FE89A] border border-type-automation/30 shadow-sm shadow-[#57D78A]/10',
        Other: 'bg-type-other/15 text-[#A5B4C1] border border-type-other/30 shadow-sm shadow-[#9AA9B6]/10',
    };

    const sizes = {
        sm: 'px-2.5 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
    };

    return (
        <span
            className={`
        inline-flex items-center rounded-full font-medium
        transition-all duration-200
        hover:scale-105
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
