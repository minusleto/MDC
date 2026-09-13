---
title: Laws
description: "Law-change blocking triggers and per-party desired policy direction"
---

## Law-change blocking (12 categories)

Each of 12 policy categories has a flag meaning "this category is temporarily blocked from changing in this direction" — usually set by a decision/focus for a limited time (e.g. a cooldown after a recent change):

| Category | `_increase_blocked` | `_decrease_blocked` | `_change_blocked` |
|---|---|---|---|
| Bureaucracy | `bureau_increase_blocked` | `bureau_decrease_blocked` | `bureau_change_blocked` |
| Defense spending | `defence_increase_blocked` | `defence_decrease_blocked` | `defence_change_blocked` |
| Police | `police_increase_blocked` | `police_decrease_blocked` | `police_change_blocked` |
| Education | `edu_increase_blocked` | `edu_decrease_blocked` | `edu_change_blocked` |
| Healthcare | `health_increase_blocked` | `health_decrease_blocked` | `health_change_blocked` |
| Welfare | `social_increase_blocked` | `social_decrease_blocked` | `social_change_blocked` |
| Trade policy | `trade_increase_blocked` | `trade_decrease_blocked` | `trade_change_blocked` |
| Conscription | `conscription_increase_blocked` | `conscription_decrease_blocked` | `conscription_change_blocked` |
| Women's conscription | `women_conscription_increase_blocked` | `women_conscription_decrease_blocked` | `women_conscription_change_blocked` |
| Interventionism | `intervention_increase_blocked` | `intervention_decrease_blocked` | `intervention_change_blocked` |
| Officer training | `officer_training_increase_blocked` | `officer_training_decrease_blocked` | `officer_training_change_blocked` |
| Migration policy | `migration_law_increase_blocked` | `migration_law_decrease_blocked` | `migration_law_change_blocked` |

All `_increase_blocked` / `_decrease_blocked` triggers are just `has_country_flag = <same name>`, wrapped in `custom_trigger_tooltip` to show the reason in the UI.

⚠️ **Worth double-checking**: `_change_blocked` requires **both** `_increase_blocked = yes` **AND** `_decrease_blocked = yes` (not `OR`). So "change is blocked entirely" is technically only true if both flags are set at once — as opposed to the more intuitive "if either direction is on cooldown, changing is blocked". If the code only ever sets one of the two flags (e.g. only `increase_blocked` after a recent raise), `_change_blocked` will never catch it.

<a id="desired-law"></a>
## Desired policy direction (by party)

All 24 ruling parties have their own opinion on where to move 5 spending categories: `−−` (cut a lot) / `−` (cut) / `0` (keep as-is) / `+` (raise) / `++` (raise a lot). Each cell below is its own trigger, `ruling_party_wants_<category>_<direction>`:

| # | Party | Bureaucracy | Police | Education | Healthcare | Welfare |
|---|---|---|---|---|---|---|
| 0 | Pro-Western Autocrats | + | + | − | − | − |
| 1 | Conservatives | − | 0 | 0 | 0 | − |
| 2 | Liberals | 0 | 0 | + | + | + |
| 3 | Social Democrats | + | 0 | ++ | ++ | ++ |
| 4 | Communists | ++ | ++ | + | + | + |
| 5 | Left-Wing Radicalism | + | 0 | ++ | ++ | ++ |
| 6 | Reactionaries | + | + | − | − | − |
| 7 | Autocrats | + | + | − | − | − |
| 8 | Mod. Shiite Rev. | + | ++ | 0 | 0 | + |
| 9 | Rad. Shiite Rev. | + | + | 0 | 0 | 0 |
| 10 | Wahhabi Monarchists | ++ | ++ | −− | − | − |
| 11 | Salafi Jihadism | ++ | ++ | −− | −− | −− |
| 12 | Mod. Islamists | + | + | 0 | + | + |
| 13 | Non-aligned Autocrats | + | + | − | − | − |
| 14 | Conservatives (n/a) | − | 0 | 0 | 0 | − |
| 15 | Oligarchs | ++ | − | − | − | − |
| 16 | Libertarians | −− | − | − | −− | −− |
| 17 | Greens | + | *none* | ++ | ++ | ++ |
| 18 | Social Democrats (n/a) | + | *none* | ++ | ++ | ++ |
| 19 | Communists (n/a) | ++ | ++ | + | + | + |
| 20 | Right Wing Populists | + | + | 0 | 0 | 0 |
| 21 | Fascists | ++ | ++ | 0 | + | + |
| 22 | Military | ++ | ++ | − | − | −− |
| 23 | Monarchists | + | + | 0 | 0 | 0 |

⚠️ **Balance gap**: parties **17 (Greens)** and **18 (Social Democrats, non-aligned)** have NO trigger at all expressing a police-spending preference — they aren't listed in any of the 5 `ruling_party_wants_police_*` triggers. For these two parties, any check of desired police direction will always be false, regardless of the current law. Not technically a bug (no impossible condition), but a clear oversight — all 22 other parties have an opinion on all 5 categories.

**Other triggers:**

| Trigger | Description |
|---|---|
| `ruling_party_in_favor_of_higher_military_spending` | The ruling party supports higher military spending |
| `has_bureau_idea_law_desired` / `has_police_idea_law_desired` / `has_education_law_desired` / `has_health_law_desired` / `has_social_law_desired` | Checks whether the **currently active** law (the `<category>_0X` idea) matches what the country "wants" (the `wants_<category>_0X` flag) — i.e. the country is satisfied with the current level of that category and won't try to change it |
