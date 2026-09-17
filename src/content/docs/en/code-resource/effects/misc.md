---
title: Misc
description: "Base-engine effects not tied to any specific MDC mechanic"
---

## Misc

Vanilla HOI4 effects that don't belong to any particular mod mechanic — this is where anything without its own themed page ends up.

### Renaming a province/state

| Effect | Scope | Description |
|---|---|---|
| `set_province_name` | Any (takes `id` explicitly) | Renames a specific province: `set_province_name = { id = 6332 name = "New Name" }` |
| `set_state_name` | **State scope only** (no `id`) | Renames the state whose scope it's called in: `5 = { set_state_name = "New Name" }` or `every_owned_state = { limit = {...} set_state_name = "New Name" }` |

The rename persists through save games and works in multiplayer. No vanilla or mod files get overwritten.

⚠️ **Check `controls_state = X` in the focus's/event's `available`/`limit`** before calling `set_state_name` on a specific state. Without that check you can end up renaming a state you don't actually control (e.g. if the focus became available before you took the state, or you've since lost it) — best avoided.

### Variables and utilities

| Effect/trigger | Description |
|---|---|
| `clamp_variable` | Clamps a variable between `min` and `max` (both optional). Applied as `Max(Min(var, max), min)`. If `max < min`, logs an error in debug mode |
| `random_list` | Picks a random effect from a list by weight (a weight can be a variable). `seed = var_name/const/random` sets a custom seed instead of the scope's seed |
| `is_in_array` | Checks whether a value is in an array: `is_in_array = { array = array_name value = 42 }`, shorthand: `is_in_array = { array_name = 42 }` |

```
clamp_variable = {
	var = num_dogs
	min = 0
	max = num_cats
}

random_list = {
	log = yes # log the dice roll to game.log
	10 = { add_political_power = 10 }
	10 = { add_political_power = 100 }
}

is_in_array = { ruling_party = 12 }
```

### Tooltips and hidden effects

| Effect/trigger | Description |
|---|---|
| `custom_trigger_tooltip` | Works as an `and`-trigger but with a custom tooltip string instead of an auto-generated condition list. If nested inside `NOT = {...}`, checks the `KEY_NOT` localization variant first |
| `custom_effect_tooltip` | Just shows a custom tooltip string, with no condition logic |
| `hidden_effect` | Runs the effect but doesn't show it in the player-facing tooltip — used for plumbing logic (flags, variables) that shouldn't be surfaced in the UI |

### Dynamic modifiers

| Effect/trigger | Description |
|---|---|
| `add_dynamic_modifier` | Adds a dynamic modifier to a country/state/unit leader. Refreshes the cooldown if it's already applied. `days` makes it temporary; `scope` (optional) targets another country/state/variable-scope instead of the current one |
| `has_dynamic_modifier` | Checks whether the scope has a dynamic modifier (same `scope` parameter, if the modifier was targeted at another scope) |

```
add_dynamic_modifier = {
	modifier = my_dynamic_modifier_name
	days = 42
	scope = GER
}

has_dynamic_modifier = {
	modifier = my_dynamic_modifier_name
	scope = GER
}
```

### Cosmetic tags

| Effect/trigger | Description |
|---|---|
| `set_cosmetic_tag` | Sets a country's cosmetic tag (affects display only — flag, name, etc.; doesn't change the country's actual tag): `INS = { set_cosmetic_tag = IN1 }` |
| `has_cosmetic_tag` | Checks whether a country has a specific cosmetic tag set: `INS = { has_cosmetic_tag = INS1 }` |

### Units and civil wars

| Effect/trigger | Description |
|---|---|
| `create_equipment_variant` | Creates a new equipment variant (e.g. a ship class) based on a parent type — `parent_version`, `upgrades`, and `modules` are inherited from the parent unless explicitly overridden |
| `division_template` | Adds a division template to the country |
| `has_civil_war` | Checks whether the country is involved in a civil war — either as the revolter or as the target |
| `original_tag` | Returns the country's original tag — relevant in civil-war contexts where the current scope's tag differs from the original one |

### State ownership and control

| Trigger | Description |
|---|---|
| `controls_state` | Checks the state's **actual controller** (who currently militarily holds the territory) |
| `owns_state` | Checks the state's **de jure owner** (who the state legally belongs to, regardless of occupation) |

The difference matters: an occupied state has `controls_state` pointing to the occupier while `owns_state` still points to the original owner. This is exactly why the `set_state_name` warning above calls for `controls_state`, not `owns_state` — you should only rename what you actually run right now.

### Government and ideology

| Trigger | Description |
|---|---|
| `has_government` | Checks whether the country's ruling party belongs to a base **ideology group** (democratic/communism/fascism/neutrality/nationalist), not a specific MDC subideology — for a specific subideology check, use `ruling_party`/`is_in_array` instead, see [How Elections & Coalitions Work](../guides/elections/) |
| `has_elections` | Checks whether the country allows elections: `has_elections = yes` |
| `has_start_date` | Compares the **current campaign's** start date (not today's in-game date) — useful for events that depend on which year the playthrough itself began |

### Leaders and officers

| Effect/trigger | Description |
|---|---|
| `create_country_leader` | Creates a leader and adds them to the appropriate party in the country (full syntax and examples in the [Subideologies guide](../guides/subideologies/)) |
| `kill_country_leader` | Kills a country leader and removes them entirely — the next person in line for that party becomes the new leader |
| `create_corps_commander` | Creates a corps commander for the country |
| `has_country_leader_with_trait` | Checks whether the country's current leader has the given trait: `has_country_leader_with_trait = big_fat_idiot` |

### States, units, and troops

| Effect/trigger | Description |
|---|---|
| `every_owned_state` | Runs nested effects on every state you own that satisfies `limit` |
| `add_province_modifier` | Adds static modifiers to a specific province. Pick a province explicitly (`province = 500`) or via a filter: `all_provinces`, `limit_to_coastal`, `limit_to_border`, `limit_to_naval_base`, `limit_to_victory_point` |
| `create_unit` | Spawns a unit outside the OOB file (like a normal starting deployment) — you can set a province, prioritize province selection via `country_score`, forbid spawning on enemy territory, and give it an `id` for later removal |
| `num_of_factories` | Checks the total factory count (civilian + military + dockyards) |
| `add_tech_bonus` | Adds a technology bonus with a limited number of uses |

### Diplomatic status

| Trigger | Description |
|---|---|
| `is_in_faction` | Checks whether the country is in any (military) faction |
| `is_puppet` | Checks whether the country is anyone's puppet |
| `is_subject` | Checks whether the country is anyone's subject (a broader category than puppet — covers other kinds of subordination too) |
