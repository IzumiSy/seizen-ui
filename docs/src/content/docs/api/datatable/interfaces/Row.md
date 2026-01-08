---
editUrl: false
next: false
prev: false
title: "Row"
---

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/types.d.ts:61

## Extends

- `CoreRow`\<`TData`\>.`VisibilityRow`\<`TData`\>.`ColumnPinningRow`\<`TData`\>.`RowPinningRow`.`ColumnFiltersRow`\<`TData`\>.`GroupingRow`.`RowSelectionRow`.`ExpandedRow`

## Type Parameters

### TData

`TData` *extends* `RowData`

## Properties

### \_getAllCellsByColumnId()

> **\_getAllCellsByColumnId**: () => `Record`\<`string`, [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:3

#### Returns

`Record`\<`string`, [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>\>

#### Inherited from

`CoreRow._getAllCellsByColumnId`

***

### \_getAllVisibleCells()

> **\_getAllVisibleCells**: () => [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:94

#### Returns

[`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

#### Inherited from

`VisibilityRow._getAllVisibleCells`

***

### \_groupingValuesCache

> **\_groupingValuesCache**: `Record`\<`string`, `any`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:82

#### Inherited from

`GroupingRow._groupingValuesCache`

***

### \_uniqueValuesCache

> **\_uniqueValuesCache**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:4

#### Inherited from

`CoreRow._uniqueValuesCache`

***

### \_valuesCache

> **\_valuesCache**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:5

#### Inherited from

`CoreRow._valuesCache`

***

### columnFilters

> **columnFilters**: `Record`\<`string`, `boolean`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:90

The column filters map for the row. This object tracks whether a row is passing/failing specific filters by their column ID.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#columnfilters)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersRow.columnFilters`

***

### columnFiltersMeta

> **columnFiltersMeta**: `Record`\<`string`, `FilterMeta`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnFiltering.d.ts:96

The column filters meta map for the row. This object tracks any filter meta for a row as optionally provided during the filtering process.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#columnfiltersmeta)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)

#### Inherited from

`ColumnFiltersRow.columnFiltersMeta`

***

### depth

> **depth**: `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:11

The depth of the row (if nested or grouped) relative to the root row array.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#depth)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.depth`

***

### getAllCells()

> **getAllCells**: () => [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:17

Returns all of the cells for the row.

#### Returns

[`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#getallcells)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.getAllCells`

***

### getCanExpand()

> **getCanExpand**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:14

Returns whether the row can be expanded.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getcanexpand)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedRow.getCanExpand`

***

### getCanMultiSelect()

> **getCanMultiSelect**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:41

Returns whether or not the row can multi-select.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getcanmultiselect)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.getCanMultiSelect`

***

### getCanPin()

> **getCanPin**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:39

Returns whether or not the row can be pinned.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getcanpin-1)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningRow.getCanPin`

***

### getCanSelect()

> **getCanSelect**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:47

Returns whether or not the row can be selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getcanselect)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.getCanSelect`

***

### getCanSelectSubRows()

> **getCanSelectSubRows**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:53

Returns whether or not the row can select sub rows automatically when the parent row is selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getcanselectsubrows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.getCanSelectSubRows`

***

### getCenterVisibleCells()

> **getCenterVisibleCells**: () => [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:74

Returns all center pinned (unpinned) leaf cells in the row.

#### Returns

[`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getcentervisiblecells)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningRow.getCenterVisibleCells`

***

### getGroupingValue()

> **getGroupingValue**: (`columnId`) => `unknown`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:88

Returns the grouping value for any row and column (including leaf rows).

#### Parameters

##### columnId

`string`

#### Returns

`unknown`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getgroupingvalue)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingRow.getGroupingValue`

***

### getIsAllParentsExpanded()

> **getIsAllParentsExpanded**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:20

Returns whether all parent rows of the row are expanded.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getisallparentsexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedRow.getIsAllParentsExpanded`

***

### getIsAllSubRowsSelected()

> **getIsAllSubRowsSelected**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:59

Returns whether or not all of the row's sub rows are selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisallsubrowsselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.getIsAllSubRowsSelected`

***

### getIsExpanded()

> **getIsExpanded**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:26

Returns whether the row is expanded.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getisexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedRow.getIsExpanded`

***

### getIsGrouped()

> **getIsGrouped**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:94

Returns whether or not the row is currently grouped.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisgrouped)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingRow.getIsGrouped`

***

### getIsPinned()

> **getIsPinned**: () => `RowPinningPosition`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:45

Returns the pinned position of the row. (`'top'`, `'bottom'` or `false`)

#### Returns

`RowPinningPosition`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getispinned-1)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningRow.getIsPinned`

***

### getIsSelected()

> **getIsSelected**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:65

Returns whether or not the row is selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.getIsSelected`

***

### getIsSomeSelected()

> **getIsSomeSelected**: () => `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:71

Returns whether or not some of the row's sub rows are selected.

#### Returns

`boolean`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getissomeselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.getIsSomeSelected`

***

### getLeafRows()

> **getLeafRows**: () => `Row`\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:23

Returns the leaf rows for the row, not including any parent rows.

#### Returns

`Row`\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#getleafrows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.getLeafRows`

***

### getLeftVisibleCells()

> **getLeftVisibleCells**: () => [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:80

Returns all left pinned leaf cells in the row.

#### Returns

[`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getleftvisiblecells)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningRow.getLeftVisibleCells`

***

### getParentRow()

> **getParentRow**: () => `Row`\<`TData`\> \| `undefined`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:29

Returns the parent row for the row, if it exists.

#### Returns

`Row`\<`TData`\> \| `undefined`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#getparentrow)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.getParentRow`

***

### getParentRows()

> **getParentRows**: () => `Row`\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:35

Returns the parent rows for the row, all the way up to a root row.

#### Returns

`Row`\<`TData`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#getparentrows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.getParentRows`

***

### getPinnedIndex()

> **getPinnedIndex**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:51

Returns the numeric pinned index of the row within a pinned row group.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getpinnedindex-1)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningRow.getPinnedIndex`

***

### getRightVisibleCells()

> **getRightVisibleCells**: () => [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnPinning.d.ts:86

Returns all right pinned leaf cells in the row.

#### Returns

[`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getrightvisiblecells)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)

#### Inherited from

`ColumnPinningRow.getRightVisibleCells`

***

### getToggleExpandedHandler()

> **getToggleExpandedHandler**: () => () => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:32

Returns a function that can be used to toggle the expanded state of the row. This function can be used to bind to an event handler to a button.

#### Returns

> (): `void`

##### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#gettoggleexpandedhandler)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedRow.getToggleExpandedHandler`

***

### getToggleSelectedHandler()

> **getToggleSelectedHandler**: () => (`event`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:77

Returns a handler that can be used to toggle the row.

#### Returns

> (`event`): `void`

##### Parameters

###### event

`unknown`

##### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#gettoggleselectedhandler)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.getToggleSelectedHandler`

***

### getUniqueValues()

> **getUniqueValues**: \<`TValue`\>(`columnId`) => `TValue`[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:41

Returns a unique array of values from the row for a given columnId.

#### Type Parameters

##### TValue

`TValue`

#### Parameters

##### columnId

`string`

#### Returns

`TValue`[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#getuniquevalues)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.getUniqueValues`

***

### getValue()

> **getValue**: \<`TValue`\>(`columnId`) => `TValue`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:47

Returns the value from the row for a given columnId.

#### Type Parameters

##### TValue

`TValue`

#### Parameters

##### columnId

`string`

#### Returns

`TValue`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#getvalue)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.getValue`

***

### getVisibleCells()

> **getVisibleCells**: () => [`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnVisibility.d.ts:100

Returns an array of cells that account for column visibility for the row.

#### Returns

[`Cell`](/seizen-ui/api/datatable/interfaces/cell/)\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getvisiblecells)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)

#### Inherited from

`VisibilityRow.getVisibleCells`

***

### groupingColumnId?

> `optional` **groupingColumnId**: `string`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:100

If this row is grouped, this is the id of the column that this row is grouped by.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#groupingcolumnid)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingRow.groupingColumnId`

***

### groupingValue?

> `optional` **groupingValue**: `unknown`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnGrouping.d.ts:106

If this row is grouped, this is the unique/shared value for the `groupingColumnId` for all of the rows in this group.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#groupingvalue)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/grouping)

#### Inherited from

`GroupingRow.groupingValue`

***

### id

> **id**: `string`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:53

The resolved unique identifier for the row resolved via the `options.getRowId` option. Defaults to the row's index (or relative index if it is a subRow).

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#id)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.id`

***

### index

> **index**: `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:59

The index of the row within its parent array (or the root data array).

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#index)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.index`

***

### original

> **original**: `TData`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:65

The original row object provided to the table. If the row is a grouped row, the original row object will be the first original in the group.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#original)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.original`

***

### originalSubRows?

> `optional` **originalSubRows**: `TData`[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:71

An array of the original subRows as returned by the `options.getSubRows` option.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#originalsubrows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.originalSubRows`

***

### parentId?

> `optional` **parentId**: `string`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:77

If nested, this row's parent row id.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#parentid)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.parentId`

***

### pin()

> **pin**: (`position`, `includeLeafRows?`, `includeParentRows?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowPinning.d.ts:57

Pins a row to the `'top'` or `'bottom'`, or unpins the row to the center if `false` is passed.

#### Parameters

##### position

`RowPinningPosition`

##### includeLeafRows?

`boolean`

##### includeParentRows?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#pin-1)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)

#### Inherited from

`RowPinningRow.pin`

***

### renderValue()

> **renderValue**: \<`TValue`\>(`columnId`) => `TValue`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:83

Renders the value for the row in a given columnId the same as `getValue`, but will return the `renderFallbackValue` if no value is found.

#### Type Parameters

##### TValue

`TValue`

#### Parameters

##### columnId

`string`

#### Returns

`TValue`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#rendervalue)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.renderValue`

***

### subRows

> **subRows**: `Row`\<`TData`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/row.d.ts:89

An array of subRows for the row as returned and created by the `options.getSubRows` option.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/row#subrows)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/rows)

#### Inherited from

`CoreRow.subRows`

***

### toggleExpanded()

> **toggleExpanded**: (`expanded?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowExpanding.d.ts:38

Toggles the expanded state (or sets it if `expanded` is provided) for the row.

#### Parameters

##### expanded?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#toggleexpanded)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/expanding)

#### Inherited from

`ExpandedRow.toggleExpanded`

***

### toggleSelected()

> **toggleSelected**: (`value?`, `opts?`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/RowSelection.d.ts:83

Selects/deselects the row.

#### Parameters

##### value?

`boolean`

##### opts?

###### selectChildren?

`boolean`

#### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#toggleselected)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/row-selection)

#### Inherited from

`RowSelectionRow.toggleSelected`
