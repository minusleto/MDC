---
title: Laws
description: "Per-party desired policy direction triggers"
---

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

> Standalone triggers like `<category>_increase_blocked` also exist in the source, but aren't used anywhere as a standalone check — the real blocking flag is set and cleared through effects. See ["Blocking law changes"](../../effects/law-changes/#law-change-blocking) in the effects section.
