# OpenCode Background Task Plugin

A standalone plugin for OpenCode that enables running agent tasks in the background.

## Features

- **background_task**: Launch agent tasks that run asynchronously
- **background_output**: Check status or retrieve results from background tasks
- **background_cancel**: Cancel running background tasks

## Installation

```bash
cd ~/.config/opencode/plugins/opencode-background-task
bun install
bun run build
```

Then add to your `opencode.json`:

```json
{
  "plugin": ["./plugins/opencode-background-task"]
}
```

## Usage

### Launch a background task

```
Use background_task with:
- description: "Search for API endpoints"
- prompt: "Find all REST API endpoints in the codebase"
- agent: "explore"
```

### Check task status

```
Use background_output with:
- task_id: "bg_abc12345"
```

### Cancel a task

```
Use background_cancel with:
- taskId: "bg_abc12345"
```

Or cancel all running tasks:

```
Use background_cancel with:
- all: true
```

## Configuration

The plugin supports optional concurrency limits:

```typescript
// In plugin initialization (advanced usage)
const manager = new BackgroundManager(ctx, {
  defaultConcurrency: 5,
  providerConcurrency: {
    "openai": 3,
    "anthropic": 2
  },
  modelConcurrency: {
    "openai/gpt-4": 1
  }
})
```

## License

MIT
