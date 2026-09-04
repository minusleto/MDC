---
title: Scopes
description: "Quick scope reference"
---

## What is a scope

A scope determines which game object the current block operates on. MDC scripting commonly uses country, state and scope transitions.

### Common transitions

- `THIS` — current scope.
- `ROOT` — original top-level scope.
- `FROM` — scope from which the transition originated.
- `PREV` — previous scope.

> Always verify the active scope before using an effect or trigger.
