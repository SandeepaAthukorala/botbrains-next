'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const REFINER_PROMPT = `***SYSTEM OVERRIDE: PROMPT REFINER MODE***

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

Please start by asking the Phase 1 questions based on the draft I provided.`;

export function RefinerPrompt() {
    const router = useRouter();

    useEffect(() => {
        // Store initial data in sessionStorage for the new prompt page
        sessionStorage.setItem('promptInitialData', JSON.stringify({
            title: 'Refiner Prompt',
            type: 'LLM',
            prompt_template: REFINER_PROMPT,
            category: 'Builder Utilities',
            color_tag: '#8B5CF6',
            variables: [
                {
                    name: 'draft',
                    type: 'textarea',
                    placeholder: 'Paste your draft prompt here...',
                    default: ''
                }
            ],
            tags: ['meta-prompt', 'refiner', 'builder', 'optimization'],
            keywords: ['prompt engineering', 'optimization', 'refinement', 'builder']
        }));
        router.push('/prompt/new');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-pulse">
                    <span className="text-3xl">🪄</span>
                </div>
                <p className="text-secondary">Loading Refiner Prompt...</p>
            </div>
        </div>
    );
}

