---
title: Military
description: "Reference for effects related to armies, commanders, equipment, and military industrial organizations."
---

# Military Effects

Effects that control land forces, commanders, military equipment, and military industrial organizations.

## Divisions

### Create a division

`create_unit` creates one or more divisions from an **existing division template**.

> **Important:** a division template (`division_template`) is required to create a division. If the specified template does not exist, the division **will not be created**.

| Parameter | What it does |
|---|---|
| `division` | Describes the division to create: name, template, and starting experience. |
| `owner` | Country that will own the division. |
| `count` | Number of divisions to create. |
| `start_experience_base` | Sets the division's base starting experience. |
| `start_experience_factor` | Multiplies the division's starting experience. |
| `prioritize_location` | Sets the priority when choosing the spawn location. |

Example:

```text
create_unit = {
    division = "name = \"Russian Revolutionaries\" division_template = \"Russian Revolutionaries\" start_experience_factor = 0.1"
    owner = SOV
}
```

Here, `division_template = "Russian Revolutionaries"` points to an existing division template. A division cannot be created without one.

### Create a division template

`division_template` creates a template that can then be used when creating divisions.

A template defines which combat battalions and support companies make up the division. The template name in `name` must match the name used in `division_template` inside `create_unit`.

```text
division_template = {
    name = "Infantry Division"
    regiments = {
        infantry = { x = 0 y = 0 }
        infantry = { x = 0 y = 1 }
        infantry = { x = 0 y = 2 }
        infantry = { x = 1 y = 0 }
        infantry = { x = 1 y = 1 }
        infantry = { x = 1 y = 2 }
    }
    support = {
        engineer = { x = 0 y = 0 }
        artillery = { x = 0 y = 1 }
    }
}
```

Here, `name = "Infantry Division"` is the template's name. It can then be used like this:

```text
create_unit = {
    division = "name = \"My Infantry Division\" division_template = \"Infantry Division\""
    owner = ROOT
}
```

`regiments` defines the combat battalions, while `support` defines support companies. The `x` and `y` coordinates determine where each unit is placed in the template.

## Military experience

### Add army experience

`army_experience` adds experience to the army.

```text
army_experience = 25
```

### Add air experience

`air_experience` adds experience to the air force.

```text
air_experience = 25
```

### Add navy experience

`navy_experience` adds experience to the navy.

```text
navy_experience = 25
```

## Doctrines and mastery

### Bonus to doctrine mastery gain

`add_mastery_bonus` temporarily increases **doctrine mastery** gain. The effect works in **COUNTRY scope** and lasts for the specified number of days. The `bonus` value is a factor: `0.1` = +10%, `0.25` = +25%, `1.0` = +100%.

You can filter which doctrine paths receive the bonus. If a filter is omitted, it counts as passed, so without filters the effect can affect all matching active tracks.

| Parameter | What it does |
|---|---|
| `bonus` | Bonus factor for mastery gain. `0.1` = +10%. |
| `days` | Number of days the bonus lasts. |
| `name` | Localization key shown as the source of the bonus. |
| `folder` | Limits the bonus to a doctrine folder, such as `land`. |
| `grand_doctrine` | Limits the bonus to a grand doctrine, such as `mobile_warfare`. |
| `sub_doctrine` | Limits the bonus to a specific sub-doctrine. |
| `track` | Limits the bonus to a specific track, such as `infantry`. |
| `index` | Track index within the folder, starting at `0`. |

**Example: bonus to all land tracks:**

```text
add_mastery_bonus = {
    bonus = 0.10
    days = 90
    name = MDC_land_mastery_bonus
    folder = land
}
```

**Example: bonus to the infantry track:**

```text
add_mastery_bonus = {
    bonus = 0.25
    days = 365
    name = MDC_infantry_mastery_bonus
    track = infantry
}
```

**Example: precise filtering by folder, grand doctrine, sub-doctrine, and track:**

```text
add_mastery_bonus = {
    bonus = 0.50
    days = 180
    name = MDC_mobile_infantry_mastery_bonus
    folder = land
    grand_doctrine = mobile_warfare
    sub_doctrine = mobile_infantry
    track = infantry
}
```

You can add `index` when you need to select a specific position within a track, for example `index = 1`. The index starts at `0`.

> **Do not confuse this with `add_mastery` and `add_daily_mastery`:** `add_mastery` immediately adds a fixed amount of mastery, `add_daily_mastery` adds a fixed amount of mastery each day for a limited number of days, while `add_mastery_bonus` temporarily increases mastery gain by a percentage.

## Commanders

### Create a general

`create_corps_commander` creates a new general and allows their main parameters to be set immediately.

| Parameter | What it does |
|---|---|
| `name` | Commander's name. |
| `portrait_path` | Path to the commander's portrait. |
| `traits` | Traits assigned to the commander on creation. |
| `skill` | Commander's starting skill level. |

Example:

```text
create_corps_commander = {
    name = "Viktor Zolotov"
    portrait_path = "gfx/leaders/SOV/SOV_zolotov.dds"
    traits = { guerrilla_leader_trait }
    skill = 1
}
```

## Military equipment

### Add equipment to the stockpile

`add_equipment_to_stockpile` adds equipment to a country's stockpile or removes it from the stockpile.

| Parameter | What it does |
|---|---|
| `type` | Equipment type. |
| `amount` | Quantity. A positive value adds equipment; a negative value removes it. |
| `variant_name` | Specific equipment variant. |
| `producer` | Country that produced the equipment. |

Example:

```text
add_equipment_to_stockpile = {
    type = medium_tank_artillery_chassis_0
    variant_name = "2S3 Akatsiya"
    amount = 300
}
```

### Create an equipment variant

`create_equipment_variant` creates a new equipment variant based on the specified type and parent version.

| Parameter | What it does |
|---|---|
| `name` | Name of the new variant. |
| `type` | Equipment type for which the variant is created. |
| `name_group` | Name group used for the equipment name. |
| `parent_version` | Parent equipment version. |

Example:

```text
create_equipment_variant = {
    name = "Frankenthal 2 Class"
    type = corvette_hull_4
    name_group = GER_MODERN_CORVETTES_NAMES
    parent_version = 0
}
```

## Military industrial organizations

These effects change the parameters of a specific military industrial organization (MIO).

### Add organization funds

`add_mio_funds` adds funds to an MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_funds = 1500
}
```

### Change fund gain

`add_mio_funds_gain_factor` changes the multiplier for MIO fund gain.

```text
add_mio_funds_gain_factor = 0.1
```

### Change organization size

`add_mio_size` changes the size/level of an MIO.

```text
mio:GER_artec = {
    add_mio_size = 2
}
```

### Change the level-up requirement

`add_mio_size_up_requirement_factor` changes the requirement multiplier for increasing MIO size. A negative value reduces the requirement.

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
}
```

### Add a research bonus

`add_mio_research_bonus` adds a research bonus associated with an MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_research_bonus = 0.15
}
```

Several MIO parameters can be used in the same block:

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
    add_mio_funds = 1500
    add_mio_research_bonus = 0.15
}
```
