---
title: Military
description: "Military scripted effects: divisions, commanders, equipment, and military industrial organizations."
---

# Military Effects

Effects used to modify armies, commanders, military equipment, and military industrial organizations.

## Armies and Divisions

### `create_unit`

Creates one or more divisions from an existing division template.

| Parameter | Purpose |
|---|---|
| `division` | Description of the division to create: name, template, and starting experience. |
| `owner` | Country that owns the created division. |
| `count` | Number of divisions to create. |
| `start_experience_base` | Base starting experience of the created division. |
| `start_experience_factor` | Starting-experience multiplier of the created division. |
| `prioritize_location` | Controls the priority used when selecting the spawn location. |

Example from MDC:

```text
create_unit = {
    division = "name = \"Russian Revolutionaries\" division_template = \"Russian Revolutionaries\" start_experience_factor = 0.1"
    owner = SOV
}
```

Multiple divisions can be created at once:

```text
create_unit = {
    division = "name = \"6th. Gardekorps Division\" division_template = \"Gardekorps Division\" start_experience_factor = 1.0"
    owner = ROOT
    count = 1
}
```

### Military Experience

| Effect | Purpose |
|---|---|
| `army_experience` | Adds army experience. |
| `air_experience` | Adds air experience. |
| `navy_experience` | Adds navy experience. |

Example:

```text
army_experience = 25
air_experience = 25
navy_experience = 25
```

## Commanders

### `create_corps_commander`

Creates a new general and allows its main parameters to be set immediately.

| Parameter | Purpose |
|---|---|
| `name` | Commander name. |
| `portrait_path` | Path to the commander's portrait. |
| `traits` | Traits assigned to the commander on creation. |
| `skill` | Starting commander skill level. |

Example:

```text
create_corps_commander = {
    name = "Viktor Zolotov"
    portrait_path = "gfx/leaders/SOV/SOV_zolotov.dds"
    traits = { guerrilla_leader_trait }
    skill = 1
}
```

This allows a unique general to be created directly from an effect: name, portrait, skill level, and starting traits are defined in one block.

## Equipment

### `add_equipment_to_stockpile`

Adds or removes equipment from a country's stockpile. A specific equipment variant and producer can also be specified.

| Parameter | Purpose |
|---|---|
| `type` | Equipment type. |
| `amount` | Quantity. A positive value adds equipment; a negative value removes it. |
| `variant_name` | Specific equipment variant. |
| `producer` | Country that produced the equipment. |

Example with a specific variant:

```text
add_equipment_to_stockpile = {
    type = medium_tank_artillery_chassis_0
    variant_name = "2S3 Akatsiya"
    amount = 300
}
```

Example with a producer:

```text
add_equipment_to_stockpile = {
    type = infantry_weapons2
    amount = 6000
    producer = SOV
}
```

### `create_equipment_variant`

Creates a new equipment variant from the specified equipment type and parent version.

| Parameter | Purpose |
|---|---|
| `name` | Name of the new variant. |
| `type` | Equipment type for which the variant is created. |
| `name_group` | Name group used for naming. |
| `parent_version` | Parent equipment version. |

Example from MDC:

```text
create_equipment_variant = {
    name = "Frankenthal 2 Class"
    type = corvette_hull_4
    name_group = GER_MODERN_CORVETTES_NAMES
    parent_version = 0
}
```

## Military Industrial Organizations (MIO)

MIO effects modify a specific military industrial organization or its general parameters.

### `add_mio_funds`

Adds funds to a specific MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_funds = 1500
}
```

### `add_mio_funds_gain_factor`

Changes the multiplier for MIO fund gain.

```text
add_mio_funds_gain_factor = 0.1
```

### `add_mio_size`

Changes the size/level of an MIO.

```text
mio:GER_artec = {
    add_mio_size = 2
}
```

### `add_mio_size_up_requirement_factor`

Changes the requirement multiplier for increasing MIO size. A negative value reduces the requirement.

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
}
```

### `add_mio_research_bonus`

Adds a research bonus associated with an MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_research_bonus = 0.15
}
```

MIO parameters can be combined in the same block:

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
    add_mio_funds = 1500
    add_mio_research_bonus = 0.15
}
```
