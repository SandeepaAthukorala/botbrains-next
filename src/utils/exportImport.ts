import { exportAllPrompts } from '@/lib/storage';

/**
 * Download data as a JSON file
 */
export function downloadJson(data: string, filename: string): void {
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Export all prompts as a downloadable JSON file
 */
export async function exportPromptsToFile(): Promise<void> {
    const json = await exportAllPrompts();
    const timestamp = new Date().toISOString().split('T')[0];
    downloadJson(json, `botbrains-backup-${timestamp}.json`);
}

/**
 * Read a JSON file from user's file system
 */
export function readJsonFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';

        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) {
                reject(new Error('No file selected'));
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target?.result as string;
                resolve(content);
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        };

        input.click();
    });
}
