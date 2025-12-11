module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/botbrains-nextjs/src/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDeVgouHIFSSZxFnp9LfQ9pxpUod5xkSGU"),
    authDomain: ("TURBOPACK compile-time value", "mini-apps-aac5c.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "mini-apps-aac5c"),
    storageBucket: ("TURBOPACK compile-time value", "mini-apps-aac5c.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "748775519968"),
    appId: ("TURBOPACK compile-time value", "1:748775519968:web:97e7efd57c1447dbe7c285")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeFirestore"])(app, {
    localCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistentLocalCache"])({
        tabManager: (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistentMultipleTabManager"])()
    })
});
}),
"[project]/botbrains-nextjs/src/lib/profileStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProfile",
    ()=>createProfile,
    "deleteProfile",
    ()=>deleteProfile,
    "getAllProfiles",
    ()=>getAllProfiles,
    "getProfile",
    ()=>getProfile,
    "getProfileByGoogleId",
    ()=>getProfileByGoogleId,
    "updateProfile",
    ()=>updateProfile,
    "updateProfilePreferences",
    ()=>updateProfilePreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
const COLLECTION = 'profiles';
/**
 * Generate a unique ID
 */ function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
async function createProfile(googleId, email, name, avatar) {
    const now = new Date().toISOString();
    const id = generateId();
    const profile = {
        id,
        googleId,
        email,
        name,
        avatar,
        preferences: {
            theme: 'dark',
            language: 'en',
            animations: true
        },
        created_at: now,
        updated_at: now
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id), profile);
    return profile;
}
async function getProfile(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
    return undefined;
}
async function getProfileByGoogleId(googleId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('googleId', '==', googleId));
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    }
    return undefined;
}
async function getAllProfiles() {
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION));
    return querySnapshot.docs.map((doc)=>doc.data());
}
async function updateProfile(id, updates) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
        ...updates,
        updated_at: new Date().toISOString()
    });
}
async function deleteProfile(id) {
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"]);
    // Get all associated workspaces
    const workspacesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'workspaces'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('profileId', '==', id));
    const workspacesSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(workspacesQuery);
    const workspaceIds = workspacesSnap.docs.map((doc)=>doc.id);
    // Delete workspaces
    workspacesSnap.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    // Delete prompts, categories, keywords for each workspace
    // Note: Doing this in one batch might hit the 500 ops limit if massive.
    // For a simple migration we do it sequentially if needed, but for now let's try to batch what we can.
    // Ideally we should query ALL items by workspaceId first.
    for (const workspaceId of workspaceIds){
        // Delete prompts
        const promptsQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'prompts'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
        const promptsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(promptsQ);
        promptsSnap.forEach((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(d.ref)); // Delete individually to avoid complex batch logic for now
        // Delete categories
        const catsQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'categories'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
        const catsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(catsQ);
        catsSnap.forEach((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(d.ref));
        // Delete keywords
        const keywordsQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'keywords'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
        const keywordsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(keywordsQ);
        keywordsSnap.forEach((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(d.ref));
    }
    // Commit workspace deletes
    await batch.commit();
    // Finally delete the profile
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id));
}
async function updateProfilePreferences(id, preferences) {
    const profile = await getProfile(id);
    if (!profile) {
        throw new Error('Profile not found');
    }
    await updateProfile(id, {
        preferences: {
            ...profile.preferences,
            ...preferences
        }
    });
}
}),
"[project]/botbrains-nextjs/src/store/useProfileStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProfileStore",
    ()=>useProfileStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/profileStorage.ts [app-ssr] (ecmascript)");
;
;
const useProfileStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        currentProfile: null,
        profiles: [],
        isAuthenticated: false,
        isLoading: false,
        // Load all profiles
        loadProfiles: async ()=>{
            set({
                isLoading: true
            });
            try {
                const profiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllProfiles"])();
                set({
                    profiles,
                    isLoading: false
                });
            } catch (error) {
                console.error('Failed to load profiles:', error);
                set({
                    isLoading: false
                });
            }
        },
        // Set current profile
        setCurrentProfile: (profile)=>{
            set({
                currentProfile: profile,
                isAuthenticated: profile !== null
            });
        },
        // Switch to a different profile
        switchProfile: async (profileId)=>{
            try {
                const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfile"])(profileId);
                if (profile) {
                    get().setCurrentProfile(profile);
                } else {
                    throw new Error('Profile not found');
                }
            } catch (error) {
                console.error('Failed to switch profile:', error);
                throw error;
            }
        },
        // Create a new profile
        createNewProfile: async (googleId, email, name, avatar)=>{
            try {
                const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProfile"])(googleId, email, name, avatar);
                set((state)=>({
                        profiles: [
                            ...state.profiles,
                            profile
                        ]
                    }));
                return profile;
            } catch (error) {
                console.error('Failed to create profile:', error);
                throw error;
            }
        },
        // Update current profile
        updateCurrentProfile: async (updates)=>{
            const { currentProfile } = get();
            if (!currentProfile) {
                throw new Error('No profile is currently active');
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProfile"])(currentProfile.id, updates);
                const updatedProfile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfile"])(currentProfile.id);
                if (updatedProfile) {
                    set((state)=>({
                            currentProfile: updatedProfile,
                            profiles: state.profiles.map((p)=>p.id === currentProfile.id ? updatedProfile : p)
                        }));
                }
            } catch (error) {
                console.error('Failed to update profile:', error);
                throw error;
            }
        },
        // Update preferences
        updatePreferences: async (preferences)=>{
            const { currentProfile } = get();
            if (!currentProfile) {
                throw new Error('No profile is currently active');
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProfilePreferences"])(currentProfile.id, preferences);
                const updatedProfile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfile"])(currentProfile.id);
                if (updatedProfile) {
                    set((state)=>({
                            currentProfile: updatedProfile,
                            profiles: state.profiles.map((p)=>p.id === currentProfile.id ? updatedProfile : p)
                        }));
                }
            } catch (error) {
                console.error('Failed to update preferences:', error);
                throw error;
            }
        },
        // Delete current profile
        deleteCurrentProfile: async ()=>{
            const { currentProfile } = get();
            if (!currentProfile) {
                throw new Error('No profile is currently active');
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteProfile"])(currentProfile.id);
                set((state)=>({
                        currentProfile: null,
                        isAuthenticated: false,
                        profiles: state.profiles.filter((p)=>p.id !== currentProfile.id)
                    }));
            } catch (error) {
                console.error('Failed to delete profile:', error);
                throw error;
            }
        },
        // Logout
        logout: ()=>{
            set({
                currentProfile: null,
                isAuthenticated: false
            });
        },
        // Get existing profile or create new one
        getOrCreateProfile: async (googleId, email, name, avatar)=>{
            try {
                // Try to find existing profile
                let profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfileByGoogleId"])(googleId);
                if (!profile) {
                    // Create new profile
                    profile = await get().createNewProfile(googleId, email, name, avatar);
                } else {
                    // Update profile list if needed
                    const profiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$profileStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllProfiles"])();
                    set({
                        profiles
                    });
                }
                return profile;
            } catch (error) {
                console.error('Failed to get or create profile:', error);
                throw error;
            }
        }
    }));
}),
"[project]/botbrains-nextjs/src/lib/workspaceStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWorkspace",
    ()=>createWorkspace,
    "deleteWorkspace",
    ()=>deleteWorkspace,
    "getDefaultWorkspace",
    ()=>getDefaultWorkspace,
    "getWorkspace",
    ()=>getWorkspace,
    "getWorkspacesByProfile",
    ()=>getWorkspacesByProfile,
    "setDefaultWorkspace",
    ()=>setDefaultWorkspace,
    "updateLastBackup",
    ()=>updateLastBackup,
    "updateWorkspace",
    ()=>updateWorkspace,
    "updateWorkspaceSettings",
    ()=>updateWorkspaceSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
const COLLECTION = 'workspaces';
/**
 * Generate a unique ID
 */ function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
async function createWorkspace(profileId, name, icon = '💼', color = '#6366f1', description = '') {
    const now = new Date().toISOString();
    const id = generateId();
    const workspace = {
        id,
        profileId,
        name,
        icon,
        color,
        description,
        settings: {
            autoBackup: true,
            backupFrequency: 'daily',
            viewPreferences: {
                defaultView: 'card',
                sortBy: 'updated'
            }
        },
        isDefault: false,
        created_at: now,
        updated_at: now
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id), workspace);
    return workspace;
}
async function getWorkspace(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
    return undefined;
}
async function getWorkspacesByProfile(profileId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('profileId', '==', profileId));
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return querySnapshot.docs.map((doc)=>doc.data());
}
async function getDefaultWorkspace(profileId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('profileId', '==', profileId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('isDefault', '==', true));
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    }
    return undefined;
}
async function updateWorkspace(id, updates) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
        ...updates,
        updated_at: new Date().toISOString()
    });
}
async function updateWorkspaceSettings(id, settings) {
    const workspace = await getWorkspace(id);
    if (!workspace) throw new Error('Workspace not found');
    await updateWorkspace(id, {
        settings: {
            ...workspace.settings,
            ...settings
        }
    });
}
async function setDefaultWorkspace(id) {
    const workspace = await getWorkspace(id);
    if (!workspace) throw new Error('Workspace not found');
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"]);
    // Get all workspaces for this profile
    const workspaces = await getWorkspacesByProfile(workspace.profileId);
    // Set all to non-default
    workspaces.forEach((w)=>{
        const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, w.id);
        batch.update(ref, {
            isDefault: false
        });
    });
    // Set target to default
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    batch.update(targetRef, {
        isDefault: true
    });
    await batch.commit();
}
async function deleteWorkspace(id) {
    // Delete associated data first
    // Note: This is simplified. In a robust system we'd batch or use cloud functions.
    // Delete prompts
    const promptsQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'prompts'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', id));
    const promptsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(promptsQ);
    promptsSnap.forEach((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(d.ref));
    // Delete categories
    const catsQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'categories'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', id));
    const catsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(catsQ);
    catsSnap.forEach((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(d.ref));
    // Delete keywords
    const keywordsQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'keywords'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', id));
    const keywordsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(keywordsQ);
    keywordsSnap.forEach((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(d.ref));
    // Delete workspace
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id));
}
async function updateLastBackup(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
        lastBackupAt: new Date().toISOString()
    });
}
}),
"[project]/botbrains-nextjs/src/store/useWorkspaceStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWorkspaceStore",
    ()=>useWorkspaceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/workspaceStorage.ts [app-ssr] (ecmascript)");
;
;
const useWorkspaceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        currentWorkspace: null,
        workspaces: [],
        isLoading: false,
        // Load all workspaces for a profile
        loadWorkspaces: async (profileId)=>{
            set({
                isLoading: true
            });
            try {
                const workspaces = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkspacesByProfile"])(profileId);
                set({
                    workspaces,
                    isLoading: false
                });
            } catch (error) {
                console.error('Failed to load workspaces:', error);
                set({
                    isLoading: false
                });
            }
        },
        // Set current workspace
        setCurrentWorkspace: (workspace)=>{
            set({
                currentWorkspace: workspace
            });
        },
        // Switch to a different workspace
        switchWorkspace: async (workspaceId)=>{
            try {
                const workspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkspace"])(workspaceId);
                if (workspace) {
                    get().setCurrentWorkspace(workspace);
                } else {
                    throw new Error('Workspace not found');
                }
            } catch (error) {
                console.error('Failed to switch workspace:', error);
                throw error;
            }
        },
        // Create a new workspace
        createNewWorkspace: async (profileId, name, icon, color, description)=>{
            try {
                const workspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWorkspace"])(profileId, name, icon, color, description);
                set((state)=>({
                        workspaces: [
                            ...state.workspaces,
                            workspace
                        ]
                    }));
                return workspace;
            } catch (error) {
                console.error('Failed to create workspace:', error);
                throw error;
            }
        },
        // Update current workspace
        updateCurrentWorkspace: async (updates)=>{
            const { currentWorkspace } = get();
            if (!currentWorkspace) {
                throw new Error('No workspace is currently active');
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateWorkspace"])(currentWorkspace.id, updates);
                const updatedWorkspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkspace"])(currentWorkspace.id);
                if (updatedWorkspace) {
                    set((state)=>({
                            currentWorkspace: updatedWorkspace,
                            workspaces: state.workspaces.map((w)=>w.id === currentWorkspace.id ? updatedWorkspace : w)
                        }));
                }
            } catch (error) {
                console.error('Failed to update workspace:', error);
                throw error;
            }
        },
        // Update workspace settings
        updateSettings: async (settings)=>{
            const { currentWorkspace } = get();
            if (!currentWorkspace) {
                throw new Error('No workspace is currently active');
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateWorkspaceSettings"])(currentWorkspace.id, settings);
                const updatedWorkspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkspace"])(currentWorkspace.id);
                if (updatedWorkspace) {
                    set((state)=>({
                            currentWorkspace: updatedWorkspace,
                            workspaces: state.workspaces.map((w)=>w.id === currentWorkspace.id ? updatedWorkspace : w)
                        }));
                }
            } catch (error) {
                console.error('Failed to update settings:', error);
                throw error;
            }
        },
        // Set workspace as default
        setAsDefault: async (workspaceId)=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDefaultWorkspace"])(workspaceId);
                const workspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkspace"])(workspaceId);
                const { currentWorkspace } = get();
                if (workspace) {
                    set((state)=>({
                            workspaces: state.workspaces.map((w)=>({
                                    ...w,
                                    isDefault: w.id === workspaceId
                                })),
                            currentWorkspace: currentWorkspace?.id === workspaceId ? workspace : currentWorkspace
                        }));
                }
            } catch (error) {
                console.error('Failed to set default workspace:', error);
                throw error;
            }
        },
        // Delete a workspace
        deleteWorkspaceById: async (workspaceId)=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteWorkspace"])(workspaceId);
                const { currentWorkspace } = get();
                set((state)=>({
                        workspaces: state.workspaces.filter((w)=>w.id !== workspaceId),
                        currentWorkspace: currentWorkspace?.id === workspaceId ? null : currentWorkspace
                    }));
            } catch (error) {
                console.error('Failed to delete workspace:', error);
                throw error;
            }
        },
        // Load default workspace for a profile
        loadDefaultWorkspace: async (profileId)=>{
            console.log('🏢 loadDefaultWorkspace called for profile:', profileId);
            set({
                isLoading: true
            });
            try {
                const workspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultWorkspace"])(profileId);
                if (workspace) {
                    console.log('✅ Found existing default workspace:', workspace.id, workspace.name);
                    set({
                        currentWorkspace: workspace,
                        isLoading: false
                    });
                } else {
                    console.log('⚠️  No default workspace found - creating new one');
                    // If no default workspace exists, create one AND mark it as default
                    const newWorkspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWorkspace"])(profileId, 'My Workspace', '💼', '#6366f1');
                    console.log('💾 Created new workspace:', newWorkspace.id);
                    // CRITICAL FIX: Mark the newly created workspace as default
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDefaultWorkspace"])(newWorkspace.id);
                    console.log('✅ Set new workspace as default');
                    // Fetch the updated workspace with isDefault: true
                    const updatedWorkspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkspace"])(newWorkspace.id);
                    set({
                        currentWorkspace: updatedWorkspace || newWorkspace,
                        workspaces: [
                            updatedWorkspace || newWorkspace
                        ],
                        isLoading: false
                    });
                    console.log('✅ Default workspace loaded:', updatedWorkspace?.id);
                }
            } catch (error) {
                console.error('❌ Failed to load default workspace:', error);
                set({
                    isLoading: false
                });
            }
        },
        // Mark backup as complete
        markBackupComplete: async (workspaceId)=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLastBackup"])(workspaceId);
                const updatedWorkspace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$workspaceStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkspace"])(workspaceId);
                const { currentWorkspace } = get();
                if (updatedWorkspace) {
                    set((state)=>({
                            workspaces: state.workspaces.map((w)=>w.id === workspaceId ? updatedWorkspace : w),
                            currentWorkspace: currentWorkspace?.id === workspaceId ? updatedWorkspace : currentWorkspace
                        }));
                }
            } catch (error) {
                console.error('Failed to mark backup complete:', error);
                throw error;
            }
        }
    }));
}),
"[project]/botbrains-nextjs/src/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPrompt",
    ()=>createPrompt,
    "deletePrompt",
    ()=>deletePrompt,
    "duplicatePrompt",
    ()=>duplicatePrompt,
    "exportAllPrompts",
    ()=>exportAllPrompts,
    "getAllPrompts",
    ()=>getAllPrompts,
    "getPrompt",
    ()=>getPrompt,
    "importPrompts",
    ()=>importPrompts,
    "reorderPrompts",
    ()=>reorderPrompts,
    "searchPrompts",
    ()=>searchPrompts,
    "toggleFavorite",
    ()=>toggleFavorite,
    "trackPromptUsage",
    ()=>trackPromptUsage,
    "updatePrompt",
    ()=>updatePrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
const COLLECTION = 'prompts';
/**
 * Generate a unique ID for prompts
 */ function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
async function createPrompt(data, workspaceId) {
    console.log('💾 createPrompt called with workspaceId:', workspaceId);
    console.log('📝 Prompt data:', {
        title: data.title,
        type: data.type
    });
    try {
        const now = new Date().toISOString();
        // Find max order to append
        let maxOrder = -1;
        let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('order', 'desc'));
        if (workspaceId) {
            // Composite index might be needed: workspaceId + order
            // Fallback: simplified logic for now: query all in workspace, find max.
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
            if (!snap.empty) {
                // Determine max in memory to avoid index issues during migration
                const orders = snap.docs.map((d)=>d.data().order || 0);
                maxOrder = Math.max(...orders);
            }
        } else {
            // Global max (if no workspace? Prompts should have workspaceId)
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('order', 'desc'))); // limit(1) requires index
            if (!snap.empty) {
                maxOrder = snap.docs[0].data().order;
            }
        }
        const id = generateId();
        const prompt = {
            ...data,
            workspaceId,
            id,
            created_at: now,
            updated_at: now,
            order: maxOrder >= 0 ? maxOrder + 1 : 0
        };
        console.log('💾 Saving prompt to Firestore:', {
            id,
            order: prompt.order,
            workspaceId
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id), prompt);
        console.log('✅ Prompt saved successfully to Firestore');
        return prompt;
    } catch (error) {
        console.error('❌ Failed to create prompt:', error);
        throw error;
    }
}
async function getPrompt(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }
    return undefined;
}
async function getAllPrompts(workspaceId) {
    console.log('🔍 getAllPrompts called with workspaceId:', workspaceId);
    let q;
    if (workspaceId) {
        // Query by workspace only (no order) to avoid composite index requirement
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('workspaceId', '==', workspaceId));
    } else {
        // Fetch ALL prompts without any orderBy to avoid index issues
        // We'll sort in memory instead - this handles undefined order values gracefully
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION));
    }
    try {
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        console.log(`📊 Retrieved ${querySnapshot.size} prompts from Firestore`);
        const prompts = querySnapshot.docs.map((doc)=>doc.data());
        console.log('📋 Prompts after mapping:', prompts.length);
        // Sort in memory by order (handles undefined values gracefully)
        return prompts.sort((a, b)=>(a.order || 0) - (b.order || 0));
    } catch (e) {
        console.error('❌ getAllPrompts failed:', e);
        throw e;
    }
}
async function updatePrompt(id, updates) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
        ...updates,
        updated_at: new Date().toISOString()
    });
}
async function deletePrompt(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id));
}
async function trackPromptUsage(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const promptDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (promptDoc.exists()) {
        const currentUsageCount = promptDoc.data().usageCount || 0;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
            usageCount: currentUsageCount + 1,
            lastUsedAt: new Date().toISOString(),
            updated_at: new Date().toISOString()
        });
    }
}
async function toggleFavorite(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
    const promptDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (promptDoc.exists()) {
        const currentFavorite = promptDoc.data().isFavorite || false;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
            isFavorite: !currentFavorite,
            updated_at: new Date().toISOString()
        });
    }
}
async function searchPrompts(queryText, filters = {}, workspaceId) {
    // Firestore search is limited. We will fetch relevant prompts and filter in memory.
    // This maintains the previous logic's capability without requiring Algolia/Typesense yet.
    // 1. Base fetch
    let collectionData = await getAllPrompts(workspaceId);
    // 2. Apply filters (Memory)
    if (filters.type) {
        collectionData = collectionData.filter((p)=>p.type === filters.type);
    }
    if (filters.category) {
        collectionData = collectionData.filter((p)=>p.category === filters.category);
    }
    if (filters.tags && filters.tags.length > 0) {
        collectionData = collectionData.filter((p)=>p.tags.some((tag)=>filters.tags.includes(tag)));
    }
    if (filters.keywords && filters.keywords.length > 0) {
        collectionData = collectionData.filter((p)=>p.keywords?.some((kw)=>filters.keywords.includes(kw)));
    }
    if (filters.minRating !== undefined && filters.minRating > 0) {
        collectionData = collectionData.filter((p)=>p.performance.rating >= filters.minRating);
    }
    if (filters.favorites) {
        collectionData = collectionData.filter((p)=>p.isFavorite === true);
    }
    // 3. Apply text search
    if (queryText.trim()) {
        const lowerQuery = queryText.toLowerCase();
        collectionData = collectionData.filter((p)=>p.title.toLowerCase().includes(lowerQuery) || p.prompt_template.toLowerCase().includes(lowerQuery) || p.tags.some((tag)=>tag.toLowerCase().includes(lowerQuery)) || p.keywords?.some((kw)=>kw.toLowerCase().includes(lowerQuery)) || p.category.toLowerCase().includes(lowerQuery));
    }
    return collectionData;
}
async function reorderPrompts(promptIds) {
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"]);
    promptIds.forEach((id, index)=>{
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, id);
        batch.update(docRef, {
            order: index
        });
    });
    await batch.commit();
}
async function exportAllPrompts() {
    const prompts = await getAllPrompts();
    return JSON.stringify(prompts, null, 2);
}
async function importPrompts(jsonString) {
    try {
        const prompts = JSON.parse(jsonString);
        if (!Array.isArray(prompts)) {
            throw new Error('Invalid JSON format: expected an array');
        }
        // Firestore batch limit is 500. For large imports we need to chunk results.
        const chunks = [];
        for(let i = 0; i < prompts.length; i += 400){
            chunks.push(prompts.slice(i, i + 400));
        }
        // We aren't clearing existing prompts because "clear()" is expensive in Firestore (read + delete).
        // User logic might expect clear.
        // For now, let's just ADD new ones.
        for (const chunk of chunks){
            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"]);
            for (const prompt of chunk){
                // Ensure unique ID if they clash or let Firestore overwrite?
                // Using setDoc will overwrite if ID exists.
                const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], COLLECTION, prompt.id || generateId());
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
async function duplicatePrompt(id) {
    const original = await getPrompt(id);
    if (!original) {
        throw new Error('Prompt not found');
    }
    const { id: _, created_at: __, updated_at: ___, order: ____, ...data } = original;
    return createPrompt({
        ...data,
        title: `${original.title} (Copy)`
    }, original.workspaceId);
}
}),
"[project]/botbrains-nextjs/src/lib/composition.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositionService",
    ()=>CompositionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/storage.ts [app-ssr] (ecmascript)");
;
class CompositionService {
    /**
     * Resolve the final template content by composing a prompt with its parents
     */ static async resolveTemplate(promptId) {
        // We need to fetch the prompt first
        const prompt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrompt"])(promptId);
        if (!prompt) return '';
        return this.resolvePromptContent(prompt);
    }
    /**
     * Recursive helper to resolve content given a prompt object
     */ static async resolvePromptContent(prompt) {
        // Base case: no parent
        if (!prompt.parentId) {
            return prompt.prompt_template || '';
        }
        // Fetch parent
        const parent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrompt"])(prompt.parentId);
        // If parent not found (deleted?), treat as standalone
        if (!parent) {
            return prompt.prompt_template || '';
        }
        // Recursively resolve parent's content
        const parentContent = await this.resolvePromptContent(parent);
        const childContent = prompt.prompt_template || '';
        // Compose based on mode
        const mode = prompt.compositionMode || 'inherit';
        switch(mode){
            case 'inherit':
                // Parent + newline + Child
                return `${parentContent}\n\n${childContent}`;
            case 'extend':
                // Replace {{@prompt:parent-id}} placeholder
                if (childContent.includes(`{{@prompt:${parent.id}}}`)) {
                    return childContent.replace(new RegExp(`\\{\\{@prompt:${parent.id}\\}\\}`, 'g'), parentContent);
                }
                // Fallback: return child content
                return childContent;
            case 'standalone':
            default:
                return childContent;
        }
    }
    /**
     * Detect if setting newParentId as parent of promptId would create a circular reference
     */ static async detectCircularReference(promptId, newParentId) {
        // Walk up from newParentId. If we hit promptId, it's a cycle.
        let currentId = newParentId;
        const visited = new Set();
        // Set a max depth safety to prevent infinite loops in the checker itself
        const MAX_STEPS = 100;
        let steps = 0;
        while(currentId && steps < MAX_STEPS){
            if (currentId === promptId) {
                return true; // Cycle detected
            }
            if (visited.has(currentId)) {
                return true; // Cycle in existing chain detected
            }
            visited.add(currentId);
            const parent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrompt"])(currentId);
            currentId = parent?.parentId;
            steps++;
        }
        return false;
    }
    /**
     * Calculate depth of a prompt (0 = root)
     * Used to enforce strict depth limit
     */ static async getPromptDepth(promptId) {
        let depth = 0;
        let currentId = promptId;
        const visited = new Set(); // Safety check
        while(currentId){
            const prompt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrompt"])(currentId);
            if (!prompt || !prompt.parentId) {
                break;
            }
            // Safety: if we somehow have a cycle that wasn't caught, break
            if (visited.has(currentId)) break;
            visited.add(currentId);
            currentId = prompt.parentId;
            depth++;
            if (depth > 20) break; // Hard safety limit
        }
        return depth;
    }
    /**
     * Get parent candidates for a prompt (filtering out self and descendants)
     */ static async getEligibleParents(promptId, workspaceId) {
        console.log(`🔍 [CompositionService] getEligibleParents called with promptId: ${promptId}, workspaceId: ${workspaceId}`);
        const allPrompts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPrompts"])(workspaceId);
        console.log(`🔍 [CompositionService] Found ${allPrompts.length} prompts in workspace ${workspaceId}`);
        if (!promptId) {
            console.log('🔍 [CompositionService] Returning all prompts (new prompt mode)');
            return allPrompts; // New prompt can pick anyone
        }
        // Exclude self
        const candidates = allPrompts.filter((p)=>p.id !== promptId);
        // Exclude descendants (BFS or DFS)
        const childrenMap = new Map();
        allPrompts.forEach((p)=>{
            if (p.parentId) {
                const list = childrenMap.get(p.parentId) || [];
                list.push(p.id);
                childrenMap.set(p.parentId, list);
            }
        });
        const descendants = new Set();
        const queue = [
            promptId
        ];
        while(queue.length > 0){
            const current = queue.shift();
            descendants.add(current);
            const children = childrenMap.get(current) || [];
            children.forEach((c)=>{
                if (!descendants.has(c)) {
                    queue.push(c);
                }
            });
        }
        return candidates.filter((p)=>!descendants.has(p.id));
    }
}
}),
"[project]/botbrains-nextjs/src/store/usePromptStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePromptStore",
    ()=>usePromptStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$composition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/composition.ts [app-ssr] (ecmascript)");
;
;
;
const usePromptStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        prompts: [],
        selectedPrompt: null,
        currentWorkspaceId: null,
        searchQuery: '',
        filters: {},
        viewMode: 'card',
        isLoading: false,
        // Set current workspace
        setWorkspace: (workspaceId)=>{
            set({
                currentWorkspaceId: workspaceId
            });
            // Reload prompts for new workspace
            if (workspaceId) {
                get().loadPrompts(workspaceId);
            } else {
                set({
                    prompts: []
                });
            }
        },
        // Load all prompts (optionally for a specific workspace)
        loadPrompts: async (workspaceId)=>{
            const wsId = workspaceId || get().currentWorkspaceId;
            set({
                isLoading: true
            });
            try {
                const prompts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPrompts"])(wsId || undefined);
                set({
                    prompts,
                    isLoading: false
                });
            } catch (error) {
                console.error('Failed to load prompts:', error);
                set({
                    isLoading: false
                });
            }
        },
        // Refresh prompts (re-fetch from DB)
        refreshPrompts: async ()=>{
            await get().loadPrompts();
        },
        // Create a new prompt
        createPrompt: async (data)=>{
            const { currentWorkspaceId } = get();
            console.log('🏪 Store: Creating prompt', data);
            const prompt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPrompt"])(data, currentWorkspaceId || undefined);
            console.log('🏪 Store: Prompt created, adding to state', prompt);
            set((state)=>({
                    prompts: [
                        ...state.prompts,
                        prompt
                    ]
                }));
            console.log('🏪 Store: State updated');
            return prompt;
        },
        // Update a prompt
        updatePrompt: async (id, updates)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatePrompt"])(id, updates);
            set((state)=>({
                    prompts: state.prompts.map((p)=>p.id === id ? {
                            ...p,
                            ...updates,
                            updated_at: new Date().toISOString()
                        } : p),
                    selectedPrompt: state.selectedPrompt?.id === id ? {
                        ...state.selectedPrompt,
                        ...updates,
                        updated_at: new Date().toISOString()
                    } : state.selectedPrompt
                }));
        },
        // Delete a prompt
        deletePrompt: async (id)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deletePrompt"])(id);
            set((state)=>({
                    prompts: state.prompts.filter((p)=>p.id !== id),
                    selectedPrompt: state.selectedPrompt?.id === id ? null : state.selectedPrompt
                }));
        },
        // Duplicate a prompt
        duplicatePrompt: async (id)=>{
            const duplicate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["duplicatePrompt"])(id);
            set((state)=>({
                    prompts: [
                        ...state.prompts,
                        duplicate
                    ]
                }));
        },
        // Select a prompt
        selectPrompt: (prompt)=>{
            set({
                selectedPrompt: prompt
            });
        },
        // Set search query
        setSearchQuery: (query)=>{
            set({
                searchQuery: query
            });
        },
        // Set filters
        setFilters: (filters)=>{
            set({
                filters
            });
        },
        // Set view mode
        setViewMode: (mode)=>{
            set({
                viewMode: mode
            });
        },
        // Reorder prompts
        reorderPrompts: async (promptIds)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reorderPrompts"])(promptIds);
            await get().loadPrompts();
        },
        // Search and filter prompts
        searchAndFilter: async ()=>{
            set({
                isLoading: true
            });
            try {
                const { searchQuery, filters, currentWorkspaceId } = get();
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchPrompts"])(searchQuery, filters, currentWorkspaceId || undefined);
                set({
                    prompts: results,
                    isLoading: false
                });
            } catch (error) {
                console.error('Search failed:', error);
                set({
                    isLoading: false
                });
            }
        },
        // Toggle favorite status
        toggleFavorite: async (id)=>{
            // Optimistic update
            set((state)=>({
                    prompts: state.prompts.map((p)=>p.id === id ? {
                            ...p,
                            isFavorite: !p.isFavorite
                        } : p)
                }));
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFavorite"])(id);
            } catch (error) {
                console.error('Failed to toggle favorite:', error);
                // Revert on error
                await get().loadPrompts();
            }
        },
        trackUsage: async (id)=>{
            // Optimistic update
            const now = new Date().toISOString();
            set((state)=>({
                    prompts: state.prompts.map((p)=>p.id === id ? {
                            ...p,
                            usageCount: (p.usageCount || 0) + 1,
                            lastUsedAt: now
                        } : p)
                }));
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackPromptUsage"])(id);
            } catch (error) {
                console.error('Failed to track usage:', error);
                // Revert on error
                await get().loadPrompts();
            }
        },
        // Resolve template with parents
        resolveTemplate: async (id)=>{
            return await __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$composition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositionService"].resolveTemplate(id);
        },
        // Set parent with validation
        setParent: async (childId, parentId)=>{
            if (parentId) {
                // Check for circular reference
                const isCircular = await __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$composition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositionService"].detectCircularReference(childId, parentId);
                if (isCircular) {
                    throw new Error('Circular reference detected: A prompt cannot be its own ancestor.');
                }
                // Check depth limit
                const depth = await __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$composition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositionService"].getPromptDepth(parentId);
                if (depth >= 10) {
                    throw new Error('Depth limit exceeded: Maximum 10 levels of inheritance allowed.');
                }
            }
            await get().updatePrompt(childId, {
                parentId
            });
        }
    }));
}),
"[project]/botbrains-nextjs/src/services/googleAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "googleAuth",
    ()=>googleAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
;
;
const SCOPES = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/drive.file'
];
class GoogleAuthService {
    async init() {
        // Firebase handles initialization automatically
        return Promise.resolve();
    }
    async signIn() {
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
            SCOPES.forEach((scope)=>provider.addScope(scope));
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], provider);
            const user = result.user;
            // Get the Google Access Token (for Drive API)
            const credential = __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleAuthProvider"].credentialFromResult(result);
            const accessToken = credential?.accessToken;
            if (accessToken) {
                this.storeToken(accessToken);
            }
            return {
                id: user.uid,
                email: user.email,
                name: user.displayName,
                picture: user.photoURL,
                accessToken: accessToken // Return this for immediate use if needed
            };
        } catch (error) {
            console.error('❌ Firebase Sign-in Error:', error);
            throw {
                type: 'tokenFailed',
                idpId: 'google',
                error: error.message || 'server_error'
            };
        }
    }
    async signOut() {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"]);
            localStorage.removeItem('google_access_token');
            localStorage.removeItem('google_token_expiry');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }
    // Helper to store access token manually if we need to pass it to GAPI later
    // Note: Firebase manages its own ID tokens, but for Drive API we need the OAuth access token
    storeToken(token) {
        // Expire in 1 hour (standard Google token life)
        const expiresIn = 3600;
        const expiryDate = new Date().getTime() + expiresIn * 1000;
        localStorage.setItem('google_access_token', token);
        localStorage.setItem('google_token_expiry', expiryDate.toString());
    }
    getAccessToken() {
        const token = localStorage.getItem('google_access_token');
        const expiry = localStorage.getItem('google_token_expiry');
        if (!token || !expiry) return null;
        if (new Date().getTime() > parseInt(expiry)) {
            // Token expired. With Firebase, we might need to force a re-auth or use silent upgrade
            // For now, return null to force re-login flow if strictly needed for Drive
            return null;
        }
        return token;
    }
    // Helper to wait for Firebase to initialize valid auth state
    waitForAuth() {
        return new Promise((resolve)=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
                unsubscribe();
                resolve(user);
            });
        });
    }
    async isAuthenticated() {
        const user = await this.waitForAuth();
        return !!user;
    }
    async getCurrentUser() {
        const user = await this.waitForAuth();
        if (!user) return null;
        return {
            id: user.uid,
            email: user.email,
            name: user.displayName,
            picture: user.photoURL
        };
    }
}
const googleAuth = new GoogleAuthService();
}),
"[project]/botbrains-nextjs/src/lib/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "initDatabase",
    ()=>initDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/dexie/import-wrapper.mjs [app-ssr] (ecmascript)");
'use client';
;
// Define database class
class BotBrainsDB extends __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    prompts;
    categories;
    keywords;
    profiles;
    workspaces;
    globalVariableDefaults;
    constructor(){
        super('BotBrainsDB');
        // Schema version 1 - initial
        this.version(1).stores({
            prompts: 'id, type, category, *tags, created_at, updated_at, order'
        });
        // Schema version 2 - add keywords support and new tables
        this.version(2).stores({
            prompts: 'id, type, category, *tags, *keywords, created_at, updated_at, order',
            categories: 'id, name',
            keywords: 'id, name'
        });
        // Schema version 3 - add Profile and Workspace support
        this.version(3).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault'
        });
        // Schema version 4 - add Analytics and Favorites support
        this.version(4).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order, isFavorite, usageCount',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault'
        });
        // Schema version 5 - add Global Variable Defaults
        this.version(5).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order, isFavorite, usageCount',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault',
            globalVariableDefaults: 'id, variableName'
        });
        // Schema version 6 - add content composition fields
        this.version(6).stores({
            prompts: 'id, workspaceId, type, category, *tags, *keywords, created_at, updated_at, order, isFavorite, usageCount, parentId, compositionMode',
            categories: 'id, workspaceId, name',
            keywords: 'id, workspaceId, name',
            profiles: 'id, googleId, email',
            workspaces: 'id, profileId, name, isDefault',
            globalVariableDefaults: 'id, variableName'
        });
    }
}
const db = new BotBrainsDB();
async function initDatabase() {
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('⏭️  Skipping database initialization on server');
        return;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/botbrains-nextjs/src/hooks/useToast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToast",
    ()=>useToast,
    "useToastStore",
    ()=>useToastStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useToastStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        toasts: [],
        addToast: (message, type)=>{
            const id = Date.now().toString();
            set((state)=>({
                    toasts: [
                        ...state.toasts,
                        {
                            id,
                            message,
                            type
                        }
                    ]
                }));
            // Auto-remove after 3 seconds
            setTimeout(()=>{
                set((state)=>({
                        toasts: state.toasts.filter((t)=>t.id !== id)
                    }));
            }, 3000);
        },
        removeToast: (id)=>{
            set((state)=>({
                    toasts: state.toasts.filter((t)=>t.id !== id)
                }));
        }
    }));
function useToast() {
    const addToast = useToastStore((state)=>state.addToast);
    return {
        success: (message)=>addToast(message, 'success'),
        error: (message)=>addToast(message, 'error'),
        info: (message)=>addToast(message, 'info')
    };
}
}),
"[project]/botbrains-nextjs/src/components/ui/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/hooks/useToast.ts [app-ssr] (ecmascript)");
;
;
;
;
const iconMap = {
    success: __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
    error: __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
    info: __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"]
};
const colorMap = {
    success: 'border-success/30 bg-success/5',
    error: 'border-danger/30 bg-danger/5',
    info: 'border-accent-primary/30 bg-accent-primary/5'
};
const textColorMap = {
    success: 'text-success',
    error: 'text-danger',
    info: 'text-accent-primary'
};
function ToastContainer() {
    const toasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToastStore"])((state)=>state.toasts);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToastStore"])((state)=>state.removeToast);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-[100] space-y-3 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: toasts.map((toast)=>{
                const Icon = iconMap[toast.type];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 100,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        x: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        x: 50,
                        scale: 0.9
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "pointer-events-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
                                relative overflow-hidden
                                bg-card border rounded-xl
                                shadow-xl
                                min-w-[320px] max-w-[400px]
                                ${colorMap[toast.type]}
                            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: `w-5 h-5 flex-shrink-0 ${textColorMap[toast.type]}`
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                                        lineNumber: 49,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm flex-1",
                                        children: toast.message
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                                        lineNumber: 50,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeToast(toast.id),
                                        className: "text-secondary hover:text-primary transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                                            lineNumber: 55,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                                        lineNumber: 51,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                                lineNumber: 48,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `absolute bottom-0 left-0 h-1 ${textColorMap[toast.type]}`,
                                style: {
                                    backgroundColor: 'currentColor',
                                    opacity: 0.5
                                },
                                initial: {
                                    width: '100%'
                                },
                                animate: {
                                    width: '0%'
                                },
                                transition: {
                                    duration: 3,
                                    ease: 'linear'
                                }
                            }, void 0, false, {
                                fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                                lineNumber: 60,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                        lineNumber: 41,
                        columnNumber: 29
                    }, this)
                }, toast.id, false, {
                    fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
                    lineNumber: 33,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/botbrains-nextjs/src/components/ui/Toast.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
"[project]/botbrains-nextjs/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/useProfileStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useWorkspaceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/useWorkspaceStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$usePromptStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/usePromptStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$services$2f$googleAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/services/googleAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function Providers({ children }) {
    const [isCheckingAuth, setIsCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [initError, setInitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { currentProfile, setCurrentProfile, loadProfiles, getOrCreateProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProfileStore"])();
    const { loadWorkspaces, loadDefaultWorkspace, currentWorkspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useWorkspaceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWorkspaceStore"])();
    const { setWorkspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$usePromptStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePromptStore"])();
    // Initialize database on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initApp = async ()=>{
            try {
                // Initialize database first
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initDatabase"])();
                // Load all profiles
                await loadProfiles();
                // Check if user is authenticated with Google
                const isAuth = await __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$services$2f$googleAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["googleAuth"].isAuthenticated();
                if (isAuth) {
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$services$2f$googleAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["googleAuth"].getCurrentUser();
                    if (user) {
                        // Get or create profile
                        const profile = await getOrCreateProfile(user.id, user.email, user.name, user.picture);
                        setCurrentProfile(profile);
                        // Load workspaces for this profile
                        await loadWorkspaces(profile.id);
                        // Load or create default workspace
                        await loadDefaultWorkspace(profile.id);
                    }
                }
            } catch (error) {
                console.error('App initialization failed:', error);
                setInitError(error instanceof Error ? error.message : 'Failed to initialize app');
            } finally{
                setIsCheckingAuth(false);
            }
        };
        initApp();
    }, [
        loadProfiles,
        getOrCreateProfile,
        setCurrentProfile,
        loadWorkspaces,
        loadDefaultWorkspace
    ]);
    // Update prompt workspace when workspace changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentWorkspace) {
            setWorkspace(currentWorkspace.id);
        }
    }, [
        currentWorkspace,
        setWorkspace
    ]);
    // Show loading while checking auth
    if (isCheckingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl",
                            children: "🧠"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                            lineNumber: 79,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-secondary",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/botbrains-nextjs/app/providers.tsx",
            lineNumber: 76,
            columnNumber: 13
        }, this);
    }
    // Show error if initialization failed
    if (initError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 shadow-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl",
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                            lineNumber: 93,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Initialization Error"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                        lineNumber: 95,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-secondary mb-6",
                        children: "Failed to load the application"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-dark-900/50 rounded-lg p-3 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-mono text-red-400",
                            children: initError
                        }, void 0, false, {
                            fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                            lineNumber: 98,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                        lineNumber: 97,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        className: "w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all",
                        children: "Reload Page"
                    }, void 0, false, {
                        fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                lineNumber: 91,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/botbrains-nextjs/app/providers.tsx",
            lineNumber: 90,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/botbrains-nextjs/app/providers.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/botbrains-nextjs/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
;
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = 'primary', size = 'md', isLoading, className = '', children, disabled, ...props }, ref)=>{
    const baseStyles = `
            inline-flex items-center justify-center gap-2 
            font-medium rounded-md text-sm
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
            disabled:opacity-50 disabled:cursor-not-allowed
            relative overflow-hidden
        `;
    const variants = {
        primary: `
                bg-primary
                hover:bg-primary/90
                text-primary-foreground
                shadow-md hover:shadow-lg
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
            `,
        secondary: `
                bg-secondary
                hover:bg-secondary/80
                text-secondary-foreground
                border border-border
                shadow-sm hover:shadow-md
                hover:border-border/80
            `,
        ghost: `
                hover:bg-muted
                text-muted-foreground
                hover:text-foreground
                hover:shadow-sm
            `,
        danger: `
                bg-destructive
                hover:bg-destructive/90
                text-destructive-foreground
                shadow-md hover:shadow-lg
            `
    };
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-base'
    };
    const MotionButton = __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionButton, {
        ref: ref,
        whileHover: !disabled && !isLoading ? {
            y: -2,
            scale: 1.02
        } : {},
        whileTap: !disabled && !isLoading ? {
            scale: 0.98,
            y: 0
        } : {},
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        },
        className: `${baseStyles} ${variants[variant]} ${sizeStyles[size]} ${className}`,
        disabled: disabled || isLoading,
        ...props,
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-4 h-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ui/Button.tsx",
                lineNumber: 74,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/botbrains-nextjs/src/components/ui/Button.tsx",
        lineNumber: 61,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
}),
"[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    };
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            errorInfo: null
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('❌ ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }
    handleReload = ()=>{
        window.location.reload();
    };
    handleReset = ()=>{
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    };
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl w-full bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-8 h-8 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                        lineNumber: 55,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-white mb-1",
                                            children: "Something went wrong"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 58,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary",
                                            children: "The application encountered an unexpected error"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 59,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-dark-900/50 rounded-xl p-4 mb-6 border border-dark-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-mono text-red-400 mb-2",
                                    children: this.state.error?.toString()
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 64,
                                    columnNumber: 29
                                }, this),
                                this.state.errorInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "text-sm font-semibold text-secondary cursor-pointer hover:text-primary transition-colors",
                                            children: "Technical Details"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 69,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "mt-2 text-xs text-secondary overflow-auto max-h-64 p-2 bg-dark-800/50 rounded",
                                            children: this.state.errorInfo.componentStack
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 68,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                            lineNumber: 63,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: this.handleReload,
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, this),
                                        "Reload Page"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 80,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: this.handleReset,
                                    variant: "ghost",
                                    className: "flex-1",
                                    children: "Try Again"
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                            lineNumber: 79,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 p-4 bg-dark-900/30 border border-dark-700/50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-secondary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-white",
                                        children: "Tips:"
                                    }, void 0, false, {
                                        fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                        lineNumber: 98,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 space-y-1 text-sm text-secondary ml-4 list-disc",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Try refreshing the page"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 101,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Check your internet connection"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Clear browser cache and reload"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Check console for more details (F12)"
                                        }, void 0, false, {
                                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                            lineNumber: 104,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                            lineNumber: 96,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                    lineNumber: 52,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/botbrains-nextjs/src/components/ErrorBoundary.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, this);
        }
        return this.props.children;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d782b614._.js.map