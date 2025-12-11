module.exports=[49721,a=>{"use strict";let b=(0,a.i(24076).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);a.s(["Copy",()=>b],49721)},63892,a=>{"use strict";var b=a.i(38121),c=a.i(96821),d=a.i(79646),e=a.i(67373),f=a.i(80393),g=a.i(24076);let h=(0,g.default)("wand-sparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]),i=(0,g.default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),j=(0,g.default)("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);var k=a.i(68650),l=a.i(9340),m=a.i(49721),n=a.i(60756),o=a.i(87296);function p({isOpen:a,onClose:d,template:e}){let[f,g]=(0,c.useState)({}),[h,i]=(0,c.useState)(!1),j=()=>{let a=e.template;return Object.entries(f).forEach(([b,c])=>{a=a.replace(RegExp(`{{${b}}}`,"g"),c||`[${b}]`)}),a},p=async()=>{let a=j();await navigator.clipboard.writeText(a),i(!0),setTimeout(()=>i(!1),2e3)};return(0,b.jsx)(o.AnimatePresence,{children:a&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:d,className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50"}),(0,b.jsx)(k.motion.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:30},onAnimationStart:()=>{let a;a={},e.variables.forEach(b=>{a[b.name]=b.default||""}),g(a),i(!1)},className:"fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",children:(0,b.jsxs)("div",{className:"bg-card border border-border rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden pointer-events-auto",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center text-xl",style:{backgroundColor:`${e.color}20`},children:e.emoji}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{className:"text-xl font-semibold text-foreground",children:["Run ",e.title]}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground",children:"Fill in variables and copy the prompt"})]})]}),(0,b.jsx)("button",{onClick:d,className:"p-2 rounded-lg hover:bg-background transition-colors text-muted-foreground hover:text-foreground",children:(0,b.jsx)(l.X,{size:20})})]}),(0,b.jsxs)("div",{className:"overflow-y-auto max-h-[calc(90vh-140px)]",children:[e.variables.length>0&&(0,b.jsxs)("div",{className:"p-6 space-y-4 border-b border-border",children:[(0,b.jsx)("h3",{className:"text-sm font-semibold text-foreground mb-3",children:"Variables"}),e.variables.map(a=>(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("label",{className:"text-sm font-medium text-foreground capitalize",children:a.name.replace(/_/g," ")}),(0,b.jsx)("textarea",{value:f[a.name]||"",onChange:b=>g({...f,[a.name]:b.target.value}),placeholder:a.placeholder,rows:3,className:"w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-primary/50 resize-none"})]},a.name))]}),(0,b.jsxs)("div",{className:"p-6 space-y-3",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)("h3",{className:"text-sm font-semibold text-foreground",children:"Generated Prompt"}),(0,b.jsx)("button",{onClick:p,className:"flex items-center gap-2 px-3 py-1.5 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors text-sm font-medium",children:h?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n.Check,{size:16}),"Copied!"]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Copy,{size:16}),"Copy"]})})]}),(0,b.jsx)("div",{className:"bg-background border border-border rounded-lg p-4 max-h-96 overflow-y-auto",children:(0,b.jsx)("pre",{className:"text-sm text-foreground whitespace-pre-wrap font-mono",children:j()})})]})]}),(0,b.jsx)("div",{className:"flex items-center justify-end gap-3 p-6 border-t border-border bg-background/50",children:(0,b.jsx)("button",{onClick:d,className:"px-4 py-2 rounded-lg border border-border text-foreground hover:bg-background transition-colors",children:"Close"})})]})})]})})}let q=[{id:"generator",icon:e.Sparkles,title:"Generator Prompt",description:"Build robust system prompts from scratch through an interview process",color:"#10B981",emoji:"✨",tags:["meta-prompt","generator","builder"],template:`***SYSTEM OVERRIDE: PROMPT GENERATOR MODE***

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

Please start by asking the Phase 1 questions regarding my goal.`,variables:[{name:"goal",type:"textarea",placeholder:"Describe your goal...",default:""}]},{id:"override",icon:f.RefreshCw,title:"Override Prompt",description:"Convert conversation history into optimized, reusable system prompts",color:"#3B82F6",emoji:"🔄",tags:["meta-prompt","override","builder","conversation"],template:`***SYSTEM OVERRIDE: PROMPT ARCHITECT MODE ACTIVATED***

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

Please start by asking me the **Phase 1** questions based on our chat history.`,variables:[]},{id:"refiner",icon:h,title:"Refiner Prompt",description:"Upgrade draft prompts into production-ready system prompts",color:"#8B5CF6",emoji:"🪄",tags:["meta-prompt","refiner","builder","optimization"],template:`***SYSTEM OVERRIDE: PROMPT REFINER MODE***

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

Please start by asking the Phase 1 questions based on the draft I provided.`,variables:[{name:"draft",type:"textarea",placeholder:"Paste your draft prompt here...",default:""}]}];function r(){let a=(0,d.useRouter)(),[e,f]=(0,c.useState)(null);return(0,b.jsxs)("div",{className:"flex-1 px-8 py-6 max-w-7xl mx-auto w-full",children:[(0,b.jsx)(k.motion.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3},className:"flex items-center justify-between mb-8",children:(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-3xl font-semibold tracking-tight text-foreground mb-1",children:"Builder Prompts"}),(0,b.jsxs)("p",{className:"text-muted-foreground",children:[q.length," meta-prompt templates"]})]})}),(0,b.jsx)(k.motion.div,{variants:{visible:{transition:{staggerChildren:.05}}},initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:q.map(c=>{let d=c.icon;return(0,b.jsx)(k.motion.div,{variants:{hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1}},transition:{duration:.3,ease:[.16,.84,.24,1]},children:(0,b.jsxs)("div",{className:"group relative bg-card border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-accent-primary/5",children:[(0,b.jsxs)("div",{className:"flex items-start justify-between mb-4",children:[(0,b.jsx)("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200",style:{backgroundColor:`${c.color}20`},children:c.emoji}),(0,b.jsx)(d,{className:"w-5 h-5 text-muted-foreground group-hover:text-accent-primary transition-colors",style:{color:c.color}})]}),(0,b.jsx)("h3",{className:"text-lg font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors",children:c.title}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:c.description}),(0,b.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:c.tags.map((a,c)=>(0,b.jsx)("span",{className:"px-2 py-0.5 text-xs rounded-md bg-background border border-border text-muted-foreground",children:a},c))}),(0,b.jsxs)("div",{className:"flex gap-2 pt-2 border-t border-border",children:[(0,b.jsxs)("button",{onClick:a=>{a.stopPropagation(),f(c)},className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors text-sm font-medium",style:{backgroundColor:c.color},children:[(0,b.jsx)(i,{size:14}),"Run"]}),(0,b.jsxs)("button",{onClick:()=>{sessionStorage.setItem("promptInitialData",JSON.stringify({title:c.title,type:"LLM",prompt_template:c.template,category:"Builder Utilities",color_tag:c.color,variables:c.variables,tags:c.tags,keywords:["prompt engineering","builder"]})),a.push("/prompt/new")},className:"flex items-center justify-center gap-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-colors text-sm font-medium text-foreground",children:[(0,b.jsx)(j,{size:14}),"Edit"]})]}),(0,b.jsx)("div",{className:"absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none",style:{backgroundImage:`linear-gradient(135deg, ${c.color}40 0%, transparent 100%)`}})]})},c.id)})}),(0,b.jsx)(p,{isOpen:null!==e,onClose:()=>f(null),template:e??q[0]})]})}function s(){return(0,b.jsx)(r,{})}a.s(["default",()=>s],63892)}];

//# sourceMappingURL=botbrains-nextjs_42afa93b._.js.map