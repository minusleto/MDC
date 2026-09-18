---
title: Internal Factions
description: "Internal faction effects and commands"
---

## MDC Internal Faction Effects

These effects **change** faction opinion. To **check** the current opinion level (hostile/negative/indifferent/positive/enthusiastic) instead — see [Triggers → Internal Factions](../triggers/internal-factions/).

### How It Works

Every faction has a hidden **opinion** variable (`<faction>_opinion`) on a **0–100** scale, defaulting to **50** (neutral). It's set up automatically as soon as the country has the matching national idea — without the idea, the country doesn't have that faction at all.

To change opinion manually: set a temporary variable and call the change effect:

```
set_temp_variable = { temp_opinion = 5 }
change_small_medium_business_owners_opinion = yes
```

The value is the change (+/-), not the final number. A few important quirks:

- **Autocrats get double effect** — positive changes are doubled if the ruling party is an autocratic archetype (pro-Western, emerging, or non-aligned autocrats, fascists, military junta).
- **The floor isn't always 50** — some countries have unique ideas that shift a specific faction's minimum/maximum (e.g. an agricultural-subsidies idea raises the floor for farmers, a banking-reform idea lowers the ceiling for labour unions). This is baked in per-country, not in the general logic.
- **Opinion drifts down toward its minimum every month, but only if it's currently above the minimum** — if you push it up and leave it alone, it settles back down toward the minimum (usually 50) over time. If opinion is below the minimum, it just stays there — there's no automatic pull back up, only a manual `change_*_opinion` can raise it.
- **Opinion directly drives in-game stats** — every faction has a "dynamic modifier" that's continuously recalculated from opinion: `(opinion − 50) × coefficient`. You don't set these stats directly — they're a consequence of opinion, not an independent knob.

### How to Properly Change Factions

When changing the main faction, do not simply use `add_idea` or an unconditional `swap_ideas`. A law or another action may run while different factions are currently active, so first check which faction is present and only then replace it with the target faction.

A practical pattern is an `if` / `else_if` chain using `has_idea` and `swap_ideas`:

```txt
if = {
    limit = { has_idea = labour_unions }
    swap_ideas = {
        remove_idea = labour_unions
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = farmers }
    swap_ideas = {
        remove_idea = farmers
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = industrial_conglomerates }
    swap_ideas = {
        remove_idea = industrial_conglomerates
        add_idea = the_military
    }
}
# ...repeat the same block for every other faction the law could realistically encounter
```

**You do not need to list every possible faction.** In a law, it is enough to handle the factions that can realistically be present under its conditions — see the [full faction list](#faction-list) below for all the idea tags. Unique or country-specific factions should only be added when the law can actually encounter them.

### Faction List

| Category | Idea (tag) | Opinion-change effect |
|---|---|---|
| Economic | `small_medium_business_owners` | `change_small_medium_business_owners_opinion` |
| Economic | `international_bankers` | `change_international_bankers_opinion` |
| Economic | `fossil_fuel_industry` | `change_fossil_fuel_industry_opinion` |
| Economic | `industrial_conglomerates` | `change_industrial_conglomerates_opinion` |
| Economic | `oligarchs` | `change_oligarchs_opinion` |
| Militaristic | `maritime_industry` | `change_maritime_industry_opinion` |
| Militaristic | `defense_industry` | `change_defense_industry_opinion` |
| Militaristic | `the_military` | `change_the_military_opinion` |
| Militaristic | `intelligence_community` | `change_intelligence_community_opinion` |
| Special Interest | `labour_unions` | `change_labour_unions_opinion` |
| Special Interest | `landowners` | `change_landowners_opinion` |
| Special Interest | `farmers` | `change_farmers_opinion` |
| Special Interest | `communist_cadres` | `change_communist_cadres_opinion` |
| Religious | `the_priesthood` | `change_the_priesthood_opinion` |
| Religious | `the_ulema` | `change_the_ulema_opinion` |
| Religious | `the_clergy` | `change_the_clergy_opinion` |
| Religious | `wahabi_ulema` | `change_the_wahabi_ulema_opinion` |
| Nation-specific | `the_donju` (North Korea) | `change_the_donju_opinion` |
| Nation-specific | `saudi_royal_family` (Gulf states) | `change_saudi_royal_family_opinion` |
| Nation-specific | `iranian_quds_force` (Iran, includes IRGC) | `change_iranian_quds_force_opinion` |
| Nation-specific | `foreign_jihadis` | `change_foreign_jihadis_opinion` |
| Nation-specific | `chaebols` (South Korea) | `change_chaebols_opinion` |
| Nation-specific | `wall_street` (USA) | `change_wall_street_opinion` |

<a id="bulk-and-utility-effects"></a>
### Utility Effects

Change opinion for all of a country's active factions at once:

```
set_temp_variable = { temp_all_opinion = 5 }
change_all_internal_faction_opinion = yes
```

Copy a faction set from one country to another (used when releasing/forming a new country — takes `var:nation_to_copy_from`, some factions have extra conditions like ruling party):

```
var:nation_to_copy_from = { ... }
copy_internal_factions = yes
```

Debug/cheat commands (set all factions to max, or reset to neutral 50):

```
set_to_max_internal_faction_opinions = yes
reset_all_internal_faction_opinions = yes
```

<a id="election-funding"></a>
### Election Impact

Faction opinion directly feeds into MDC's election system: the `campaign_funding_count` variable starts at a base of **10**, and each active faction additionally adds between **-2 and +2** depending on how hostile/favorable it is (hostile/negative/indifferent/positive/enthusiastic). This is calculated automatically by the `display_election_campaign_status` effect — you don't need to call it manually.
