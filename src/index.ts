import type { Plugin } from "@opencode-ai/plugin"
import { BackgroundManager } from "./manager"
import {
  createBackgroundTask,
  createBackgroundOutput,
  createBackgroundCancel,
} from "./tools"
import { createBackgroundNotificationHook } from "./hooks"

const BackgroundTaskPlugin: Plugin = async (ctx) => {
  const manager = new BackgroundManager(ctx)
  const notificationHook = createBackgroundNotificationHook(manager)

  return {
    tool: {
      background_task: createBackgroundTask(manager),
      background_output: createBackgroundOutput(manager, ctx.client),
      background_cancel: createBackgroundCancel(manager, ctx.client),
    },

    event: notificationHook.event,
  }
}

export default BackgroundTaskPlugin

// Re-export types for consumers
export type { BackgroundTask, BackgroundTaskConfig } from "./manager"
export type { BackgroundTaskArgs, BackgroundOutputArgs, BackgroundCancelArgs } from "./tools"
