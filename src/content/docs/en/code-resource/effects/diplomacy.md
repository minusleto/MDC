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

`target` — the country whose opinion is changed. `modifier` — имя модификатора мнения из `common/opinion_modifiers`.

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

Чтобы отменить отношение, используется тот же эффект с `active = no`:

```txt
diplomatic_relation = {
    country = ROOT
    relation = military_access
    active = no
}
```

## Influence

Процентное изменение задаётся целым числом: например, `10` = +10%, `-10` = -10%.

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

Эффект использует временную переменную `percent_change`. Значение задаётся непосредственно числом без знаков-заполнителей.

### Foreign-Side Influence

This group controls **foreign influence**: it can change a specific side's influence percentage and select which side is considered the influencer.

#### Change the foreign influence percentage

Для `change_influence_percentage` задаются три временные переменные:

- `percent_change` — influence change in percent;
- `tag_index` — index of the influencing side;
- `influence_target` — country being influenced.

Поддерживаемые скоупы для `tag_index` и `influence_target`: `FROM`, `ROOT`, `PREV`, `TAG` и другие стандартные скоупы, когда они указывают на нужный тег/страну.

#### Пример: increase FROM's influence on ROOT by 10%

```txt
set_temp_variable = { percent_change = 10 }
set_temp_variable = { tag_index = FROM }
set_temp_variable = { influence_target = ROOT }
change_influence_percentage = yes
```

#### Пример: decrease FROM's influence on ROOT by 10%

```txt
set_temp_variable = { percent_change = -10 }
set_temp_variable = { tag_index = FROM }
set_temp_variable = { influence_target = ROOT }
change_influence_percentage = yes
```

:::caution
Если у 7-й влияющей стороны уже больше влияния, чем величина вашего `percent_change`, целевая страна может получить прирост внутреннего влияния вместо прироста влияния вашей стороны. Например, если у 7-й стороны 5%, а изменение составляет 3%, вместо прироста вашего влияния целевая страна получает внутреннее влияние.
:::

### Change the current influencer index

`change_current_influencer_index_percentage` changes the index of the current influencing side.

```txt
set_temp_variable = { percent_change = 10 }
set_temp_variable = { influencer_index = 3 }
change_current_influencer_index_percentage = yes
```

`influencer_index` принимает индекс влияющей стороны в диапазоне `0`–`6`.

:::note
Индекс `0`–`6` выбирает конкретную позицию в списке влияющих сторон. Если тебе нужно изменить именно процент влияния между двумя странами, используй `change_influence_percentage`.
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
`break_embargo` должен выполняться со стороны страны, которая наложила эмбарго.
:::

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
