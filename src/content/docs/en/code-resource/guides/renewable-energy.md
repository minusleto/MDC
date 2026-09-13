---
title: Hydro, Geothermal & Renewable Energy
description: "How to set hydroelectric/geothermal capacity and the renewable energy capacity factor for a state"
---

## Hydroelectric & Geothermal Power

To give a state extra Hydroelectric, Geothermal, or "hotspot" renewable capacity, set a couple of variables and hook up a dynamic modifier.

- **`hydroelectric_energy_production_var`** — average power output (in GW) of all hydropower infrastructure in that state. If you only have annual TWh data, convert it to average GW.
- **`hydroelectric_energy_storage_var`** — storage capacity (in GWh). Obtained by dividing annual TWh by 8.760 (thousands of hours in a year) to get the average power in GW.

```txt
set_variable = { hydroelectric_energy_production_var = 5.636 }
set_variable = { hydroelectric_energy_storage_var = 300 }
add_dynamic_modifier = { modifier = hydroelectric_infrastructure_in_state }
```

The same pattern applies to geothermal power (see the Italian states for a working example).

<a id="renewable-capacity-factor"></a>
## Renewable Energy Capacity Factor

For renewable energy (not hydro/geo), a state's capacity factor comes from the [Global Wind Atlas](https://globalwindatlas.info/en), the **"Capacity Factor - IEC Class I"** field. Find your region on the map and hover over it — the value appears in the bottom-right corner.

Formula:

```
Capacity Factor = Atlas value − 0.25
```

:::caution
The original source of this guide has a prose example that doesn't match its own formula: it says "Atlas 0.80 → capacity factor 0.50", but by the formula 0.80 − 0.25 = **0.55**. The code example below actually uses `0.55` — looks like the prose number is just a typo, not the formula itself. Trust the formula and the code example, not the "0.50" written in the text.
:::

Set as a static state modifier applied at game start:

```txt
set_variable = { state_renewable_capacity_factor_modifier_var = 0.55 }
```
