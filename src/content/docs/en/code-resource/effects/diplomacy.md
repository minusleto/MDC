---
title: Diplomacy
description: "Scripted effects for diplomacy, opinion, relations, influence, and sanctions"
---

## MDC Diplomacy Effects

This section contains **effects only**: commands that directly change diplomatic relations, opinion, influence, embargoes, and related states.

## Opinion and Relations

### Add an opinion modifier

`add_opinion_modifier` adds an opinion modifier for the current country towards the target country.

```txt
add_opinion_modifier = {
    target = ROOT
    modifier = reduced_our_influence
}
```

`target` — the country whose opinion is changed. `modifier` — the opinion modifier's name from `common/opinion_modifiers`.

### Remove an opinion modifier

`remove_opinion_modifier` removes an opinion modifier from the specified country.

```txt
remove_opinion_modifier = {
    target = ROOT
    modifier = reduced_our_influence
}
```

### Add a reverse opinion modifier

`reverse_add_opinion_modifier` adds an opinion modifier in the reverse direction.

```txt
reverse_add_opinion_modifier = {
    target = ROOT
    modifier = reduced_our_influence
}
```

### Add a relation modifier

`add_relation_modifier` adds a static modifier between the current country and the target country.

```txt
add_relation_modifier = {
    target = ROOT
    modifier = my_relation_modifier
}
```

### Remove a relation modifier

`remove_relation_modifier` removes a static relation modifier.

```txt
remove_relation_modifier = {
    target = ROOT
    modifier = my_relation_modifier
}
```

## Diplomatic Relations

### Set or cancel a diplomatic relation

`diplomatic_relation` creates or cancels a diplomatic relation between two countries.

```txt
diplomatic_relation = {
    country = ROOT
    relation = military_access
    active = yes
}
```

To cancel a relation, use the same effect with `active = no`:

```txt
diplomatic_relation = {
    country = ROOT
    relation = military_access
    active = no
}
```

## Influence

The percentage change is given as a whole number: e.g. `10` = +10%, `-10` = -10%.

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

The effect uses the `percent_change` temp variable. The value is set directly as a number, with no placeholder signs.

### Foreign-Side Influence

This group controls **foreign influence**: it can change a specific side's influence percentage and select which side is considered the influencer.

#### Change the foreign influence percentage

`change_influence_percentage` takes three temp variables:

- `percent_change` — influence change in percent;
- `tag_index` — index of the influencing side;
- `influence_target` — country being influenced.

Supported scopes for `tag_index` and `influence_target`: `FROM`, `ROOT`, `PREV`, `TAG`, and other standard scopes, as long as they point to the right tag/country.

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
If the 7th influencing side already has more influence than your `percent_change` amount, the target country may gain domestic influence instead of your side gaining influence. For example, if the 7th side has 5% and the change is 3%, the target country gains domestic influence instead of your influence increasing.
:::

### Change the current influencer index

`change_current_influencer_index_percentage` changes the index of the current influencing side.

```txt
set_temp_variable = { percent_change = 10 }
set_temp_variable = { influencer_index = 3 }
change_current_influencer_index_percentage = yes
```

`influencer_index` takes the influencing side's index, in the range `0`–`6`.

:::note
The `0`–`6` index picks a specific position in the list of influencing sides. If you need to change the influence percentage between two specific countries instead, use `change_influence_percentage`.
:::

## Sanctions and Embargoes

### Send an embargo

`send_embargo` embargoes the specified country.

```txt
send_embargo = ROOT
```

### Break an embargo

`break_embargo` breaks an existing embargo between the current country and the specified country.

```txt
break_embargo = ROOT
```

:::note
`break_embargo` must be executed by the country that imposed the embargo.
:::

### Preparing sanctions (per target)

Before actually applying sanctions, a country sets itself a temporary marker flag — "sanctions against this specific target are prepared" — using a dynamic flag name with the target's tag via `@`:

```
FRA = {
	set_country_flag = {
		flag = sanctions_prepared@NIG
		value = 1
		days = 365
	}
}
```

Here France gets the `sanctions_prepared@NIG` flag — "sanctions against Nigeria are prepared" — lasting 365 days (`value = 1` just marks the flag as set). Swap in the target's tag instead of `NIG` so the flag is specific to that country — the `@TAG` suffix makes it unique per sanctioning-country/target pair rather than a single flag for the whole country.

Checked with a plain `has_country_flag = sanctions_prepared@NIG` (see [Basics](../../triggers/basic/) for flag syntax).

## Diplomatic Restrictions

### Add a relation rule override

`add_relation_rule_override` adds a relation rule override for the target country.

```txt
add_relation_rule_override = {
    target = ROOT
    can_not_declare_war = yes
}
```

### Remove a relation rule override

`remove_relation_rule_override` removes a previously added rule override.

```txt
remove_relation_rule_override = {
    target = ROOT
    can_not_declare_war = yes
}
```

### Set a country rule

`set_rule` adds a rule that overrides other country rules.

```txt
set_rule = {
    can_not_declare_war = yes
}
```
