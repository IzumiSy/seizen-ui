import type { ReactNode } from "react";
import type { z } from "zod";
import type { ContextMenuItemFactory } from "./contextMenuItem";

// =============================================================================
// Plugin Types
// =============================================================================

/**
 * Plugin position in the DataTable layout
 */
export type PluginPosition = "left-sider" | "right-sider";

/**
 * Base plugin interface - all plugins have id and name
 */
interface BasePlugin {
  id: string;
  name: string;
}

/**
 * Sidepanel plugin - renders UI in sidepanel and optionally adds context menu items
 */
export interface SidepanelPlugin<TData = unknown> extends BasePlugin {
  position: PluginPosition;
  render: () => ReactNode;
  contextMenu?: {
    items: ContextMenuItemFactory<TData, unknown>[];
  };
}

/**
 * Context menu only plugin - only adds items to the row context menu
 */
export interface ContextMenuOnlyPlugin<TData = unknown> extends BasePlugin {
  contextMenu: {
    items: ContextMenuItemFactory<TData, unknown>[];
  };
}

/**
 * Plugin can be either a sidepanel plugin or a context menu only plugin
 */
export type DataTablePlugin<TData = unknown> =
  | SidepanelPlugin<TData>
  | ContextMenuOnlyPlugin<TData>;

// =============================================================================
// Plugin Definition Types
// =============================================================================

/**
 * Context passed to plugin render function
 */
export interface PluginContext<TArgs> {
  args: TArgs;
}

/**
 * Base options shared by all plugin types
 */
interface BasePluginOptions<TSchema extends z.ZodType> {
  id: string;
  name: string;
  args: TSchema;
}

/**
 * Options for defining a sidepanel plugin
 */
export interface DefineSidepanelPluginOptions<TData, TSchema extends z.ZodType>
  extends BasePluginOptions<TSchema> {
  position: PluginPosition;
  render: (context: PluginContext<z.infer<TSchema>>) => () => ReactNode;
  contextMenu?: {
    items: ContextMenuItemFactory<TData, z.infer<TSchema>>[];
  };
}

/**
 * Options for defining a context menu only plugin
 */
export interface DefineContextMenuPluginOptions<
  TData,
  TSchema extends z.ZodType
> extends BasePluginOptions<TSchema> {
  contextMenu: {
    items: ContextMenuItemFactory<TData, z.infer<TSchema>>[];
  };
}

export type DefinePluginOptions<TData, TSchema extends z.ZodType> =
  | DefineSidepanelPluginOptions<TData, TSchema>
  | DefineContextMenuPluginOptions<TData, TSchema>;

/**
 * Define a plugin with type-safe configuration
 */
export function definePlugin<TData, TSchema extends z.ZodType>(
  options: DefinePluginOptions<TData, TSchema>
): {
  configure: (config: z.infer<TSchema>) => DataTablePlugin<TData>;
} {
  return {
    configure: (config: z.infer<TSchema>) => {
      // Validate config with Zod schema
      const validatedArgs = options.args.parse(config);
      const context: PluginContext<z.infer<TSchema>> = { args: validatedArgs };

      // Check if it's a sidepanel plugin
      if ("position" in options && "render" in options) {
        const sidepanelOptions = options as DefineSidepanelPluginOptions<
          TData,
          TSchema
        >;
        return {
          id: options.id,
          name: options.name,
          position: sidepanelOptions.position,
          render: sidepanelOptions.render(context),
          contextMenu: sidepanelOptions.contextMenu,
        } as SidepanelPlugin<TData>;
      }

      // Context menu only plugin
      const contextMenuOptions = options as DefineContextMenuPluginOptions<
        TData,
        TSchema
      >;
      return {
        id: options.id,
        name: options.name,
        contextMenu: contextMenuOptions.contextMenu,
      } as ContextMenuOnlyPlugin<TData>;
    },
  };
}
