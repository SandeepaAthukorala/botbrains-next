import { db } from './firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, getCountFromServer } from 'firebase/firestore';
import type { Category } from '@/types';

const COLLECTION = 'categories';

/**
 * Generate a unique ID for categories
 */
function generateId(): string {
    return `cat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new category
 */
export async function createCategory(
    name: string,
    color: string,
    description?: string,
    workspaceId?: string
): Promise<Category> {
    const id = generateId();
    const category: Category = {
        id,
        name,
        color,
        description,
        workspaceId,
        created_at: new Date().toISOString(),
    };

    await setDoc(doc(db, COLLECTION, id), category);
    return category;
}

/**
 * Get all categories
 */
export async function getAllCategories(workspaceId?: string): Promise<Category[]> {
    let q;
    if (workspaceId) {
        q = query(collection(db, COLLECTION), where('workspaceId', '==', workspaceId), orderBy('name'));
    } else {
        q = query(collection(db, COLLECTION), orderBy('name'));
    }

    // Fallback if index not created yet:
    // If orderBy fails due to missing index, we might need to catch and sort in memory.
    // For now assuming we can fix indexes or run in dev mode.
    // Actually, simple queries without composite fields don't strictly need indexes for some cases, 
    // but 'where'+'orderBy' usually does.
    // To be safe and simple for migration, we can fetch then sort in client if we expect low volume.
    // But let's try strict constraints first.

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data() as Category);
    } catch (e: any) {
        // Fallback: fetch without sort if index error
        if (e.code === 'failed-precondition') {
            const fallbackQ = workspaceId
                ? query(collection(db, COLLECTION), where('workspaceId', '==', workspaceId))
                : collection(db, COLLECTION);
            const snap = await getDocs(fallbackQ);
            const docs = snap.docs.map(doc => doc.data() as Category);
            return docs.sort((a, b) => a.name.localeCompare(b.name));
        }
        throw e;
    }
}

/**
 * Get a single category by ID
 */
export async function getCategory(id: string): Promise<Category | undefined> {
    const docRef = doc(db, COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as Category;
    }
    return undefined;
}

/**
 * Update a category
 */
export async function updateCategory(
    id: string,
    updates: Partial<Omit<Category, 'id' | 'created_at'>>
): Promise<void> {
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, updates);
}

/**
 * Delete a category
 */
export async function deleteCategory(id: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTION, id));
}

/**
 * Get usage count for a category (how many prompts use it)
 */
export async function getCategoryUsageCount(categoryName: string, workspaceId?: string): Promise<number> {
    // Note: This relies on prompts having the category NAME stored, which is brittle if names change.
    // Ideally prompts should store categoryId.
    // Assuming legacy structure stores name.

    let q = query(collection(db, 'prompts'), where('category', '==', categoryName));
    if (workspaceId) {
        q = query(q, where('workspaceId', '==', workspaceId));
    }

    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
}

/**
 * Get category by name
 */
export async function getCategoryByName(name: string, workspaceId?: string): Promise<Category | undefined> {
    let q = query(collection(db, COLLECTION), where('name', '==', name));
    if (workspaceId) {
        q = query(q, where('workspaceId', '==', workspaceId));
    }

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data() as Category;
    }
    return undefined;
}
