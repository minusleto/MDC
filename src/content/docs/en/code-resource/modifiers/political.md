---
title: Political Modifiers
description: ""
---

## Political Modifiers

Affect domestic politics (parties).

<a id="vanilla"></a>
### Vanilla

| Modifier | Description | Note |
|---|---|---|
| `political_power_gain` | Daily political power gain | N/A |
| `political_power_factor` | Daily political power gain (%) | N/A |
| `political_power_cost` | Daily political power cost | N/A |
| `stability_factor` | Modifies stability | N/A |
| `stability_weekly` | Weekly stability gain | N/A |
| `stability_weekly_factor` | Weekly stability gain (%) | N/A |
| `party_popularity_stability_factor` | Stability gained from ruling party's popularity | N/A |
| `drift_defence_factor` | Ideology drift defense | N/A |
| `<ideology>_drift` | Daily drift of the specified ideology | E.g. `communism_drift` |
| `<ideology>_acceptance` | AI willingness to accept the specified ideology | E.g. `fascism_acceptance` |

<a id="mdc"></a>
### MDC

| Modifier | Description | Note |
|---|---|---|
| `popularity_attack_modifier` | Modifier that increases the effectiveness of attacking political parties in the political GUI | The modifier is not percentual. EX: popularity_attack_modifier = 2.0 for 2x damage |
| `popularity_boost_modifier` | Modifier that increases the effectiveness of boosting political parties in the political GUI | The modifier is not percentual. EX: popularity_boost_modifier = 2.0 for 2x boost |
| `protests_drift_modifier` | Modifies how fast protests grow | E.g. -0.05 = 5% slower growth. The final growth value is rounded |
