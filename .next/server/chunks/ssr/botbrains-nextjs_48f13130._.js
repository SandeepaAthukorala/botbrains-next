module.exports=[30502,a=>{"use strict";let b=(0,a.i(24076).default)("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);a.s(["Save",()=>b],30502)},92873,82386,a=>{"use strict";var b=a.i(38121);function c({label:a,error:c,options:d,className:e="",...f}){return(0,b.jsxs)("div",{className:"w-full",children:[a&&(0,b.jsx)("label",{className:"block text-sm font-medium text-foreground mb-1.5",children:a}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("select",{className:`
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
                `,...e}),c&&(0,b.jsx)("p",{className:"mt-2 text-xs text-destructive animate-slide-up",children:c})]})}a.s(["Input",()=>c])},7600,a=>{"use strict";let b=(0,a.i(24076).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);a.s(["Search",()=>b],7600)},97600,a=>{"use strict";var b=a.i(38121),c=a.i(66553);function d({params:a}){return(0,b.jsx)(c.PromptEditor,{})}a.s(["default",()=>d])}];

//# sourceMappingURL=botbrains-nextjs_48f13130._.js.map