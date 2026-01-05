export { DataTable } from "./DataTable";
export { useDataTable } from "./useDataTable";
export type { DataTableProps } from "./DataTable";

// Types
export type {
  DataTableColumn,
  DataTableInstance,
  UseDataTableOptions,
} from "./useDataTable";

// Event types (re-export from plugin)
export type {
  DataTableEventMap,
  DataTableEventName,
  EventBus,
} from "../plugin/useEventBus";

// Re-export useful types from TanStack Table
export type {
  ColumnDef,
  Row,
  Cell,
  Header,
  HeaderGroup,
  Table,
  RowSelectionState,
  SortingState,
  ColumnFiltersState,
  PaginationState,
} from "@tanstack/react-table";
export { flexRender } from "@tanstack/react-table";
