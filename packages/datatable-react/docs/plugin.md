# Plugin System

## Motivation

Different use cases require different UI enhancements:

- Admin dashboards need bulk actions and row detail panels
- Data exploration apps need advanced filtering and search
- Analytics tools need column customization and export features

The plugin system allows these features to be added modularly.

## Layout

DataTable provides built-in sidepanels with IDE-style vertical tabs on both sides. Each plugin specifies which side to render on.

```
┌───────┬─────────────────────────────────────────────┬───────┐
│ [N]   │                                             │ [D]   │
│ [a]   │                                             │ [e]   │
│ [v]   │                                             │ [t]   │
│ [i]   │             Table Body                      │ [a]   │
│ [g]   │                                             │ [i]   │
│ [a]   │                                             │ [l]   │
│ [t]   ├─────────────────────────────────────────────┤ [s]   │
│ [e]   │                                             ├───────┤
│       │                                             │ [F]   │
│   ↑   │                                             │ [i]   │
│ left- │                                             │ [l]   │
│ sider │                                             │ [t]   │
│       │                                             │ [e]   │
│       │                                             │ [r]   │
│       │                                             │   ↑   │
│       │                                             │ right-│
│       │                                             │ sider │
└───────┴─────────────────────────────────────────────┴───────┘
```

| Position | Description |
|----------|-------------|
| `left-sider` | IDE-style vertical tab on the left side. Ideal for navigation, tree views. |
| `right-sider` | IDE-style vertical tab on the right side. Ideal for details, inspectors. |

Plugins can render modals/dialogs internally when needed.

## usePluginContext Hook

Inside the plugin's `render` function, use `usePluginContext` to access table state:

```typescript
import { useState } from "react";
import { usePluginContext } from "@izumisy/seizen-datatable-react";

function MyPluginComponent() {
  const {
    // Table instance
    table,
    
    // DataAdapter instance (if provided)
    adapter,
    
    // Current data
    data,
    
    // Selected rows
    selectedRows,
    
    // Type-safe change subscription
    useOnChange,
  } = usePluginContext();

  // Local state (use React's useState as usual)
  const [isOpen, setIsOpen] = useState(false);

  return <div>...</div>;
}
```

## useOnChange Hook

Subscribe to various table state changes with type safety:

```typescript
type ChangeEventMap<TData> = {
  data: TData[];
  selection: RowSelectionState;
  filter: FilterState;
  sorting: SortingState;
  pagination: PaginationState;
};

// Usage
const { useOnChange } = usePluginContext();

// Type-safe: callback receives TData[]
useOnChange("data", (data) => {
  console.log("Data changed:", data);
});

// Type-safe: callback receives RowSelectionState
useOnChange("selection", (selection) => {
  console.log("Selection changed:", selection);
});

// Type-safe: callback receives FilterState
useOnChange("filter", (filter) => {
  console.log("Filter changed:", filter);
});

// Type-safe: callback receives SortingState
useOnChange("sorting", (sorting) => {
  console.log("Sorting changed:", sorting);
});
```

## Built-in Plugins

### RowDetail

Display row details in the sidepanel.

```typescript
import { RowDetail } from "@izumisy/seizen-datatable-plugin-row-detail";

const rowDetailPlugin = RowDetail.configure({
  // Render function for detail content
  render: (row) => <UserDetailView user={row} />,
  // Open on row click
  trigger: "row-click",
});
```

### FilterBuilder

Advanced filtering UI in the sidepanel.

```typescript
import { FilterBuilder } from "@izumisy/seizen-datatable-plugin-filter";

const filterPlugin = FilterBuilder.configure({
  // Filterable columns
  filterableColumns: ["name", "email", "status"],
  // Enable saved filters
  enableSavedFilters: true,
});
```

### ColumnCustomizer

UI for showing/hiding and reordering columns in the sidepanel.

```typescript
import { ColumnCustomizer } from "@izumisy/seizen-datatable-plugin-columns";

const columnPlugin = ColumnCustomizer.configure({
  // Persist column preferences
  persistKey: "users-table-columns",
  // Default visible columns
  defaultVisible: ["name", "email", "status"],
});
```

## Plugin Usage

```tsx
import { DataTable } from "@izumisy/seizen-datatable-react";
import { RowDetail } from "@izumisy/seizen-datatable-plugin-row-detail";
import { FilterBuilder } from "@izumisy/seizen-datatable-plugin-filter";

function UsersTable() {
  return (
    <DataTable
      data={data}
      columns={columns}
      plugins={[
        // These will appear as vertical tabs in the sidepanel
        RowDetail.configure({ render: (row) => <UserDetail user={row} /> }),
        FilterBuilder.configure({ filterableColumns: ["name", "email"] }),
      ]}
    />
  );
}
```

See the `definePlugin` and `contextMenuItem` function documentation for detailed examples of creating custom plugins.
