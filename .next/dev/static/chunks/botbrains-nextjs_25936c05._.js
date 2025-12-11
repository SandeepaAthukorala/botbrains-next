(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/botbrains-nextjs/src/store/useKeywordStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeywordStore",
    ()=>useKeywordStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/keywordStorage.ts [app-client] (ecmascript)");
;
;
const useKeywordStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        // Initial state
        keywords: [],
        usedKeywords: [],
        isLoading: false,
        // Load all keywords
        loadKeywords: async ()=>{
            set({
                isLoading: true
            });
            try {
                const keywords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllKeywords"])();
                set({
                    keywords,
                    isLoading: false
                });
            } catch (error) {
                console.error('Failed to load keywords:', error);
                set({
                    isLoading: false
                });
            }
        },
        // Load used keywords from prompts (for autocomplete)
        loadUsedKeywords: async ()=>{
            try {
                const usedKeywords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllUsedKeywords"])();
                set({
                    usedKeywords
                });
            } catch (error) {
                console.error('Failed to load used keywords:', error);
            }
        },
        // Create a new keyword
        createKeyword: async (name)=>{
            const keyword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createKeyword"])(name);
            set((state)=>({
                    keywords: [
                        ...state.keywords,
                        keyword
                    ]
                }));
            return keyword;
        },
        // Delete a keyword
        deleteKeyword: async (id)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteKeyword"])(id);
            set((state)=>({
                    keywords: state.keywords.filter((k)=>k.id !== id)
                }));
        },
        // Get usage count
        getKeywordUsageCount: async (keywordName)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$keywordStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKeywordUsageCount"])(keywordName);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Input({ label, error, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-foreground mb-2 transition-colors",
                children: label
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Input.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/components/ui/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Skeleton({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/components/library/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function SearchBar({ value, onChange, placeholder = 'Search prompts...' }) {
    _s();
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    // Sync with external value
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            setLocalValue(value);
        }
    }["SearchBar.useEffect"], [
        value
    ]);
    // Debounced search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            const timer = setTimeout({
                "SearchBar.useEffect.timer": ()=>{
                    onChange(localValue);
                }
            }["SearchBar.useEffect.timer"], 300);
            return ({
                "SearchBar.useEffect": ()=>clearTimeout(timer)
            })["SearchBar.useEffect"];
        }
    }["SearchBar.useEffect"], [
        localValue,
        onChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/library/SearchBar.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: localValue,
                onChange: (e)=>setLocalValue(e.target.value),
                placeholder: placeholder,
                className: "   w-full pl-9 pr-9 py-2   rounded-md text-sm   bg-background border border-input   focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary   transition-all   placeholder:text-muted-foreground   text-foreground   "
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/library/SearchBar.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            localValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setLocalValue(''),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/botbrains-nextjs/src/components/library/SearchBar.tsx",
                    lineNumber: 50,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/library/SearchBar.tsx",
                lineNumber: 46,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/components/library/SearchBar.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(SearchBar, "d+kUoR43C2UbC4Cwtcu8b+qCbtI=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/src/page-components/Keywords.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keywords",
    ()=>Keywords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/useKeywordStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/hooks/useToast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$library$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/library/SearchBar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function Keywords() {
    _s();
    const keywords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"])({
        "Keywords.useKeywordStore[keywords]": (state)=>state.keywords
    }["Keywords.useKeywordStore[keywords]"]);
    const loadKeywords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"])({
        "Keywords.useKeywordStore[loadKeywords]": (state)=>state.loadKeywords
    }["Keywords.useKeywordStore[loadKeywords]"]);
    const createKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"])({
        "Keywords.useKeywordStore[createKeyword]": (state)=>state.createKeyword
    }["Keywords.useKeywordStore[createKeyword]"]);
    const deleteKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"])({
        "Keywords.useKeywordStore[deleteKeyword]": (state)=>state.deleteKeyword
    }["Keywords.useKeywordStore[deleteKeyword]"]);
    const getKeywordUsageCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"])({
        "Keywords.useKeywordStore[getKeywordUsageCount]": (state)=>state.getKeywordUsageCount
    }["Keywords.useKeywordStore[getKeywordUsageCount]"]);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [newKeywordName, setNewKeywordName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [usageCounts, setUsageCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load keywords on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Keywords.useEffect": ()=>{
            const init = {
                "Keywords.useEffect.init": async ()=>{
                    await loadKeywords();
                    setIsLoading(false);
                }
            }["Keywords.useEffect.init"];
            init();
        }
    }["Keywords.useEffect"], [
        loadKeywords
    ]);
    // Load usage counts for all keywords
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Keywords.useEffect": ()=>{
            const loadUsageCounts = {
                "Keywords.useEffect.loadUsageCounts": async ()=>{
                    const counts = {};
                    for (const keyword of keywords){
                        counts[keyword.name] = await getKeywordUsageCount(keyword.name);
                    }
                    setUsageCounts(counts);
                }
            }["Keywords.useEffect.loadUsageCounts"];
            if (keywords.length > 0) {
                loadUsageCounts();
            }
        }
    }["Keywords.useEffect"], [
        keywords,
        getKeywordUsageCount
    ]);
    const handleAddKeyword = async ()=>{
        const trimmed = newKeywordName.trim();
        if (!trimmed) {
            toast.error('Keyword name cannot be empty');
            return;
        }
        // Check for duplicates
        const exists = keywords.some((k)=>k.name.toLowerCase() === trimmed.toLowerCase());
        if (exists) {
            toast.error('Keyword already exists');
            return;
        }
        setIsAdding(true);
        try {
            await createKeyword(trimmed);
            setNewKeywordName('');
            toast.success('Keyword added');
        } catch (error) {
            toast.error('Failed to add keyword');
            console.error(error);
        } finally{
            setIsAdding(false);
        }
    };
    const handleDelete = async (keyword)=>{
        const count = usageCounts[keyword.name] || 0;
        if (count > 0) {
            const confirmed = confirm(`"${keyword.name}" is used in ${count} prompt(s). Delete anyway? It will be removed from those prompts.`);
            if (!confirmed) return;
        }
        try {
            await deleteKeyword(keyword.id);
            toast.success('Keyword deleted');
        } catch (error) {
            toast.error('Failed to delete keyword');
            console.error(error);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleAddKeyword();
        }
    };
    // Filter keywords by search query
    const filteredKeywords = keywords.filter((k)=>k.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-6 px-8 py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-8 w-48 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                            lineNumber: 111,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-4 w-64"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card border border-border rounded-lg p-4 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-4 w-24 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 flex-1 rounded-md"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 w-20 rounded-md"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: Array.from({
                        length: 5
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card border border-border rounded-lg p-3 flex justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-6 w-24 rounded-md"
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                        lineNumber: 125,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-4 w-32"
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                lineNumber: 124,
                                columnNumber: 29
                            }, this)
                        }, i, false, {
                            fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                            lineNumber: 123,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
            lineNumber: 109,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto space-y-6 px-8 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-foreground mb-1",
                        children: "Keywords"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm",
                        children: "Manage keywords for better prompt organization and discovery"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-foreground mb-2",
                        children: "Add Keyword"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: newKeywordName,
                                onChange: (e)=>setNewKeywordName(e.target.value),
                                onKeyPress: handleKeyPress,
                                placeholder: "e.g., SEO, Marketing, Tutorial",
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleAddKeyword,
                                isLoading: isAdding,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this),
                                    "Add"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, this),
            keywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$library$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                value: searchQuery,
                onChange: setSearchQuery,
                placeholder: "Search keywords..."
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                lineNumber: 167,
                columnNumber: 17
            }, this),
            keywords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card/50 border border-border border-dashed rounded-lg p-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-6 opacity-50",
                        children: "🏷️"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 177,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-foreground mb-2",
                        children: "No keywords yet"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mb-6",
                        children: "Add your first keyword to improve prompt searchability"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 181,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                lineNumber: 176,
                columnNumber: 17
            }, this) : filteredKeywords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "No keywords match your search"
                }, void 0, false, {
                    fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                    lineNumber: 187,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                lineNumber: 186,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: filteredKeywords.map((keyword)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg p-3 transition-all hover:border-primary/40 group flex items-center justify-between shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium",
                                        children: keyword.name
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                        lineNumber: 197,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "Used in ",
                                            usageCounts[keyword.name] || 0,
                                            " prompt(s)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                        lineNumber: 200,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                lineNumber: 196,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleDelete(keyword),
                                className: "p-2 opacity-0 group-hover:opacity-100 hover:bg-destructive/10 rounded text-muted-foreground hover:text-destructive transition-all",
                                title: "Delete",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                    lineNumber: 211,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                                lineNumber: 206,
                                columnNumber: 29
                            }, this)
                        ]
                    }, keyword.id, true, {
                        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                        lineNumber: 192,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                lineNumber: 190,
                columnNumber: 17
            }, this),
            keywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-xs text-muted-foreground",
                children: [
                    filteredKeywords.length,
                    " of ",
                    keywords.length,
                    " keyword(s)"
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
                lineNumber: 220,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/page-components/Keywords.tsx",
        lineNumber: 136,
        columnNumber: 9
    }, this);
}
_s(Keywords, "OI2HOUax4K3lbRZCRlQv28ogb1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useKeywordStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeywordStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Keywords;
var _c;
__turbopack_context__.k.register(_c, "Keywords");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/app/(authenticated)/keywords/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeywordsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$page$2d$components$2f$Keywords$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/page-components/Keywords.tsx [app-client] (ecmascript)");
'use client';
;
;
function KeywordsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$page$2d$components$2f$Keywords$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keywords"], {}, void 0, false, {
        fileName: "[project]/botbrains-nextjs/app/(authenticated)/keywords/page.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
_c = KeywordsPage;
var _c;
__turbopack_context__.k.register(_c, "KeywordsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=botbrains-nextjs_25936c05._.js.map