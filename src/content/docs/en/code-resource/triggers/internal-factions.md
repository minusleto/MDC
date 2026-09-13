---
title: Internal Factions
description: "Scripted triggers for MDC internal influence factions: opinion-level checks for each group."
---

## How the opinion scale works

Every internal influence faction (list below) has an `<faction>_opinion` variable (0–100). All 23 factions share the same set of 6 threshold triggers on that variable:

```
enthusiastic_oligarchs = yes      # oligarchs_opinion > 79
positive_oligarchs = yes          # 60–79
indifferent_oligarchs = yes       # 40–60
negative_oligarchs = yes          # 20–39
hostile_oligarchs = yes           # < 20
non_indifferent_oligarchs = yes   # see warning below
```

| Level | Condition (using `oligarchs_opinion` as the example) |
|---|---|
| `enthusiastic_*` | `> 79` |
| `positive_*` | `< 80` and `> 59` |
| `indifferent_*` | `< 61` and `> 39` |
| `negative_*` | `< 40` and `> 19` |
| `hostile_*` | `< 20` |
| `non_indifferent_*` | `> 61` **and** `< 39` |

:::caution
`non_indifferent_*` is **broken for all 23 factions without exception**: the condition requires the value to be both `> 61` and `< 39` at once — that's impossible, so the trigger always returns "no" regardless of the actual opinion value. Don't use this trigger at all (or use `NOT = { indifferent_X = yes }`, which is what it was presumably meant to be).

There's also a small boundary overlap between `positive_*`/`indifferent_*`: `positive` requires `> 59` (i.e. ≥60), `indifferent` requires `< 61` (i.e. ≤60) — at a value of exactly 60, both triggers are true simultaneously.
:::

## List of factions

Substitute any of these identifiers for `X` in `enthusiastic_X` / `positive_X` / `indifferent_X` / `negative_X` / `hostile_X`:

`small_medium_business_owners`, `international_bankers`, `oligarchs`, `industrial_conglomerates`, `fossil_fuel_industry`, `intelligence_community`, `the_military`, `defense_industry`, `maritime_industry`, `wahabi_ulema`, `the_priesthood`, `the_ulema`, `the_clergy`, `communist_cadres`, `farmers`, `landowners`, `labour_unions`, `foreign_jihadis`, `iranian_quds_force`, `saudi_royal_family`, `chaebols`, `wall_street`, `the_donju`

## Extra thresholds (only for some factions)

A handful of factions also have separately named triggers with not always predictable names (not always the full faction name) and slightly different thresholds:

| Trigger | Condition |
|---|---|
| `oligarchs_at_least_enthusiastic_opinion` | `oligarchs_opinion > 74` |
| `oligarchs_at_least_positive_opinion` | `> 50` |
| `oligarchs_not_positive_opinion` | `< 50` |
| `industrial_conglomerates_at_least_enthusiastic_opinion` | `> 74` |
| `intelligence_community_at_least_positive_opinion` | `> 59` |
| `intelligence_community_not_positive_opinion` | `< 59` |
| `military_at_least_enthusiastic_opinion`¹ | `the_military_opinion > 74.99`, but only if `has_idea = the_military` |
| `military_at_least_positive_opinion`¹ | `> 50`, also requires `has_idea = the_military` |
| `wahule_at_least_positive_opinion` | `wahabi_ulema_opinion > 59` |
| `the_priesthood_at_least_enthusiastic_opinion` | `> 75` |
| `the_priesthood_at_least_indifferent_opinion` | `> 49` |
| `the_ulema_at_least_positive_opinion` | `> 59` |
| `communist_cadres_at_least_enthusiastic_opinion`¹ | `communist_cadres_opinion > 74.99`, only if `has_idea = communist_cadres` |
| `communist_cadres_at_least_positive_opinion`¹ | `> 50`, also requires the idea |
| `sarf_at_least_positive_opinion` | `saudi_royal_family_opinion > 59` |
| `sarf_at_least_indifferent_opinion` | `> 49` |

¹ If the country doesn't even have the faction idea (`has_idea = the_military` / `has_idea = communist_cadres`), these two triggers return "no" regardless of the opinion value — the plain `enthusiastic_the_military`/`enthusiastic_communist_cadres` don't do that check.

:::note
The abbreviated names aren't always obvious: `wahule` = wahabi ulema, `sarf` = saudi royal family, `oli` (in tooltips) = oligarchs. Copy names from the table rather than guessing by pattern.
:::
