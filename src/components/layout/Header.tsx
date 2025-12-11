import { motion } from 'framer-motion';
import { ProfileSwitcher } from '@/components/profile/ProfileSwitcher';

export function Header() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-border/60 bg-background/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 shadow-sm"
        >
            <div className="px-6 py-3.5 flex items-center justify-end">
                <ProfileSwitcher />
            </div>
        </motion.header>
    );
}

