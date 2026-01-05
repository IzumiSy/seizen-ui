import { useState, useEffect } from "react";
import { z } from "zod";
import {
  definePlugin,
  type PluginContext,
} from "@izumisy/seizen-datatable-react/plugin";
import {
  getSelectedRowForDetail,
  subscribeToSelectedRow,
} from "./rowDetailState";

/**
 * Schema for RowDetail plugin configuration
 */
const RowDetailSchema = z.object({
  /** Width of the sidepanel */
  width: z.number().default(320),
});

type RowDetailConfig = z.infer<typeof RowDetailSchema>;

function useSelectedRowForDetail<T>(): T | null {
  const [row, setRow] = useState<T | null>(getSelectedRowForDetail);

  useEffect(() => {
    return subscribeToSelectedRow(() => setRow(getSelectedRowForDetail()));
  }, []);

  return row;
}

/**
 * RowDetailRenderer - Creates the render function for the plugin
 */
function RowDetailRenderer(context: PluginContext<RowDetailConfig>) {
  const { args } = context;

  return function RowDetailPanel() {
    const selectedRow = useSelectedRowForDetail();

    if (!selectedRow) {
      return (
        <div
          style={{
            width: args.width,
            padding: "16px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
          }}
        >
          <p>Click a row to view details</p>
        </div>
      );
    }

    return (
      <div
        style={{
          width: args.width,
          padding: "16px",
          height: "100%",
          overflow: "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {Object.entries(selectedRow as Record<string, unknown>).map(
            ([key, value]) => (
              <div key={key}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "4px",
                  }}
                >
                  {key}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#111827",
                    backgroundColor: "#fff",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    wordBreak: "break-word",
                  }}
                >
                  {formatValue(value)}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };
}

/**
 * Format a value for display
 */
function formatValue(value: unknown): string {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

/**
 * RowDetail Plugin
 *
 * Displays detailed information about a clicked row in a sidepanel.
 *
 * @example
 * ```tsx
 * import { RowDetailPlugin } from "./plugins/RowDetailPlugin";
 * import { setSelectedRowForDetail } from "./plugins/rowDetailState";
 *
 * // In your DataTable setup:
 * const table = useDataTable({
 *   data,
 *   columns,
 *   plugins: [RowDetailPlugin.configure({ title: "User Details" })],
 * });
 *
 * // Handle row clicks:
 * <DataTable table={table} onRowClick={(row) => setSelectedRowForDetail(row)} />
 * ```
 */
export const RowDetailPlugin = definePlugin({
  id: "row-detail",
  name: "Details",
  position: "right-sider" as const,
  args: RowDetailSchema,
  header: "Row Details",
  render: RowDetailRenderer,
});
