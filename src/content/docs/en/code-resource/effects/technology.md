---
title: Technology
description: "Technology research effects."
---

<a id="add-tech-bonus"></a>
## `add_tech_bonus`

Grants the country a **limited-use research bonus**. The bonus can be tied either to specific technologies with `technology` or to a technology category with `category`.

### Parameters

| Parameter | What it does |
|---|---|
| `name` | Name of the bonus shown in the research interface. Optional. |
| `bonus` | Research speed bonus. `0.5` = +50% research speed when the bonus is used, `1.0` = +100%. |
| `uses` | Number of times the bonus can be used. Default is 1. |
| `ahead_reduction` | Reduction of the penalty for researching a technology **ahead of time**. `1` means the ahead-of-time penalty is fully (100%) removed for that use. |
| `category` | Technology category the bonus applies to. Multiple categories can be specified. |
| `technology` | Specific technology the bonus applies to. Multiple technologies can be specified. |

### Bonus for specific technologies

With `technology`, the bonus is available only for the listed technologies:

```text
add_tech_bonus = {
    name = assembly_bonus
    bonus = 0.5
    uses = 2
    technology = improved_machine_tools
    technology = advanced_machine_tools
    technology = assembly_line_production
}
```

The country receives **2 uses of a +50% bonus**, which can be spent on any two of the listed technologies.

### Bonus for a category

Instead of listing individual technologies, use `category`:

```text
add_tech_bonus = {
    name = electronics_bonus
    bonus = 0.5
    uses = 1
    category = electronics
}
```

This bonus can be used once on a technology in the `electronics` category.

### `ahead_reduction`

`ahead_reduction` is not an additional research-speed percentage. It reduces the **penalty for researching a technology before its historical date**.

For example:

```text
add_tech_bonus = {
    name = electronics_bonus
    bonus = 0.5
    ahead_reduction = 1
    uses = 1
    category = electronics
}
```

With this combination, the single use gives a choice between **+50% research speed** and **fully (100%) removing the ahead-of-time penalty** for an applicable technology. `ahead_reduction` is therefore part of the research bonus, not a permanent country modifier.

This is especially useful for effects that should let a country research a specific technology or technology category earlier than usual.

### `bonus` and `ahead_reduction` together

Both parameters can be specified in the same `add_tech_bonus`. They describe **two types of benefit provided by the same research bonus**, rather than permanent country modifiers.

```text
add_tech_bonus = {
    name = tank_development_bonus
    bonus = 1.0
    ahead_reduction = 1
    uses = 1
    category = armor
}
```

Here the single use provides either **+100% research speed** or **full removal of the ahead-of-time penalty** for an applicable technology.

<a id="category-and-technology"></a>
## `category` and `technology`

`category` selects a technology group, while `technology` selects specific technologies. Both parameters support multiple values.

Research-bonus categories are defined by the game in `common/technology_tags/`, while individual technologies are defined in `common/technologies/`. We will document the full category list separately.
