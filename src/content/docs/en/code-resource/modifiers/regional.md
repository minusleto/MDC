---
title: Regional Modifiers
description: "State-level modifiers, sorted by category"
---

## Regional Modifiers

Modifiers that apply at the level of a specific state rather than the whole country. Base game modifiers first, then MDC's own modifiers sorted into the same categories as the regular modifiers.

<a id="vanilla"></a>
### Vanilla (base game)

| Modifier | Description | Note |
|---|---|---|
| `local_building_slots` | Starting number of shared building slots in the state | Set by the state category, integer |
| `local_building_slots_factor` | Same, as a percentage | N/A |
| `resistance_growth` | Changes the speed of resistance growth in the state | N/A |
| `recruitable_population_factor` | Changes the share of the state's population available for recruitment | N/A |
| `air_defence` | Changes the state's anti-air strength | Set by the AA building |
| `attrition` | Changes troop attrition | Usually country-scoped, but also works in state/province scope |
| `state_resource_<resource>` | Changes the output of a specific resource in the state (e.g. `state_resource_steel`) | Confirmed via Paradox's official modifiers documentation |
| `state_resources_factor` | Same, but for all of the state's resources, as a percentage | N/A |
| `temporary_state_resource_<resource>` | Temporarily changes resource output in the state | Removed separately, not permanent |

<a id="economic"></a>
### Economic

| Modifier | Description | Note |
|---|---|---|
| `state_productivity_growth_modifier` | State level modifier to increase/decrease the productivity growth of a state | N/A |
| `state_monthly_population` | Monthly population growth in a specific state | N/A |

<a id="energy"></a>
### Energy

| Modifier | Description | Note |
|---|---|---|
| `state_renewable_energy_generation_modifier` | Modifies the amount of State Renewable Energy Generation | N/A |
| `state_renewable_capacity_factor_modifier` | Modifies the renewable energy capacity factor in the state | N/A |
