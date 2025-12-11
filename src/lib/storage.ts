import { db } from './firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, writeBatch } from 'firebase/firestore';
import type { Prompt, SearchFilters } from '@/types';

const COLLECTION = 'prompts';

/**
 * Generate a unique ID for prompts
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new prompt
 */
export async function createPrompt(
    data: Omit<Prompt, 'id' | 'created_at' | 'updated_at' | 'order'>,
    workspaceId?: string
): Promise<Prompt> {
    console.log('💾 createPrompt called with workspaceId:', workspaceId);
    console.log('📝 Prompt data:', { title: data.title, type: data.type });

    try {
        const now = new Date().toISOString();

        // Find max order to append
        let maxOrder = -1;
        let q = query(collection(db, COLLECTION), orderBy('order', 'desc'));
        if (workspaceId) {
            // Composite index might be needed: workspaceId + order
            // Fallback: simplified logic for now: query all in workspace, find max.
            q = query(collection(db, COLLECTION), where('workspaceId', '==', workspaceId));
            const snap = await getDocs(q);
            if (!snap.empty) {
                // Determine max in memory to avoid index issues during migration
                const orders = snap.docs.map(d => (d.data() as Prompt).order || 0);
                maxOrder = Math.max(...orders);
            }
        } else {
            // Global max (if no workspace? Prompts should have workspaceId)
            const snap = await getDocs(query(collection(db, COLLECTION), orderBy('order', 'desc'))); // limit(1) requires index
            if (!snap.empty) {
                maxOrder = (snap.docs[0].data() as Prompt).order;
            }
        }

        const id = generateId();
        const prompt: Prompt = {
            ...data,
            workspaceId,
            id,
            created_at: now,
            updated_at: now,
            order: maxOrder >= 0 ? maxOrder + 1 : 0, // Ensure we handle -1 case properly
        };

        console.log('💾 Saving prompt to Firestore:', { id, order: prompt.order, workspaceId });
        await setDoc(doc(db, COLLECTION, id), prompt);
        console.log('✅ Prompt saved successfully to Firestore');
        return prompt;
    } catch (error) {
        console.error('❌ Failed to create prompt:', error);
        throw error;
    }
}

/**
 * Get a single prompt by ID
 */
export async function getPrompt(id: string): Promise<Prompt | undefined> {
    const docRef = doc(db, COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as Prompt;
    }
    return undefined;
}

/**
 * Get all prompts ordered by the order field
 * Optionally filter by workspace
 */
export async function getAllPrompts(workspaceId?: string): Promise<Prompt[]> {
    console.log('🔍 getAllPrompts called with workspaceId:', workspaceId);

    let q;
    if (workspaceId) {
        // Query by workspace only (no order) to avoid composite index requirement
        q = query(collection(db, COLLECTION), where('workspaceId', '==', workspaceId));
    } else {
        // Fetch ALL prompts without any orderBy to avoid index issues
        // We'll sort in memory instead - this handles undefined order values gracefully
        q = query(collection(db, COLLECTION));
    }

    try {
        const querySnapshot = await getDocs(q);
        console.log(`📊 Retrieved ${querySnapshot.size} prompts from Firestore`);
        const prompts = querySnapshot.docs.map(doc => doc.data() as Prompt);
        console.log('📋 Prompts after mapping:', prompts.length);

        // Sort in memory by order (handles undefined values gracefully)
        return prompts.sort((a, b) => (a.order || 0) - (b.order || 0));
    } catch (e: any) {
        console.error('❌ getAllPrompts failed:', e);
        throw e;
    }
}

/**
 * Update an existing prompt
 */
export async function updatePrompt(
    id: string,
    updates: Partial<Omit<Prompt, 'id' | 'created_at'>>
): Promise<void> {
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, {
        ...updates,
        updated_at: new Date().toISOString(),
    });
}

/**
 * Delete a prompt
 */
export async function deletePrompt(id: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTION, id));
}

/**
 * Track prompt usage - increment usage count and update last used timestamp
 */
export async function trackPromptUsage(id: string): Promise<void> {
    const docRef = doc(db, COLLECTION, id);
    const promptDoc = await getDoc(docRef);

    if (promptDoc.exists()) {
        const currentUsageCount = (promptDoc.data() as Prompt).usageCount || 0;
        await updateDoc(docRef, {
            usageCount: currentUsageCount + 1,
            lastUsedAt: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        });
    }
}

/**
 * Toggle favorite status of a prompt
 */
export async function toggleFavorite(id: string): Promise<void> {
    const docRef = doc(db, COLLECTION, id);
    const promptDoc = await getDoc(docRef);

    if (promptDoc.exists()) {
        const currentFavorite = (promptDoc.data() as Prompt).isFavorite || false;
        await updateDoc(docRef, {
            isFavorite: !currentFavorite,
            updated_at: new Date().toISOString(),
        });
    }
}


/**
 * Search prompts with filters
 */
export async function searchPrompts(
    queryText: string,
    filters: SearchFilters = {},
    workspaceId?: string
): Promise<Prompt[]> {
    // Firestore search is limited. We will fetch relevant prompts and filter in memory.
    // This maintains the previous logic's capability without requiring Algolia/Typesense yet.

    // 1. Base fetch
    let collectionData: Prompt[] = await getAllPrompts(workspaceId);

    // 2. Apply filters (Memory)
    if (filters.type) {
        collectionData = collectionData.filter(p => p.type === filters.type);
    }
    if (filters.category) {
        collectionData = collectionData.filter(p => p.category === filters.category);
    }
    if (filters.tags && filters.tags.length > 0) {
        collectionData = collectionData.filter(p =>
            p.tags.some(tag => filters.tags!.includes(tag))
        );
    }
    if (filters.keywords && filters.keywords.length > 0) {
        collectionData = collectionData.filter(p =>
            p.keywords?.some(kw => filters.keywords!.includes(kw))
        );
    }
    if (filters.minRating !== undefined && filters.minRating > 0) {
        collectionData = collectionData.filter(p => p.performance.rating >= filters.minRating!);
    }
    if (filters.favorites) {
        collectionData = collectionData.filter(p => p.isFavorite === true);
    }

    // 3. Apply text search
    if (queryText.trim()) {
        const lowerQuery = queryText.toLowerCase();
        collectionData = collectionData.filter(p =>
            p.title.toLowerCase().includes(lowerQuery) ||
            p.prompt_template.toLowerCase().includes(lowerQuery) ||
            p.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
            p.keywords?.some(kw => kw.toLowerCase().includes(lowerQuery)) ||
            p.category.toLowerCase().includes(lowerQuery)
        );
    }

    return collectionData;
}

/**
 * Reorder prompts (for drag-and-drop)
 */
export async function reorderPrompts(promptIds: string[]): Promise<void> {
    const batch = writeBatch(db);

    promptIds.forEach((id, index) => {
        const docRef = doc(db, COLLECTION, id);
        batch.update(docRef, { order: index });
    });

    await batch.commit();
}

/**
 * Export all prompts as JSON string
 */
export async function exportAllPrompts(): Promise<string> {
    const prompts = await getAllPrompts();
    return JSON.stringify(prompts, null, 2);
}

/**
 * Import prompts from JSON string
 */
export async function importPrompts(jsonString: string): Promise<number> {
    try {
        const prompts = JSON.parse(jsonString) as Prompt[];

        if (!Array.isArray(prompts)) {
            throw new Error('Invalid JSON format: expected an array');
        }

        // Firestore batch limit is 500. For large imports we need to chunk results.
        const chunks = [];
        for (let i = 0; i < prompts.length; i += 400) {
            chunks.push(prompts.slice(i, i + 400));
        }

        // We aren't clearing existing prompts because "clear()" is expensive in Firestore (read + delete).
        // User logic might expect clear.
        // For now, let's just ADD new ones.

        for (const chunk of chunks) {
            const batch = writeBatch(db);
            for (const prompt of chunk) {
                // Ensure unique ID if they clash or let Firestore overwrite?
                // Using setDoc will overwrite if ID exists.
                const docRef = doc(db, COLLECTION, prompt.id || generateId());
                batch.set(docRef, prompt);
            }
            await batch.commit();
        }

        return prompts.length;
    } catch (error) {
        console.error('Import failed:', error);
        throw error;
    }
}

/**
 * Duplicate a prompt
 */
export async function duplicatePrompt(id: string): Promise<Prompt> {
    const original = await getPrompt(id);
    if (!original) {
        throw new Error('Prompt not found');
    }

    const { id: _, created_at: __, updated_at: ___, order: ____, ...data } = original;

    return createPrompt({
        ...data,
        title: `${original.title} (Copy)`,
    }, original.workspaceId);
}
