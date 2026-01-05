import { useMemo, useState, useCallback } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type RowSelectionState,
  type SortingState,
  type ColumnFiltersState,
  type PaginationState,
  type Table,
} from "@tanstack/react-table";
import type { DataTablePlugin } from "../plugin";

// =============================================================================
// Column Types
// =============================================================================

export type DataTableColumn<TData> = ColumnDef<TData, unknown>;

// =============================================================================
// useDataTable Types
// =============================================================================

/**
 * Options for useDataTable hook
 */
export interface UseDataTableOptions<TData> {
  data: TData[];
  columns: DataTableColumn<TData>[];
  plugins?: DataTablePlugin<TData>[];
  initialSelection?: RowSelectionState;
  enableMultiSelect?: boolean;
  onSelectionChange?: (selection: TData[]) => void;
}

/**
 * DataTable instance returned by useDataTable
 */
export interface DataTableInstance<TData> {
  // Selection
  getSelectedRows: () => TData[];
  setSelectedRows: (rows: TData[]) => void;
  clearSelection: () => void;

  // Filtering
  getFilterState: () => ColumnFiltersState;
  setFilter: (filter: ColumnFiltersState) => void;
  getGlobalFilter: () => string;
  setGlobalFilter: (value: string) => void;

  // Sorting
  getSortingState: () => SortingState;
  setSorting: (sorting: SortingState) => void;

  // Pagination
  getPaginationState: () => PaginationState;
  setPageIndex: (index: number) => void;
  setPageSize: (size: number) => void;

  // Data
  getData: () => TData[];

  // Plugins
  plugins: DataTablePlugin<TData>[];

  // TanStack Table instance (for advanced usage)
  _tanstackTable: Table<TData>;
}

/**
 * Hook for creating a data table instance
 * Returns a DataTableInstance with methods for controlling the table
 */
export function useDataTable<TData>({
  data,
  columns,
  plugins = [],
  initialSelection = {},
  enableMultiSelect = true,
  onSelectionChange,
}: UseDataTableOptions<TData>): DataTableInstance<TData> {
  // Table state
  const [rowSelection, setRowSelection] =
    useState<RowSelectionState>(initialSelection);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Handle selection change callback
  const handleRowSelectionChange = useCallback(
    (
      updater:
        | RowSelectionState
        | ((old: RowSelectionState) => RowSelectionState)
    ) => {
      setRowSelection((old) => {
        const newSelection =
          typeof updater === "function" ? updater(old) : updater;
        return newSelection;
      });
    },
    []
  );

  // Create TanStack Table instance
  const tanstackTable = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      sorting,
      columnFilters,
      globalFilter,
      pagination,
    },
    enableRowSelection: true,
    enableMultiRowSelection: enableMultiSelect,
    onRowSelectionChange: handleRowSelectionChange,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Create DataTableInstance with helper methods
  const instance = useMemo<DataTableInstance<TData>>(() => {
    const getSelectedRows = () => {
      return tanstackTable
        .getSelectedRowModel()
        .rows.map((row) => row.original);
    };

    return {
      // Selection
      getSelectedRows,
      setSelectedRows: (rows: TData[]) => {
        const newSelection: RowSelectionState = {};
        rows.forEach((row) => {
          const index = data.indexOf(row);
          if (index !== -1) {
            newSelection[index] = true;
          }
        });
        setRowSelection(newSelection);
      },
      clearSelection: () => setRowSelection({}),

      // Filtering
      getFilterState: () => columnFilters,
      setFilter: setColumnFilters,
      getGlobalFilter: () => globalFilter,
      setGlobalFilter,

      // Sorting
      getSortingState: () => sorting,
      setSorting,

      // Pagination
      getPaginationState: () => pagination,
      setPageIndex: (index: number) =>
        setPagination((prev) => ({ ...prev, pageIndex: index })),
      setPageSize: (size: number) =>
        setPagination((prev) => ({ ...prev, pageSize: size })),

      // Data
      getData: () => data,

      // Plugins
      plugins,

      // TanStack Table instance for advanced usage
      _tanstackTable: tanstackTable,
    };
  }, [
    tanstackTable,
    data,
    plugins,
    columnFilters,
    globalFilter,
    sorting,
    pagination,
  ]);

  // Notify selection changes
  useMemo(() => {
    if (onSelectionChange) {
      onSelectionChange(instance.getSelectedRows());
    }
  }, [rowSelection, onSelectionChange, instance]);

  return instance;
}
