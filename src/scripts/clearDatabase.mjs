/**
 * Database Cleanup Script
 * 
 * This script clears all test data from Firestore.
 * Run with: node src/scripts/clearDatabase.mjs
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, '../../.env') });

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clearCollection(collectionName) {
    console.log(`\n🗑️  Clearing collection: ${collectionName}`);

    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        console.log(`   Found ${querySnapshot.size} documents`);

        let deleted = 0;
        for (const doc of querySnapshot.docs) {
            await deleteDoc(doc.ref);
            deleted++;
            if (deleted % 10 === 0) {
                console.log(`   Deleted ${deleted}/${querySnapshot.size}...`);
            }
        }

        console.log(`✅ Cleared ${deleted} documents from ${collectionName}`);
    } catch (error) {
        console.error(`❌ Error clearing ${collectionName}:`, error);
    }
}

async function clearDatabase() {
    console.log('🚀 Starting database cleanup...\n');
    console.log('⚠️  WARNING: This will delete ALL data from Firestore!');
    console.log('Collections to clear:');
    console.log('  - prompts');
    console.log('  - workspaces');
    console.log('  - profiles');
    console.log('  - categories');
    console.log('  - keywords\n');

    // Clear all collections
    await clearCollection('prompts');
    await clearCollection('workspaces');
    await clearCollection('profiles');
    await clearCollection('categories');
    await clearCollection('keywords');

    console.log('\n✅ Database cleanup completed successfully!');
    console.log('💡 The next time you load the app, it will create a fresh default workspace.\n');
}

// Run the cleanup
clearDatabase()
    .then(() => {
        console.log('✨ All done!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('❌ Fatal error:', error);
        process.exit(1);
    });
