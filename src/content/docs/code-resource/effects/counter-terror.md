---
title: Терроризм
description: "Поддержка терроризма и накопление террористической активности"
---

## Эффекты терроризма

<a id="terrorism-support"></a>
### Поддержка терроризма

Доступно только для указанных тегов.

**Коммунистические:** `ITA`, `GER`, `NOR`, `CZE`, `HUN`, `AUS`  
**Другие террористические:** `SYR`, `IRQ`, `SAU`, `UAE`, `EGY`, `NIG`, `ALG`, `TUN`, `TAJ`, `ING`, `KBK`, `KCC`, `DAG`, `CHE`, `ARW`

```txt
set_temp_variable = { modify_terrorism = 1 }
modify_terrorism_support = yes
```

Поддержка терроризма ограничена значением `100`.

<a id="terrorism-mana"></a>
### Накопление террористической активности

Изменяет накопление террористической активности страны.

```txt
add_to_variable = { terrorism_mana = 10 }
clamp_variable = {
    var = terrorism_mana
    min = 1
    max = 100
}
```

<a id="mdc-cartel-related-effects"></a>
