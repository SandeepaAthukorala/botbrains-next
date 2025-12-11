import { useState } from 'react';
import { Download } from 'lucide-react';
import { exportAndDownload } from '@/lib/exportImport';
import { useProfileStore } from '@/store/useProfileStore';
import { useToast } from '@/hooks/useToast';

export function EmergencyExportSection() {
    const [isExporting, setIsExporting] = useState(false);
    const { currentProfile } = useProfileStore();
    const toast = useToast();

    const handleExport = async () => {
        if (!currentProfile) {
            toast.error('No active profile');
            return;
        }

        setIsExporting(true);
        try {
            await exportAndDownload(currentProfile.id);
            toast.success('Backup exported successfully!');
        } catch (error) {
            console.error('Export error:', error);
            toast.error('Export failed. Check console for details');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="glass rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-text-primary mb-2">
                        Emergency Export
                    </h2>
                    <p className="text-text-muted text-sm">
                        Download a complete backup of all your workspaces, prompts, categories, and keywords.
                        The backup is a ZIP file containing human-readable Markdown files and JSON data.
                    </p>
                </div>
            </div>

            <button
                onClick={handleExport}
                disabled={isExporting}
                className="btn-primary flex items-center gap-2"
            >
                <Download size={18} />
                {isExporting ? 'Exporting...' : 'Export All Data'}
            </button>

            {isExporting && (
                <div className="mt-4 flex items-center gap-2 text-text-muted text-sm">
                    <div className="animate-spin h-4 w-4 border-2 border-accent-primary border-t-transparent rounded-full" />
                    <span>Preparing backup archive...</span>
                </div>
            )}
        </div>
    );
}
