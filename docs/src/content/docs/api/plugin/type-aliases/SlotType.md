---
editUrl: false
next: false
prev: false
title: "SlotType"
---

> **SlotType** = `"sidepanel"` \| `"header"` \| `"footer"` \| `"cell"` \| `"inlineRow"`

Defined in: [definePlugin.ts:30](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/definePlugin.ts#L30)

Slot types available for plugins to render components.

- `sidepanel`: IDE-style vertical tab sidepanel (left or right)
- `header`: Renders between table header and body rows
- `footer`: Renders below the table
- `cell`: Custom cell renderer applied to all columns (first match wins)
- `inlineRow`: Renders below a specific row when opened (first match wins)
