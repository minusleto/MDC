---
title: Иностранное влияние
description: "Эффекты системы Foreign Influence"
---

## Эффекты влияния MDC

Процентное изменение задаётся целым числом: например, `10` = +10%, `-10` = -10%.

<a id="domestic-influence"></a>
### Внутреннее влияние

`change_domestic_influence_percentage` изменяет **внутреннее влияние** страны, на которой выполняется эффект.

#### Пример: увеличить внутреннее влияние на 10%

```txt
set_temp_variable = { percent_change = 10 }
change_domestic_influence_percentage = yes
```

#### Пример: уменьшить внутреннее влияние на 10%

```txt
set_temp_variable = { percent_change = -10 }
change_domestic_influence_percentage = yes
```

Эффект использует временную переменную `percent_change`. Значение задаётся непосредственно числом без знаков-заполнителей.

<a id="foreign-influence"></a>
### Влияние иностранных сторон

Эта группа управляет **внешним влиянием**: позволяет изменить процент влияния конкретной стороны и выбрать, какая сторона считается влияющей.

#### Изменить процент иностранного влияния

Для `change_influence_percentage` задаются три временные переменные:

- `percent_change` — изменение влияния в процентах;
- `tag_index` — индекс влияющей стороны;
- `influence_target` — страна, на которую направлено влияние.

Поддерживаемые скоупы для `tag_index` и `influence_target`: `FROM`, `ROOT`, `PREV`, `TAG` и другие стандартные скоупы, когда они указывают на нужный тег/страну.

#### Пример: увеличить влияние FROM на ROOT на 10%

```txt
set_temp_variable = { percent_change = 10 }
set_temp_variable = { tag_index = FROM }
set_temp_variable = { influence_target = ROOT }
change_influence_percentage = yes
```

#### Пример: уменьшить влияние FROM на ROOT на 10%

```txt
set_temp_variable = { percent_change = -10 }
set_temp_variable = { tag_index = FROM }
set_temp_variable = { influence_target = ROOT }
change_influence_percentage = yes
```

:::caution
Если у 7-й влияющей стороны уже больше влияния, чем величина вашего `percent_change`, целевая страна может получить прирост внутреннего влияния вместо прироста влияния вашей стороны. Например, если у 7-й стороны 5%, а изменение составляет 3%, вместо прироста вашего влияния целевая страна получает внутреннее влияние.
:::

#### Изменить индекс влияющей стороны

`change_current_influencer_index_percentage` изменяет индекс текущей влияющей стороны.

```txt
set_temp_variable = { percent_change = 10 }
set_temp_variable = { influencer_index = 3 }
change_current_influencer_index_percentage = yes
```

`influencer_index` принимает индекс влияющей стороны в диапазоне `0`–`6`.

:::note
Индекс `0`–`6` выбирает конкретную позицию в списке влияющих сторон. Если тебе нужно изменить именно процент влияния между двумя странами, используй `change_influence_percentage`.
:::
