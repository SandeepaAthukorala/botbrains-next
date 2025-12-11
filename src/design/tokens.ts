export const tokens = {
    spacing: {
        0: '0px',
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        6: '48px',
        8: '64px',
    },
    borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        full: '9999px',
    },
    colors: {
        glass: {
            panel: 'rgba(20, 20, 30, 0.6)',
            border: 'rgba(255, 255, 255, 0.08)',
            highlight: 'rgba(255, 255, 255, 0.05)',
        },
        accent: {
            primary: '#00f0ff', // Cyan/Neon
            secondary: '#7000ff', // Purple
            bloom: 'rgba(0, 240, 255, 0.4)',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            tertiary: 'rgba(255, 255, 255, 0.4)',
        }
    },
    shadows: {
        soft: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        glow: '0 0 20px rgba(0, 240, 255, 0.15)',
    }
} as const;
