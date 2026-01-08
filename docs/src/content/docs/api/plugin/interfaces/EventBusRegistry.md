---
editUrl: false
next: false
prev: false
title: "EventBusRegistry"
---

Defined in: [useEventBus.ts:32](https://github.com/IzumiSy/seizen-ui/blob/5b5ef328b43263bb239079254d093c7d59f54350/packages/datatable-react/src/plugin/useEventBus.ts#L32)

Registry for custom event types.

Plugin authors can extend this interface via module augmentation
to provide type-safe custom events.

## Example

```typescript
// In your plugin file:
declare module "@izumisy/seizen-datatable-react/plugin" {
  interface EventBusRegistry {
    "my-plugin:action": { itemId: string; action: "create" | "delete" };
    "my-plugin:complete": { success: boolean };
  }
}
```

## Extended by

- [`DataTableEventMap`](/seizen-ui/api/plugin/interfaces/datatableeventmap/)
