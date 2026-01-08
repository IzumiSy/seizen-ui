---
editUrl: false
next: false
prev: false
title: "InlineRowSlotRenderer"
---

> **InlineRowSlotRenderer**\<`TData`\>(`__namedParameters`): `Element` \| `null`

Defined in: [SlotRenderer.tsx:246](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/SlotRenderer.tsx#L246)

Renders inline row content for a specific row.
Only renders when:
1. A plugin with inlineRow slot is open (via plugin.open)
2. The openArgs.id matches the row's original.id (supports string or number)
First matching plugin wins.

## Type Parameters

### TData

`TData`

## Parameters

### \_\_namedParameters

`InlineRowSlotRendererProps`\<`TData`\>

## Returns

`Element` \| `null`
