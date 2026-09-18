---
title: Foreign Influence
description: "Foreign Influence system effects"
---

## MDC Influence Effects

Percent change is given as a whole number: for example, `10` = +10%, `-10` = -10%.

<a id="domestic-influence"></a>
### Domestic Influence

`change_domestic_influence_percentage` changes the **domestic influence** of the country on which the effect is executed.

#### Example: increase domestic influence by 10%

```txt
set_temp_variable = { percent_change = 10 }
change_domestic_influence_percentage = yes
```

#### Example: decrease domestic influence by 10%

```txt
set_temp_variable = { percent_change = -10 }
change_domestic_influence_percentage = yes
```

The effect uses the temporary variable `percent_change`. Enter the value directly; no placeholder or extra signs are needed.

<a id="foreign-influence"></a>
### Foreign-Side Influence

This group controls **foreign influence**: it can change a specific side's influence percentage and select which side is considered the influencer.

#### Change the foreign influence percentage

For `change_influence_percentage`, three temporary variables are used:

- `percent_change` — influence change in percent;
- `tag_index` — index of the influencing side;
- `influence_target` — country being influenced.

Supported scopes for `tag_index` and `influence_target` include `FROM`, `ROOT`, `PREV`, `TAG`, and other standard scopes when they resolve to the intended tag/country.

#### Example: increase FROM's influence on ROOT by 10%

```txt
set_temp_variable = { percent_change = 10 }
set_temp_variable = { tag_index = FROM }
set_temp_variable = { influence_target = ROOT }
change_influence_percentage = yes
```

#### Example: decrease FROM's influence on ROOT by 10%

```txt
set_temp_variable = { percent_change = -10 }
set_temp_variable = { tag_index = FROM }
set_temp_variable = { influence_target = ROOT }
change_influence_percentage = yes
```

:::caution
If the 7th influencer already has more influence than the value of your `percent_change`, the target country may gain domestic influence instead of your side gaining influence. For example, if the 7th side has 5% and the change is 3%, the target country gains domestic influence instead of your side's influence.
:::

#### Change the current influencer index

`change_current_influencer_index_percentage` changes the index of the current influencing side.

```txt
set_temp_variable = { percent_change = 10 }
set_temp_variable = { influencer_index = 3 }
change_current_influencer_index_percentage = yes
```

`influencer_index` uses an index from `0` to `6`.

:::note
The `0`–`6` index selects a position in the influencer list. If you need to change the actual influence percentage between two countries, use `change_influence_percentage`.
:::
