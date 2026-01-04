import { flexRender } from "@tanstack/react-table";
import { useDataTable } from "./useDataTable";
import type { DataTableColumn } from "./types";

export interface DataTableProps<TData> {
  /**
   * The data array to display in the table
   */
  data: TData[];

  /**
   * Column definitions for the table
   */
  columns: DataTableColumn<TData>[];
}

/**
 * DataTable component with default UI rendering
 * Uses semantic HTML table elements
 */
export function DataTable<TData>({ data, columns }: DataTableProps<TData>) {
  const table = useDataTable({ data, columns });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
