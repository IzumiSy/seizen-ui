---
editUrl: false
next: false
prev: false
title: "useDataTableEvent"
---

> **useDataTableEvent**\<`TData`, `K`\>(`table`, `event`, `callback`): `void`

Defined in: [packages/datatable-react/src/table/useDataTableEvent.ts:46](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/table/useDataTableEvent.ts#L46)

Hook to subscribe to DataTable events from application code.

This hook allows application code to subscribe to events emitted by
the DataTable without needing to be inside a plugin context.

## Type Parameters

### TData

`TData`

### K

`K` *extends* keyof DataTableEventMap\<unknown\> \| `string` & `object`

## Parameters

### table

[`DataTableInstance`](/seizen-ui/api/datatable/interfaces/datatableinstance/)\<`TData`\>

The DataTable instance from useDataTable

### event

`K`

The event name to subscribe to

### callback

(`payload`) => `void`

The callback function to invoke when the event is emitted

## Returns

`void`

## Example

```tsx
function App() {
  const table = useDataTable({ data, columns });

  // Subscribe to row-click events
  useDataTableEvent(table, "row-click", (row) => {
    console.log("Row clicked:", row);
  });

  // Subscribe to selection changes
  useDataTableEvent(table, "selection-change", (selectedRows) => {
    console.log("Selection changed:", selectedRows);
  });

  return <DataTable table={table} />;
}
```
