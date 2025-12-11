import { db } from './firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, writeBatch } from 'firebase/firestore';
import type { Profile, ProfilePreferences } from '@/types';

const COLLECTION = 'profiles';

/**
 * Generate a unique ID
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new profile
 */
export async function createProfile(
    googleId: string,
    email: string,
    name: string,
    avatar?: string
): Promise<Profile> {
    const now = new Date().toISOString();
    const id = generateId();

    const profile: Profile = {
        id,
        googleId,
        email,
        name,
        avatar,
        preferences: {
            theme: 'dark',
            language: 'en',
            animations: true,
        },
        created_at: now,
        updated_at: now,
    };

    await setDoc(doc(db, COLLECTION, id), profile);
    return profile;
}

/**
 * Get a profile by ID
 */
export async function getProfile(id: string): Promise<Profile | undefined> {
    const docRef = doc(db, COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as Profile;
    }
    return undefined;
}

/**
 * Get a profile by Google ID
 */
export async function getProfileByGoogleId(googleId: string): Promise<Profile | undefined> {
    const q = query(collection(db, COLLECTION), where('googleId', '==', googleId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data() as Profile;
    }
    return undefined;
}

/**
 * Get all profiles
 */
export async function getAllProfiles(): Promise<Profile[]> {
    const querySnapshot = await getDocs(collection(db, COLLECTION));
    return querySnapshot.docs.map(doc => doc.data() as Profile);
}

/**
 * Update a profile
 */
export async function updateProfile(
    id: string,
    updates: Partial<Omit<Profile, 'id' | 'googleId' | 'created_at'>>
): Promise<void> {
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, {
        ...updates,
        updated_at: new Date().toISOString(),
    });
}

/**
 * Delete a profile
 * Note: Firestore doesn't automatically cascade deletes. 
 * We need to manually delete associated data.
 */
export async function deleteProfile(id: string): Promise<void> {
    const batch = writeBatch(db);

    // Get all associated workspaces
    const workspacesQuery = query(collection(db, 'workspaces'), where('profileId', '==', id));
    const workspacesSnap = await getDocs(workspacesQuery);
    const workspaceIds = workspacesSnap.docs.map(doc => doc.id);

    // Delete workspaces
    workspacesSnap.docs.forEach(doc => {
        batch.delete(doc.ref);
    });

    // Delete prompts, categories, keywords for each workspace
    // Note: Doing this in one batch might hit the 500 ops limit if massive.
    // For a simple migration we do it sequentially if needed, but for now let's try to batch what we can.
    // Ideally we should query ALL items by workspaceId first.

    for (const workspaceId of workspaceIds) {
        // Delete prompts
        const promptsQ = query(collection(db, 'prompts'), where('workspaceId', '==', workspaceId));
        const promptsSnap = await getDocs(promptsQ);
        promptsSnap.forEach(d => deleteDoc(d.ref)); // Delete individually to avoid complex batch logic for now

        // Delete categories
        const catsQ = query(collection(db, 'categories'), where('workspaceId', '==', workspaceId));
        const catsSnap = await getDocs(catsQ);
        catsSnap.forEach(d => deleteDoc(d.ref));

        // Delete keywords
        const keywordsQ = query(collection(db, 'keywords'), where('workspaceId', '==', workspaceId));
        const keywordsSnap = await getDocs(keywordsQ);
        keywordsSnap.forEach(d => deleteDoc(d.ref));
    }

    // Commit workspace deletes
    await batch.commit();

    // Finally delete the profile
    await deleteDoc(doc(db, COLLECTION, id));
}

/**
 * Update profile preferences
 */
export async function updateProfilePreferences(
    id: string,
    preferences: Partial<ProfilePreferences>
): Promise<void> {
    const profile = await getProfile(id);
    if (!profile) {
        throw new Error('Profile not found');
    }

    await updateProfile(id, {
        preferences: {
            ...profile.preferences,
            ...preferences,
        },
    });
}
