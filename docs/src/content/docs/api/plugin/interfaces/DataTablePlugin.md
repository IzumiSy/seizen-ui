---
editUrl: false
next: false
prev: false
title: "DataTablePlugin"
---

Defined in: [definePlugin.ts:112](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L112)

DataTable plugin type.
Use DataTablePlugin<unknown> for plugins that don't use TData in context menu.

## Type Parameters

### TData

`TData` = `unknown`

## Properties

### contextMenuItems?

> `optional` **contextMenuItems**: [`ContextMenuItemsSlot`](/seizen-ui/api/plugin/interfaces/contextmenuitemsslot/)\<`TData`\>

Defined in: [definePlugin.ts:120](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L120)

Context menu items for cell and column

***

### id

> **id**: `string`

Defined in: [definePlugin.ts:114](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L114)

Unique plugin identifier

***

### name

> **name**: `string`

Defined in: [definePlugin.ts:116](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L116)

Plugin display name (used as vertical tab label for sidepanel plugins)

***

### slots

> **slots**: [`PluginSlots`](/seizen-ui/api/plugin/interfaces/pluginslots/)\<`TData`\>

Defined in: [definePlugin.ts:118](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L118)

Slot configurations
