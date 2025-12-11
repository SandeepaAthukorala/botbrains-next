module.exports=[92873,82386,a=>{"use strict";var b=a.i(38121);function c({label:a,error:c,options:d,className:e="",...f}){return(0,b.jsxs)("div",{className:"w-full",children:[a&&(0,b.jsx)("label",{className:"block text-sm font-medium text-foreground mb-1.5",children:a}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("select",{className:`
                        w-full px-3 py-2
                        bg-transparent
                        border border-input
                        rounded-md
                        text-sm
                        text-foreground
                        focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary
                        disabled:cursor-not-allowed disabled:opacity-50
                        transition-all
                        appearance-none
                        cursor-pointer
                        ${c?"border-destructive focus:ring-destructive":""}
                        ${e}
                    `,...f,children:d.map(a=>(0,b.jsx)("option",{value:a.value,className:"bg-popover text-popover-foreground",children:a.label},a.value))}),(0,b.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-muted-foreground",children:(0,b.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),c&&(0,b.jsx)("p",{className:"mt-1.5 text-xs text-destructive",children:c})]})}function d(a){return[...new Set([...a.matchAll(/\{\{([^}]+)\}\}/g)].map(a=>a[1].trim()))]}function e(a,b){let c=a;for(let[a,d]of Object.entries(b)){let b=RegExp(`\\{\\{\\s*${a}\\s*\\}\\}`,"g");c=c.replace(b,d)}return c}a.s(["Select",()=>c],92873),a.s(["extractVariables",()=>d,"resolveTemplate",()=>e],82386)},98177,a=>{"use strict";var b=a.i(38121);function c({label:a,error:c,mono:d=!1,className:e="",...f}){return(0,b.jsxs)("div",{className:"w-full",children:[a&&(0,b.jsx)("label",{className:"block text-sm font-medium text-foreground mb-2 transition-colors",children:a}),(0,b.jsx)("textarea",{className:`
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
                    ${d?"font-mono":""}
                    ${c?"border-destructive focus:ring-destructive/50 focus:border-destructive":""}
                    ${e}
                `,...f}),c&&(0,b.jsx)("p",{className:"mt-2 text-xs text-destructive animate-slide-up",children:c})]})}a.s(["Textarea",()=>c])},54202,a=>{"use strict";var b=a.i(38121);function c({label:a,error:c,className:d="",...e}){return(0,b.jsxs)("div",{className:"w-full",children:[a&&(0,b.jsx)("label",{className:"block text-sm font-medium text-foreground mb-2 transition-colors",children:a}),(0,b.jsx)("input",{className:`
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
                    ${c?"border-destructive focus:ring-destructive/50 focus:border-destructive":""}
                    ${d}
                `,...e}),c&&(0,b.jsx)("p",{className:"mt-2 text-xs text-destructive animate-slide-up",children:c})]})}a.s(["Input",()=>c])},7600,a=>{"use strict";let b=(0,a.i(24076).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);a.s(["Search",()=>b],7600)},49721,a=>{"use strict";let b=(0,a.i(24076).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);a.s(["Copy",()=>b],49721)},65495,a=>{"use strict";let b=(0,a.i(24076).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);a.s(["Eye",()=>b],65495)},32450,a=>{"use strict";let b=(0,a.i(24076).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);a.s(["Trash2",()=>b],32450)},49253,a=>{"use strict";var b=a.i(38121);function c({className:a=""}){return(0,b.jsx)("div",{className:`
                animate-pulse rounded-md bg-muted/60
                relative overflow-hidden
                before:absolute before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent before:via-white/10 before:to-transparent
                ${a}
            `})}a.s(["Skeleton",()=>c])},12322,a=>{"use strict";var b=a.i(38121),c=a.i(7600),d=a.i(9340),e=a.i(96821);function f({value:a,onChange:f,placeholder:g="Search prompts..."}){let[h,i]=(0,e.useState)(a);return(0,e.useEffect)(()=>{i(a)},[a]),(0,e.useEffect)(()=>{let a=setTimeout(()=>{f(h)},300);return()=>clearTimeout(a)},[h,f]),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(c.Search,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"}),(0,b.jsx)("input",{type:"text",value:h,onChange:a=>i(a.target.value),placeholder:g,className:"   w-full pl-9 pr-9 py-2   rounded-md text-sm   bg-background border border-input   focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary   transition-all   placeholder:text-muted-foreground   text-foreground   "}),h&&(0,b.jsx)("button",{onClick:()=>i(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",children:(0,b.jsx)(d.X,{className:"w-3.5 h-3.5"})})]})}a.s(["SearchBar",()=>f])},47938,22213,a=>{"use strict";let b=(0,a.i(24076).default)("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);a.s(["Edit2",()=>b],47938);var c=a.i(38121),d=a.i(9340),e=a.i(96821),f=a.i(68650),g=a.i(87296);function h({isOpen:a,onClose:b,title:h,children:i,size:j="md"}){return(0,e.useEffect)(()=>{let c=a=>{"Escape"===a.key&&b()};return a&&(document.addEventListener("keydown",c),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",c),document.body.style.overflow="unset"}},[a,b]),(0,c.jsx)(g.AnimatePresence,{children:a&&(0,c.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[(0,c.jsx)(f.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"absolute inset-0 bg-black/70 backdrop-blur-md",onClick:b}),(0,c.jsxs)(f.motion.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:30},className:`
                            relative w-full ${{sm:"max-w-md",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-6xl"}[j]}
                            bg-card/95 border border-border/80 rounded-lg
                            shadow-xl shadow-black/20
                            backdrop-blur-xl
                        `,children:[h&&(0,c.jsxs)("div",{className:"flex items-center justify-between p-6 border-b border-border/60",children:[(0,c.jsx)("h2",{className:"text-xl font-semibold text-foreground",children:h}),(0,c.jsx)("button",{onClick:b,className:"text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/50 p-1.5 rounded-md",children:(0,c.jsx)(d.X,{className:"w-5 h-5"})})]}),(0,c.jsx)("div",{className:"p-6 max-h-[80vh] overflow-y-auto scrollbar-thin",children:i})]})]})})}a.s(["Modal",()=>h],22213)},42384,a=>{"use strict";var b=a.i(75345),c=a.i(76983);a.i(958);var d=a.i(55475);let e="globalVariableDefaults";async function f(){return(await (0,d.getDocs)((0,d.collection)(c.db,e))).docs.map(a=>a.data())}async function g(a){let b=(0,d.query)((0,d.collection)(c.db,e),(0,d.where)("variableName","==",a)),f=await (0,d.getDocs)(b);if(!f.empty)return f.docs[0].data()}async function h(a,b){let f=await g(a),h=new Date().toISOString();if(f)return await (0,d.updateDoc)((0,d.doc)(c.db,e,f.id),{defaultValue:b,updated_at:h}),{...f,defaultValue:b,updated_at:h};{let f=`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,g={id:f,variableName:a,defaultValue:b,created_at:h,updated_at:h};return await (0,d.setDoc)((0,d.doc)(c.db,e,f),g),g}}async function i(a){let b=await g(a);b&&await (0,d.deleteDoc)((0,d.doc)(c.db,e,b.id))}let j=(0,b.create)((a,b)=>({globalDefaults:[],isLoading:!1,loadDefaults:async()=>{a({isLoading:!0});try{let b=await f();a({globalDefaults:b,isLoading:!1})}catch(b){console.error("Failed to load global defaults:",b),a({isLoading:!1})}},setDefault:async(b,c)=>{try{let d=await h(b,c);a(a=>a.globalDefaults.find(a=>a.variableName===b)?{globalDefaults:a.globalDefaults.map(a=>a.variableName===b?d:a)}:{globalDefaults:[...a.globalDefaults,d]})}catch(a){throw console.error("Failed to set default:",a),a}},deleteDefault:async b=>{try{await i(b),a(a=>({globalDefaults:a.globalDefaults.filter(a=>a.variableName!==b)}))}catch(a){throw console.error("Failed to delete default:",a),a}},getDefaultValue:a=>{let c=b().globalDefaults.find(b=>b.variableName===a);return c?.defaultValue}}));a.s(["useDefaultsStore",0,j],42384)}];

//# sourceMappingURL=botbrains-nextjs_71668f33._.js.map