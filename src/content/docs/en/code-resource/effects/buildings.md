---
title: Buildings
description: "Building costs and scripted building effects"
---

## MDC Building Costs

Each of the values for buildings that consume a building slot (i.e. Civilian Industry) has the building slot factored in.

-- State Buildings:

- Civilian Industry (industrial_complex) - $7.50
- Military Industry (arms_factory) - $7.50
- Dockyard (dockyard) - $7.50
- Offices (offices) - $12
- Commercialized Agriculture District - $3.75
- Infrastructure (infrastructure) - $3.50
- Air Base (air_base) - $2.50
- Sam Site (anti_air_building) - $3.25
- Renewable Energy Infrastructure (synthetic_refinery) - $8.50
- Fuel Silo (fuel_silo) - $3.00
- Radar Station (radar_station) - $1.75
- Network Infrastructure (internet_station) - $3.00
- Missile Launch Site (rocket_site) - $3.00
- Nuclear Reactor (nuclear_reactor) - $9.00
- State-Wide Defensive Network (stronghold_network) - $8.00
- Fossil Fuel Powerplant (fossil_powerplant) - $2.25
- **Building Slots Minimum: $1.00 per slot**

-- Provincial Buildings

- Naval Engineering Facility (naval_facility) - $15.00
- Land Warfare Facility (land_facility) - $15.00
- Aerodynamics & Avionics Facility (air_facility) - $15.00
- Civilian R&D Facility (nuclear_facility) - $15.00
- Naval Base (naval_base) - $0.50 per level
- Land Fort (bunker) - $0.50 per level
- Coastal Bunker (coastal_bunker) - $0.50 per level
- Supply Hub (supply_node) - $2.50
- Railways (rail_way) - $0.01 per province

-- Resources:

Resources in MD translates to a 8 resources to one civilian factory. Therefore, if you were to add 1 steel it would cost the nation $0.938 Billion in MD standard. The below example illustrates how you should balance out resource costs.

Example:

```
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


## MDC Building Effects

If you are lazy to calculate cost for common effects with buildings, you can check common\scripted_effects\00_scripted_effects.txt

State Scope effects requires to put the effect inside a state. If the building cannot be added into a state, it will be added to any random owned state.

Example:

```
117 = {
	one_state_industrial_complex = yes
}
```

Also try to use as more as possible these effects.

<a id="civilian-factory"></a>
**Civilian Factory**

```
one_random_industrial_complex = yes #add 1 civ with slot and cost
two_random_industrial_complex = yes #add 2 civs with slots and cost
three_random_industrial_complex = yes #add 3 civs (2 in 1st random state and 3rd in another one) with slots and cost
four_random_industrial_complex = yes #add 4 civs (2 in 1st random state and 2 in another one) with slots and cost

~~State Scope~~
one_state_industrial_complex = yes #add 1 civ with slot and cost in a predefined state
two_state_industrial_complex = yes #add 2 civs with slot and cost in a predefined state
three_state_industrial_complex = yes #add 3 civs with slot and cost in a predefined state
four_state_industrial_complex = yes #add 4 civs with slot and cost in a predefined state
```

<a id="military-factory"></a>
**Military Factory**

```
one_random_arms_factory = yes #add 1 military factory with slot and cost
two_random_arms_factory = yes #add 2 military factories with slots and cost
three_random_arms_factory = yes #add 3 military factories (2 in 1st random state and 3rd in another one) with slots and cost
four_random_arms_factory = yes #add 4 military factories (2 in 1st random state and 2 in another one) with slots and cost

~~State Scope~~
one_state_arms_factory = yes #add 1 military factory with slot and cost in a predefined state
two_state_arms_factory = yes #add 2 military factories with slot and cost in a predefined state
three_state_arms_factory = yes #add 3 military factories with slot and cost in a predefined state
four_state_arms_factory = yes #add 4 military factories with slot and cost in a predefined state
```

<a id="infrastructure"></a>
**Infrastructure**

```
one_random_infrastructure = yes #add 1 infrastructure with cost
two_random_infrastructure = yes #add 2 infrastructure in 2 random states with cost
three_random_infrastructure = yes #add 3 infrastructure in 3 random states with cost

~~State Scope~~
one_state_infrastructure = yes #add 1 infrastructure with cost in a predefined state
two_state_infrastructure = yes #add 2 infrastructure with cost in a predefined state
three_state_infrastructure = yes #add 3 infrastructure with cost in a predefined state
```

<a id="dockyards"></a>
**Dockyards**

```
one_random_dockyard = yes #add 1 dockyard with slot and cost
two_random_dockyards = yes #add 2 dockyards with slots and cost

~~State Scope~~
one_state_dockyard = yes #add 1 dockyard with slot and cost in a predefined state
two_state_dockyard = yes #add 2 dockyards with slot and cost in a predefined state
```

<a id="offices"></a>
**Offices**

The following also give a fossil fuel power plant.

```
one_office_construction = yes #add 1 office construction with slot and cost
two_office_construction = yes #add 2 office constructions with slots and cost
three_office_construction = yes #add 3 office constructions (2 in 1st random state and 3rd in another one state) with slots and cost

~~State Scope~~
one_state_office_construction = yes #add 1 office construction with slot and cost in a predefined state
two_state_office_construction = yes #add 2 office constructions with slots and cost in a predefined state
three_state_office_construction = yes #add 3 office constructions with slots and cost in a predefined state
```

<a id="commercialized-agriculture-district"></a>
**Commercialized Agriculture District**

```
one_random_agriculture_district = yes #add 1 agriculture district construction with slot and cost

~~State Scope~~
one_state_agriculture_district = yes #add 1 agriculture district construction with slot and cost in a predefined state
```

<a id="air-bases-air_base"></a>
**Air bases (air_base)**

```
one_air_base = yes #add 1 air base with cost
two_air_base = yes #add 2 air bases in various states with cost

~~State Scope~~
one_state_air_base = yes #add 1 air base with cost in a predefined state
two_state_air_base = yes #add 2 air bases with cost in a predefined state
```

<a id="network-infrastructure-internet_station"></a>
**Network Infrastructure (internet_station)**

```
one_random_network_infrastructure = yes #add 1 network infrastructure with cost
two_random_network_infrastructure = yes #add 2 network infrastructure in various states with cost

~~State Scope~~
one_state_network_infrastructure = yes #add 1 network infrastructure with cost in a predefined state
two_state_network_infrastructure = yes #add 2 network infrastructure with cost in a predefined state
```

<a id="anti-air-sam-site-anti_air_building"></a>
**Anti Air | Sam Site (anti_air_building)**

```
one_anti_air = yes #add 1 anti air with cost
two_anti_air = yes #add 2 anti airs in various states with cost

~~State Scope~~
one_state_anti_air = yes #add 1 anti air with cost in a predefined state
two_state_anti_air = yes #add 2 anti airs with cost in a predefined state
```

<a id="radar-station-radar_station"></a>
**Radar Station (radar_station)**

```
one_radar_station = yes #add 1 radar station with cost
two_radar_station = yes #add 2 radar stations in various states with cost

~~State Scope~~
one_state_radar_station = yes #add 1 radar station with cost in a predefined state
two_state_radar_station = yes #add 2 radar stations with cost in a predefined state
```

<a id="synthetic-refinery-synthetic_refinery"></a>
**Synthetic refinery (synthetic_refinery)**

```
one_random_synthetic_refinery = yes #add 1 Synthetic refinery with slot and cost
two_random_synthetic_refinery = yes #add 2 Synthetic refineries in various states with slots and cost
three_random_synthetic_refinery = yes #add 3 Synthetic refineries in various states with slots and cost

~~State Scope~~
one_state_synthetic_refinery = yes #add 1 Synthetic refinery with slot and cost in a predefined state
two_state_synthetic_refinery = yes #add 2 Synthetic refineries with slot and cost in a predefined state
three_state_synthetic_refinery = yes #add 3 Synthetic refineries with slot and cost in a predefined state
```

<a id="other-buildings"></a>
**Other buildings**

```
one_random_nuclear_reactor = yes #add 1 nuclear reactor with slot and cost
two_random_nuclear_reactor = yes #add 2 nuclear reactors with slot and cost

~~State Scope~~
one_state_nuclear_reactor = yes #add 1 nuclear reactor with slot and cost in a predefined state
two_state_nuclear_reactor = yes #add 2 nuclear reactors with slot and cost in a predefined state
```

<a id="mdc-economic-effects"></a>
