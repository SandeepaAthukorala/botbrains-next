'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, RefreshCw, Wand2, Play, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { PromptRunnerModal } from '@/components/builder/PromptRunnerModal';

// Builder prompt templates data
const builderTemplates = [
    {
        id: 'generator',
        icon: Sparkles,
        title: 'Generator Prompt',
        description: 'Build robust system prompts from scratch through an interview process',
        color: '#10B981',
        emoji: '✨',
        tags: ['meta-prompt', 'generator', 'builder'],
        template: `***SYSTEM OVERRIDE: PROMPT GENERATOR MODE***

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

Please start by asking the Phase 1 questions regarding my goal.`,
        variables: [
            {
                name: 'goal',
                type: 'textarea',
                placeholder: 'Describe your goal...',
                default: ''
            }
        ]
    },
    {
        id: 'override',
        icon: RefreshCw,
        title: 'Override Prompt',
        description: 'Convert conversation history into optimized, reusable system prompts',
        color: '#3B82F6',
        emoji: '🔄',
        tags: ['meta-prompt', 'override', 'builder', 'conversation'],
        template: `***SYSTEM OVERRIDE: PROMPT ARCHITECT MODE ACTIVATED***

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

Please start by asking me the **Phase 1** questions based on our chat history.`,
        variables: []
    },
    {
        id: 'refiner',
        icon: Wand2,
        title: 'Refiner Prompt',
        description: 'Upgrade draft prompts into production-ready system prompts',
        color: '#8B5CF6',
        emoji: '🪄',
        tags: ['meta-prompt', 'refiner', 'builder', 'optimization'],
        template: `***SYSTEM OVERRIDE: PROMPT REFINER MODE***

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

Please start by asking the Phase 1 questions based on the draft I provided.`,
        variables: [
            {
                name: 'draft',
                type: 'textarea',
                placeholder: 'Paste your draft prompt here...',
                default: ''
            }
        ]
    }
];

export function BuilderPrompts() {
    const router = useRouter();
    const [selectedTemplate, setSelectedTemplate] = useState<typeof builderTemplates[0] | null>(null);

    const handleTemplateClick = (template: typeof builderTemplates[0]) => {
        // Store initial data in sessionStorage for the new prompt page
        sessionStorage.setItem('promptInitialData', JSON.stringify({
            title: template.title,
            type: 'LLM',
            prompt_template: template.template,
            category: 'Builder Utilities',
            color_tag: template.color,
            variables: template.variables,
            tags: template.tags,
            keywords: ['prompt engineering', 'builder']
        }));
        router.push('/prompt/new');
    };

    const handleRunClick = (e: React.MouseEvent, template: typeof builderTemplates[0]) => {
        e.stopPropagation();
        setSelectedTemplate(template);
    };

    return (
        <div className="flex-1 px-8 py-6 max-w-7xl mx-auto w-full">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between mb-8"
            >
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-1">
                        Builder Prompts
                    </h1>
                    <p className="text-muted-foreground">
                        {builderTemplates.length} meta-prompt templates
                    </p>
                </div>
            </motion.div>

            {/* Template Grid */}
            <motion.div
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                        },
                    },
                }}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {builderTemplates.map((template) => {
                    const Icon = template.icon;
                    return (
                        <motion.div
                            key={template.id}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.16, 0.84, 0.24, 1],
                            }}
                        >
                            <div className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-accent-primary/5">
                                {/* Icon Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200"
                                        style={{ backgroundColor: `${template.color}20` }}
                                    >
                                        {template.emoji}
                                    </div>
                                    <Icon
                                        className="w-5 h-5 text-muted-foreground group-hover:text-accent-primary transition-colors"
                                        style={{ color: template.color }}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
                                    {template.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {template.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {template.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 text-xs rounded-md bg-background border border-border text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 pt-2 border-t border-border">
                                    <button
                                        onClick={(e) => handleRunClick(e, template)}
                                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors text-sm font-medium"
                                        style={{ backgroundColor: template.color }}
                                    >
                                        <Play size={14} />
                                        Run
                                    </button>
                                    <button
                                        onClick={() => handleTemplateClick(template)}
                                        className="flex items-center justify-center gap-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-colors text-sm font-medium text-foreground"
                                    >
                                        <Edit size={14} />
                                        Edit
                                    </button>
                                </div>

                                {/* Hover Effect */}
                                <div
                                    className="absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none"
                                    style={{
                                        backgroundImage: `linear-gradient(135deg, ${template.color}40 0%, transparent 100%)`
                                    }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Runner Modal */}
            <PromptRunnerModal
                isOpen={selectedTemplate !== null}
                onClose={() => setSelectedTemplate(null)}
                template={selectedTemplate ?? builderTemplates[0]}
            />
        </div>
    );
}

