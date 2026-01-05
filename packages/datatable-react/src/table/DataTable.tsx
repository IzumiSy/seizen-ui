import { flexRender } from "@tanstack/react-table";
import type { DataTableInstance } from "./useDataTable";
import { PluginRenderer } from "./PluginRenderer";
import * as styles from "./styles.css";

export interface DataTableProps<TData> {
  /**
   * The table instance from useDataTable
   */
  table: DataTableInstance<TData>;

  /**
   * Additional CSS class name for the table container
   */
  className?: string;
}

/**
 * DataTable component with default UI rendering
 * Uses semantic HTML table elements with CSS Variables for theming
 */
export function DataTable<TData>({ table, className }: DataTableProps<TData>) {
  const tanstack = table._tanstackTable;

  const containerClassName = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <div className={containerClassName}>
      {/* Left Sidepanel */}
      <PluginRenderer position="left-sider" plugins={table.plugins} />

      {/* Main Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            {tanstack.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={styles.th}>
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
            {tanstack.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={styles.tr}
                data-selected={row.getIsSelected() || undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.td}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Sidepanel */}
      <PluginRenderer position="right-sider" plugins={table.plugins} />
    </div>
  );
}
