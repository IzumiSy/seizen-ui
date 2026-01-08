---
editUrl: false
next: false
prev: false
title: "Header"
---

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/types.d.ts:115

## Extends

- `CoreHeader`\<`TData`, `TValue`\>.`ColumnSizingHeader`

## Type Parameters

### TData

`TData` *extends* `RowData`

### TValue

`TValue`

## Properties

### colSpan

> **colSpan**: `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:27

The col-span for the header.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#colspan)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.colSpan`

***

### column

> **column**: `Column`\<`TData`, `TValue`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:33

The header's associated column object.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#column)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.column`

***

### depth

> **depth**: `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:39

The depth of the header, zero-indexed based.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#depth)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.depth`

***

### getContext()

> **getContext**: () => `HeaderContext`\<`TData`, `TValue`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:45

Returns the rendering context (or props) for column-based components like headers, footers and filters.

#### Returns

`HeaderContext`\<`TData`, `TValue`\>

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#getcontext)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.getContext`

***

### getLeafHeaders()

> **getLeafHeaders**: () => `Header`\<`TData`, `unknown`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:51

Returns the leaf headers hierarchically nested under this header.

#### Returns

`Header`\<`TData`, `unknown`\>[]

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#getleafheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.getLeafHeaders`

***

### getResizeHandler()

> **getResizeHandler**: (`context?`) => (`event`) => `void`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:173

Returns an event handler function that can be used to resize the header. It can be used as an:
- `onMouseDown` handler
- `onTouchStart` handler

The dragging and release events are automatically handled for you.

#### Parameters

##### context?

`Document`

#### Returns

> (`event`): `void`

##### Parameters

###### event

`unknown`

##### Returns

`void`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getresizehandler)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingHeader.getResizeHandler`

***

### getSize()

> **getSize**: () => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:179

Returns the current size of the header.

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getsize)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingHeader.getSize`

***

### getStart()

> **getStart**: (`position?`) => `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/features/ColumnSizing.d.ts:185

Returns the offset measurement along the row-axis (usually the x-axis for standard tables) for the header. This is effectively a sum of the offset measurements of all preceding headers.

#### Parameters

##### position?

`ColumnPinningPosition`

#### Returns

`number`

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getstart)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)

#### Inherited from

`ColumnSizingHeader.getStart`

***

### headerGroup

> **headerGroup**: [`HeaderGroup`](/seizen-ui/api/datatable/interfaces/headergroup/)\<`TData`\>

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:57

The header's associated header group object.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#headergroup)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.headerGroup`

***

### id

> **id**: `string`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:63

The unique identifier for the header.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#id)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.id`

***

### index

> **index**: `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:69

The index for the header within the header group.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#index)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.index`

***

### isPlaceholder

> **isPlaceholder**: `boolean`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:75

A boolean denoting if the header is a placeholder header.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#isplaceholder)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.isPlaceholder`

***

### placeholderId?

> `optional` **placeholderId**: `string`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:81

If the header is a placeholder header, this will be a unique header ID that does not conflict with any other headers across the table.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#placeholderid)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.placeholderId`

***

### rowSpan

> **rowSpan**: `number`

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:87

The row-span for the header.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#rowspan)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.rowSpan`

***

### subHeaders

> **subHeaders**: `Header`\<`TData`, `TValue`\>[]

Defined in: node\_modules/.pnpm/@tanstack+table-core@8.21.3/node\_modules/@tanstack/table-core/build/lib/core/headers.d.ts:93

The header's hierarchical sub/child headers. Will be empty if the header's associated column is a leaf-column.

#### Link

[API Docs](https://tanstack.com/table/v8/docs/api/core/header#subheaders)

#### Link

[Guide](https://tanstack.com/table/v8/docs/guide/headers)

#### Inherited from

`CoreHeader.subHeaders`
