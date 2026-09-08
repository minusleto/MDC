---
title: Политика
description: "Политические эффекты и работа с партиями"
---

## Политические эффекты MDC

<a id="code-snippet-to-add-party-popularity-to-subideologies"></a>
### Фрагмент кода для добавления популярности партии к субидеологиям

- set_temp_variable = { party_index = X } #Индекс изменяемой партии, 0-23
- set_party_index_to_ruling_party = yes -- автоматически устанавливает индекс правящей партии
- set_temp_variable = { party_popularity_increase = Y } #Насколько изменится популярность партии; указывается десятичной дробью, т.е. 2% = 0.02
- set_temp_variable = { temp_outlook_increase = Z } #НЕОБЯЗАТЕЛЬНЫЙ ПАРАМЕТР -- указывается десятичной дробью, т.е. 2% = 0.02
- add_relative_party_popularity = yes

```
set_temp_variable = { party_index = 2 }
set_temp_variable = { party_popularity_increase = 0.10 }
set_temp_variable = { temp_outlook_increase = 0.10 } -- НЕОБЯЗАТЕЛЬНО
add_relative_party_popularity = yes
```

_**Изменить популярность правящей идеологии:**_

Назначение: изменяет популярность только правящей идеологии на величину `arg_popularity`

```
set_temp_variable = { arg_popularity = +- }
add_ruling_outlook_popularity = yes
```

_**Добавить партию в коалицию**_

Назначение: лёгкий скрипт, динамически локализующий добавление участников в коалицию.

```
set_temp_variable = { add_col_one = 0-23 }
add_coalition_members_effect = yes
```

_**Убрать партию из коалиции**_

Назначение: лёгкий скрипт, динамически локализующий удаление участников из коалиции.

```
set_temp_variable = { remove_col_one = 0-23 }
remove_coalition_members_effect = yes
```

_**Установить правящую партию через эффект**_

Назначение: устанавливает правящую партию на определённую субидеологию через скриптовый эффект. Вам всё равно нужно отдельно прописать set_politics, так как этот параметр нельзя задать через переменную.

```
# set_temp_variable = { rul_party_temp = 0-23 }
# set_temp_variable = { col_one = 0 - 23 }  -- Необязательно: задаёт первого участника коалиции
# set_temp_variable = { col_two = 0 - 23 }  -- Необязательно: задаёт второго участника коалиции
# set_temp_variable = { col_three = 0 - 23 }  -- Необязательно: задаёт третьего участника коалиции
# set_temp_variable = { change_leader_temp = 0-1 } -- Необязательно: если вы не хотите менять правящего лидера, задайте это значение = 1
# Обязательно поставьте set_politics вторым! Иначе set_party_name не обновится корректно

set_temp_variable = { rul_party_temp = 20 }
change_ruling_party_effect = yes
set_politics = {
    ruling_party = nationalist
    elections_allowed = no
}
```

_**Изменение порога выборов:**_

Назначение: изменяет порог выборов (минимальное значение, при котором партия учитывается для коалиций).

```
set_temp_variable = { threshold_change = 0.03 }
modify_election_threshold = yes
```

_**Разрешить/запретить партии**_

Запрещает указанный индекс партии для выборов

```
set_temp_variable = { party_index = 1-24 }
ban_party_scripted_call = yes
```

Разрешает указанный индекс партии для выборов

```
set_temp_variable = { party_index = 1-24 }
unban_party_scripted_call = yes
```

```
set_country_flag = free_allow_parties # Задайте это, если не хотите тратить очки политической власти
set_partyall_allowed = yes # Разрешает все партии
```

```
set_country_flag = free_ban_parties # Задайте это, если не хотите тратить очки политической власти
set_partyall_banned = yes # Запрещает все партии
```

<a id="protests"></a>
## Протесты

### Сила протестов

Изменяет силу протестов. Максимальное значение переменной — 100.

```
set_temp_variable = { protest_strength_change = 10 }
modify_protest_effect = yes
```

### Радикализация протестов

Изменяет радикализацию протестов. Максимальное значение переменной — 10. Значения выше 10 не имеют смысла.

```
set_temp_variable = { protest_radicalisation_change = -10 }
modify_protest_radicalisation_effect = yes
```

<a id="vanilla-political-effects"></a>
## Ванильные эффекты

В отличие от эффектов MDC выше, эти — стандартные эффекты игры. Они применяются напрямую, без обёртки через `set_temp_variable`.

<a id="political-power"></a>
### Политическая власть

```
add_political_power = 100
```

Добавляет указанное количество очков политической власти. Отрицательное значение — отнимает.

<a id="stability"></a>
### Стабильность

```
add_stability = 0.05
```

Меняет стабильность страны. Указывается десятичной дробью (0.05 = +5%). Отрицательное значение уменьшает стабильность.

<a id="war-support"></a>
### Военная поддержка

```
add_war_support = 0.05
```

Меняет уровень поддержки войны населением. Указывается десятичной дробью (0.05 = +5%).

<a id="ideology-popularity"></a>
### Популярность идеологий

```
add_popularity = {
    ideology = democratic
    popularity = 0.05
}
```

Меняет популярность указанной идеологии на заданную величину (десятичная дробь, 0.05 = +5%). В `ideology` указывается тег идеологии. В MDC это 5 групп, переосмысленных под сеттинг:

| Тег | Идеология в MDC |
|---|---|
| `democratic` | Западники |
| `communism` | Реакционеры |
| `fascism` | Салафиты |
| `nationalist` | Националисты |
| `neutrality` | Нейтралы |

Примеры на каждую идеологию:

```
add_popularity = {
    ideology = democratic
    popularity = 0.05
}
```
Увеличивает популярность западников на 5%.

```
add_popularity = {
    ideology = communism
    popularity = 0.05
}
```
Увеличивает популярность реакционеров на 5%.

```
add_popularity = {
    ideology = fascism
    popularity = 0.05
}
```
Увеличивает популярность салафитов на 5%.

```
add_popularity = {
    ideology = nationalist
    popularity = 0.05
}
```
Увеличивает популярность националистов на 5%.

```
add_popularity = {
    ideology = neutrality
    popularity = 0.05
}
```
Увеличивает популярность нейтралов на 5%.

Отрицательное значение `popularity` уменьшает поддержку идеологии. Если нужно изменить популярность конкретной партии/субидеологии внутри группы (а не всей идеологии целиком), используйте [`add_relative_party_popularity`](#code-snippet-to-add-party-popularity-to-subideologies) выше.

