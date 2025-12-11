import { db } from './firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, writeBatch } from 'firebase/firestore';
import type { Workspace, WorkspaceSettings } from '@/types';

const COLLECTION = 'workspaces';

/**
 * Generate a unique ID
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new workspace
 */
export async function createWorkspace(
    profileId: string,
    name: string,
    icon: string = '💼',
    color: string = '#6366f1',
    description: string = ''
): Promise<Workspace> {
    const now = new Date().toISOString();
    const id = generateId();

    const workspace: Workspace = {
        id,
        profileId,
        name,
        icon,
        color,
        description,
        settings: {
            autoBackup: true,
            backupFrequency: 'daily',
            viewPreferences: {
                defaultView: 'card',
                sortBy: 'updated',
            },
        },
        isDefault: false,
        created_at: now,
        updated_at: now,
    };

    await setDoc(doc(db, COLLECTION, id), workspace);
    return workspace;
}

/**
 * Get a workspace by ID
 */
export async function getWorkspace(id: string): Promise<Workspace | undefined> {
    const docRef = doc(db, COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as Workspace;
    }
    return undefined;
}

/**
 * Get all workspaces for a profile
 */
export async function getWorkspacesByProfile(profileId: string): Promise<Workspace[]> {
    const q = query(collection(db, COLLECTION), where('profileId', '==', profileId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as Workspace);
}

/**
 * Get Default Workspace for a profile
 */
export async function getDefaultWorkspace(profileId: string): Promise<Workspace | undefined> {
    const q = query(
        collection(db, COLLECTION),
        where('profileId', '==', profileId),
        where('isDefault', '==', true)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data() as Workspace;
    }
    return undefined;
}

/**
 * Update a workspace
 */
export async function updateWorkspace(
    id: string,
    updates: Partial<Omit<Workspace, 'id' | 'profileId' | 'created_at'>>
): Promise<void> {
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, {
        ...updates,
        updated_at: new Date().toISOString(),
    });
}

/**
 * Update workspace settings
 */
export async function updateWorkspaceSettings(
    id: string,
    settings: Partial<WorkspaceSettings>
): Promise<void> {
    const workspace = await getWorkspace(id);
    if (!workspace) throw new Error('Workspace not found');

    await updateWorkspace(id, {
        settings: {
            ...workspace.settings,
            ...settings,
        },
    });
}

/**
 * Set a workspace as default
 */
export async function setDefaultWorkspace(id: string): Promise<void> {
    const workspace = await getWorkspace(id);
    if (!workspace) throw new Error('Workspace not found');

    const batch = writeBatch(db);

    // Get all workspaces for this profile
    const workspaces = await getWorkspacesByProfile(workspace.profileId);

    // Set all to non-default
    workspaces.forEach(w => {
        const ref = doc(db, COLLECTION, w.id);
        batch.update(ref, { isDefault: false });
    });

    // Set target to default
    const targetRef = doc(db, COLLECTION, id);
    batch.update(targetRef, { isDefault: true });

    await batch.commit();
}

/**
 * Delete a workspace
 */
export async function deleteWorkspace(id: string): Promise<void> {
    // Delete associated data first
    // Note: This is simplified. In a robust system we'd batch or use cloud functions.

    // Delete prompts
    const promptsQ = query(collection(db, 'prompts'), where('workspaceId', '==', id));
    const promptsSnap = await getDocs(promptsQ);
    promptsSnap.forEach(d => deleteDoc(d.ref));

    // Delete categories
    const catsQ = query(collection(db, 'categories'), where('workspaceId', '==', id));
    const catsSnap = await getDocs(catsQ);
    catsSnap.forEach(d => deleteDoc(d.ref));

    // Delete keywords
    const keywordsQ = query(collection(db, 'keywords'), where('workspaceId', '==', id));
    const keywordsSnap = await getDocs(keywordsQ);
    keywordsSnap.forEach(d => deleteDoc(d.ref));

    // Delete workspace
    await deleteDoc(doc(db, COLLECTION, id));
}

/**
 * Update last backup timestamp
 */
export async function updateLastBackup(id: string): Promise<void> {
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, {
        lastBackupAt: new Date().toISOString(),
    });
}
