import { useState, useRef } from 'react';
import { Upload, AlertTriangle } from 'lucide-react';
import { importFromFile } from '@/lib/exportImport';
import { useProfileStore } from '@/store/useProfileStore';
import { useToast } from '@/hooks/useToast';

export function EmergencyImportSection() {
    const [isImporting, setIsImporting] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { currentProfile } = useProfileStore();
    const toast = useToast();

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setShowConfirmDialog(true);
        }
    };

    const handleCancelImport = () => {
        setShowConfirmDialog(false);
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleConfirmImport = async () => {
        if (!currentProfile || !selectedFile) {
            toast.error('No active profile or file selected');
            return;
        }

        setShowConfirmDialog(false);
        setIsImporting(true);

        try {
            await importFromFile(selectedFile, currentProfile.id);
            toast.success('Data restored successfully! Refreshing...');

            // Reload page to refresh UI with new data
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } catch (error) {
            console.error('Import error:', error);
            toast.error(`Import failed: ${(error as Error).message}`);
        } finally {
            setIsImporting(false);
            setSelectedFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    return (
        <>
            <div className="glass rounded-lg p-6 border-2 border-warn">
                <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="text-warn mt-1 flex-shrink-0" size={24} />
                    <div>
                        <h2 className="text-xl font-semibold text-text-primary mb-2">
                            Emergency Import (Destructive)
                        </h2>
                        <p className="text-text-muted text-sm mb-2">
                            Restore all data from a backup ZIP file.
                        </p>
                        <p className="text-warn text-sm font-semibold">
                            ⚠️ WARNING: This will DELETE all existing data and replace it with the backup.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <label htmlFor="import-file" className="btn-secondary flex items-center gap-2 cursor-pointer">
                        <Upload size={18} />
                        {isImporting ? 'Importing...' : 'Select Backup File'}
                        <input
                            ref={fileInputRef}
                            id="import-file"
                            type="file"
                            accept=".zip"
                            onChange={handleFileSelect}
                            disabled={isImporting}
                            className="hidden"
                        />
                    </label>
                </div>

                {isImporting && (
                    <div className="mt-4 flex items-center gap-2 text-text-muted text-sm">
                        <div className="animate-spin h-4 w-4 border-2 border-accent-primary border-t-transparent rounded-full" />
                        <span>Restoring data from backup...</span>
                    </div>
                )}
            </div>

            {/* Confirmation Dialog */}
            {showConfirmDialog && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="glass rounded-lg p-6 max-w-md w-full border-2 border-warn">
                        <div className="flex items-start gap-3 mb-4">
                            <AlertTriangle className="text-warn flex-shrink-0" size={32} />
                            <div>
                                <h3 className="text-lg font-semibold text-text-primary mb-2">
                                    Confirm Destructive Import
                                </h3>
                                <p className="text-text-muted text-sm mb-2">
                                    You are about to import:
                                </p>
                                <p className="text-accent-primary text-sm font-mono bg-bg-tertiary px-2 py-1 rounded mb-3">
                                    {selectedFile?.name}
                                </p>
                                <p className="text-warn text-sm font-semibold mb-2">
                                    This will:
                                </p>
                                <ul className="text-warn text-sm list-disc list-inside space-y-1 mb-3">
                                    <li>Delete ALL existing workspaces</li>
                                    <li>Delete ALL existing prompts</li>
                                    <li>Delete ALL existing categories</li>
                                    <li>Delete ALL existing keywords</li>
                                    <li>Replace with backup data</li>
                                </ul>
                                <p className="text-text-muted text-sm">
                                    This action cannot be undone unless you have another backup.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={handleCancelImport}
                                className="btn-secondary"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmImport}
                                className="bg-warn hover:bg-warn/80 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                            >
                                Yes, Delete & Import
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
