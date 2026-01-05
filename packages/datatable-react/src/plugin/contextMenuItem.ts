import type { ReactNode } from "react";
import type { Table } from "@tanstack/react-table";

// =============================================================================
// Context Menu Types
// =============================================================================

/**
 * Context menu item definition (resolved from factory)
 */
export interface ContextMenuItemEntry {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  visible?: boolean;
  disabled?: boolean;
}

/**
 * Context passed to contextMenuItem factory function
 */
export interface ContextMenuItemContext<TData, TArgs = unknown> {
  row: TData;
  rowIndex: number;
  selectedRows: TData[];
  table: Table<TData>;
  pluginArgs: TArgs;
}

/**
 * Factory type for creating context menu items
 */
export interface ContextMenuItemFactory<TData, TArgs = unknown> {
  id: string;
  create: (ctx: ContextMenuItemContext<TData, TArgs>) => ContextMenuItemEntry;
}

/**
 * Helper function to create a context menu item with full context access
 */
export function contextMenuItem<TData, TArgs = unknown>(
  id: string,
  factory: (ctx: ContextMenuItemContext<TData, TArgs>) => ContextMenuItemEntry
): ContextMenuItemFactory<TData, TArgs> {
  return {
    id,
    create: factory,
  };
}
