export const BACKGROUND_TASK_DESCRIPTION = `Run agent task in background. Returns task_id immediately; notifies on completion.

Use \`background_output\` to get results. Prompts MUST be in English.

Agents (use cheapest that fits):
- explore: Codebase research - files, patterns, tests (Gemini Flash, fast)
- librarian: External docs, remote repos, APIs (Gemini Flash)
- oracle: Code review, architecture (read-only)
- general: Implementation requiring write access (EXPENSIVE - avoid for research)`

export const BACKGROUND_OUTPUT_DESCRIPTION = `Get output from background task. System notifies on completion, so block=true rarely needed.`

export const BACKGROUND_CANCEL_DESCRIPTION = `Cancel running background task(s). Use all=true to cancel ALL before final answer.`
