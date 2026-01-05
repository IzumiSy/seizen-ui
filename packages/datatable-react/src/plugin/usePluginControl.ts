import { useState, useCallback, useMemo } from "react";

// =============================================================================
// Types
// =============================================================================

/**
 * Internal plugin state.
 * @internal
 */
export interface PluginInternalState {
  /** ID of the currently open plugin, or null if no plugin is open. */
  id: string | null;
  /** Arguments passed to the plugin via open(). */
  args: unknown;
}

/**
 * Plugin control interface returned by usePluginControl.
 */
export interface PluginControl {
  /**
   * Open a plugin's sidepanel.
   * @param pluginId - ID of the plugin to open
   * @param args - Optional arguments to pass to the plugin (accessible via openArgs in usePluginContext)
   */
  open: (pluginId: string, args?: unknown) => void;

  /**
   * Close the currently open plugin's sidepanel.
   */
  close: () => void;

  /**
   * Set the active plugin. If pluginId is provided, opens that plugin; otherwise closes the current plugin.
   * Useful as a callback for UI components.
   * @param pluginId - ID of the plugin to open, or null/undefined to close
   */
  setActive: (pluginId: string | null | undefined) => void;

  /**
   * Check if a specific plugin is currently open.
   * @param pluginId - ID of the plugin to check
   * @returns true if the specified plugin is open
   */
  isOpen: (pluginId: string) => boolean;

  /**
   * Get the ID of the currently active (open) plugin.
   * @returns The plugin ID or null if no plugin is open
   */
  getActiveId: () => string | null;

  /**
   * Internal state of the currently open plugin.
   * @internal
   */
  _state: PluginInternalState;
}

// =============================================================================
// Hook
// =============================================================================

/**
 * Internal hook for managing plugin open/close state.
 * Used by useDataTable to provide plugin control interface.
 *
 * @internal
 */
export function usePluginControl(): PluginControl {
  const [openPluginId, setOpenPluginId] = useState<string | null>(null);
  const [openPluginArgs, setOpenPluginArgs] = useState<unknown>(undefined);

  const open = useCallback((pluginId: string, args?: unknown) => {
    setOpenPluginId(pluginId);
    setOpenPluginArgs(args);
  }, []);

  const close = useCallback(() => {
    setOpenPluginId(null);
    setOpenPluginArgs(undefined);
  }, []);

  const setActive = useCallback((pluginId: string | null | undefined) => {
    if (pluginId) {
      setOpenPluginId(pluginId);
      setOpenPluginArgs(undefined);
    } else {
      setOpenPluginId(null);
      setOpenPluginArgs(undefined);
    }
  }, []);

  const isOpen = useCallback(
    (pluginId: string) => openPluginId === pluginId,
    [openPluginId]
  );

  const getActiveId = useCallback(() => openPluginId, [openPluginId]);

  const pluginControl = useMemo<PluginControl>(
    () => ({
      open,
      close,
      setActive,
      isOpen,
      getActiveId,
      _state: {
        id: openPluginId,
        args: openPluginArgs,
      },
    }),
    [open, close, setActive, isOpen, getActiveId, openPluginId, openPluginArgs]
  );

  return pluginControl;
}
