import { EmergencyExportSection } from '@/components/settings/EmergencyExportSection';
import { EmergencyImportSection } from '@/components/settings/EmergencyImportSection';
import { SettingsTabs } from '@/components/settings/SettingsTabs';

export function Settings() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-text-primary mb-6">Settings</h1>

            <SettingsTabs />

            <div className="space-y-6">
                <EmergencyExportSection />
                <EmergencyImportSection />
            </div>
        </div>
    );
}
