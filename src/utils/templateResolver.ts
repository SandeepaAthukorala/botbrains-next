/**
 * Extract variable tokens from a template string
 * Matches patterns like {{variableName}}
 */
export function extractVariables(template: string): string[] {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = [...template.matchAll(regex)];
    const variables = matches.map(match => match[1].trim());

    // Return unique variables
    return [...new Set(variables)];
}

/**
 * Resolve a template by replacing variable tokens with values
 */
export function resolveTemplate(
    template: string,
    values: Record<string, string>
): string {
    let resolved = template;

    for (const [key, value] of Object.entries(values)) {
        const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
        resolved = resolved.replace(regex, value);
    }

    return resolved;
}

/**
 * Check if a template has any unresolved variables
 */
export function hasUnresolvedVariables(template: string): boolean {
    return /\{\{[^}]+\}\}/.test(template);
}
