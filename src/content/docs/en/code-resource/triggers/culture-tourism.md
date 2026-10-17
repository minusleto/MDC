---
title: Culture & Tourism
description: "MDC culture triggers and decision cost conditions."
---

# Culture & Tourism

## Scripted culture triggers

These triggers check culture thresholds:

```text
has_50_culture = yes
has_100_culture = yes
```

The supplied notes list thresholds of 50 and 100 culture. If other values are needed, more triggers can be added following the same pattern.

## Culture requirement in decision costs

For decisions, check the amount of culture with `custom_cost_trigger` and set the cost text with `custom_cost_text`:

```text
custom_cost_trigger = {
    check_variable = { culture > 99 }
}
custom_cost_text = culture_100_0
```

The condition requires the `culture` variable to be greater than 99; the decision cost text is selected by the `culture_100_0` key.
