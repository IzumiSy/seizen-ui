---
editUrl: false
next: false
prev: false
title: "ContextMenuItemsSlot"
---

Defined in: [definePlugin.ts:86](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L86)

Context menu items configuration for plugins

## Type Parameters

### TData

`TData` = `unknown`

## Properties

### cell?

> `optional` **cell**: [`CellContextMenuItemFactory`](/seizen-ui/api/plugin/interfaces/cellcontextmenuitemfactory/)\<`TData`, `unknown`\>[]

Defined in: [definePlugin.ts:88](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L88)

Cell context menu items - shown when right-clicking a cell

***

### column?

> `optional` **column**: [`ColumnContextMenuItemFactory`](/seizen-ui/api/plugin/interfaces/columncontextmenuitemfactory/)\<`TData`, `unknown`\>[]

Defined in: [definePlugin.ts:90](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L90)

Column context menu items - shown when right-clicking a column header
