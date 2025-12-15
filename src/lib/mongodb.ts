import { MongoClient, Db, Collection, Document } from 'mongodb';

// MongoDB connection configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongoadmin:ProjectHawking2025@185.215.166.12:27017/primodial-hawking?authSource=admin';
const MONGODB_DATABASE = process.env.NEXT_PUBLIC_MONGODB_DATABASE || 'botbrains';

// Global MongoDB client instance (for connection pooling)
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

/**
 * Helper function to convert MongoDB document to plain object
 * Removes MongoDB-specific _id field which can't be serialized to client
 */
export function serializeMongoDoc<T>(doc: any): T {
    if (!doc) return doc;

    // Convert to plain object and remove _id
    const { _id, ...plainDoc } = doc;
    return plainDoc as T;
}

/**
 * Helper to serialize an array of MongoDB documents
 */
export function serializeMongoDocs<T>(docs: any[]): T[] {
    return docs.map(doc => serializeMongoDoc<T>(doc));
}

/**
 * Connect to MongoDB and return the database instance
 * Uses connection pooling to reuse existing connections
 */
export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
    // Return cached connection if available
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    try {
        // Create new connection
        const client = new MongoClient(MONGODB_URI, {
            maxPoolSize: 10,
            minPoolSize: 5,
            serverSelectionTimeoutMS: 5000,
        });

        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db(MONGODB_DATABASE);

        // Cache the connection
        cachedClient = client;
        cachedDb = db;

        return { client, db };
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error);
        throw error;
    }
}

/**
 * Get the MongoDB database instance
 */
export async function getDatabase(): Promise<Db> {
    const { db } = await connectToDatabase();
    return db;
}

/**
 * Get a specific collection from the botbrains collection
 * All data is stored as sub-documents within the botbrains collection
 */
export async function getCollection<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
    const db = await getDatabase();
    // We'll use separate collections for better organization
    return db.collection<T>(collectionName);
}

/**
 * Helper functions to get specific collections
 */
export async function getWorkspacesCollection() {
    return getCollection('workspaces');
}

export async function getPromptsCollection() {
    return getCollection('prompts');
}

export async function getCategoriesCollection() {
    return getCollection('categories');
}

export async function getKeywordsCollection() {
    return getCollection('keywords');
}

export async function getProfilesCollection() {
    return getCollection('profiles');
}

export async function getDefaultsCollection() {
    return getCollection('defaults');
}

/**
 * Close MongoDB connection (useful for cleanup)
 */
export async function closeConnection(): Promise<void> {
    if (cachedClient) {
        await cachedClient.close();
        cachedClient = null;
        cachedDb = null;
        console.log('✅ MongoDB connection closed');
    }
}
