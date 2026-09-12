---
title: Military
description: "War-related scripted triggers: border conflicts, doctrines, resistance, nuclear weapons, unit medals, NATO."
---

## Border conflicts

```
is_border_conflict_defender_vs_FROM = yes
```
Checks that the current country has the `defender_state_vs_@FROM` variable set — i.e. it's the defending side in a border conflict against country `FROM`.

| Trigger | Checks |
|---|---|
| `has_not_initiated_border_incident_with_FROM` | No state of the country is flagged as "defended against FROM" (no incident initiated against FROM) |
| `has_not_initiated_border_incident_with_ROOT` | Same thing, relative to ROOT |
| `has_ROOT_at_least_1_div_in_current_state_scope` | ROOT has at least 1 division in the current state (scope = state) |
| `is_rojava` | `original_tag = ROJ` |
| `is_turkey` | `original_tag = TUR` |

## Military doctrines

`does_not_have_*_doctrine` — check the **absence** of a specific doctrine branch (both the base and the "dedicated/upgraded" version at once):

| Trigger | Doctrines (any one present = condition false) |
|---|---|
| `does_not_have_deep_battle_doctrine` | `deep_battle`, `dedicated_deep_battle` |
| `does_not_have_supply_doctrine` | `decentralized_supply_theory`, `centralized_supply_theory`, `scavenging_supply_theory` |
| `does_not_have_volunteer_force` | `volunteer_fighting_force`, `dedicated_volunteer_fighting_force` |
| `does_not_have_thunder_run_doctrine` | `thunder_run`, `dedicated_thunder_run` |
| `does_not_have_light_infantry_warfare_doctrine` | `light_infantry_warfare`, `dedicated_light_infantry_warfare` |
| `does_not_have_guerrilla_fighters_doctrine`¹ | `guerrilla_fighters`, `dedicated_guerrilla_fighters` |
| `does_not_have_static_defense_doctrine` | `static_defense`, `dedicated_static_defense` |
| `does_not_have_elastic_defense_doctrine` | `elastic_defense`, `dedicated_elastic_defense` |
| `does_not_have_mobile_defense_doctrine` | `mobile_defense`, `dedicated_mobile_defense` |
| `does_not_have_insurgent_operations_doctrine`¹ | `insurgent_operations`, `dedicated_insurgent_operations` |

¹ These two additionally require the `guerrilla_warfare` doctrine to be present inside the `NOT` in the source — meaning they're only true if the country **has picked** the guerrilla branch at all, just not that specific node.

## Resistance

```
should_initiate_resistance = yes
```
Determines whether a state should have resistance: `check_variable = { core_countries^num > 0 }` (someone else still has a core claim on the state) **AND NOT** `is_core_of = FROM` (the state isn't a core of the occupier).

Can be overridden per state by naming a trigger `should_initiate_resistance_<state_id>`, or for several states at once `should_initiate_resistance_<id1>_<id2>_<id3>` — the engine automatically picks that version over the general one if it exists (an example for Germany is left commented out right in the source).

```
should_activate_active_crypto_bonuses = yes
should_not_activate_active_crypto_bonuses = yes
```
Hooks for overriding the AI's decision on whether to activate cracked-crypto bonuses (used when cracking another country's ciphers). Both default to `always = no` in the source — meaning there's no ready-made behavior yet, these are extension points for the future rather than working logic right now.

## Nuclear weapons

| Trigger | Checks |
|---|---|
| `check_if_nuclear_weapons_in_stockpile` | Stockpile has `nuclear_missile_equipment` or `nuclear_ballistic_missile_equipment` above a temp threshold |
| `is_able_to_use_nuclear_strikes` | Nuclear doctrine allows a strike: `full_first_use`, or the country was already nuked before (`has_country_flag = has_been_nuked`) under a retaliation-type doctrine |
| `is_able_to_use_nuclear_strikes_tac` | Same, but specifically for a tactical strike (without `strategic_retaliation_only`) |
| `ai_is_able_to_use_nuclear_strikes_tac` | AI-specific version: either the country isn't AI-controlled, or (if it is) high threat + age 4 has begun + (high target surrender progress OR unfavorable alliance strength ratio) |
| `is_able_to_launch_a_nuclear_strike` | Defensive doctrine (`nuclear_power_def`) and the target is an owned/claimed state with surrender progress > 50%, OR the `nuclear_power_off` doctrine (no restrictions) |

## Humanitarian corridor

```
humanitarian_corridor_avaliable = yes
```
(yes, the source really does misspell it `avaliable` rather than `available` — copy the name literally). Checks that the target state already has tier-4 of the "dependents' productivity" modifier, and that there's a neighboring state — controlled by either ROOT or FROM — without an even higher tier (5–8) of that same modifier, meaning the corridor is still worth setting up.

## NATO

```
NATO_currently_exists = yes
```
Checks that the global `nato_members` array isn't empty (its 0th element ≠ 0).

## Division medals

Two parallel sets — the vanilla one (`00_unit_medals_scripted_triggers.txt`) and the MDC-specific one (`MD_unit_medals_scripted_triggers.txt`), which is **not an extension** of the first but a fully independent list with its own logic:

| Country | Vanilla | MDC |
|---|---|---|
| Germany | `should_have_german_medals_trigger` | `MD_should_have_german_medals_trigger` |
| USA | `should_have_usa_medals_trigger` | `MD_should_have_usa_medals_trigger` |
| USSR/Russia | `should_have_soviet_medals_trigger` | `MD_should_have_soviet_medals_trigger`¹ / `MD_should_have_russian_medals_trigger`² |
| Britain | `should_have_english_medals_trigger` | `MD_should_have_english_medals_trigger` |
| France | `should_have_french_medals_trigger` | `MD_should_have_french_medals_trigger` |
| Italy | `should_have_italian_medals_trigger` | `MD_should_have_italian_medals_trigger` |
| Japan | `should_have_japanese_medals_trigger` | `MD_should_have_japanese_medals_trigger` |
| Ethiopia | `should_have_ethiopian_medals_trigger` | — |
| China | — | `MD_should_have_chinese_medals_trigger` |
| Iran | — | `MD_should_have_iranian_medals_trigger` |
| Wagner (PMC) | — | `MD_should_have_wagner_medals_trigger`³ |
| Holland | — | only accounted for inside `MD_should_have_any_unique_medals_trigger` (`original_tag = HOL`), no dedicated named trigger |

¹ Soviet medals in the MDC version are only granted while the emerging communists are in power (`emerging_communist_state_are_in_power`).
² Russian medals (the new name replacing "Soviet") go to Russia, but only while it's **not** ruled by the military junta (`nationalist_military_junta_are_in_power`).
³ Wagner gets medals either if the country's tag is `WAG`, or if it's Russia under the military junta — meaning the same regime (the junta) switches the country between "Russian" and "Wagner" medals depending on which tag it is.

```
should_have_any_unique_medals_trigger = yes       # vanilla version
MD_should_have_any_unique_medals_trigger = yes    # MDC version
```
An `OR` across every row in the table above — "does this country have a unique medal set at all".
