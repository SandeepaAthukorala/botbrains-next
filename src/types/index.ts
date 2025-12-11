export type PromptType = 'LLM' | 'Image' | 'Video' | 'Automation' | 'Other';

export type VariableType = 'text' | 'textarea' | 'select';

export interface Variable {
    name: string;
    type: VariableType;
    default?: string;
    placeholder?: string;
    options?: string[]; // for select type
}

export interface Performance {
    rating: number; // 1-10
    notes: string;
}

export interface Prompt {
    id: string;
    workspaceId?: string;          // Foreign key to Workspace (optional for migration)
    title: string;
    type: PromptType;
    prompt_template: string;
    variables: Variable[];
    category: string;
    tags: string[];
    keywords: string[]; // NEW: searchable keywords for better organization
    color_tag: string;
    version: number;
    created_at: string;
    updated_at: string;
    performance: Performance;
    examples: string[];
    order: number; // for manual drag-drop ordering
    // Analytics & Personalization
    isFavorite?: boolean;          // Mark prompts as favorites
    usageCount?: number;           // Track how many times prompt has been used
    lastUsedAt?: string;           // ISO timestamp of last usage

    // Composition fields
    parentId?: string | null;
    compositionMode?: 'inherit' | 'extend' | 'standalone';
    compositionOrder?: number;
}

export interface AppSettings {
    theme: 'dark';
    viewMode: 'card' | 'list';
    orderBy: 'manual' | 'date' | 'rating';
    filterPreferences?: SearchFilters; // Saved filter preferences
}

// Global variable defaults for smart pre-filling
export interface GlobalVariableDefault {
    id: string;
    variableName: string;
    defaultValue: string;
    created_at: string;
    updated_at: string;
}

export interface SearchFilters {
    type?: PromptType;
    category?: string;
    tags?: string[];
    keywords?: string[]; // NEW: filter by keywords
    minRating?: number; // NEW: minimum performance rating filter
    favorites?: boolean; // NEW: filter to show only favorited prompts
}

// NEW: Category entity for centralized management
export interface Category {
    id: string;
    workspaceId?: string;          // Foreign key to Workspace (optional for migration)
    name: string;
    color: string; // hex color
    description?: string;
    created_at: string;
}

// NEW: Keyword entity for centralized management
export interface Keyword {
    id: string;
    workspaceId?: string;          // Foreign key to Workspace (optional for migration)
    name: string;
    created_at: string;
}

// Profile system types
export interface ProfilePreferences {
    theme: 'dark' | 'light' | 'auto';
    language: 'en' | 'si';
    animations: boolean;
}

export interface Profile {
    id: string;
    googleId: string;              // Google account ID
    email: string;                 // User email
    name: string;                  // Display name
    avatar?: string;               // Profile picture URL
    defaultWorkspaceId?: string;   // Default workspace to load
    preferences: ProfilePreferences;
    created_at: string;
    updated_at: string;
}

export interface WorkspaceSettings {
    autoBackup: boolean;
    backupFrequency: 'realtime' | 'hourly' | 'daily' | 'manual';
    viewPreferences: {
        defaultView: 'card' | 'list';
        sortBy: 'updated' | 'created' | 'name';
    };
}

export interface Workspace {
    id: string;
    profileId: string;             // Foreign key to Profile
    name: string;                  // Workspace name (e.g., "Personal", "Work", "AI Research")
    description?: string;
    icon: string;                  // Emoji or icon name
    color: string;                 // Brand color for workspace
    isDefault: boolean;            // One default per profile
    settings: WorkspaceSettings;
    lastBackupAt?: string;
    created_at: string;
    updated_at: string;
}
