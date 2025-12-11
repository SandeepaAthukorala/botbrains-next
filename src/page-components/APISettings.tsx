import { useState, useEffect } from 'react';
import { Key, Eye, EyeOff, Save, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/hooks/useToast';
import { SettingsTabs } from '@/components/settings/SettingsTabs';

export function APISettings() {
    const toast = useToast();
    const [geminiApiKey, setGeminiApiKey] = useState('');
    const [showKey, setShowKey] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Load API key from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('gemini_api_key');
        if (stored) {
            setGeminiApiKey(stored);
        }
        setIsLoading(false);
    }, []);

    const handleSave = () => {
        setIsSaving(true);
        try {
            if (geminiApiKey.trim()) {
                localStorage.setItem('gemini_api_key', geminiApiKey.trim());
                toast.success('API key saved successfully');
            } else {
                localStorage.removeItem('gemini_api_key');
                toast.success('API key cleared');
            }
        } catch (error) {
            toast.error('Failed to save API key');
            console.error('Save error:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleClear = () => {
        setGeminiApiKey('');
        localStorage.removeItem('gemini_api_key');
        toast.success('API key cleared');
    };

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center p-8">
                <p className="text-muted-foreground">Loading settings...</p>
            </div>
        );
    }

    return (
        <div className="flex-1 p-8 max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
            >
                <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
                <p className="text-muted-foreground">
                    Configure your BotBrains preferences and API keys
                </p>
            </motion.div>

            {/* Settings Tabs */}
            <SettingsTabs />

            {/* API Key Section */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-lg p-6 max-w-2xl shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-md">
                        <Key className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">Gemini API Key</h2>
                        <p className="text-sm text-muted-foreground">Manage your connection to Google's Gemini API</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Info Alert */}
                    <div className="flex gap-3 p-4 rounded-md bg-blue-500/10 border border-blue-500/20">
                        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-300">
                            <p className="font-medium mb-1 text-blue-200">Your API key is stored locally</p>
                            <p className="opacity-90 leading-relaxed">
                                The key is saved in your browser's local storage and never sent to our servers.
                                Get your API key from{' '}
                                <a
                                    href="https://aistudio.google.com/app/apikey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-white transition-colors"
                                >
                                    Google AI Studio
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    {/* API Key Input */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            API Key
                        </label>
                        <div className="relative">
                            <input
                                type={showKey ? 'text' : 'password'}
                                value={geminiApiKey}
                                onChange={(e) => setGeminiApiKey(e.target.value)}
                                placeholder="Enter your Gemini API key"
                                className="
                                    w-full px-3 py-2 pr-10
                                    rounded-md
                                    bg-transparent border border-input
                                    focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary
                                    transition-all
                                    font-mono text-sm text-foreground
                                    placeholder:text-muted-foreground
                                "
                            />
                            <button
                                type="button"
                                onClick={() => setShowKey(!showKey)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showKey ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2 border-t border-border mt-6">
                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                        >
                            <Save className="w-4 h-4" />
                            {isSaving ? 'Saving...' : 'Save API Key'}
                        </Button>
                        {geminiApiKey && (
                            <Button variant="ghost" onClick={handleClear}>
                                Clear
                            </Button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
