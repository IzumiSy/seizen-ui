---
editUrl: false
next: false
prev: false
title: "Cell"
---

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/types.d.ts:113

## Extends

- `CoreCell`\<`TData`, `TValue`\>.`GroupingCell`

## Type Parameters

### TData

`TData` *extends* `RowData`

### TValue

`TValue`

## Properties

### column

> **column**: `Column`\<`TData`, `TValue`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/cell.d.ts:17

The associated Column object for the cell.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/cell#column)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/cells)

#### Inherited from

`CoreCell.column`

***

### getContext()

> **getContext**: () => `CellContext`\<`TData`, `TValue`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/cell.d.ts:23

Returns the rendering context (or props) for cell-based components like cells and aggregated cells. Use these props with your framework's `flexRender` utility to render these using the template of your choice:

#### Returns

`CellContext`\<`TData`, `TValue`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/cell#getcontext)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/cells)

#### Inherited from

`CoreCell.getContext`

***

### getIsAggregated()

> **getIsAggregated**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:114

Returns whether or not the cell is currently aggregated.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisaggregated)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingCell.getIsAggregated`

***

### getIsGrouped()

> **getIsGrouped**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:120

Returns whether or not the cell is currently grouped.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisgrouped)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingCell.getIsGrouped`

***

### getIsPlaceholder()

> **getIsPlaceholder**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:126

Returns whether or not the cell is currently a placeholder cell.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisplaceholder)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingCell.getIsPlaceholder`

***

### getValue

> **getValue**: `Getter`\<`TValue`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/cell.d.ts:29

Returns the value for the cell, accessed via the associated column's accessor key or accessor function.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/cell#getvalue)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/cells)

#### Inherited from

`CoreCell.getValue`

***

### id

> **id**: `string`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/cell.d.ts:35

The unique ID for the cell across the entire table.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/cell#id)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/cells)

#### Inherited from

`CoreCell.id`

***

### renderValue

> **renderValue**: `Getter`\<`TValue` \| `null`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/cell.d.ts:41

Renders the value for a cell the same as `getValue`, but will return the `renderFallbackValue` if no value is found.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/cell#rendervalue)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/cells)

#### Inherited from

`CoreCell.renderValue`

***

### row

> **row**: [`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/cell.d.ts:47

The associated Row object for the cell.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/cell#row)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/cells)

#### Inherited from

`CoreCell.row`
