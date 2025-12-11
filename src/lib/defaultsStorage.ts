import { db } from './firebase';
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import type { GlobalVariableDefault } from '@/types';

const COLLECTION = 'globalVariableDefaults';

/**
 * Generate a unique ID
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get all global variable defaults
 */
export async function getAllDefaults(): Promise<GlobalVariableDefault[]> {
    const querySnapshot = await getDocs(collection(db, COLLECTION));
    return querySnapshot.docs.map(doc => doc.data() as GlobalVariableDefault);
}

/**
 * Get a specific global default by variable name
 */
export async function getDefault(variableName: string): Promise<GlobalVariableDefault | undefined> {
    const q = query(collection(db, COLLECTION), where('variableName', '==', variableName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data() as GlobalVariableDefault;
    }
    return undefined;
}

/**
 * Set or update a global variable default
 */
export async function setDefault(variableName: string, defaultValue: string): Promise<GlobalVariableDefault> {
    // Check if default already exists
    const existing = await getDefault(variableName);
    const now = new Date().toISOString();

    if (existing) {
        // Update existing
        await updateDoc(doc(db, COLLECTION, existing.id), {
            defaultValue,
            updated_at: now,
        });
        return {
            ...existing,
            defaultValue,
            updated_at: now,
        };
    } else {
        // Create new
        const id = generateId();
        const newDefault: GlobalVariableDefault = {
            id,
            variableName,
            defaultValue,
            created_at: now,
            updated_at: now,
        };
        await setDoc(doc(db, COLLECTION, id), newDefault);
        return newDefault;
    }
}

/**
 * Delete a global variable default
 */
export async function deleteDefault(variableName: string): Promise<void> {
    const existing = await getDefault(variableName);
    if (existing) {
        await deleteDoc(doc(db, COLLECTION, existing.id));
    }
}
