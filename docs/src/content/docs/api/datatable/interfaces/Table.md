---
editUrl: false
next: false
prev: false
title: "Table"
---

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/types.d.ts:47

## Extends

- `CoreInstance`\<`TData`\>.`HeadersInstance`\<`TData`\>.`VisibilityInstance`\<`TData`\>.`ColumnOrderInstance`\<`TData`\>.`ColumnPinningInstance`\<`TData`\>.`RowPinningInstance`\<`TData`\>.`ColumnFiltersInstance`\<`TData`\>.`GlobalFilterInstance`\<`TData`\>.`GlobalFacetingInstance`\<`TData`\>.`SortingInstance`\<`TData`\>.`GroupingInstance`\<`TData`\>.`ColumnSizingInstance`.`ExpandedInstance`\<`TData`\>.`PaginationInstance`\<`TData`\>.`RowSelectionInstance`\<`TData`\>

## Type Parameters

### TData

`TData` *extends* `RowData`

## Properties

### \_autoResetExpanded()

> **\_autoResetExpanded**: () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:91

#### Returns

`void`

#### Inherited from

`ExpandedInstance._autoResetExpanded`

***

### \_autoResetPageIndex()

> **\_autoResetPageIndex**: () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:56

#### Returns

`void`

#### Inherited from

`PaginationInstance._autoResetPageIndex`

***

### \_features

> **\_features**: readonly `TableFeature`\<`any`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:134

#### Inherited from

`CoreInstance._features`

***

### \_getAllFlatColumnsById()

> **\_getAllFlatColumnsById**: () => `Record`\<`string`, `Column`\<`TData`, `unknown`\>\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:135

#### Returns

`Record`\<`string`, `Column`\<`TData`, `unknown`\>\>

#### Inherited from

`CoreInstance._getAllFlatColumnsById`

***

### \_getColumnDefs()

> **\_getColumnDefs**: () => [`ColumnDef`](/seizen-ui/api/datatable/type-aliases/columndef/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:136

#### Returns

[`ColumnDef`](/seizen-ui/api/datatable/type-aliases/columndef/)\<`TData`, `unknown`\>[]

#### Inherited from

`CoreInstance._getColumnDefs`

***

### \_getCoreRowModel()?

> `optional` **\_getCoreRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:137

#### Returns

`RowModel`\<`TData`\>

#### Inherited from

`CoreInstance._getCoreRowModel`

***

### \_getDefaultColumnDef()

> **\_getDefaultColumnDef**: () => `Partial`\<[`ColumnDef`](/seizen-ui/api/datatable/type-aliases/columndef/)\<`TData`, `unknown`\>\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:138

#### Returns

`Partial`\<[`ColumnDef`](/seizen-ui/api/datatable/type-aliases/columndef/)\<`TData`, `unknown`\>\>

#### Inherited from

`CoreInstance._getDefaultColumnDef`

***

### \_getExpandedRowModel()?

> `optional` **\_getExpandedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:92

#### Returns

`RowModel`\<`TData`\>

#### Inherited from

`ExpandedInstance._getExpandedRowModel`

***

### \_getFilteredRowModel()?

> `optional` **\_getFilteredRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:154

#### Returns

`RowModel`\<`TData`\>

#### Inherited from

`ColumnFiltersInstance._getFilteredRowModel`

***

### \_getGlobalFacetedMinMaxValues()?

> `optional` **\_getGlobalFacetedMinMaxValues**: () => \[`number`, `number`\] \| `undefined`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFaceting.d.ts:4

#### Returns

\[`number`, `number`\] \| `undefined`

#### Inherited from

`GlobalFacetingInstance._getGlobalFacetedMinMaxValues`

***

### \_getGlobalFacetedRowModel()?

> `optional` **\_getGlobalFacetedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFaceting.d.ts:5

#### Returns

`RowModel`\<`TData`\>

#### Inherited from

`GlobalFacetingInstance._getGlobalFacetedRowModel`

***

### \_getGlobalFacetedUniqueValues()?

> `optional` **\_getGlobalFacetedUniqueValues**: () => `Map`\<`any`, `number`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFaceting.d.ts:6

#### Returns

`Map`\<`any`, `number`\>

#### Inherited from

`GlobalFacetingInstance._getGlobalFacetedUniqueValues`

***

### \_getGroupedRowModel()?

> `optional` **\_getGroupedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:173

#### Returns

`RowModel`\<`TData`\>

#### Inherited from

`GroupingInstance._getGroupedRowModel`

***

### \_getOrderColumnsFn()

> **\_getOrderColumnsFn**: () => (`columns`) => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnOrdering.d.ts:39

#### Returns

> (`columns`): `Column`\<`TData`, `unknown`\>[]

##### Parameters

###### columns

`Column`\<`TData`, `unknown`\>[]

##### Returns

`Column`\<`TData`, `unknown`\>[]

#### Inherited from

`ColumnOrderInstance._getOrderColumnsFn`

***

### \_getPaginationRowModel()?

> `optional` **\_getPaginationRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:57

#### Returns

`RowModel`\<`TData`\>

#### Inherited from

`PaginationInstance._getPaginationRowModel`

***

### \_getPinnedRows()

> **\_getPinnedRows**: (`visiblePinnedRows`, `pinnedRowIds`, `position`) => [`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:60

#### Parameters

##### visiblePinnedRows

[`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

##### pinnedRowIds

`string`[] | `undefined`

##### position

`"bottom"` | `"top"`

#### Returns

[`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

#### Inherited from

`RowPinningInstance._getPinnedRows`

***

### \_getRowId()

> **\_getRowId**: (`_`, `index`, `parent?`) => `string`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:139

#### Parameters

##### \_

`TData`

##### index

`number`

##### parent?

[`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>

#### Returns

`string`

#### Inherited from

`CoreInstance._getRowId`

***

### \_getSortedRowModel()?

> `optional` **\_getSortedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSorting.d.ts:210

#### Returns

`RowModel`\<`TData`\>

#### Inherited from

`SortingInstance._getSortedRowModel`

***

### \_queue()

> **\_queue**: (`cb`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:140

#### Parameters

##### cb

() => `void`

#### Returns

`void`

#### Inherited from

`CoreInstance._queue`

***

### firstPage()

> **firstPage**: () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:117

Sets the page index to `0`.

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#firstpage)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.firstPage`

***

### getAllColumns()

> **getAllColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:146

Returns all columns in the table in their normalized and nested hierarchy.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getallcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getAllColumns`

***

### getAllFlatColumns()

> **getAllFlatColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:152

Returns all columns in the table flattened to a single level.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getallflatcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getAllFlatColumns`

***

### getAllLeafColumns()

> **getAllLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:158

Returns all leaf-node columns in the table flattened to a single level. This does not include parent columns.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getallleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getAllLeafColumns`

***

### getBottomRows()

> **getBottomRows**: () => [`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:66

Returns all bottom pinned rows.

#### Returns

[`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getbottomrows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningInstance.getBottomRows`

***

### getCanNextPage()

> **getCanNextPage**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:63

Returns whether the table can go to the next page.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcannextpage)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.getCanNextPage`

***

### getCanPreviousPage()

> **getCanPreviousPage**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:69

Returns whether the table can go to the previous page.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcanpreviouspage)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.getCanPreviousPage`

***

### getCanSomeRowsExpand()

> **getCanSomeRowsExpand**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:98

Returns whether there are any rows that can be expanded.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getcansomerowsexpand)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.getCanSomeRowsExpand`

***

### getCenterFlatHeaders()

> **getCenterFlatHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:161

If pinning, returns headers for all columns that are not pinned, including parent headers.

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterflatheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getCenterFlatHeaders`

***

### getCenterFooterGroups()

> **getCenterFooterGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:137

If pinning, returns the footer groups for columns that are not pinned.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterfootergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getCenterFooterGroups`

***

### getCenterHeaderGroups()

> **getCenterHeaderGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:113

If pinning, returns the header groups for columns that are not pinned.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterheadergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getCenterHeaderGroups`

***

### getCenterLeafColumns()

> **getCenterLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:94

Returns all center pinned (unpinned) leaf columns.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getcenterleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningInstance.getCenterLeafColumns`

***

### getCenterLeafHeaders()

> **getCenterLeafHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:185

If pinning, returns headers for all columns that are not pinned, (not including parent headers).

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterleafheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getCenterLeafHeaders`

***

### getCenterRows()

> **getCenterRows**: () => [`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:72

Returns all rows that are not pinned to the top or bottom.

#### Returns

[`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getcenterrows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningInstance.getCenterRows`

***

### getCenterTotalSize()

> **getCenterTotalSize**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:57

If pinning, returns the total size of the center portion of the table by calculating the sum of the sizes of all unpinned/center leaf-columns.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getcentertotalsize)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.getCenterTotalSize`

***

### getCenterVisibleLeafColumns()

> **getCenterVisibleLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:28

If column pinning, returns a flat array of leaf-node columns that are visible in the unpinned/center portion of the table.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getcentervisibleleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getCenterVisibleLeafColumns`

***

### getColumn()

> **getColumn**: (`columnId`) => `Column`\<`TData`, `unknown`\> \| `undefined`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:164

Returns a single column by its ID.

#### Parameters

##### columnId

`string`

#### Returns

`Column`\<`TData`, `unknown`\> \| `undefined`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getcolumn)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getColumn`

***

### getCoreRowModel()

> **getCoreRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:170

Returns the core row model before any processing has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getcorerowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getCoreRowModel`

***

### getExpandedDepth()

> **getExpandedDepth**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:104

Returns the maximum depth of the expanded rows.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getexpandeddepth)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.getExpandedDepth`

***

### getExpandedRowModel()

> **getExpandedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:110

Returns the row model after expansion has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getexpandedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.getExpandedRowModel`

***

### getFilteredRowModel()

> **getFilteredRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:160

Returns the row model for the table after **column** filtering has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getfilteredrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersInstance.getFilteredRowModel`

***

### getFilteredSelectedRowModel()

> **getFilteredSelectedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:93

Returns the row model of all rows that are selected after filtering has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getfilteredselectedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getFilteredSelectedRowModel`

***

### getFlatHeaders()

> **getFlatHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:149

Returns headers for all columns in the table, including parent headers.

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getflatheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getFlatHeaders`

***

### getFooterGroups()

> **getFooterGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:125

Returns the footer groups for the table.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getfootergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getFooterGroups`

***

### getGlobalAutoFilterFn()

> **getGlobalAutoFilterFn**: () => `FilterFn`\<`TData`\> \| `undefined`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFiltering.d.ts:59

Currently, this function returns the built-in `includesString` filter function. In future releases, it may return more dynamic filter functions based on the nature of the data provided.

#### Returns

`FilterFn`\<`TData`\> \| `undefined`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#getglobalautofilterfn)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)

#### Inherited from

`GlobalFilterInstance.getGlobalAutoFilterFn`

***

### getGlobalFacetedMinMaxValues()

> **getGlobalFacetedMinMaxValues**: () => \[`number`, `number`\] \| `undefined`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFaceting.d.ts:12

Currently, this function returns the built-in `includesString` filter function. In future releases, it may return more dynamic filter functions based on the nature of the data provided.

#### Returns

\[`number`, `number`\] \| `undefined`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/global-faceting#getglobalautofilterfn)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/global-faceting)

#### Inherited from

`GlobalFacetingInstance.getGlobalFacetedMinMaxValues`

***

### getGlobalFacetedRowModel()

> **getGlobalFacetedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFaceting.d.ts:18

Returns the row model for the table after **global** filtering has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/global-faceting#getglobalfacetedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/global-faceting)

#### Inherited from

`GlobalFacetingInstance.getGlobalFacetedRowModel`

***

### getGlobalFacetedUniqueValues()

> **getGlobalFacetedUniqueValues**: () => `Map`\<`any`, `number`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFaceting.d.ts:24

Returns the faceted unique values for the global filter.

#### Returns

`Map`\<`any`, `number`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/global-faceting#getglobalfaceteduniquevalues)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/global-faceting)

#### Inherited from

`GlobalFacetingInstance.getGlobalFacetedUniqueValues`

***

### getGlobalFilterFn()

> **getGlobalFilterFn**: () => `FilterFn`\<`TData`\> \| `undefined`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/GlobalFiltering.d.ts:65

Returns the filter function (either user-defined or automatic, depending on configuration) for the global filter.

#### Returns

`FilterFn`\<`TData`\> \| `undefined`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#getglobalfilterfn)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)

#### Inherited from

`GlobalFilterInstance.getGlobalFilterFn`

***

### getGroupedRowModel()

> **getGroupedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:179

Returns the row model for the table after grouping has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getgroupedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingInstance.getGroupedRowModel`

***

### getGroupedSelectedRowModel()

> **getGroupedSelectedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:99

Returns the row model of all rows that are selected after grouping has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getgroupedselectedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getGroupedSelectedRowModel`

***

### getHeaderGroups()

> **getHeaderGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:101

Returns all header groups for the table.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getheadergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getHeaderGroups`

***

### getIsAllColumnsVisible()

> **getIsAllColumnsVisible**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:34

Returns whether all columns are visible

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getisallcolumnsvisible)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getIsAllColumnsVisible`

***

### getIsAllPageRowsSelected()

> **getIsAllPageRowsSelected**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:105

Returns whether or not all rows on the current page are selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisallpagerowsselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getIsAllPageRowsSelected`

***

### getIsAllRowsExpanded()

> **getIsAllRowsExpanded**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:116

Returns whether all rows are currently expanded.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getisallrowsexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.getIsAllRowsExpanded`

***

### getIsAllRowsSelected()

> **getIsAllRowsSelected**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:111

Returns whether or not all rows in the table are selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisallrowsselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getIsAllRowsSelected`

***

### getIsSomeColumnsPinned()

> **getIsSomeColumnsPinned**: (`position?`) => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:100

Returns whether or not any columns are pinned. Optionally specify to only check for pinned columns in either the `left` or `right` position.

#### Parameters

##### position?

`ColumnPinningPosition`

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getissomecolumnspinned)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningInstance.getIsSomeColumnsPinned`

***

### getIsSomeColumnsVisible()

> **getIsSomeColumnsVisible**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:40

Returns whether any columns are visible

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getissomecolumnsvisible)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getIsSomeColumnsVisible`

***

### getIsSomePageRowsSelected()

> **getIsSomePageRowsSelected**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:117

Returns whether or not any rows on the current page are selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getissomepagerowsselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getIsSomePageRowsSelected`

***

### getIsSomeRowsExpanded()

> **getIsSomeRowsExpanded**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:122

Returns whether there are any rows that are currently expanded.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getissomerowsexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.getIsSomeRowsExpanded`

***

### getIsSomeRowsPinned()

> **getIsSomeRowsPinned**: (`position?`) => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:78

Returns whether or not any rows are pinned. Optionally specify to only check for pinned rows in either the `top` or `bottom` position.

#### Parameters

##### position?

`RowPinningPosition`

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getissomerowspinned)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningInstance.getIsSomeRowsPinned`

***

### getIsSomeRowsSelected()

> **getIsSomeRowsSelected**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:123

Returns whether or not any rows in the table are selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getissomerowsselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getIsSomeRowsSelected`

***

### getLeafHeaders()

> **getLeafHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:173

Returns headers for all leaf columns in the table, (not including parent headers).

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleafheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getLeafHeaders`

***

### getLeftFlatHeaders()

> **getLeftFlatHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:155

If pinning, returns headers for all left pinned columns in the table, including parent headers.

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftflatheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getLeftFlatHeaders`

***

### getLeftFooterGroups()

> **getLeftFooterGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:131

If pinning, returns the footer groups for the left pinned columns.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftfootergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getLeftFooterGroups`

***

### getLeftHeaderGroups()

> **getLeftHeaderGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:107

If pinning, returns the header groups for the left pinned columns.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftheadergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getLeftHeaderGroups`

***

### getLeftLeafColumns()

> **getLeftLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:106

Returns all left pinned leaf columns.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getleftleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningInstance.getLeftLeafColumns`

***

### getLeftLeafHeaders()

> **getLeftLeafHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:179

If pinning, returns headers for all left pinned leaf columns in the table, (not including parent headers).

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftleafheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getLeftLeafHeaders`

***

### getLeftTotalSize()

> **getLeftTotalSize**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:63

Returns the total size of the left portion of the table by calculating the sum of the sizes of all left leaf-columns.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getlefttotalsize)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.getLeftTotalSize`

***

### getLeftVisibleLeafColumns()

> **getLeftVisibleLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:46

If column pinning, returns a flat array of leaf-node columns that are visible in the left portion of the table.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getleftvisibleleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getLeftVisibleLeafColumns`

***

### getPageCount()

> **getPageCount**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:75

Returns the page count. If manually paginating or controlling the pagination state, this will come directly from the `options.pageCount` table option, otherwise it will be calculated from the table data using the total row count and current page size.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpagecount)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.getPageCount`

***

### getPageOptions()

> **getPageOptions**: () => `number`[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:87

Returns an array of page options (zero-index-based) for the current page size.

#### Returns

`number`[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpageoptions)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.getPageOptions`

***

### getPaginationRowModel()

> **getPaginationRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:93

Returns the row model for the table after pagination has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpaginationrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.getPaginationRowModel`

***

### getPreExpandedRowModel()

> **getPreExpandedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:128

Returns the row model before expansion has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getpreexpandedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.getPreExpandedRowModel`

***

### getPreFilteredRowModel()

> **getPreFilteredRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:166

Returns the row model for the table before any **column** filtering has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getprefilteredrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersInstance.getPreFilteredRowModel`

***

### getPreGroupedRowModel()

> **getPreGroupedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:185

Returns the row model for the table before any grouping has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getpregroupedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingInstance.getPreGroupedRowModel`

***

### getPrePaginationRowModel()

> **getPrePaginationRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:99

Returns the row model for the table before any pagination has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getprepaginationrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.getPrePaginationRowModel`

***

### getPreSelectedRowModel()

> **getPreSelectedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:129

Returns the core row model of all rows before row selection has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getpreselectedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getPreSelectedRowModel`

***

### getPreSortedRowModel()

> **getPreSortedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSorting.d.ts:216

Returns the row model for the table before any sorting has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getpresortedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/sorting)

#### Inherited from

`SortingInstance.getPreSortedRowModel`

***

### getRightFlatHeaders()

> **getRightFlatHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:167

If pinning, returns headers for all right pinned columns in the table, including parent headers.

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightflatheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getRightFlatHeaders`

***

### getRightFooterGroups()

> **getRightFooterGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:143

If pinning, returns the footer groups for the right pinned columns.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightfootergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getRightFooterGroups`

***

### getRightHeaderGroups()

> **getRightHeaderGroups**: () => [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:119

If pinning, returns the header groups for the right pinned columns.

#### Returns

[`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightheadergroups)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getRightHeaderGroups`

***

### getRightLeafColumns()

> **getRightLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:112

Returns all right pinned leaf columns.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getrightleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningInstance.getRightLeafColumns`

***

### getRightLeafHeaders()

> **getRightLeafHeaders**: () => [`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:191

If pinning, returns headers for all right pinned leaf columns in the table, (not including parent headers).

#### Returns

[`Header`](/seizen-ui/api/datatable/interfaces/header/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightleafheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`HeadersInstance.getRightLeafHeaders`

***

### getRightTotalSize()

> **getRightTotalSize**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:69

Returns the total size of the right portion of the table by calculating the sum of the sizes of all right leaf-columns.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getrighttotalsize)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.getRightTotalSize`

***

### getRightVisibleLeafColumns()

> **getRightVisibleLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:52

If column pinning, returns a flat array of leaf-node columns that are visible in the right portion of the table.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getrightvisibleleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getRightVisibleLeafColumns`

***

### getRow()

> **getRow**: (`id`, `searchAll?`) => [`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:176

Returns the row with the given ID.

#### Parameters

##### id

`string`

##### searchAll?

`boolean`

#### Returns

[`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getrow)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getRow`

***

### getRowCount()

> **getRowCount**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:81

Returns the row count. If manually paginating or controlling the pagination state, this will come directly from the `options.rowCount` table option, otherwise it will be calculated from the table data.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getrowcount)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.getRowCount`

***

### getRowModel()

> **getRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:182

Returns the final model after all processing from other used features has been applied. This is the row model that is most commonly used for rendering.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getRowModel`

***

### getSelectedRowModel()

> **getSelectedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:135

Returns the row model of all rows that are selected.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getselectedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getSelectedRowModel`

***

### getSortedRowModel()

> **getSortedRowModel**: () => `RowModel`\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSorting.d.ts:222

Returns the row model for the table after sorting has been applied.

#### Returns

`RowModel`\<`TData`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getsortedrowmodel)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/sorting)

#### Inherited from

`SortingInstance.getSortedRowModel`

***

### getState()

> **getState**: () => `TableState`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:188

Call this function to get the table's current state. It's recommended to use this function and its state, especially when managing the table state manually. It is the exact same state used internally by the table for every feature and function it provides.

#### Returns

`TableState`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#getstate)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.getState`

***

### getToggleAllColumnsVisibilityHandler()

> **getToggleAllColumnsVisibilityHandler**: () => (`event`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:58

Returns a handler for toggling the visibility of all columns, meant to be bound to a `input[type=checkbox]` element.

#### Returns

> (`event`): `void`

##### Parameters

###### event

`unknown`

##### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#gettoggleallcolumnsvisibilityhandler)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getToggleAllColumnsVisibilityHandler`

***

### getToggleAllPageRowsSelectedHandler()

> **getToggleAllPageRowsSelectedHandler**: () => (`event`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:141

Returns a handler that can be used to toggle all rows on the current page.

#### Returns

> (`event`): `void`

##### Parameters

###### event

`unknown`

##### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#gettoggleallpagerowsselectedhandler)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getToggleAllPageRowsSelectedHandler`

***

### getToggleAllRowsExpandedHandler()

> **getToggleAllRowsExpandedHandler**: () => (`event`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:134

Returns a handler that can be used to toggle the expanded state of all rows. This handler is meant to be used with an `input[type=checkbox]` element.

#### Returns

> (`event`): `void`

##### Parameters

###### event

`unknown`

##### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#gettoggleallrowsexpandedhandler)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.getToggleAllRowsExpandedHandler`

***

### getToggleAllRowsSelectedHandler()

> **getToggleAllRowsSelectedHandler**: () => (`event`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:147

Returns a handler that can be used to toggle all rows in the table.

#### Returns

> (`event`): `void`

##### Parameters

###### event

`unknown`

##### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#gettoggleallrowsselectedhandler)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.getToggleAllRowsSelectedHandler`

***

### getTopRows()

> **getTopRows**: () => [`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:84

Returns all top pinned rows.

#### Returns

[`Row`](/seizen-ui/api/datatable/interfaces/row/)\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#gettoprows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningInstance.getTopRows`

***

### getTotalSize()

> **getTotalSize**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:75

Returns the total size of the table by calculating the sum of the sizes of all leaf-columns.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#gettotalsize)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.getTotalSize`

***

### getVisibleFlatColumns()

> **getVisibleFlatColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:64

Returns a flat array of columns that are visible, including parent columns.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getvisibleflatcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getVisibleFlatColumns`

***

### getVisibleLeafColumns()

> **getVisibleLeafColumns**: () => `Column`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:70

Returns a flat array of leaf-node columns that are visible.

#### Returns

`Column`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getvisibleleafcolumns)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.getVisibleLeafColumns`

***

### initialState

> **initialState**: `TableState`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:194

This is the resolved initial state of the table.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#initialstate)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.initialState`

***

### lastPage()

> **lastPage**: () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:123

Sets the page index to the last page.

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#lastpage)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.lastPage`

***

### nextPage()

> **nextPage**: () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:105

Increments the page index by one, if possible.

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#nextpage)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.nextPage`

***

### options

> **options**: `RequiredKeys`\<`TableOptionsResolved`\<`TData`\>, `"state"`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:200

A read-only reference to the table's current options.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#options)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.options`

***

### previousPage()

> **previousPage**: () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:111

Decrements the page index by one, if possible.

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#previouspage)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.previousPage`

***

### reset()

> **reset**: () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:206

Call this function to reset the table state to the initial state.

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#reset)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.reset`

***

### resetColumnFilters()

> **resetColumnFilters**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:172

Resets the **columnFilters** state to `initialState.columnFilters`, or `true` can be passed to force a default blank state reset to `[]`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#resetcolumnfilters)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersInstance.resetColumnFilters`

***

### resetColumnOrder()

> **resetColumnOrder**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnOrdering.d.ts:45

Resets the **columnOrder** state to `initialState.columnOrder`, or `true` can be passed to force a default blank state reset to `[]`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#resetcolumnorder)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)

#### Inherited from

`ColumnOrderInstance.resetColumnOrder`

***

### resetColumnPinning()

> **resetColumnPinning**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:118

Resets the **columnPinning** state to `initialState.columnPinning`, or `true` can be passed to force a default blank state reset to `{ left: [], right: [], }`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#resetcolumnpinning)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningInstance.resetColumnPinning`

***

### resetColumnSizing()

> **resetColumnSizing**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:81

Resets column sizing to its initial state. If `defaultState` is `true`, the default state for the table will be used instead of the initialValue provided to the table.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#resetcolumnsizing)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.resetColumnSizing`

***

### resetColumnVisibility()

> **resetColumnVisibility**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:76

Resets the column visibility state to the initial state. If `defaultState` is provided, the state will be reset to `{}`

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#resetcolumnvisibility)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.resetColumnVisibility`

***

### resetExpanded()

> **resetExpanded**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:140

Resets the expanded state of the table to the initial state.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#resetexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.resetExpanded`

***

### resetGlobalFilter()

> **resetGlobalFilter**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:178

Resets the **globalFilter** state to `initialState.globalFilter`, or `true` can be passed to force a default blank state reset to `undefined`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#resetglobalfilter)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersInstance.resetGlobalFilter`

***

### resetGrouping()

> **resetGrouping**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:191

Resets the **grouping** state to `initialState.grouping`, or `true` can be passed to force a default blank state reset to `[]`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#resetgrouping)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingInstance.resetGrouping`

***

### resetHeaderSizeInfo()

> **resetHeaderSizeInfo**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:87

Resets column sizing info to its initial state. If `defaultState` is `true`, the default state for the table will be used instead of the initialValue provided to the table.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#resetheadersizeinfo)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.resetHeaderSizeInfo`

***

### resetPageIndex()

> **resetPageIndex**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:129

Resets the page index to its initial state. If `defaultState` is `true`, the page index will be reset to `0` regardless of initial state.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#resetpageindex)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.resetPageIndex`

***

### resetPageSize()

> **resetPageSize**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:135

Resets the page size to its initial state. If `defaultState` is `true`, the page size will be reset to `10` regardless of initial state.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#resetpagesize)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.resetPageSize`

***

### resetPagination()

> **resetPagination**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:141

Resets the **pagination** state to `initialState.pagination`, or `true` can be passed to force a default blank state reset to `[]`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#resetpagination)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.resetPagination`

***

### resetRowPinning()

> **resetRowPinning**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:90

Resets the **rowPinning** state to `initialState.rowPinning`, or `true` can be passed to force a default blank state reset to `{ top: [], bottom: [], }`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#resetrowpinning)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningInstance.resetRowPinning`

***

### resetRowSelection()

> **resetRowSelection**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:153

Resets the **rowSelection** state to the `initialState.rowSelection`, or `true` can be passed to force a default blank state reset to `{}`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#resetrowselection)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.resetRowSelection`

***

### resetSorting()

> **resetSorting**: (`defaultState?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSorting.d.ts:228

Resets the **sorting** state to `initialState.sorting`, or `true` can be passed to force a default blank state reset to `[]`.

#### Parameters

##### defaultState?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#resetsorting)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/sorting)

#### Inherited from

`SortingInstance.resetSorting`

***

### setColumnFilters()

> **setColumnFilters**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:184

Sets or updates the `state.columnFilters` state.

#### Parameters

##### updater

`Updater`\<[`ColumnFiltersState`](/seizen-ui/api/datatable/type-aliases/columnfiltersstate/)\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#setcolumnfilters)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersInstance.setColumnFilters`

***

### setColumnOrder()

> **setColumnOrder**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnOrdering.d.ts:51

Sets or updates the `state.columnOrder` state.

#### Parameters

##### updater

`Updater`\<`ColumnOrderState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#setcolumnorder)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)

#### Inherited from

`ColumnOrderInstance.setColumnOrder`

***

### setColumnPinning()

> **setColumnPinning**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:124

Sets or updates the `state.columnPinning` state.

#### Parameters

##### updater

`Updater`\<`ColumnPinningState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#setcolumnpinning)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningInstance.setColumnPinning`

***

### setColumnSizing()

> **setColumnSizing**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:93

Sets the column sizing state using an updater function or a value. This will trigger the underlying `onColumnSizingChange` function if one is passed to the table options, otherwise the state will be managed automatically by the table.

#### Parameters

##### updater

`Updater`\<`ColumnSizingState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#setcolumnsizing)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.setColumnSizing`

***

### setColumnSizingInfo()

> **setColumnSizingInfo**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:99

Sets the column sizing info state using an updater function or a value. This will trigger the underlying `onColumnSizingInfoChange` function if one is passed to the table options, otherwise the state will be managed automatically by the table.

#### Parameters

##### updater

`Updater`\<`ColumnSizingInfoState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#setcolumnsizinginfo)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingInstance.setColumnSizingInfo`

***

### setColumnVisibility()

> **setColumnVisibility**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:82

Sets or updates the `state.columnVisibility` state.

#### Parameters

##### updater

`Updater`\<`VisibilityState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#setcolumnvisibility)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.setColumnVisibility`

***

### setExpanded()

> **setExpanded**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:146

Updates the expanded state of the table via an update function or value.

#### Parameters

##### updater

`Updater`\<`ExpandedState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#setexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.setExpanded`

***

### setGlobalFilter()

> **setGlobalFilter**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:190

Sets or updates the `state.globalFilter` state.

#### Parameters

##### updater

`any`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#setglobalfilter)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersInstance.setGlobalFilter`

***

### setGrouping()

> **setGrouping**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:197

Updates the grouping state of the table via an update function or value.

#### Parameters

##### updater

`Updater`\<`GroupingState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#setgrouping)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingInstance.setGrouping`

***

### setOptions()

> **setOptions**: (`newOptions`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:212

This function can be used to update the table options.

#### Parameters

##### newOptions

`Updater`\<`TableOptionsResolved`\<`TData`\>\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#setoptions)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.setOptions`

***

### ~~setPageCount()~~

> **setPageCount**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:145

:::caution[Deprecated]
The page count no longer exists in the pagination state. Just pass as a table option instead.
:::

#### Parameters

##### updater

`Updater`\<`number`\>

#### Returns

`void`

#### Inherited from

`PaginationInstance.setPageCount`

***

### setPageIndex()

> **setPageIndex**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:151

Updates the page index using the provided function or value in the `state.pagination.pageIndex` state.

#### Parameters

##### updater

`Updater`\<`number`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpageindex)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.setPageIndex`

***

### setPageSize()

> **setPageSize**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:157

Updates the page size using the provided function or value in the `state.pagination.pageSize` state.

#### Parameters

##### updater

`Updater`\<`number`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpagesize)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.setPageSize`

***

### setPagination()

> **setPagination**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPagination.d.ts:163

Sets or updates the `state.pagination` state.

#### Parameters

##### updater

`Updater`\<[`PaginationState`](/seizen-ui/api/datatable/interfaces/paginationstate/)\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpagination)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/pagination)

#### Inherited from

`PaginationInstance.setPagination`

***

### setRowPinning()

> **setRowPinning**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:96

Sets or updates the `state.rowPinning` state.

#### Parameters

##### updater

`Updater`\<`RowPinningState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#setrowpinning)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningInstance.setRowPinning`

***

### setRowSelection()

> **setRowSelection**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:159

Sets or updates the `state.rowSelection` state.

#### Parameters

##### updater

`Updater`\<[`RowSelectionState`](/seizen-ui/api/datatable/type-aliases/rowselectionstate/)\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#setrowselection)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.setRowSelection`

***

### setSorting()

> **setSorting**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSorting.d.ts:234

Sets or updates the `state.sorting` state.

#### Parameters

##### updater

`Updater`\<[`SortingState`](/seizen-ui/api/datatable/type-aliases/sortingstate/)\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#setsorting)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/sorting)

#### Inherited from

`SortingInstance.setSorting`

***

### setState()

> **setState**: (`updater`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/table.d.ts:218

Call this function to update the table state.

#### Parameters

##### updater

`Updater`\<`TableState`\>

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/table#setstate)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/tables)

#### Inherited from

`CoreInstance.setState`

***

### toggleAllColumnsVisible()

> **toggleAllColumnsVisible**: (`value?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:88

Toggles the visibility of all columns.

#### Parameters

##### value?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#toggleallcolumnsvisible)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityInstance.toggleAllColumnsVisible`

***

### toggleAllPageRowsSelected()

> **toggleAllPageRowsSelected**: (`value?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:165

Selects/deselects all rows on the current page.

#### Parameters

##### value?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#toggleallpagerowsselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.toggleAllPageRowsSelected`

***

### toggleAllRowsExpanded()

> **toggleAllRowsExpanded**: (`expanded?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:152

Toggles the expanded state for all rows.

#### Parameters

##### expanded?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#toggleallrowsexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedInstance.toggleAllRowsExpanded`

***

### toggleAllRowsSelected()

> **toggleAllRowsSelected**: (`value?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:171

Selects/deselects all rows in the table.

#### Parameters

##### value?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#toggleallrowsselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionInstance.toggleAllRowsSelected`
