---
title: Internal Factions
description: "Opinion-check triggers for MDC's internal factions"
---

## Faction opinion triggers

Each of MDC's 23 internal factions has a `<faction>_opinion` variable (0–100) and a ready-made set of 6 triggers to check it without a manual `check_variable`:

| Faction | Variable | Enthusiastic (>79) | Positive (60–79) | Indifferent (40–60) | Negative (20–39) | Hostile (<20) |
|---|---|---|---|---|---|---|
| Small & Medium Business Owners | `small_medium_business_owners_opinion` | `enthusiastic_small_medium_business_owners` | `positive_small_medium_business_owners` | `indifferent_small_medium_business_owners` | `negative_small_medium_business_owners` | `hostile_small_medium_business_owners` |
| International Bankers | `international_bankers_opinion` | `enthusiastic_international_bankers` | `positive_international_bankers` | `indifferent_international_bankers` | `negative_international_bankers` | `hostile_international_bankers` |
| Oligarchs | `oligarchs_opinion` | `enthusiastic_oligarchs` | `positive_oligarchs` | `indifferent_oligarchs` | `negative_oligarchs` | `hostile_oligarchs` |
| Industrial Conglomerates | `industrial_conglomerates_opinion` | `enthusiastic_industrial_conglomerates` | `positive_industrial_conglomerates` | `indifferent_industrial_conglomerates` | `negative_industrial_conglomerates` | `hostile_industrial_conglomerates` |
| Fossil Fuel Industry | `fossil_fuel_industry_opinion` | `enthusiastic_fossil_fuel_industry` | `positive_fossil_fuel_industry` | `indifferent_fossil_fuel_industry` | `negative_fossil_fuel_industry` | `hostile_fossil_fuel_industry` |
| Intelligence Community | `intelligence_community_opinion` | `enthusiastic_intelligence_community` | `positive_intelligence_community` | `indifferent_intelligence_community` | `negative_intelligence_community` | `hostile_intelligence_community` |
| The Military | `the_military_opinion` | `enthusiastic_the_military` | `positive_the_military` | `indifferent_the_military` | `negative_the_military` | `hostile_the_military` |
| Defense Industry | `defense_industry_opinion` | `enthusiastic_defense_industry` | `positive_defense_industry` | `indifferent_defense_industry` | `negative_defense_industry` | `hostile_defense_industry` |
| Maritime Industry | `maritime_industry_opinion` | `enthusiastic_maritime_industry` | `positive_maritime_industry` | `indifferent_maritime_industry` | `negative_maritime_industry` | `hostile_maritime_industry` |
| Wahabi Ulema | `wahabi_ulema_opinion` | `enthusiastic_wahabi_ulema` | `positive_wahabi_ulema` | `indifferent_wahabi_ulema` | `negative_wahabi_ulema` | `hostile_wahabi_ulema` |
| The Priesthood | `the_priesthood_opinion` | `enthusiastic_the_priesthood` | `positive_the_priesthood` | `indifferent_the_priesthood` | `negative_the_priesthood` | `hostile_the_priesthood` |
| The Ulema | `the_ulema_opinion` | `enthusiastic_the_ulema` | `positive_the_ulema` | `indifferent_the_ulema` | `negative_the_ulema` | `hostile_the_ulema` |
| The Clergy | `the_clergy_opinion` | `enthusiastic_the_clergy` | `positive_the_clergy` | `indifferent_the_clergy` | `negative_the_clergy` | `hostile_the_clergy` |
| Communist Cadres | `communist_cadres_opinion` | `enthusiastic_communist_cadres` | `positive_communist_cadres` | `indifferent_communist_cadres` | `negative_communist_cadres` | `hostile_communist_cadres` |
| Farmers | `farmers_opinion` | `enthusiastic_farmers` | `positive_farmers` | `indifferent_farmers` | `negative_farmers` | `hostile_farmers` |
| Landowners | `landowners_opinion` | `enthusiastic_landowners` | `positive_landowners` | `indifferent_landowners` | `negative_landowners` | `hostile_landowners` |
| Labour Unions | `labour_unions_opinion` | `enthusiastic_labour_unions` | `positive_labour_unions` | `indifferent_labour_unions` | `negative_labour_unions` | `hostile_labour_unions` |
| Foreign Jihadists | `foreign_jihadis_opinion` | `enthusiastic_foreign_jihadis` | `positive_foreign_jihadis` | `indifferent_foreign_jihadis` | `negative_foreign_jihadis` | `hostile_foreign_jihadis` |
| Iranian Quds Force | `iranian_quds_force_opinion` | `enthusiastic_iranian_quds_force` | `positive_iranian_quds_force` | `indifferent_iranian_quds_force` | `negative_iranian_quds_force` | `hostile_iranian_quds_force` |
| Saudi Royal Family | `saudi_royal_family_opinion` | `enthusiastic_saudi_royal_family` | `positive_saudi_royal_family` | `indifferent_saudi_royal_family` | `negative_saudi_royal_family` | `hostile_saudi_royal_family` |
| Chaebols | `chaebols_opinion` | `enthusiastic_chaebols` | `positive_chaebols` | `indifferent_chaebols` | `negative_chaebols` | `hostile_chaebols` |
| Wall Street | `wall_street_opinion` | `enthusiastic_wall_street` | `positive_wall_street` | `indifferent_wall_street` | `negative_wall_street` | `hostile_wall_street` |
| The Donju | `the_donju_opinion` | `enthusiastic_the_donju` | `positive_the_donju` | `indifferent_the_donju` | `negative_the_donju` | `hostile_the_donju` |

⚠️ **Bug in the mod's source**: `non_indifferent_*` (deliberately not its own column above) exists for all 23 factions, but it's broken — it requires `check_variable > 61` **AND** `< 39` inside the same block (and conditions inside a HOI4 trigger block are combined with AND). No number can be both greater than 61 and less than 39 at once, so this trigger can **never evaluate to true**. If you need "opinion is not indifferent" (i.e. clearly positive OR clearly negative), write it manually instead:

```
OR = {
	check_variable = { <faction>_opinion > 61 }
	check_variable = { <faction>_opinion < 39 }
}
```

<a id="extra-shortcuts"></a>
### Extra convenience triggers

Some factions (Oligarchs, Industrial Conglomerates, Intelligence Community, The Military, Wahabi Ulema, The Priesthood, The Ulema, Saudi Royal Family) have their own extra ready-made triggers with non-standard thresholds — historically tied to specific events/focuses rather than the general 20/40/60/80 grid:

| Trigger | Condition | Description |
|---|---|---|
| `oligarchs_at_least_enthusiastic_opinion` | `oligarchs_opinion > 74` | Oligarchs close to enthusiastic (>74) |
| `oligarchs_at_least_positive_opinion` | `oligarchs_opinion > 50` | Oligarchs at least mildly positive (>50) |
| `oligarchs_not_positive_opinion` | `oligarchs_opinion < 50` | Oligarchs not positive (<50) |
| `industrial_conglomerates_at_least_enthusiastic_opinion` | `industrial_conglomerates_opinion > 74` | Conglomerates close to enthusiastic (>74) |
| `intelligence_community_at_least_positive_opinion` | `intelligence_community_opinion > 59` | Intelligence community at least positive (>59) |
| `intelligence_community_not_positive_opinion` | `intelligence_community_opinion < 59` | Intelligence community not positive (<59) |
| `military_at_least_enthusiastic_opinion` | `the_military_opinion > 74.99` | Military close to enthusiastic (>74.99); only fires if the country has the military faction idea (`has_idea = the_military`) |
| `military_at_least_positive_opinion` | `the_military_opinion > 50` | Military at least mildly positive (>50); only fires if the country has the military faction idea (`has_idea = the_military`) |
| `wahule_at_least_positive_opinion` | `wahabi_ulema_opinion > 59` | Wahabi Ulema at least positive (>59) |
| `the_priesthood_at_least_enthusiastic_opinion` | `the_priesthood_opinion > 75` | Priesthood close to enthusiastic (>75) |
| `the_priesthood_at_least_indifferent_opinion` | `the_priesthood_opinion > 49` | Priesthood at least indifferent (>49) |
| `the_ulema_at_least_positive_opinion` | `the_ulema_opinion > 59` | Ulema at least positive (>59) |
| `sarf_at_least_positive_opinion` | `saudi_royal_family_opinion > 59` | Royal Family at least positive (>59) |
| `sarf_at_least_indifferent_opinion` | `saudi_royal_family_opinion > 49` | Royal Family at least indifferent (>49) |
| `communist_cadres_at_least_enthusiastic_opinion` | `communist_cadres_opinion > 74.99` | Party cadres close to enthusiastic (>74.99); only fires if the country has the faction (`has_idea = communist_cadres`) |
| `communist_cadres_at_least_positive_opinion` | `communist_cadres_opinion > 50` | Party cadres at least positive (>50); also requires `has_idea = communist_cadres` |

:::note
There's a small boundary overlap in the base set of six: `positive_*` requires `> 59` (i.e. ≥60), `indifferent_*` requires `< 61` (i.e. ≤60) — at a value of exactly **60**, both triggers are true at once.
:::
