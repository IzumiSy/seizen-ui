/**
 * Global state to track selected row for detail view
 * This allows row click events from outside to communicate with the plugin
 */
let selectedRowForDetail: unknown = null;
const listeners: Set<() => void> = new Set();

export function setSelectedRowForDetail<T>(row: T | null) {
  selectedRowForDetail = row;
  listeners.forEach((listener) => listener());
}

export function getSelectedRowForDetail<T>(): T | null {
  return selectedRowForDetail as T | null;
}

export function subscribeToSelectedRow(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
