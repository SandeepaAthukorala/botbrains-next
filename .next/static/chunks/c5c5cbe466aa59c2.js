(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11263,e=>{"use strict";let t=(0,e.i(46443).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",()=>t],11263)},55032,e=>{"use strict";var t=e.i(5064),r=e.i(84763),o=e.i(8576),a=e.i(95611),s=e.i(37559),i=e.i(46443);let n=(0,i.default)("wand-sparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]),l=(0,i.default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),d=(0,i.default)("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);var c=e.i(45498),p=e.i(12413),m=e.i(11263),u=e.i(86492),h=e.i(78922);function g({isOpen:e,onClose:o,template:a}){let[s,i]=(0,r.useState)({}),[n,l]=(0,r.useState)(!1),d=()=>{let e=a.template;return Object.entries(s).forEach(([t,r])=>{e=e.replace(RegExp(`{{${t}}}`,"g"),r||`[${t}]`)}),e},g=async()=>{let e=d();await navigator.clipboard.writeText(e),l(!0),setTimeout(()=>l(!1),2e3)};return(0,t.jsx)(h.AnimatePresence,{children:e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o,className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50"}),(0,t.jsx)(c.motion.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:30},onAnimationStart:()=>{let e;e={},a.variables.forEach(t=>{e[t.name]=t.default||""}),i(e),l(!1)},className:"fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",children:(0,t.jsxs)("div",{className:"bg-card border border-border rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden pointer-events-auto",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center text-xl",style:{backgroundColor:`${a.color}20`},children:a.emoji}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h2",{className:"text-xl font-semibold text-foreground",children:["Run ",a.title]}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Fill in variables and copy the prompt"})]})]}),(0,t.jsx)("button",{onClick:o,className:"p-2 rounded-lg hover:bg-background transition-colors text-muted-foreground hover:text-foreground",children:(0,t.jsx)(p.X,{size:20})})]}),(0,t.jsxs)("div",{className:"overflow-y-auto max-h-[calc(90vh-140px)]",children:[a.variables.length>0&&(0,t.jsxs)("div",{className:"p-6 space-y-4 border-b border-border",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold text-foreground mb-3",children:"Variables"}),a.variables.map(e=>(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium text-foreground capitalize",children:e.name.replace(/_/g," ")}),(0,t.jsx)("textarea",{value:s[e.name]||"",onChange:t=>i({...s,[e.name]:t.target.value}),placeholder:e.placeholder,rows:3,className:"w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-primary/50 resize-none"})]},e.name))]}),(0,t.jsxs)("div",{className:"p-6 space-y-3",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold text-foreground",children:"Generated Prompt"}),(0,t.jsx)("button",{onClick:g,className:"flex items-center gap-2 px-3 py-1.5 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors text-sm font-medium",children:n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Check,{size:16}),"Copied!"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.Copy,{size:16}),"Copy"]})})]}),(0,t.jsx)("div",{className:"bg-background border border-border rounded-lg p-4 max-h-96 overflow-y-auto",children:(0,t.jsx)("pre",{className:"text-sm text-foreground whitespace-pre-wrap font-mono",children:d()})})]})]}),(0,t.jsx)("div",{className:"flex items-center justify-end gap-3 p-6 border-t border-border bg-background/50",children:(0,t.jsx)("button",{onClick:o,className:"px-4 py-2 rounded-lg border border-border text-foreground hover:bg-background transition-colors",children:"Close"})})]})})]})})}let b=[{id:"generator",icon:a.Sparkles,title:"Generator Prompt",description:"Build robust system prompts from scratch through an interview process",color:"#10B981",emoji:"✨",tags:["meta-prompt","generator","builder"],template:`***SYSTEM OVERRIDE: PROMPT GENERATOR MODE***

You are a Senior Prompt Architect. I need you to build a robust system prompt from scratch for my Prompt Manager.

**My Goal:**
{{goal}}

**Process:**
Do not generate the prompt yet. I need you to interview me to build the perfect specification.

### PHASE 1: THE INTERVIEW
Ask me the following questions to understand the requirements:
1. **Inputs:** What exact information will I provide to this prompt? (These will become our \`{{variables}}\`).
2. **The "Black Box":** What specific steps or rules must the AI follow to process that information?
3. **The Output:** What should the final result look like? (Table, Email, Code, Creative Writing?)
4. **Constraints:** Are there specific words to avoid, length limits, or style guidelines (e.g., "No fluff," "Strictly professional")?

**Stop and wait for my answers.**

### PHASE 2: CONSTRUCTION
Once I answer, generate the prompt.
* Ensure all my inputs are mapped to \`{{variable_name}}\`.
* Use clear headers (### Instruction, ### Constraints).
* If the task involves logic, include a "Reasoning" step in the prompt instructions to ensure high-quality output from Gemini/GPT.

Please start by asking the Phase 1 questions regarding my goal.`,variables:[{name:"goal",type:"textarea",placeholder:"Describe your goal...",default:""}]},{id:"override",icon:s.RefreshCw,title:"Override Prompt",description:"Convert conversation history into optimized, reusable system prompts",color:"#3B82F6",emoji:"🔄",tags:["meta-prompt","override","builder","conversation"],template:`***SYSTEM OVERRIDE: PROMPT ARCHITECT MODE ACTIVATED***

You are now the **Prompt Architect**. Your goal is to convert our entire conversation history and the insights we have generated so far into a single, highly optimized, reusable "System Prompt" that I can save in my Prompt Manager.

**Do not generate the prompt yet.** follow this strict process:

### PHASE 1: THE ANALYSIS & QUIZ
Analyze the logic, style, and goals we discussed in this chat. Then, ask me 3-5 clarification questions to refine the final output. You must ask about:
1. **The Core Objective:** Confirm exactly what the final prompt should achieve.
2. **Variables:** Ask me which parts of the input should be dynamic. (e.g., "Should the 'Topic' and 'Tone' be variables?"). *Note: The final prompt must use the \`{{variable}}\` format for these.*
3. **Constraints:** Ask about length, format (JSON, Markdown, Lists), or prohibited content.
4. **Edge Cases:** Ask how the prompt should handle lack of information or vague inputs.

**Stop and wait for my answers.**

### PHASE 2: THE GENERATION (Do not execute until I answer Phase 1)
Once I answer your questions, you will generate the final prompt. The final output must adhere to these rules:
* **Format:** Use a clear, structured format (e.g., Role, Context, Task, Constraints).
* **Variables:** STRICTLY use double curly braces for dynamic inputs: \`{{variable}}\`.
* **Optimization:** Apply prompt engineering best practices (Chain of Thought, Few-Shot examples if we discussed them, or Delimiters).
* **Tone:** Ensure the prompt forces the LLM to adopt the exact persona we discussed in this chat.

Please start by asking me the **Phase 1** questions based on our chat history.`,variables:[]},{id:"refiner",icon:n,title:"Refiner Prompt",description:"Upgrade draft prompts into production-ready system prompts",color:"#8B5CF6",emoji:"🪄",tags:["meta-prompt","refiner","builder","optimization"],template:`***SYSTEM OVERRIDE: PROMPT REFINER MODE***

You are an expert Prompt Engineer specializing in LLM logic optimization (Gemini/GPT-4o). Your goal is to take my existing draft prompt and upgrade it into a production-ready system prompt for my manager.

**My Draft Prompt:**
{{draft}}

**Process:**
Do not rewrite the prompt yet. Follow these steps:

### PHASE 1: DIAGNOSTIC & QUIZ
Analyze my draft for logical loopholes, ambiguity, or lack of structure. Then, ask me 3-5 questions to clarify the intent:
1. **Variable Identification:** Identify parts of the prompt that are static but should be dynamic. Ask: "Should 'X' be a \`{{variable}}\`?"
2. **Logic Gaps:** Point out where the LLM might get confused and ask how to handle those edge cases.
3. **Output Format:** Ask exactly how the result should look (Markdown, JSON, Code Block).
4. **Tone/Persona:** Ask if the current persona is strong enough.

**Stop and wait for my answers.**

### PHASE 2: OPTIMIZATION
Once I answer, rewrite the prompt using the following framework:
* **Role:** Define a specific expert persona.
* **Task:** Step-by-step instructions.
* **Context:** Any necessary background info.
* **Format:** The \`{{variable}}\` syntax must be used for all dynamic data.
* **Technique:** Use Chain of Thought ("Think step by step...") if the task is complex.

Please start by asking the Phase 1 questions based on the draft I provided.`,variables:[{name:"draft",type:"textarea",placeholder:"Paste your draft prompt here...",default:""}]}];function x(){let e=(0,o.useRouter)(),[a,s]=(0,r.useState)(null);return(0,t.jsxs)("div",{className:"flex-1 px-8 py-6 max-w-7xl mx-auto w-full",children:[(0,t.jsx)(c.motion.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3},className:"flex items-center justify-between mb-8",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-3xl font-semibold tracking-tight text-foreground mb-1",children:"Builder Prompts"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:[b.length," meta-prompt templates"]})]})}),(0,t.jsx)(c.motion.div,{variants:{visible:{transition:{staggerChildren:.05}}},initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map(r=>{let o=r.icon;return(0,t.jsx)(c.motion.div,{variants:{hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1}},transition:{duration:.3,ease:[.16,.84,.24,1]},children:(0,t.jsxs)("div",{className:"group relative bg-card border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-accent-primary/5",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between mb-4",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200",style:{backgroundColor:`${r.color}20`},children:r.emoji}),(0,t.jsx)(o,{className:"w-5 h-5 text-muted-foreground group-hover:text-accent-primary transition-colors",style:{color:r.color}})]}),(0,t.jsx)("h3",{className:"text-lg font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors",children:r.title}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:r.description}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:r.tags.map((e,r)=>(0,t.jsx)("span",{className:"px-2 py-0.5 text-xs rounded-md bg-background border border-border text-muted-foreground",children:e},r))}),(0,t.jsxs)("div",{className:"flex gap-2 pt-2 border-t border-border",children:[(0,t.jsxs)("button",{onClick:e=>{e.stopPropagation(),s(r)},className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors text-sm font-medium",style:{backgroundColor:r.color},children:[(0,t.jsx)(l,{size:14}),"Run"]}),(0,t.jsxs)("button",{onClick:()=>{sessionStorage.setItem("promptInitialData",JSON.stringify({title:r.title,type:"LLM",prompt_template:r.template,category:"Builder Utilities",color_tag:r.color,variables:r.variables,tags:r.tags,keywords:["prompt engineering","builder"]})),e.push("/prompt/new")},className:"flex items-center justify-center gap-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-colors text-sm font-medium text-foreground",children:[(0,t.jsx)(d,{size:14}),"Edit"]})]}),(0,t.jsx)("div",{className:"absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none",style:{backgroundImage:`linear-gradient(135deg, ${r.color}40 0%, transparent 100%)`}})]})},r.id)})}),(0,t.jsx)(g,{isOpen:null!==a,onClose:()=>s(null),template:a??b[0]})]})}function f(){return(0,t.jsx)(x,{})}e.s(["default",()=>f],55032)}]);