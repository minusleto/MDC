---
title: Иностранное влияние
description: "Эффекты системы Foreign Influence"
---

## MDC Influence Effects

<a id="influence-action-examples"></a>
### Influence Action Examples

Percent Change is given in a whole number increment (i.e. 10 = 10%)

- Domestic Influence

```
# set_temp_variable = { percent_change = +-x }
change_domestic_influence_percentage = yes
```

- Change Index Influencers

```
# set_temp_variable = { percent_change = +-x }
# set_temp_variable = { influencer_index = 0-6 }
change_current_influencer_index_percentage = yes
```

- General Influence Change
-- Keep in mind if the 7th influencer has more influence then your percent_change the target nation will gain domestic influence instead of you gaining influence.

i.e.
7th Influencer has 5% influence and you are influencing by 3%. The target nation gains domestic influence instead.

```
# set_temp_variable = { percent_change = -+ x }
# set_temp_variable = { tag_index = SCOPE }
# set_temp_variable = { influence_target = SCOPE }
# Supported Scope: FROM, ROOT, PREV, TAG
change_influence_percentage = yes
```

<a id="mdc-political-effects"></a>
