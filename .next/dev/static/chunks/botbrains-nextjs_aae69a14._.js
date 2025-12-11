(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/botbrains-nextjs/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/src/store/useProfileStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/botbrains-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HomePage() {
    _s();
    const currentProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"])({
        "HomePage.useProfileStore[currentProfile]": (state)=>state.currentProfile
    }["HomePage.useProfileStore[currentProfile]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // If not authenticated, redirect to setup
            if (!currentProfile) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])('/setup');
            }
        }
    }["HomePage.useEffect"], [
        currentProfile
    ]);
    // If authenticated, redirect to library (will be handled by authenticated layout)
    if (currentProfile) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])('/library');
    }
    return null;
}
_s(HomePage, "NKhFTwJ64KqrXIp67j0fy9X0+BM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$botbrains$2d$nextjs$2f$src$2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/botbrains-nextjs/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/botbrains-nextjs/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=botbrains-nextjs_aae69a14._.js.map