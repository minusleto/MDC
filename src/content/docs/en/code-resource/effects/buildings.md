---
title: Buildings
description: "Building costs and scripted building effects"
---

## MDC Building Costs

For buildings that consume a building slot, the listed cost already includes the cost of the building slot itself.

### Industry

| Building | ID | Cost |
|---|---|---:|
| Civilian Industry | `industrial_complex` | $7.50 |
| Military Industry | `arms_factory` | **$3.75** |
| Dockyard | `dockyard` | $7.50 |
| Offices | `offices` | $12.00 |
| Commercialized Agriculture District | `agriculture_district` | $3.75 |

### Infrastructure & Communications

| Building | ID | Cost |
|---|---|---:|
| Infrastructure | `infrastructure` | $3.50 |
| Air Base | `air_base` | $2.50 |
| Network Infrastructure | `internet_station` | $3.00 |
| Railways | `rail_way` | $0.01 per province |

### Energy & Fuel

| Building | ID | Cost |
|---|---|---:|
| Renewable Energy Infrastructure | `synthetic_refinery` | $8.50 |
| Fuel Silo | `fuel_silo` | $3.00 |
| Fossil Fuel Powerplant | `fossil_powerplant` | $2.25 |
| Nuclear Reactor | `nuclear_reactor` | $9.00 |

### Defense

| Building | ID | Cost |
|---|---|---:|
| SAM Site | `anti_air_building` | $3.25 |
| Radar Station | `radar_station` | $1.75 |
| State-Wide Defensive Network | `stronghold_network` | $8.00 |
| Land Fort | `bunker` | $0.50 per level |
| Coastal Bunker | `coastal_bunker` | $0.50 per level |

### Special & Provincial Buildings

| Building | ID | Cost |
|---|---|---:|
| Missile Launch Site | `rocket_site` | $3.00 |
| Naval Engineering Facility | `naval_facility` | $15.00 |
| Land Warfare Facility | `land_facility` | $15.00 |
| Aerodynamics & Avionics Facility | `air_facility` | $15.00 |
| Civilian R&D Facility | `nuclear_facility` | $15.00 |
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

Example:

```text
117 = {
    one_state_industrial_complex = yes
}
```

If the building cannot be added to the specified state, the effect falls back to a random state owned by the country where the building can be added.

### Civilian Factory

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

### Military Factory

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

### Infrastructure

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

### Dockyard

**Random state**

```text
one_random_dockyard = yes
two_random_dockyards = yes
```

**Specific state**

```text
one_state_dockyard = yes
two_state_dockyard = yes
```

### Offices

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

### Commercialized Agriculture District

**Random state**

```text
one_random_agriculture_district = yes
```

**Specific state**

```text
one_state_agriculture_district = yes
```

### Air Bases

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

### Network Infrastructure

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

### Anti-Air / SAM Site

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

### Radar Station

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

### Synthetic Refinery

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

### Nuclear Reactor

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