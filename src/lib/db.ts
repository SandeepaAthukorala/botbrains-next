'use client';

import Dexie, { type EntityTable } from 'dexie';
import type { Prompt, Category, Keyword, Profile, Workspace, GlobalVariableDefault } from '@/types';

// Define database class
class BotBrainsDB extends Dexie {
    prompts!: EntityTable<Prompt, 'id'>;
    categories!: EntityTable<Category, 'id'>;
    keywords!: EntityTable<Keyword, 'id'>;
    profiles!: EntityTable<Profile, 'id'>;
    workspaces!: EntityTable<Workspace, 'id'>;
    globalVariableDefaults!: EntityTable<GlobalVariableDefault, 'id'>;

    constructor() {
        super('BotBrainsDB');

        // Schema version 1 - initial
        this.version(1).stores({
            prompts: 'id, type, category, *tags, created_at, updated_at, order',
        });

        // Schema version 2 - add keywords support and new tables
        this.version(2).stores({
            prompts: 'id, type, category, *tags, *keywords, created_at, updated_at, order',
            categories: 'id, name',
            keywords: 'id, name',
        });

        // Schema version 3 - add Profile and Workspace support
        this.version(3).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault',
        });

        // Schema version 4 - add Analytics and Favorites support
        this.version(4).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order, isFavorite, usageCount',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault',
        });

        // Schema version 5 - add Global Variable Defaults
        this.version(5).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order, isFavorite, usageCount',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault',
            globalVariableDefaults: 'id, variableName',
        });

        // Schema version 6 - add content composition fields
        this.version(6).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order, isFavorite, usageCount, parentId, compositionMode',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault',
            globalVariableDefaults: 'id, variableName',
        });
    }
}

// Create singleton instance
export const db = new BotBrainsDB();

// Initialize database - only run in browser
export async function initDatabase() {
    if (typeof window === 'undefined') {
        console.log('⏭️  Skipping database initialization on server');
        return;
    }

    try {
        await db.open();
        console.log('✅ Database initialized');
    } catch (error) {
        console.error('❌ Failed to initialize database:', error);
        throw error;
    }
}
