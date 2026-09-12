---
title: Influence
description: "Scripted triggers for the MDC influence system: top influencers, influence percentage thresholds, trade agreements."
---

## How the influence array works

Every country has an `influence_array` (the top 7 countries influencing it most, index 0 = the most influential) and `influence_array_val` (the influence percentage for each of those 7 slots). Almost every trigger on this page is some variation of "is this country among the top N influencers" and/or "is its influence percentage above/below X".

## Whether a country is among the top influencers

| Trigger | Condition |
|---|---|
| `is_influencer` | ROOT is in `influence_array` (any of the 7 slots) |
| `is_top_influencer` | ROOT is **the most** influential (slot 0) |
| `not_is_top_influencer` | Inverse of the above |
| `is_top3_influencer` | ROOT is in the top 3 (slots 0–2) |
| `is_top5_influencer` / `is_top5_influencer_ct`¹ | ROOT is in the top 5 (slots 0–4) |
| `is_top5_influencer_PREV` | Same thing, but checks `PREV` instead of `ROOT` |

¹ `is_top5_influencer` and `is_top5_influencer_ct` are **literally identical** in the source (only the tooltip key differs) — use either one, they're interchangeable.

## Top influencer + percentage threshold combined

| Trigger | Condition |
|---|---|
| `is_top_twenty_influencer` | ROOT is #1 **and** its `influence_array_val^0 > 19.999` |
| `is_top_fifty_influencer` | ROOT is #1 **and** `> 49.999` |
| `is_top_eighty_influencer` | ROOT is #1 **and** `> 79.999` |
| `is_top3_twenty_influencer` | ROOT is in the top 3, and specifically in the slot it occupies, its percentage is `> 19.999` |
| `is_top3_thirty_influencer` | Same thing, threshold `> 29.999` |
| `is_top3_thirty_influencer_var` | Same 30% threshold, but compares a previously stored `temp_country` variable instead of `ROOT` |

## Same government type (across the 5 ideology tags)

All three triggers check whether `has_government` (`democratic`/`nationalist`/`communism`/`neutrality`/`fascism`) matches between two countries, just with different scope pairs:

| Trigger | Compares |
|---|---|
| `is_same_government` | `ROOT` and the current scope (`if/else_if` chain across the 5 ideologies) |
| `is_same_government_PREV` | `PREV` and the current scope (via `OR`+`AND`, functionally the same) |
| `is_same_government_THIS_ROOT` | Explicitly `ROOT` and `THIS` (for when you can't rely on the "current" scope) |

## Threshold for a specific country's influence over this one

Three families, differing only in **whose** influence is measured and which direction the comparison goes:

```
influence_higher_30 = yes        # ROOT's influence over THIS is above 30%
sender_influence_higher_30 = yes # FROM's influence over THIS is above 30%
influence_less_30 = yes          # ROOT's influence over THIS is below 30%
```

Available thresholds (not an even step — exactly what exists in the source):

| Family | Available thresholds |
|---|---|
| `influence_higher_N` | 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 75, 80, 90 |
| `sender_influence_higher_N` | 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90 (no 35 or 75) |
| `influence_less_N` | 10, 20, 30, 40, 50, 60, 70, 80, 90 (step of 10 only) |

`influence_less_N` is built as an `if/else_if` chain across all 7 array slots (it looks for which slot ROOT occupies and compares the percentage there) — if the country isn't in `influence_array` at all, none of the branches fire.

## Trade agreement

```
has_trade_agreement_with_PREV_nation = yes
```

Checks the country flag `trade_agreement@PREV` — whether there's an active trade agreement with the country previously saved in scope.
