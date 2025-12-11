import { db } from './firebase';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import type { Keyword } from '@/types';

const COLLECTION = 'keywords';

/**
 * Generate a unique ID for keywords
 */
function generateId(): string {
    return `kw-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new keyword
 */
export async function createKeyword(name: string, workspaceId?: string): Promise<Keyword> {
    const id = generateId();
    const keyword: Keyword = {
        id,
        name,
        workspaceId,
        created_at: new Date().toISOString(),
    };

    await setDoc(doc(db, COLLECTION, id), keyword);
    return keyword;
}

/**
 * Get all keywords
 */
export async function getAllKeywords(workspaceId?: string): Promise<Keyword[]> {
    let q;
    if (workspaceId) {
        q = query(collection(db, COLLECTION), where('workspaceId', '==', workspaceId), orderBy('name'));
    } else {
        q = query(collection(db, COLLECTION), orderBy('name'));
    }

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data() as Keyword);
    } catch (e: any) {
        if (e.code === 'failed-precondition') {
            const fallbackQ = workspaceId
                ? query(collection(db, COLLECTION), where('workspaceId', '==', workspaceId))
                : collection(db, COLLECTION);
            const snap = await getDocs(fallbackQ);
            const docs = snap.docs.map(doc => doc.data() as Keyword);
            return docs.sort((a, b) => a.name.localeCompare(b.name));
        }
        throw e;
    }
}

/**
 * Get a single keyword by ID
 */
export async function getKeyword(id: string): Promise<Keyword | undefined> {
    const docRef = doc(db, COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as Keyword;
    }
    return undefined;
}

/**
 * Delete a keyword
 */
export async function deleteKeyword(id: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTION, id));
}

/**
 * Get usage count for a keyword (how many prompts use it)
 */
export async function getKeywordUsageCount(keywordName: string, workspaceId?: string): Promise<number> {
    let q = query(collection(db, 'prompts'));
    if (workspaceId) {
        q = query(q, where('workspaceId', '==', workspaceId));
    }

    // Firestore lacks array-contains count efficiently without index or read.
    // Fetching all prompts in workspace to count is safe-ish for small apps.
    // 'array-contains' query is better:

    const countQ = query(q, where('keywords', 'array-contains', keywordName));
    const snapshot = await getDocs(countQ); // getCountFromServer works on array-contains? Yes.
    return snapshot.size;
}

/**
 * Get keyword by name
 */
export async function getKeywordByName(name: string, workspaceId?: string): Promise<Keyword | undefined> {
    let q = query(collection(db, COLLECTION), where('name', '==', name));
    if (workspaceId) {
        q = query(q, where('workspaceId', '==', workspaceId));
    }

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data() as Keyword;
    }
    return undefined;
}

/**
 * Get all unique keywords from prompts (for autocomplete)
 */
export async function getAllUsedKeywords(workspaceId?: string): Promise<string[]> {
    // This is expensive in multiple ways on Firestore.
    // Better to maintain a 'keywords' collection (which we do now).
    // So this function might just alias getAllKeywords() map name.

    const keywords = await getAllKeywords(workspaceId);
    return keywords.map(k => k.name);
}
