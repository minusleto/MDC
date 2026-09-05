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

<a id="counter-terror-effects"></a>
