---
editUrl: false
next: false
prev: false
title: "PluginArgsRegistry"
---

Defined in: [packages/datatable-react/src/plugin/usePluginControl.ts:23](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/usePluginControl.ts#L23)

Registry for plugin open() args types.

Plugin authors can extend this interface via module augmentation
to provide type-safe args for their plugins.

## Example

```typescript
// In your plugin file:
declare module "@izumisy/seizen-datatable-react/plugin" {
  interface PluginArgsRegistry {
    "my-plugin": { row: MyRowType; mode: "view" | "edit" };
  }
}
```
