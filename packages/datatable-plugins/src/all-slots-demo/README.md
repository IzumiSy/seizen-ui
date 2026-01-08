# AllSlotsDemo

A demonstration plugin that showcases all 5 slot types available in the plugin system.

## Import

```tsx
import { AllSlotsDemo } from "@izumisy/seizen-datatable-plugins/all-slots-demo";
```

## Usage

```tsx
const table = useDataTable({
  data,
  columns,
  plugins: [
    AllSlotsDemo.configure({
      sidepanelTitle: "Demo Panel",
      enableCellHighlight: true,
      primaryColor: "#8b5cf6",
    }),
  ],
});

// Open inline row for a specific row
table.plugin.open("all-slots-demo", { id: rowId });
```

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `sidepanelTitle` | `string` | `"All Slots Demo"` | Title shown in sidepanel |
| `enableCellHighlight` | `boolean` | `true` | Highlight numeric cells |
| `primaryColor` | `string` | `"#3b82f6"` | Primary color for styling |

## Slot Demonstrations

| Slot | Description |
|------|-------------|
| `sidepanel` | Shows plugin info, stats, and row click counter |
| `header` | Displays record count and selection info |
| `footer` | Shows column names |
| `cell` | Custom numeric highlighting |
| `inlineRow` | Expandable row details below each row |
