---
title: Culture & Tourism
description: "MDC scripted effects for culture and tourism."
---

# Culture & Tourism

## Culture

### Добавить культуру (`add_culture`)

Adds culture. According to the supplied notes, this effect can be used in both a state scope and a country scope.

```text
add_culture = {
    custom_effect_tooltip = add_culture_tt
    add_to_variable = { culture = culture_to_add_temp }
}
```

The effect uses the temporary variable `culture_to_add_temp` as the amount of culture to add.

### Relative culture

Example for a country identifying as Greek:

```text
set_temp_variable = { relative_culture_temp = GRE }
add_relative_culture = yes
```

The example stores `GRE` in the temporary variable `relative_culture_temp`, then calls `add_relative_culture`.

## Tourism

### Добавить туризм (`add_tourism`)

Adds tourism. **This effect can only be used in a state scope.**

```text
add_tourism = {
    custom_effect_tooltip = add_tourism_tt
    add_to_variable = { tourism = tourism_to_add_temp }
}
```

The effect uses the temporary variable `tourism_to_add_temp` as the amount of tourism to add.
