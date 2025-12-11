(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/botbrains-nextjs/src/lib/categoryStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCategory",
    ()=>createCategory,
    "deleteCategory",
    ()=>deleteCategory,
    "getAllCategories",
    ()=>getAllCategories,
    "getCategory",
    ()=>getCategory,
    "getCategoryByName",
    ()=>getCategoryByName,
    "getCategoryUsageCount",
    ()=>getCategoryUsageCount,
    "updateCategory",
    ()=>updateCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
const COLLECTION = 'categories';
/**
 * Generate a unique ID for categories
 */ function generateId() {
    return `cat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
async function createCategory(name, color, description, workspaceId) {
    const id = generateId();
    const category = {
        id,
        name,
        color,
        description,
        workspaceId,
        created_at: new Date().toISOString()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION, id), category);
    return category;
}
async function getAllCategories(workspaceId) {
    let q;
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('name'));
    } else {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('name'));
    }
    // Fallback if index not created yet:
    // If orderBy fails due to missing index, we might need to catch and sort in memory.
    // For now assuming we can fix indexes or run in dev mode.
    // Actually, simple queries without composite fields don't strictly need indexes for some cases, 
    // but 'where'+'orderBy' usually does.
    // To be safe and simple for migration, we can fetch then sort in client if we expect low volume.
    // But let's try strict constraints first.
    try {
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.map((doc)=>doc.data());
    } catch (e) {
        // Fallback: fetch without sort if index error
        if (e.code === 'failed-precondition') {
            const fallbackQ = workspaceId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION);
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(fallbackQ);
            const docs = snap.docs.map((doc)=>doc.data());
            return docs.sort((a, b)=>a.name.localeCompare(b.name));
        }
        throw e;
    }
}
async function getCategory(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
    return undefined;
}
async function updateCategory(id, updates) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, updates);
}
async function deleteCategory(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION, id));
}
async function getCategoryUsageCount(categoryName, workspaceId) {
    // Note: This relies on prompts having the category NAME stored, which is brittle if names change.
    // Ideally prompts should store categoryId.
    // Assuming legacy structure stores name.
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'prompts'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('category', '==', categoryName));
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
    }
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountFromServer"])(q);
    return snapshot.data().count;
}
async function getCategoryByName(name, workspaceId) {
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('name', '==', name));
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
    }
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    }
    return undefined;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/lib/keywordStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createKeyword",
    ()=>createKeyword,
    "deleteKeyword",
    ()=>deleteKeyword,
    "getAllKeywords",
    ()=>getAllKeywords,
    "getAllUsedKeywords",
    ()=>getAllUsedKeywords,
    "getKeyword",
    ()=>getKeyword,
    "getKeywordByName",
    ()=>getKeywordByName,
    "getKeywordUsageCount",
    ()=>getKeywordUsageCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
const COLLECTION = 'keywords';
/**
 * Generate a unique ID for keywords
 */ function generateId() {
    return `kw-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
async function createKeyword(name, workspaceId) {
    const id = generateId();
    const keyword = {
        id,
        name,
        workspaceId,
        created_at: new Date().toISOString()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION, id), keyword);
    return keyword;
}
async function getAllKeywords(workspaceId) {
    let q;
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('name'));
    } else {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('name'));
    }
    try {
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.map((doc)=>doc.data());
    } catch (e) {
        if (e.code === 'failed-precondition') {
            const fallbackQ = workspaceId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION);
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(fallbackQ);
            const docs = snap.docs.map((doc)=>doc.data());
            return docs.sort((a, b)=>a.name.localeCompare(b.name));
        }
        throw e;
    }
}
async function getKeyword(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
    return undefined;
}
async function deleteKeyword(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION, id));
}
async function getKeywordUsageCount(keywordName, workspaceId) {
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'prompts'));
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
    }
    // Firestore lacks array-contains count efficiently without index or read.
    // Fetching all prompts in workspace to count is safe-ish for small apps.
    // 'array-contains' query is better:
    const countQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('keywords', 'array-contains', keywordName));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(countQ); // getCountFromServer works on array-contains? Yes.
    return snapshot.size;
}
async function getKeywordByName(name, workspaceId) {
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('name', '==', name));
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
    }
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    }
    return undefined;
}
async function getAllUsedKeywords(workspaceId) {
    // This is expensive in multiple ways on Firestore.
    // Better to maintain a 'keywords' collection (which we do now).
    // So this function might just alias getAllKeywords() map name.
    const keywords = await getAllKeywords(workspaceId);
    return keywords.map((k)=>k.name);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/lib/exportImport.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAllWorkspaceData",
    ()=>clearAllWorkspaceData,
    "createExportArchive",
    ()=>createExportArchive,
    "exportAllData",
    ()=>exportAllData,
    "exportAndDownload",
    ()=>exportAndDownload,
    "generatePromptMarkdown",
    ()=>generatePromptMarkdown,
    "generateUniqueFolderName",
    ()=>generateUniqueFolderName,
    "importFromFile",
    ()=>importFromFile,
    "importFullArchive",
    ()=>importFullArchive,
    "parseMarkdownWithFrontmatter",
    ()=>parseMarkdownWithFrontmatter,
    "sanitizeFolderName",
    ()=>sanitizeFolderName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/gray-matter/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/workspaceStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/categoryStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/keywordStorage.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
function sanitizeFolderName(name) {
    return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .slice(0, 50); // Max 50 chars
}
function generateUniqueFolderName(baseName, existingNames) {
    let sanitized = sanitizeFolderName(baseName);
    let uniqueName = sanitized;
    let counter = 1;
    while(existingNames.has(uniqueName)){
        uniqueName = `${sanitized}-${counter}`;
        counter++;
    }
    existingNames.add(uniqueName);
    return uniqueName;
}
function generatePromptMarkdown(prompt) {
    // Frontmatter data (subset of prompt data that's human-readable)
    const frontmatter = {
        title: prompt.title,
        type: prompt.type,
        category: prompt.category,
        tags: prompt.tags,
        keywords: prompt.keywords,
        description: prompt.performance.notes || '',
        isFavorite: prompt.isFavorite || false
    };
    // Manually generate YAML frontmatter (avoid gray-matter.stringify which uses Buffer)
    const yamlLines = [
        '---'
    ];
    // Add each frontmatter field
    for (const [key, value] of Object.entries(frontmatter)){
        if (Array.isArray(value)) {
            if (value.length === 0) {
                yamlLines.push(`${key}: []`);
            } else {
                yamlLines.push(`${key}:`);
                value.forEach((item)=>{
                    yamlLines.push(`  - ${JSON.stringify(item)}`);
                });
            }
        } else if (typeof value === 'string') {
            // Escape strings with colons or special characters
            const needsQuotes = value.includes(':') || value.includes('#') || value.includes('"');
            yamlLines.push(`${key}: ${needsQuotes ? JSON.stringify(value) : value}`);
        } else {
            yamlLines.push(`${key}: ${value}`);
        }
    }
    yamlLines.push('---');
    yamlLines.push('');
    yamlLines.push(prompt.prompt_template);
    return yamlLines.join('\n');
}
async function exportAllData(profileId) {
    console.log('🔄 Starting export for profile:', profileId);
    // Fetch all workspaces for this profile
    const workspaces = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWorkspacesByProfile"])(profileId);
    console.log(`📊 Found ${workspaces.length} workspaces`);
    // Fetch prompts for each workspace
    const workspaceData = [];
    let totalPrompts = 0;
    for (const workspace of workspaces){
        const prompts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPrompts"])(workspace.id);
        totalPrompts += prompts.length;
        workspaceData.push({
            workspace,
            prompts
        });
        console.log(`  ✅ Workspace "${workspace.name}": ${prompts.length} prompts`);
    }
    // Fetch all categories and keywords
    const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCategories"])();
    const keywords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllKeywords"])();
    console.log(`📋 Total: ${totalPrompts} prompts, ${categories.length} categories, ${keywords.length} keywords`);
    // Create manifest
    const manifest = {
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        appVersion: '1.0.0',
        profileId,
        counts: {
            workspaces: workspaces.length,
            prompts: totalPrompts,
            categories: categories.length,
            keywords: keywords.length
        }
    };
    return {
        manifest,
        workspaces: workspaceData,
        categories,
        keywords
    };
}
async function createExportArchive(data) {
    const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    // Add manifest at root
    zip.file('manifest.json', JSON.stringify(data.manifest, null, 2));
    // Add global categories and keywords
    zip.file('categories.json', JSON.stringify(data.categories, null, 2));
    zip.file('keywords.json', JSON.stringify(data.keywords, null, 2));
    // Track folder names to ensure uniqueness
    const workspaceFolderNames = new Set();
    // Process each workspace
    for (const { workspace, prompts } of data.workspaces){
        const workspaceFolderName = generateUniqueFolderName(`workspace-${workspace.name}`, workspaceFolderNames);
        // Add workspace config.json
        zip.file(`${workspaceFolderName}/config.json`, JSON.stringify(workspace, null, 2));
        // Track prompt folder names within this workspace
        const promptFolderNames = new Set();
        // Add each prompt
        for (const prompt of prompts){
            const promptFolderName = generateUniqueFolderName(prompt.title, promptFolderNames);
            const promptPath = `${workspaceFolderName}/prompts/${promptFolderName}`;
            // Add content.md (human-readable)
            const markdown = generatePromptMarkdown(prompt);
            zip.file(`${promptPath}/content.md`, markdown);
            // Add metadata.json (complete data)
            zip.file(`${promptPath}/metadata.json`, JSON.stringify(prompt, null, 2));
        }
    }
    console.log('📦 Generating ZIP archive...');
    // Generate blob without using workers to avoid CSP blob: restrictions
    const blob = await zip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 6
        }
    });
    console.log(`✅ Archive created: ${(blob.size / 1024 / 1024).toFixed(2)} MB`);
    return blob;
}
async function exportAndDownload(profileId) {
    try {
        // Export data
        const data = await exportAllData(profileId);
        // Create ZIP
        const blob = await createExportArchive(data);
        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const filename = `infinite-viking-backup-${timestamp}.zip`;
        // Trigger download
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
        console.log(`✅ Export complete: ${filename}`);
    } catch (error) {
        console.error('❌ Export failed:', error);
        throw error;
    }
}
function parseMarkdownWithFrontmatter(markdown) {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(markdown);
    return {
        frontmatter: parsed.data,
        content: parsed.content
    };
}
async function clearAllWorkspaceData(profileId) {
    console.log('⚠️ CLEARING ALL DATA for profile:', profileId);
    const { deleteWorkspace } = await __turbopack_context__.A("[project]/botbrains-nextjs/src/lib/workspaceStorage.ts [app-client] (ecmascript, async loader)");
    const workspaces = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWorkspacesByProfile"])(profileId);
    for (const workspace of workspaces){
        console.log(`  🗑️ Deleting workspace: ${workspace.name}`);
        await deleteWorkspace(workspace.id);
    }
    console.log('✅ All data cleared');
}
async function importFullArchive(zipBlob, profileId) {
    console.log('📥 Starting import...');
    try {
        // Load ZIP
        const zip = await __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loadAsync(zipBlob);
        // Read and validate manifest
        const manifestFile = zip.file('manifest.json');
        if (!manifestFile) {
            throw new Error('Invalid backup: manifest.json not found');
        }
        const manifestText = await manifestFile.async('text');
        const manifest = JSON.parse(manifestText);
        console.log('📋 Manifest loaded:', manifest);
        // Validate version compatibility
        if (manifest.version !== '1.0.0') {
            console.warn('⚠️ Version mismatch. Current: 1.0.0, Archive:', manifest.version);
        }
        // Clear existing data (NUCLEAR OPTION)
        await clearAllWorkspaceData(profileId);
        // Import global data
        const categoriesFile = zip.file('categories.json');
        const keywordsFile = zip.file('keywords.json');
        let categories = [];
        let keywords = [];
        if (categoriesFile) {
            const categoriesText = await categoriesFile.async('text');
            categories = JSON.parse(categoriesText);
        }
        if (keywordsFile) {
            const keywordsText = await keywordsFile.async('text');
            keywords = JSON.parse(keywordsText);
        }
        console.log(`📊 Importing ${categories.length} categories, ${keywords.length} keywords`);
        // Import categories
        const { createCategory } = await __turbopack_context__.A("[project]/botbrains-nextjs/src/lib/categoryStorage.ts [app-client] (ecmascript, async loader)");
        for (const category of categories){
            await createCategory(category.name, category.color, category.description, category.workspaceId);
        }
        // Import keywords
        const { createKeyword } = await __turbopack_context__.A("[project]/botbrains-nextjs/src/lib/keywordStorage.ts [app-client] (ecmascript, async loader)");
        for (const keyword of keywords){
            await createKeyword(keyword.name, keyword.workspaceId);
        }
        // Import workspaces and prompts
        const { createWorkspace } = await __turbopack_context__.A("[project]/botbrains-nextjs/src/lib/workspaceStorage.ts [app-client] (ecmascript, async loader)");
        const { createPrompt } = await __turbopack_context__.A("[project]/botbrains-nextjs/src/lib/storage.ts [app-client] (ecmascript, async loader)");
        const workspaceFolders = Object.keys(zip.files).filter((path)=>path.startsWith('workspace-') && path.endsWith('/config.json'));
        console.log(`📁 Found ${workspaceFolders.length} workspace folders`);
        for (const configPath of workspaceFolders){
            const configFile = zip.file(configPath);
            if (!configFile) continue;
            const configText = await configFile.async('text');
            const workspaceData = JSON.parse(configText);
            console.log(`  📂 Importing workspace: ${workspaceData.name}`);
            // Create workspace
            const newWorkspace = await createWorkspace(profileId, workspaceData.name, workspaceData.icon, workspaceData.color, workspaceData.description);
            // Find all prompts in this workspace
            const workspaceFolder = configPath.replace('/config.json', '');
            const promptFolders = Object.keys(zip.files).filter((path)=>path.startsWith(`${workspaceFolder}/prompts/`) && path.endsWith('/metadata.json'));
            console.log(`    📝 Found ${promptFolders.length} prompts`);
            for (const metadataPath of promptFolders){
                const metadataFile = zip.file(metadataPath);
                if (!metadataFile) continue;
                const metadataText = await metadataFile.async('text');
                const promptData = JSON.parse(metadataText);
                // Create prompt with new workspace ID
                const { id, created_at, updated_at, workspaceId, ...promptFields } = promptData;
                await createPrompt(promptFields, newWorkspace.id);
            }
        }
        console.log('✅ Import complete!');
    } catch (error) {
        console.error('❌ Import failed:', error);
        throw error;
    }
}
async function importFromFile(file, profileId) {
    if (!file.name.endsWith('.zip')) {
        throw new Error('Please select a .zip file');
    }
    const blob = new Blob([
        file
    ], {
        type: 'application/zip'
    });
    await importFullArchive(blob, profileId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmergencyExportSection",
    ()=>EmergencyExportSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$exportImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/exportImport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/useProfileStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/hooks/useToast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function EmergencyExportSection() {
    _s();
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { currentProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleExport = async ()=>{
        if (!currentProfile) {
            toast.error('No active profile');
            return;
        }
        setIsExporting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$exportImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportAndDownload"])(currentProfile.id);
            toast.success('Backup exported successfully!');
        } catch (error) {
            console.error('Export error:', error);
            toast.error('Export failed. Check console for details');
        } finally{
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-text-primary mb-2",
                            children: "Emergency Export"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-text-muted text-sm",
                            children: "Download a complete backup of all your workspaces, prompts, categories, and keywords. The backup is a ZIP file containing human-readable Markdown files and JSON data."
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleExport,
                disabled: isExporting,
                className: "btn-primary flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    isExporting ? 'Exporting...' : 'Export All Data'
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            isExporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center gap-2 text-text-muted text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin h-4 w-4 border-2 border-accent-primary border-t-transparent rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Preparing backup archive..."
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(EmergencyExportSection, "InNG07jqG5/bLF5JrcDwzZwhZOA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = EmergencyExportSection;
var _c;
__turbopack_context__.k.register(_c, "EmergencyExportSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmergencyImportSection",
    ()=>EmergencyImportSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$exportImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/exportImport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/useProfileStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/hooks/useToast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function EmergencyImportSection() {
    _s();
    const [isImporting, setIsImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmDialog, setShowConfirmDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { currentProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleFileSelect = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setShowConfirmDialog(true);
        }
    };
    const handleCancelImport = ()=>{
        setShowConfirmDialog(false);
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleConfirmImport = async ()=>{
        if (!currentProfile || !selectedFile) {
            toast.error('No active profile or file selected');
            return;
        }
        setShowConfirmDialog(false);
        setIsImporting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$exportImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importFromFile"])(selectedFile, currentProfile.id);
            toast.success('Data restored successfully! Refreshing...');
            // Reload page to refresh UI with new data
            setTimeout(()=>{
                window.location.reload();
            }, 1500);
        } catch (error) {
            console.error('Import error:', error);
            toast.error(`Import failed: ${error.message}`);
        } finally{
            setIsImporting(false);
            setSelectedFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass rounded-lg p-6 border-2 border-warn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "text-warn mt-1 flex-shrink-0",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-text-primary mb-2",
                                        children: "Emergency Import (Destructive)"
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-text-muted text-sm mb-2",
                                        children: "Restore all data from a backup ZIP file."
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-warn text-sm font-semibold",
                                        children: "⚠️ WARNING: This will DELETE all existing data and replace it with the backup."
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "import-file",
                            className: "btn-secondary flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this),
                                isImporting ? 'Importing...' : 'Select Backup File',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    id: "import-file",
                                    type: "file",
                                    accept: ".zip",
                                    onChange: handleFileSelect,
                                    disabled: isImporting,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    isImporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center gap-2 text-text-muted text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin h-4 w-4 border-2 border-accent-primary border-t-transparent rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Restoring data from backup..."
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                        lineNumber: 95,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            showConfirmDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass rounded-lg p-6 max-w-md w-full border-2 border-warn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "text-warn flex-shrink-0",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-text-primary mb-2",
                                            children: "Confirm Destructive Import"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-text-muted text-sm mb-2",
                                            children: "You are about to import:"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-accent-primary text-sm font-mono bg-bg-tertiary px-2 py-1 rounded mb-3",
                                            children: selectedFile?.name
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-warn text-sm font-semibold mb-2",
                                            children: "This will:"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-warn text-sm list-disc list-inside space-y-1 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Delete ALL existing workspaces"
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Delete ALL existing prompts"
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Delete ALL existing categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Delete ALL existing keywords"
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Replace with backup data"
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                            lineNumber: 121,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-text-muted text-sm",
                                            children: "This action cannot be undone unless you have another backup."
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCancelImport,
                                    className: "btn-secondary",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleConfirmImport,
                                    className: "bg-warn hover:bg-warn/80 text-white px-4 py-2 rounded-lg font-medium transition-colors",
                                    children: "Yes, Delete & Import"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                                    lineNumber: 141,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                            lineNumber: 134,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                    lineNumber: 105,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx",
                lineNumber: 104,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(EmergencyImportSection, "t7nsB06Yd4maXtHiWd4z76u/1eQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = EmergencyImportSection;
var _c;
__turbopack_context__.k.register(_c, "EmergencyImportSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsTabs",
    ()=>SettingsTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SettingsTabs() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const tabs = [
        {
            path: '/settings/variable-defaults',
            label: 'Variable Defaults',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        },
        {
            path: '/settings/api',
            label: 'API Keys',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-white/10 mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: tabs.map((tab)=>{
                const isActive = pathname === tab.path;
                const Icon = tab.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: tab.path,
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            y: -2
                        },
                        className: `
                                    flex items-center gap-2 px-6 py-3 rounded-t-xl transition-colors
                                    ${isActive ? 'bg-white/5 text-primary border-b-2 border-primary' : 'text-secondary hover:text-primary hover:bg-white/5'}
                                `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx",
                                lineNumber: 47,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx",
                                lineNumber: 48,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx",
                        lineNumber: 37,
                        columnNumber: 29
                    }, this)
                }, tab.path, false, {
                    fileName: "[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx",
                    lineNumber: 32,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(SettingsTabs, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SettingsTabs;
var _c;
__turbopack_context__.k.register(_c, "SettingsTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/page-components/Settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$settings$2f$EmergencyExportSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/settings/EmergencyExportSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$settings$2f$EmergencyImportSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/settings/EmergencyImportSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$settings$2f$SettingsTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/settings/SettingsTabs.tsx [app-client] (ecmascript)");
;
;
;
;
function Settings() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-text-primary mb-6",
                children: "Settings"
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Settings.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$settings$2f$SettingsTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsTabs"], {}, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Settings.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$settings$2f$EmergencyExportSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmergencyExportSection"], {}, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Settings.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$settings$2f$EmergencyImportSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmergencyImportSection"], {}, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Settings.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Settings.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/page-components/Settings.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/app/(authenticated)/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$page$2d$components$2f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/page-components/Settings.tsx [app-client] (ecmascript)");
'use client';
;
;
function SettingsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$page$2d$components$2f$Settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings"], {}, void 0, false, {
        fileName: "[project]/botbrains-nextjs/app/(authenticated)/settings/page.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=botbrains-nextjs_e99bb184._.js.map