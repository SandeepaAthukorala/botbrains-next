module.exports = [
"[project]/botbrains-nextjs/src/lib/categoryStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id), category);
    return category;
}
async function getAllCategories(workspaceId) {
    let q;
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('name'));
    } else {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('name'));
    }
    // Fallback if index not created yet:
    // If orderBy fails due to missing index, we might need to catch and sort in memory.
    // For now assuming we can fix indexes or run in dev mode.
    // Actually, simple queries without composite fields don't strictly need indexes for some cases, 
    // but 'where'+'orderBy' usually does.
    // To be safe and simple for migration, we can fetch then sort in client if we expect low volume.
    // But let's try strict constraints first.
    try {
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.map((doc)=>doc.data());
    } catch (e) {
        // Fallback: fetch without sort if index error
        if (e.code === 'failed-precondition') {
            const fallbackQ = workspaceId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION);
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(fallbackQ);
            const docs = snap.docs.map((doc)=>doc.data());
            return docs.sort((a, b)=>a.name.localeCompare(b.name));
        }
        throw e;
    }
}
async function getCategory(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
    return undefined;
}
async function updateCategory(id, updates) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, updates);
}
async function deleteCategory(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id));
}
async function getCategoryUsageCount(categoryName, workspaceId) {
    // Note: This relies on prompts having the category NAME stored, which is brittle if names change.
    // Ideally prompts should store categoryId.
    // Assuming legacy structure stores name.
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'prompts'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('category', '==', categoryName));
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
    }
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountFromServer"])(q);
    return snapshot.data().count;
}
async function getCategoryByName(name, workspaceId) {
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('name', '==', name));
    if (workspaceId) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
    }
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    }
    return undefined;
}
}),
"[project]/botbrains-nextjs/src/store/useCategoryStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategoryStore",
    ()=>useCategoryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/categoryStorage.ts [app-ssr] (ecmascript)");
;
;
const useCategoryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        // Initial state
        categories: [],
        isLoading: false,
        // Load all categories
        loadCategories: async ()=>{
            set({
                isLoading: true
            });
            try {
                const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCategories"])();
                set({
                    categories,
                    isLoading: false
                });
            } catch (error) {
                console.error('Failed to load categories:', error);
                set({
                    isLoading: false
                });
            }
        },
        // Create a new category
        createCategory: async (name, color, description)=>{
            const category = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCategory"])(name, color, description);
            set((state)=>({
                    categories: [
                        ...state.categories,
                        category
                    ]
                }));
            return category;
        },
        // Update a category
        updateCategory: async (id, updates)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCategory"])(id, updates);
            set((state)=>({
                    categories: state.categories.map((c)=>c.id === id ? {
                            ...c,
                            ...updates
                        } : c)
                }));
        },
        // Delete a category
        deleteCategory: async (id)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCategory"])(id);
            set((state)=>({
                    categories: state.categories.filter((c)=>c.id !== id)
                }));
        },
        // Get usage count
        getCategoryUsageCount: async (categoryName)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$categoryStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoryUsageCount"])(categoryName);
        }
    }));
}),
"[project]/botbrains-nextjs/src/components/ui/Skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Skeleton({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
                animate-pulse rounded-md bg-muted/60
                relative overflow-hidden
                before:absolute before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent before:via-white/10 before:to-transparent
                ${className}
            `
    }, void 0, false, {
        fileName: "[project]/botbrains-nextjs/src/components/ui/Skeleton.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
}),
"[project]/botbrains-nextjs/src/components/ui/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
function Modal({ isOpen, onClose, title, children, size = 'md' }) {
    // Handle ESC key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [
        isOpen,
        onClose
    ]);
    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "absolute inset-0 bg-black/70 backdrop-blur-md",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
                    lineNumber: 43,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    },
                    className: `
                            relative w-full ${sizes[size]}
                            bg-card/95 border border-border/80 rounded-lg
                            shadow-xl shadow-black/20
                            backdrop-blur-xl
                        `,
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-6 border-b border-border/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-foreground",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/50 p-1.5 rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
                            lineNumber: 71,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 max-h-[80vh] overflow-y-auto scrollbar-thin",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
            lineNumber: 41,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/botbrains-nextjs/src/components/ui/Modal.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
"[project]/botbrains-nextjs/src/components/ui/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Input({ label, error, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-foreground mb-2 transition-colors",
                children: label
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Input.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `
                    w-full px-4 py-2.5
                    bg-background/50
                    border border-input
                    rounded-md
                    text-sm
                    text-foreground
                    placeholder:text-muted-foreground
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-primary/50 
                    focus:border-primary
                    focus:bg-background/80
                    disabled:cursor-not-allowed disabled:opacity-50
                    transition-all duration-300 ease-out
                    hover:border-input/80
                    shadow-sm focus:shadow-md
                    ${error ? 'border-destructive focus:ring-destructive/50 focus:border-destructive' : ''}
                    ${className}
                `,
                ...props
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Input.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-destructive animate-slide-up",
                children: error
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Input.tsx",
                lineNumber: 39,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/components/ui/Input.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/botbrains-nextjs/src/components/ui/Textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Textarea({ label, error, mono = false, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-foreground mb-2 transition-colors",
                children: label
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Textarea.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: `
                    w-full px-4 py-2.5
                    bg-background/50
                    border border-input
                    rounded-md
                    text-sm
                    text-foreground
                    placeholder:text-muted-foreground
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-primary/50 
                    focus:border-primary
                    focus:bg-background/80
                    disabled:cursor-not-allowed disabled:opacity-50
                    resize-y
                    transition-all duration-300 ease-out
                    hover:border-input/80
                    shadow-sm focus:shadow-md
                    ${mono ? 'font-mono' : ''}
                    ${error ? 'border-destructive focus:ring-destructive/50 focus:border-destructive' : ''}
                    ${className}
                `,
                ...props
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Textarea.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-destructive animate-slide-up",
                children: error
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Textarea.tsx",
                lineNumber: 42,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/components/ui/Textarea.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryForm",
    ()=>CategoryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const PRESET_COLORS = [
    '#00C2FF',
    '#B78BFF',
    '#FFB86B',
    '#57D78A',
    '#FF6B6B',
    '#9AA9B6',
    '#FFD600',
    '#FF1744'
];
function CategoryForm({ category, isOpen, onClose, onSave }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        color: '#00C2FF',
        description: ''
    });
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize form with category data if editing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (category) {
            setFormData({
                name: category.name,
                color: category.color,
                description: category.description || ''
            });
        } else {
            // Reset form for new category
            setFormData({
                name: '',
                color: '#00C2FF',
                description: ''
            });
        }
    }, [
        category,
        isOpen
    ]);
    const handleSave = async ()=>{
        if (!formData.name.trim()) {
            return;
        }
        setIsSaving(true);
        try {
            await onSave(formData);
            onClose();
        } catch (error) {
            console.error('Failed to save category:', error);
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: category ? 'Edit Category' : 'Create Category',
        size: "md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                    label: "Name *",
                    value: formData.name,
                    onChange: (e)=>setFormData({
                            ...formData,
                            name: e.target.value
                        }),
                    placeholder: "e.g., Content Marketing",
                    autoFocus: true
                }, void 0, false, {
                    fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-text-primary mb-2",
                            children: "Color *"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mb-3",
                            children: PRESET_COLORS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFormData({
                                            ...formData,
                                            color
                                        }),
                                    className: `w-8 h-8 rounded-full border-2 transition-all ${formData.color === color ? 'border-accent scale-110' : 'border-muted hover:border-accent/50'}`,
                                    style: {
                                        backgroundColor: color
                                    },
                                    title: color
                                }, color, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "color",
                                    value: formData.color,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            color: e.target.value
                                        }),
                                    className: "w-12 h-10 rounded border border-muted cursor-pointer bg-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    value: formData.color,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            color: e.target.value
                                        }),
                                    placeholder: "#00C2FF",
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                    label: "Description (optional)",
                    value: formData.description,
                    onChange: (e)=>setFormData({
                            ...formData,
                            description: e.target.value
                        }),
                    placeholder: "Brief description of this category...",
                    rows: 3
                }, void 0, false, {
                    fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-3 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: onClose,
                            disabled: isSaving,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSave,
                            isLoading: isSaving,
                            disabled: !formData.name.trim(),
                            children: [
                                category ? 'Update' : 'Create',
                                " Category"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
            lineNumber: 75,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}
}),
"[project]/botbrains-nextjs/src/page-components/Categories.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Categories",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useCategoryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/useCategoryStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/hooks/useToast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$category$2f$CategoryForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/category/CategoryForm.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Categories() {
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useCategoryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategoryStore"])((state)=>state.categories);
    const loadCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useCategoryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategoryStore"])((state)=>state.loadCategories);
    const createCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useCategoryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategoryStore"])((state)=>state.createCategory);
    const updateCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useCategoryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategoryStore"])((state)=>state.updateCategory);
    const deleteCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useCategoryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategoryStore"])((state)=>state.deleteCategory);
    const getCategoryUsageCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useCategoryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategoryStore"])((state)=>state.getCategoryUsageCount);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [isFormOpen, setIsFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCategory, setEditingCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [usageCounts, setUsageCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load categories on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const init = async ()=>{
            await loadCategories();
            setIsLoading(false);
        };
        init();
    }, [
        loadCategories
    ]);
    // Load usage counts for all categories
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadUsageCounts = async ()=>{
            const counts = {};
            for (const category of categories){
                counts[category.name] = await getCategoryUsageCount(category.name);
            }
            setUsageCounts(counts);
        };
        if (categories.length > 0) {
            loadUsageCounts();
        }
    }, [
        categories,
        getCategoryUsageCount
    ]);
    const handleSaveCategory = async (data)=>{
        try {
            if (editingCategory) {
                await updateCategory(editingCategory.id, data);
                toast.success('Category updated');
            } else {
                await createCategory(data.name, data.color, data.description);
                toast.success('Category created');
            }
            setIsFormOpen(false);
            setEditingCategory(undefined);
        } catch (error) {
            toast.error('Failed to save category');
            console.error(error);
        }
    };
    const handleEdit = (category)=>{
        setEditingCategory(category);
        setIsFormOpen(true);
    };
    const handleDelete = async (category)=>{
        const count = usageCounts[category.name] || 0;
        if (count > 0) {
            const confirmed = confirm(`"${category.name}" is used in ${count} prompt(s). Delete anyway? Prompts will lose this category.`);
            if (!confirmed) return;
        }
        try {
            await deleteCategory(category.id);
            toast.success('Category deleted');
        } catch (error) {
            toast.error('Failed to delete category');
            console.error(error);
        }
    };
    const handleNewCategory = ()=>{
        setEditingCategory(undefined);
        setIsFormOpen(true);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-6 px-8 py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-8 w-48 mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-64"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-10 w-32"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: Array.from({
                        length: 5
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card border border-border rounded-lg p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "w-4 h-4 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                            lineNumber: 111,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-5 w-32"
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-4 w-48"
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                            lineNumber: 112,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                    lineNumber: 110,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                lineNumber: 109,
                                columnNumber: 29
                            }, this)
                        }, i, false, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                            lineNumber: 108,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
            lineNumber: 98,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto space-y-6 px-8 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-foreground mb-1",
                                children: "Categories"
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                lineNumber: 130,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "Organize your prompts with color-coded categories"
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleNewCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, this),
                            "New Category"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            categories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card/50 border border-border border-dashed rounded-lg p-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-6 opacity-50",
                        children: "📁"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-foreground mb-2",
                        children: "No categories yet"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mb-8",
                        children: "Create your first category to organize your prompts"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                        lineNumber: 148,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleNewCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                lineNumber: 152,
                                columnNumber: 25
                            }, this),
                            "Create Category"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                        lineNumber: 151,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                lineNumber: 143,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg p-4 transition-all hover:border-primary/40 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 rounded-full flex-shrink-0 shadow-sm",
                                            style: {
                                                backgroundColor: category.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                            lineNumber: 166,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-semibold text-foreground",
                                                    children: category.name
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 41
                                                }, this),
                                                category.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: category.description
                                                }, void 0, false, {
                                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-1",
                                                    children: [
                                                        "Used in ",
                                                        usageCounts[category.name] || 0,
                                                        " prompt(s)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                            lineNumber: 171,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                    lineNumber: 164,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleEdit(category),
                                            className: "p-2 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors",
                                            title: "Edit",
                                            "aria-label": "Edit",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                                lineNumber: 194,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                            lineNumber: 188,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(category),
                                            className: "p-2 hover:bg-destructive/10 rounded text-muted-foreground hover:text-destructive transition-colors",
                                            title: "Delete",
                                            "aria-label": "Delete",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                                lineNumber: 202,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                            lineNumber: 196,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                                    lineNumber: 187,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                            lineNumber: 163,
                            columnNumber: 29
                        }, this)
                    }, category.id, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                        lineNumber: 159,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                lineNumber: 157,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$category$2f$CategoryForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryForm"], {
                category: editingCategory,
                isOpen: isFormOpen,
                onClose: ()=>{
                    setIsFormOpen(false);
                    setEditingCategory(undefined);
                },
                onSave: handleSaveCategory
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/page-components/Categories.tsx",
        lineNumber: 126,
        columnNumber: 9
    }, this);
}
}),
"[project]/botbrains-nextjs/app/(authenticated)/categories/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$page$2d$components$2f$Categories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/page-components/Categories.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function CategoriesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$page$2d$components$2f$Categories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Categories"], {}, void 0, false, {
        fileName: "[project]/botbrains-nextjs/app/(authenticated)/categories/page.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }
    ]
];
const Pen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("pen", __iconNode);
;
 //# sourceMappingURL=pen.js.map
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Edit2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript)");
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=botbrains-nextjs_2bdde55e._.js.map