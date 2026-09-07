---
title: Political Modifiers
description: "Modifiers for stability, ideology, political power, and protests"
---

<a id="vanilla"></a>
## Vanilla

<a id="political-power"></a>
### Political Power

| Modifier | Description | Note |
|---|---|---|
| `political_power_gain` | Daily political power gain | N/A |
| `political_power_factor` | Daily political power gain (%) | N/A |
| `political_power_cost` | Daily political power cost | N/A |

<a id="stability"></a>
### Stability

| Modifier | Description | Note |
|---|---|---|
| `stability_factor` | Modifies stability | N/A |
| `stability_weekly` | Weekly stability gain | N/A |
| `stability_weekly_factor` | Weekly stability gain (%) | N/A |
| `party_popularity_stability_factor` | Stability gained from ruling party's popularity | N/A |

<a id="ideology"></a>
### Ideology

| Modifier | Description | Note |
|---|---|---|
| `drift_defence_factor` | Ideology drift defense | N/A |
| `western_drift` | Daily drift toward the western outlook | N/A |
| `emerging_drift` | Daily drift toward the emerging outlook | N/A |
| `salafist_drift` | Daily drift toward salafism | N/A |
| `nonaligned_drift` | Daily drift toward the non-aligned outlook | N/A |
| `nationalist_drift` | Daily drift toward the nationalist outlook | N/A |
| `western_acceptance` | AI willingness to accept the western outlook | N/A |
| `emerging_acceptance` | AI willingness to accept the emerging outlook | N/A |
| `salafist_acceptance` | AI willingness to accept salafism | N/A |
| `nonaligned_acceptance` | AI willingness to accept the non-aligned outlook | N/A |
| `nationalist_acceptance` | AI willingness to accept the nationalist outlook | N/A |

<a id="mdc"></a>
## MDC

<a id="party-popularity"></a>
### Party Popularity

| Modifier | Description | Note |
|---|---|---|
| `popularity_attack_modifier` | Modifier that increases the effectiveness of attacking political parties in the political GUI | The modifier is not percentual. EX: popularity_attack_modifier = 2.0 for 2x damage |
| `popularity_boost_modifier` | Modifier that increases the effectiveness of boosting political parties in the political GUI | The modifier is not percentual. EX: popularity_boost_modifier = 2.0 for 2x boost |

<a id="protests"></a>
### Protests

| Modifier | Description | Note |
|---|---|---|
| `protests_drift_modifier` | Modifies how fast protests grow | E.g. -0.05 = 5% slower growth. The final growth value is rounded |
