---
title: Misc
description: "Base-engine effects not tied to any specific MDC mechanic"
---

## Misc

Vanilla HOI4 effects that don't belong to any particular mod mechanic — this is where anything without its own themed page ends up.

### Renaming a province/state

| Effect | Scope | Description |
|---|---|---|
| `set_province_name` | Any (takes `id` explicitly) | Renames a specific province: `set_province_name = { id = 6332 name = "New Name" }` |
| `set_state_name` | **State scope only** (no `id`) | Renames the state whose scope it's called in: `5 = { set_state_name = "New Name" }` or `every_owned_state = { limit = {...} set_state_name = "New Name" }` |

The rename persists through save games and works in multiplayer. No vanilla or mod files get overwritten.
