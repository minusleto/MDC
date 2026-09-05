---
title: Иностранное влияние
description: "Эффекты системы Foreign Influence"
---

## Эффекты влияния MDC

<a id="influence-action-examples"></a>
### Примеры действий влияния

Процентное изменение задаётся целым числом (например, 10 = 10%)

- Внутреннее влияние (Domestic Influence)

```
# set_temp_variable = { percent_change = +-x }
change_domestic_influence_percentage = yes
```

- Изменение индекса влияющих сторон

```
# set_temp_variable = { percent_change = +-x }
# set_temp_variable = { influencer_index = 0-6 }
change_current_influencer_index_percentage = yes
```

- Общее изменение влияния
-- Учтите: если у 7-го влияющего больше влияния, чем ваш percent_change, целевая страна получит прирост внутреннего влияния вместо того, чтобы влияние получили вы.

Например:
у 7-го влияющего 5% влияния, а вы влияете на 3%. В этом случае целевая страна получает прирост внутреннего влияния вместо вас.

```
# set_temp_variable = { percent_change = -+ x }
# set_temp_variable = { tag_index = SCOPE }
# set_temp_variable = { influence_target = SCOPE }
# Поддерживаемые скоупы: FROM, ROOT, PREV, TAG
change_influence_percentage = yes
```

<a id="mdc-political-effects"></a>
