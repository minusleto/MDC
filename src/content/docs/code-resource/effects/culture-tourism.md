---
title: Культура и туризм
description: "Скриптовые эффекты культуры и туризма MDC."
---

# Культура и туризм

## Культура

### `add_culture`

Добавляет культуру. По предоставленному описанию эффект можно использовать как в scope региона (`state`), так и в scope государства (`country`).

```text
add_culture = {
    custom_effect_tooltip = add_culture_tt
    add_to_variable = { culture = culture_to_add_temp }
}
```

Эффект использует временную переменную `culture_to_add_temp` как величину добавляемой культуры.

### Родственная культура

Пример для государства, которое идентифицирует себя как греческое:

```text
set_temp_variable = { relative_culture_temp = GRE }
add_relative_culture = yes
```

В примере `GRE` записывается во временную переменную `relative_culture_temp`, после чего вызывается `add_relative_culture`.

## Туризм

### Добавление туризма (`add_tourism`)

Добавляет туризм. **Эффект применим только в scope региона (`state`).**

```text
add_tourism = {
    custom_effect_tooltip = add_tourism_tt
    add_to_variable = { tourism = tourism_to_add_temp }
}
```

Эффект использует временную переменную `tourism_to_add_temp` как величину добавляемого туризма.
