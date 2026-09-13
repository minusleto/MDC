---
title: Basics
description: "Vanilla HOI4 triggers for beginners: NOT/AND/OR, comparison operators, has_stability and other common checks."
---

This page isn't about MDC-specific triggers (see the sections below for those, e.g. [Politics](./political/)) — it's about how triggers work in the HOI4 engine (Clausewitz) in general. If you've modded before, feel free to skip it.

## What a trigger block is

A trigger is a condition check that returns "yes" or "no". Inside `if`, `limit`, `trigger`, `available` and similar blocks, the engine checks the whole list of conditions and requires **all** of them to be true:

```
trigger = {
	is_in_array = { ruling_party = 2 }
	has_war = no
}
```

This means "party 2 is in power **AND** the country isn't at war" — several conditions listed one after another in the same block already behave like `AND`; you almost never need to write `AND = { }` explicitly (except for explicit grouping inside `OR`/`NOT`).

## Logical operators

| Operator | What it does | Example |
|---|---|---|
| `AND` | All conditions inside must be true (this is already the default; `AND = {}` is rarely written, mostly for explicit grouping) | `AND = { has_war = yes tag = GER }` |
| `OR` | **One** true condition inside is enough | `OR = { tag = GER tag = ITA }` |
| `NOT` | Inverts **everything** inside the block (multiple conditions inside are first combined with AND, then the whole result is inverted) | `NOT = { has_war = yes }` — "not at war" |
| `NAND`, `NOR` | No dedicated keywords — same thing via `NOT = { AND = {...} }` / `NOT = { OR = {...} }` | `NOT = { OR = { tag = GER tag = ITA } }` — "neither Germany nor Italy" |

:::caution
A common beginner mistake: `NOT = { tag = GER tag = ITA }` is **not** "not Germany and not Italy" — it's "not (Germany AND Italy)" = "the country isn't simultaneously both", which is true almost always. For "neither one nor the other" you need `NOT = { OR = { ... } }`.
:::

## Comparison operators

For numbers (stability, war support, your own variables, etc.) the engine understands the standard math operators. They work slightly differently depending on whether it's a built-in value or a variable:

**Built-in game values** — the operator sits right next to the trigger:

```
has_stability > 0.5
has_war_support < 0.3
num_of_factories = 20
```

**Custom variables (`set_variable`/`set_temp_variable`)** — need `check_variable` with the operator inside:

```
check_variable = { my_custom_var > 10 }
check_variable = { party_pop_array^2 = party_popularity@democratic }
```

Available operators: `>` greater than, `<` less than, `=` equal to (for numbers — not to be confused with assignment, here it means "equals"), `>=` greater than or equal, `<=` less than or equal.

## Common vanilla triggers

A small cheat-sheet of what shows up in nearly every mod file:

| Trigger | Checks | Example |
|---|---|---|
| `has_stability` | Country's stability level (0–1) | `has_stability > 0.6` |
| `has_war_support` | War support level (0–1) | `has_war_support < 0.4` |
| `has_government` | Ideology in power | `has_government = communism` |
| `has_idea` | Whether the country has a specific idea/bonus | `has_idea = oligarchs` |
| `has_country_flag` | Whether a country flag (scripted marker) is set | `has_country_flag = some_event_happened` |
| `is_in_array` | Whether an index/value exists in a specific country array | `is_in_array = { ruling_party = 2 }` |
| `tag` / `original_tag` | Current/starting country tag | `tag = GER` |
| `exists` | Whether a country with that tag still exists (alive, not annexed) | `exists = FRA` |
| `is_puppet` | Whether the country is someone's puppet subject | `is_puppet = yes` |
| `has_war` | Whether the country is at war (any war) | `has_war = yes` |
| `date` | Compares to the in-game date | `date > 1950.1.1` |

For the full list of vanilla triggers, see the official [HOI4 modding wiki](https://hoi4.paradoxwikis.com/Triggers) — this page only covers what actually comes up a lot in the MDC context.

## custom_trigger_tooltip

Almost every MDC trigger (see [Politics](./political/) and other sections) is wrapped in `custom_trigger_tooltip` — this isn't logic, it's just a way to show the player a readable tooltip instead of grey technical text:

```
custom_trigger_tooltip = {
	tooltip = my_readable_tooltip_key
	has_stability > 0.5
}
```

The player sees the text from the `my_readable_tooltip_key` localisation entry instead of the default "Stability is greater than 50%". It doesn't affect the check's logic at all — it's purely a UI convenience.
