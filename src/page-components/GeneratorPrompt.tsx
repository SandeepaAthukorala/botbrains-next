'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const GENERATOR_PROMPT = `***SYSTEM OVERRIDE: PROMPT GENERATOR MODE***

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

Please start by asking the Phase 1 questions regarding my goal.`;

export function GeneratorPrompt() {
    const router = useRouter();

    useEffect(() => {
        // Navigate to create a new prompt with pre-filled generator content
        router.push('/prompt/new', {
            state: {
                initialData: {
                    title: 'Generator Prompt',
                    type: 'LLM',
                    prompt_template: GENERATOR_PROMPT,
                    category: 'Builder Utilities',
                    color_tag: '#10B981',
                    variables: [
                        {
                            name: 'goal',
                            type: 'textarea',
                            placeholder: 'Describe your goal...',
                            default: ''
                        }
                    ],
                    tags: ['meta-prompt', 'generator', 'builder'],
                    keywords: ['prompt engineering', 'system prompt', 'builder']
                }
            }
        });
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-pulse">
                    <span className="text-3xl">✨</span>
                </div>
                <p className="text-secondary">Loading Generator Prompt...</p>
            </div>
        </div>
    );
}

