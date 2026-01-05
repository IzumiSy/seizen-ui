import { useState } from "react";
import { z } from "zod";
import {
  definePlugin,
  usePluginContext,
  type PluginContext,
} from "@izumisy/seizen-datatable-react/plugin";

/**
 * Schema for ColumnControl plugin configuration
 */
const ColumnControlSchema = z.object({
  /** Width of the sidepanel */
  width: z.number().default(280),
});

type ColumnControlConfig = z.infer<typeof ColumnControlSchema>;

/**
 * ColumnControlRenderer - Creates the render function for the plugin
 */
function ColumnControlRenderer(context: PluginContext<ColumnControlConfig>) {
  const { args } = context;

  return function ColumnControlPanel() {
    const { columns, table } = usePluginContext();
    const columnVisibility = table.getColumnVisibility();
    const [searchQuery, setSearchQuery] = useState("");

    // Check if column is visible (not explicitly set to false)
    const isColumnVisible = (columnKey: string) =>
      columnVisibility[columnKey] !== false;

    // Filter columns by search query
    const filteredColumns = columns.filter(
      (column) =>
        column.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
        column.key.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div
        style={{
          width: args.width,
          padding: "16px",
          height: "100%",
          overflow: "auto",
        }}
      >
        {/* Search input */}
        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            placeholder="Search columns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              fontSize: "14px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {filteredColumns.map((column) => (
            <label
              key={column.key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                borderRadius: "6px",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
              }}
            >
              <input
                type="checkbox"
                checked={isColumnVisible(column.key)}
                onChange={() => table.toggleColumnVisibility(column.key)}
                style={{
                  width: "16px",
                  height: "16px",
                  cursor: "pointer",
                  accentColor: "#3b82f6",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  color: isColumnVisible(column.key) ? "#111827" : "#9ca3af",
                  fontWeight: isColumnVisible(column.key) ? 500 : 400,
                }}
              >
                {column.header}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  };
}

/**
 * ColumnControl Plugin
 *
 * Allows users to toggle column visibility from a sidepanel.
 * Each column is displayed as a checkbox that can be toggled on/off.
 *
 * @example
 * ```tsx
 * import { ColumnControlPlugin } from "./plugins/ColumnControlPlugin";
 *
 * const table = useDataTable({
 *   data,
 *   columns,
 *   plugins: [ColumnControlPlugin.configure({ width: 280 })],
 * });
 * ```
 */
export const ColumnControlPlugin = definePlugin({
  id: "column-control",
  name: "Columns",
  position: "right-sider" as const,
  args: ColumnControlSchema,
  header: "Column Visibility",
  render: ColumnControlRenderer,
});
