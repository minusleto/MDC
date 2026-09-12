---
title: Internal Factions
description: "Internal faction effects and commands"
---

## MDC Internal Faction Effects

<a id="how-it-works"></a>
### How It Works

Every faction has a hidden **opinion** variable (`<faction>_opinion`) on a **0–100** scale, defaulting to **50** (neutral). It's set up automatically as soon as the country has the matching national idea — without the idea, the country doesn't have that faction at all.

To change opinion manually: set a temporary variable and call the change effect:

```
set_temp_variable = { temp_opinion = 5 }
change_small_medium_business_owners_opinion = yes
```

The value is the change (+/-), not the final number. A few important quirks:

- **Autocrats get double effect** — if the ruling party belongs to an autocratic archetype (pro-Western autocrats, emerging autocrats, non-aligned autocrats, fascists, military junta) and the change is positive, it's doubled.
- **The floor isn't always 50** — some countries have unique ideas that shift a specific faction's minimum/maximum (e.g. an agricultural-subsidies idea raises the floor for farmers, a banking-reform idea lowers the ceiling for labour unions). This is baked in per-country, not in the general logic.
- **Opinion drifts down toward its minimum every month, but only if it's currently above the minimum** — if you push it up and leave it alone, it settles back down toward the minimum (usually 50) over time. If opinion is below the minimum, it just stays there — there's no automatic pull back up, only a manual `change_*_opinion` can raise it.
- **Opinion directly drives in-game stats** — every faction has a "dynamic modifier" that's continuously recalculated from opinion: `(opinion − 50) × coefficient`. You don't set these stats directly — they're a consequence of opinion, not an independent knob.

### How to Properly Change Factions

When changing the main faction, do not simply use `add_idea` or an unconditional `swap_ideas`. A law or another action may run while different factions are currently active, so first check which faction is present and only then replace it with the target faction.

A practical pattern is an `if` / `else_if` chain using `has_idea` and `swap_ideas`:

```hoi4
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
else_if = {
    limit = { has_idea = landowners }
    swap_ideas = {
        remove_idea = landowners
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = oligarchs }
    swap_ideas = {
        remove_idea = oligarchs
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = international_bankers }
    swap_ideas = {
        remove_idea = international_bankers
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = maritime_industry }
    swap_ideas = {
        remove_idea = maritime_industry
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = the_clergy }
    swap_ideas = {
        remove_idea = the_clergy
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = intelligence_community }
    swap_ideas = {
        remove_idea = intelligence_community
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = small_medium_business_owners }
    swap_ideas = {
        remove_idea = small_medium_business_owners
        add_idea = the_military
    }
}
```

**You do not need to list every possible faction.** In a law, it is enough to handle the factions that can realistically be present under its conditions. The example above lists the most logical candidates for a transition to `the_military`; unique or country-specific factions should only be added when the law can actually encounter them.

<a id="faction-list"></a>
### Faction List

| Category | Idea (tag) | Opinion-change effect | What the dynamic modifier affects |
|---|---|---|---|
| Economic | `small_medium_business_owners` | `change_small_medium_business_owners_opinion` | Stability, consumer goods cost, civilian factory productivity, income tax |
| Economic | `international_bankers` | `change_international_bankers_opinion` | Political power gain, local resources, trade opinion, democratic acceptance/drift, investment cost/duration, office park tax |
| Economic | `fossil_fuel_industry` | `change_fossil_fuel_industry_opinion` | Local resources, fuel gain, war-goal justification time, oil export, fuel silo construction speed |
| Economic | `industrial_conglomerates` | `change_industrial_conglomerates_opinion` | Local resources, communism acceptance/drift, civilian industry tax |
| Economic | `oligarchs` | `change_oligarchs_opinion` | Local resources, communism acceptance/drift |
| Militaristic | `maritime_industry` | `change_maritime_industry_opinion` | Dockyard speed/productivity, navy max range, dockyard tax |
| Militaristic | `defense_industry` | `change_defense_industry_opinion` | Military factory speed/productivity, factory efficiency, military industry tax |
| Militaristic | `the_military` | `change_the_military_opinion` | Army org and morale, training time, air base construction speed, personnel cost |
| Militaristic | `intelligence_community` | `change_intelligence_community_opinion` | Decryption/encryption (without La Resistance DLC) or branch-specific intel (with DLC), radar, foreign influence |
| Special Interest | `labour_unions` | `change_labour_unions_opinion` | Factory efficiency, political power gain, healthcare, social spending |
| Special Interest | `landowners` | `change_landowners_opinion` | Local resources, conscription, political power gain, office park tax |
| Special Interest | `farmers` | `change_farmers_opinion` | Conscription, consumer goods cost, monthly population growth, productivity, tax, agriculture district construction speed |
| Special Interest | `communist_cadres` | `change_communist_cadres_opinion` | Army org regain, consumer goods cost, core defense, mobilization speed, bureaucracy cost |
| Religious | `the_priesthood` | `change_the_priesthood_opinion` | Stability, monthly population, political power, education cost |
| Religious | `the_ulema` | `change_the_ulema_opinion` | Stability, monthly population, political power, education cost |
| Religious | `the_clergy` | `change_the_clergy_opinion` | Stability, monthly population, political power, education cost |
| Religious | `wahabi_ulema` | `change_the_wahabi_ulema_opinion` | Stability, population, political power, fascism drift, education cost |
| Nation-specific | `the_donju` (North Korea) | `change_the_donju_opinion` | Civilian factory/infrastructure speed, stability, consumer goods cost |
| Nation-specific | `saudi_royal_family` (Gulf states) | `change_saudi_royal_family_opinion` | Political power, ideology-drift defense, stability |
| Nation-specific | `iranian_quds_force` (Iran, includes IRGC) | `change_iranian_quds_force_opinion` | Communism drift, offense influence |
| Nation-specific | `foreign_jihadis` | `change_foreign_jihadis_opinion` | Fascism drift, non-core manpower, special forces cap |
| Nation-specific | `chaebols` (South Korea) | `change_chaebols_opinion` | Political power, infrastructure, local resources |
| Nation-specific | `wall_street` (USA) | `change_wall_street_opinion` | Local resources, trade opinion, political power, office park tax, investment cost/duration; also moves the `USA_strength_of_wall_street_var` variable |

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

Faction opinion directly feeds into MD's election system: the `campaign_funding_count` variable starts at a base of **10**, and each active faction additionally adds between **-2 and +2** depending on how hostile/favorable it is (hostile/negative/indifferent/positive/enthusiastic). This is calculated automatically by the `display_election_campaign_status` effect — you don't need to call it manually.

:::note
The old command list included `change_isi_pakistan_opinion`, `change_vevak_opinion`, `change_the_bazaar_opinion`, `change_irgc_opinion`. The first three don't appear anywhere in the current system file (`00_internal_faction_effects.txt`) except in an outdated header comment — they appear to have been cut. `IRGC` wasn't cut, but it doesn't have its own effect either: it's merged into `iranian_quds_force`, sharing one opinion variable and one dynamic modifier (`apply_irgc_iranian_quds_force_dynamic_effect_DYNMOD`) — you can't change IRGC separately, only via `change_iranian_quds_force_opinion`.
:::
