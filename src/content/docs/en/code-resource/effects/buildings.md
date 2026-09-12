---
title: Buildings
description: "Building costs and scripted building effects"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## MDC Building Costs

Cost below is what's actually deducted via the ready-made MDC scripted effects (`one_random_*` / `one_state_*` etc.) in `common\\scripted_effects\\00_scripted_effects.txt`. For buildings that consume a building slot, the listed cost already includes the cost of the building slot itself.

### Industry

| Building | ID | Cost |
|---|---|---:|
| Civilian Industry | `industrial_complex` | $3.75 |
| Military Industry | `arms_factory` | $3.75 |
| Dockyard | `dockyard` | $3.75 |
| Offices* | `offices` | $6.00 |
| Commercialized Agriculture District | `agriculture_district` | $1.875 |

\* Office effects always come bundled with a fossil fuel powerplant — $6.00 is the cost of the bundle, not offices alone.

### Infrastructure & Communications

| Building | ID | Cost |
|---|---|---:|
| Infrastructure | `infrastructure` | $1.75 |
| Air Base | `air_base` | $1.25 |
| Network Infrastructure | `internet_station` | $1.50 |
| Railways | `rail_way` | $0.01 per province |

### Energy & Fuel

| Building | ID | Cost |
|---|---|---:|
| Renewable Energy Infrastructure | `synthetic_refinery` | $4.25 |
| Rubber Refinery | `rubber_refinery` | $1.75 |
| Fuel Silo | `fuel_silo` | $1.50 |
| Fossil Fuel Powerplant | `fossil_powerplant` | $1.625 |
| Nuclear Reactor | `nuclear_reactor` | $4.50 |


### Defense

| Building | ID | Cost |
|---|---|---:|
| SAM Site | `anti_air_building` | $1.625 |
| Radar Station | `radar_station` | $0.50 |
| State-Wide Defensive Network | `stronghold_network` | $8.00 |
| Land Fort | `bunker` | $0.50 per level |
| Coastal Bunker | `coastal_bunker` | $0.50 per level |

### Special & Provincial Buildings

| Building | ID | Cost |
|---|---|---:|
| Missile Launch Site | `rocket_site` | $3.00 |
| Naval Engineering Facility | `naval_facility` | $7.50 |
| Land Warfare Facility | `land_facility` | $7.50 |
| Aerodynamics & Avionics Facility | `air_facility` | $7.50 |
| Civilian R&D Facility | `nuclear_facility` | $7.50 |
| Naval Base | `naval_base` | $0.50 per level |
| Supply Hub | `supply_node` | $2.50 |

**Building slot minimum: $1.00 per slot.**

### Resources

In MD, 8 resource units correspond to one civilian factory. Therefore, adding 1 unit of steel costs the nation $0.938 billion under the MD standard. The example below shows the intended way to balance resource costs through the treasury.

```text
capital_scope = {
    add_resource = {
        type = steel
        amount = 4
    }
}
set_temp_variable = { treasury_change = -3.75 }
modify_treasury_effect = yes
```

<a id="mdc-building-effects"></a>

## How to add a building

For standard MDC buildings, use the ready-made scripted effects from `common\\scripted_effects\\00_scripted_effects.txt`. They already contain the logic for adding the building and its cost.

There are two main options:

- `one_random_*`, `two_random_*`, `three_random_*`, `four_random_*` — add the building to random suitable states.
- `one_state_*`, `two_state_*`, `three_state_*`, `four_state_*` — add the building to a specific state.

`one_state_*` and other `*_state_*` effects must be used inside the scope of the target state.

### Free building construction

To add a building directly without charging the treasury through an MDC scripted effect, use `add_building_construction`. The `instant_build = yes` parameter completes the construction immediately.

Template:

```text
add_building_construction = {
    type = industrial_complex
    level = 1
    instant_build = yes
}
```

The `type` parameter specifies the building ID. Available building types documented in this script are:

| Type | ID |
|---|---|
| Civilian Industry | `industrial_complex` |
| Military Industry | `arms_factory` |
| Dockyard | `dockyard` |
| Offices | `offices` |
| Commercialized Agriculture District | `agriculture_district` |
| Infrastructure | `infrastructure` |
| Air Base | `air_base` |
| Network Infrastructure | `internet_station` |
| Railway | `rail_way` |
| Renewable Energy Infrastructure | `synthetic_refinery` |
| Fuel Silo | `fuel_silo` |
| Fossil Fuel Powerplant | `fossil_powerplant` |
| Nuclear Reactor | `nuclear_reactor` |
| SAM Site | `anti_air_building` |
| Radar Station | `radar_station` |
| State-Wide Defensive Network | `stronghold_network` |
| Land Fort | `bunker` |
| Coastal Bunker | `coastal_bunker` |
| Missile Launch Site | `rocket_site` |
| Naval Engineering Facility | `naval_facility` |
| Land Warfare Facility | `land_facility` |
| Aerodynamics & Avionics Facility | `air_facility` |
| Civilian R&D Facility | `nuclear_facility` |
| Naval Base | `naval_base` |
| Supply Hub | `supply_node` |

Example with multiple levels:

```text
add_building_construction = {
    type = arms_factory
    level = 3
    instant_build = yes
}
```

This method does not use `treasury_change`: the costs in the table above apply to the paid MDC scripted effects, while `add_building_construction` in this form is used for free direct construction.

### Industry

#### Civilian Factory

**Random state**

```text
one_random_industrial_complex = yes
two_random_industrial_complex = yes
three_random_industrial_complex = yes
four_random_industrial_complex = yes
```

**Specific state**

```text
one_state_industrial_complex = yes
two_state_industrial_complex = yes
three_state_industrial_complex = yes
four_state_industrial_complex = yes
```

#### Military Factory

**Random state**

```text
one_random_arms_factory = yes
two_random_arms_factory = yes
three_random_arms_factory = yes
four_random_arms_factory = yes
```

**Specific state**

```text
one_state_arms_factory = yes
two_state_arms_factory = yes
three_state_arms_factory = yes
four_state_arms_factory = yes
```

#### Dockyard

**Random state**

```text
one_random_dockyard = yes
two_random_dockyards = yes
```

**Specific state**

```text
one_state_dockyard = yes
two_state_dockyards = yes
```

#### Offices

The following effects also provide a fossil fuel powerplant.

**Random state**

```text
one_office_construction = yes
two_office_construction = yes
three_office_construction = yes
```

**Specific state**

```text
one_state_office_construction = yes
two_state_office_construction = yes
three_state_office_construction = yes
```

#### Commercialized Agriculture District

**Random state**

```text
one_random_agriculture_district = yes
```

**Specific state**

```text
one_state_agriculture_district = yes
```

#### Rubber Refinery

**Random state**

```text
one_random_rubber_refinery = yes
two_random_rubber_refinery = yes
three_random_rubber_refinery = yes
```

**Specific state**

```text
one_state_rubber_refinery = yes
two_state_rubber_refinery = yes
three_state_rubber_refinery = yes
```

### Infrastructure & Communications

#### Infrastructure

**Random state**

```text
one_random_infrastructure = yes
two_random_infrastructure = yes
three_random_infrastructure = yes
```

**Specific state**

```text
one_state_infrastructure = yes
two_state_infrastructure = yes
three_state_infrastructure = yes
```

#### Network Infrastructure

**Random state**

```text
one_random_network_infrastructure = yes
two_random_network_infrastructure = yes
```

**Specific state**

```text
one_state_network_infrastructure = yes
two_state_network_infrastructure = yes
```

#### Air Bases

**Random state**

```text
one_air_base = yes
two_air_base = yes
```

**Specific state**

```text
one_state_air_base = yes
two_state_air_base = yes
```

### Energy & Fuel

#### Renewable Energy Infrastructure

**Random state**

```text
one_random_synthetic_refinery = yes
two_random_synthetic_refinery = yes
three_random_synthetic_refinery = yes
```

**Specific state**

```text
one_state_synthetic_refinery = yes
two_state_synthetic_refinery = yes
three_state_synthetic_refinery = yes
```

#### Fuel Silo

**Random state**

```text
one_fuel_reserve = yes
two_fuel_reserve = yes
```

**Specific state**

```text
one_state_fuel_reserve = yes
two_state_fuel_reserve = yes
```

#### Fossil Fuel Powerplant

Standalone from offices — for when you only need the powerplant.

**Random state**

```text
one_random_fossil_fuel_powerplant = yes
two_random_fossil_fuel_powerplant = yes
```

**Specific state**

```text
one_state_fossil_fuel_powerplant = yes
two_state_fossil_fuel_powerplant = yes
```

#### Nuclear Reactor

**Random state**

```text
one_random_nuclear_reactor = yes
two_random_nuclear_reactor = yes
```

**Specific state**

```text
one_state_nuclear_reactor = yes
two_state_nuclear_reactor = yes
```

### Defense

#### Anti-Air / SAM Site

**Random state**

```text
one_anti_air = yes
two_anti_air = yes
```

**Specific state**

```text
one_state_anti_air = yes
two_state_anti_air = yes
```

#### Radar Station

**Random state**

```text
one_radar_station = yes
two_radar_station = yes
```

**Specific state**

```text
one_state_radar_station = yes
two_state_radar_station = yes
```

### Special & Provincial Buildings

#### Research Facilities

Always placed in a random province of the current state (no "specific state" variant):

```text
one_random_land_facility = yes    # Land Warfare Facility
one_random_naval_facility = yes   # Naval Engineering Facility
one_random_air_facility = yes     # Aerodynamics & Avionics Facility
one_random_nuclear_facility = yes # Civilian R&D Facility
```