---
title: Terrorism
description: "Terrorism support and terrorist activity accumulation"
---

## Terrorism Effects

<a id="terrorism-support"></a>
### Terrorism Support

Available only for the listed tags.

**Communist:** `ITA`, `GER`, `NOR`, `CZE`, `HUN`, `AUS`  
**Other terrorist:** `SYR`, `IRQ`, `SAU`, `UAE`, `EGY`, `NIG`, `ALG`, `TUN`, `TAJ`, `ING`, `KBK`, `KCC`, `DAG`, `CHE`, `ARW`

```txt
set_temp_variable = { modify_terrorism = 1 }
modify_terrorism_support = yes
```

Terrorism support is capped at `100`.

<a id="terrorism-mana"></a>
### Terrorist Activity Accumulation

Changes the country's terrorist activity accumulation.

```txt
add_to_variable = { terrorism_mana = 10 }
clamp_variable = {
    var = terrorism_mana
    min = 1
    max = 100
}
```

<a id="mdc-cartel-related-effects"></a>
