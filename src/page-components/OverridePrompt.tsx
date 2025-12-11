'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OVERRIDE_PROMPT = `***SYSTEM OVERRIDE: PROMPT ARCHITECT MODE ACTIVATED***

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

Please start by asking me the **Phase 1** questions based on our chat history.`;

export function OverridePrompt() {
    const router = useRouter();

    useEffect(() => {
        // Navigate to create a new prompt with pre-filled override content
        router.push('/prompt/new', {
            state: {
                initialData: {
                    title: 'Override Prompt',
                    type: 'LLM',
                    prompt_template: OVERRIDE_PROMPT,
                    category: 'Builder Utilities',
                    color_tag: '#3B82F6',
                    variables: [],
                    tags: ['meta-prompt', 'override', 'builder', 'conversation'],
                    keywords: ['prompt engineering', 'conversation analysis', 'builder']
                }
            }
        });
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-pulse">
                    <span className="text-3xl">🔄</span>
                </div>
                <p className="text-secondary">Loading Override Prompt...</p>
            </div>
        </div>
    );
}

