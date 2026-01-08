---
editUrl: false
next: false
prev: false
title: "CellSlot"
---

Defined in: [definePlugin.ts:66](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L66)

Cell slot configuration - custom cell renderer for all columns

## Type Parameters

### TData

`TData` = `unknown`

## Properties

### render()

> **render**: (`cell`, `column`, `row`) => `ReactNode`

Defined in: [definePlugin.ts:68](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L68)

Render function receiving cell, column, and row from TanStack Table

#### Parameters

##### cell

`Cell`\<`TData`, `unknown`\>

##### column

`Column`\<`TData`, `unknown`\>

##### row

`Row`\<`TData`\>

#### Returns

`ReactNode`
