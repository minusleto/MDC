---
title: Военные
description: "Справочник по эффектам, связанным с армией, командирами, техникой и военно-промышленными организациями."
---

# Военные эффекты

Здесь собраны эффекты, которые управляют сухопутными войсками, командирами, военной техникой и военно-промышленными организациями.

## Дивизии

### Создать дивизию

`create_unit` создаёт одну или несколько дивизий на основе **существующего шаблона дивизии**.

> **Важно:** для создания дивизии нужен шаблон (`division_template`). Если указанного шаблона нет, дивизия **не создастся**.

| Параметр | Что делает |
|---|---|
| `division` | Описывает создаваемую дивизию: имя, шаблон и начальный опыт. |
| `owner` | Страна, которой будет принадлежать дивизия. |
| `count` | Сколько дивизий создать. |
| `start_experience_base` | Задаёт базовый начальный опыт дивизии. |
| `start_experience_factor` | Умножает начальный опыт дивизии. |
| `prioritize_location` | Задаёт приоритет при выборе места появления. |

Пример:

```text
create_unit = {
    division = "name = \"Russian Revolutionaries\" division_template = \"Russian Revolutionaries\" start_experience_factor = 0.1"
    owner = SOV
}
```

В этом примере `division_template = "Russian Revolutionaries"` указывает на уже существующий шаблон. Без него создать дивизию нельзя.

### Создать шаблон дивизии

`division_template` создаёт шаблон, который затем можно использовать при создании дивизий.

Шаблон определяет, из каких боевых батальонов и рот поддержки состоит дивизия. Название шаблона в `name` должно совпадать с названием, которое указывается в `division_template` внутри `create_unit`.

```text
division_template = {
    name = "Infantry Division"
    regiments = {
        infantry = { x = 0 y = 0 }
        infantry = { x = 0 y = 1 }
        infantry = { x = 0 y = 2 }
        infantry = { x = 1 y = 0 }
        infantry = { x = 1 y = 1 }
        infantry = { x = 1 y = 2 }
    }
    support = {
        engineer = { x = 0 y = 0 }
        artillery = { x = 0 y = 1 }
    }
}
```

Здесь `name = "Infantry Division"` — имя шаблона. После его создания его можно использовать так:

```text
create_unit = {
    division = "name = \"My Infantry Division\" division_template = \"Infantry Division\""
    owner = ROOT
}
```

`regiments` задаёт боевые батальоны, а `support` — роты поддержки. Координаты `x` и `y` определяют положение подразделения в шаблоне.

### Изменить шаблон существующей дивизии

`change_division_template` меняет шаблон **текущей дивизии**. Работает в **DIVISION scope**.

```text
change_division_template = {
    division_template = "Infantry Division"
}
```

### Добавить случайную допустимую черту командиру дивизии

`add_random_valid_trait_from_unit` выбирает случайную допустимую черту для unit leader.

```text
add_random_valid_trait_from_unit = FROM
```

> DIVISION scope должен совпадать с ROOT scope.

### Добавить опыт командиру дивизии

`add_divisional_commander_xp` добавляет опыт командиру текущей дивизии.

```text
add_divisional_commander_xp = 10
```


## Военный опыт

### Опыт армии

`army_experience` добавляет опыт сухопутным войскам.

```text
army_experience = 25
```

### Опыт ВВС

`air_experience` добавляет опыт военно-воздушным силам.

```text
air_experience = 25
```

### Опыт флота

`navy_experience` добавляет опыт военно-морскому флоту.

```text
navy_experience = 25
```

## Доктрины и мастерство

### Бонус к приросту мастерства доктрин

`add_mastery_bonus` временно увеличивает прирост **mastery** (мастерства) доктрин. Эффект работает в **COUNTRY scope** и действует указанное число дней. Величина `bonus` задаётся коэффициентом: `0.1` = +10%, `0.25` = +25%, `1.0` = +100%.

Можно фильтровать, какие направления доктрины получают бонус. Если фильтр не указан, он считается пройденным, поэтому без фильтров эффект может затронуть все подходящие активные треки.

| Параметр | Что делает |
|---|---|
| `bonus` | Множитель бонуса к приросту мастерства. `0.1` = +10%. |
| `days` | Сколько дней действует бонус. |
| `name` | Ключ локализации, показываемый как источник бонуса. |
| `folder` | Ограничивает бонус папкой доктрины, например `land`. |
| `grand_doctrine` | Ограничивает бонус великой доктриной, например `mobile_warfare`. |
| `sub_doctrine` | Ограничивает бонус конкретной поддоктриной. |
| `track` | Ограничивает бонус конкретным треком, например `infantry`. |
| `index` | Индекс трека внутри папки, начиная с `0`. |

**Пример: бонус всем наземным трекам:**

```text
add_mastery_bonus = {
    bonus = 0.10
    days = 90
    name = MDC_land_mastery_bonus
    folder = land
}
```

**Пример: бонус конкретному треку пехоты:**

```text
add_mastery_bonus = {
    bonus = 0.25
    days = 365
    name = MDC_infantry_mastery_bonus
    track = infantry
}
```

**Пример: точная фильтрация по папке, великой доктрине, поддоктрине и треку:**

```text
add_mastery_bonus = {
    bonus = 0.50
    days = 180
    name = MDC_mobile_infantry_mastery_bonus
    folder = land
    grand_doctrine = mobile_warfare
    sub_doctrine = mobile_infantry
    track = infantry
}
```

`index` можно добавить, если внутри одного трека нужно выбрать конкретную позицию, например `index = 1`. Значение индекса начинается с `0`.

> **Не путай с `add_mastery` и `add_daily_mastery`:** `add_mastery` сразу добавляет фиксированное количество мастерства, `add_daily_mastery` добавляет фиксированное количество мастерства ежедневно ограниченное число дней, а `add_mastery_bonus` временно увеличивает сам прирост мастерства на процент.

## Доктрины: мастерство и выбор ветки

### Немедленно добавить мастерство

`add_mastery` сразу добавляет указанное количество **mastery** выбранным трекам доктрины. Работает в **COUNTRY scope**. Фильтры можно комбинировать; отсутствующий фильтр считается пройденным.

| Параметр | Назначение |
|---|---|
| `amount` | Сколько мастерства добавить. |
| `folder` | Папка доктрины, например `land`. |
| `grand_doctrine` | Великая доктрина, например `mobile_warfare`. |
| `sub_doctrine` | Конкретная поддоктрина. |
| `track` | Конкретный трек, например `infantry`. |
| `index` | Индекс трека внутри папки, начиная с `0`. |

```text
add_mastery = {
    amount = 100
    folder = land
}
```

### Ежедневно добавлять мастерство

`add_daily_mastery` добавляет фиксированное количество мастерства **каждый день** в течение заданного срока.

| Параметр | Назначение |
|---|---|
| `amount` | Мастерство в день. |
| `days` | Длительность в днях. |
| `name` | Ключ локализации источника прироста. |
| `folder` | Фильтр папки. |
| `grand_doctrine` | Фильтр великой доктрины. |
| `sub_doctrine` | Фильтр поддоктрины. |
| `track` | Фильтр трека. |
| `index` | Индекс трека, начиная с `0`. |

```text
add_daily_mastery = {
    amount = 0.5
    days = 90
    name = MDC_daily_land_mastery
    folder = land
    track = infantry
}
```

### Установить великую доктрину

`set_grand_doctrine` активирует и назначает стране указанную великую доктрину.

```text
set_grand_doctrine = mobile_warfare
```

### Установить поддоктрину

`set_sub_doctrine` активирует и назначает указанную поддоктрину. По умолчанию выбирается первый подходящий трек; `folder` и `track` позволяют указать точное место.

```text
set_sub_doctrine = mobile_infantry
```

```text
set_sub_doctrine = {
    sub_doctrine = mobile_infantry
    folder = land
    track = 1
}
```

> `track` здесь — индекс трека внутри папки, начиная с `0`.

## Командиры: навыки, опыт и черты

Эти эффекты применяются к **CHARACTER scope** командира. Для массового выбора удобно использовать `every_unit_leader`, `every_army_leader` или `every_navy_leader`.

### Навыки

`add_skill_level` повышает общий уровень навыка.

```text
every_unit_leader = {
    add_skill_level = 1
}
```

Отдельные навыки:
- `add_attack` — атака;
- `add_defense` — оборона;
- `add_planning` — планирование;
- `add_logistics` — логистика;
- `add_coordination` — координация;
- `add_maneuver` — манёвр.

```text
every_army_leader = {
    add_attack = 1
    add_defense = 1
    add_planning = 2
    add_logistics = 1
}
```

Для адмиралов:

```text
every_navy_leader = {
    add_coordination = 1
    add_maneuver = 2
}
```

### Опыт

`gain_xp` добавляет опыт командиру. Отрицательные значения не поддерживаются; при достаточном опыте командир получает следующий уровень.

```text
every_unit_leader = {
    gain_xp = 5
}
```

### Слоты черт

`add_max_trait` добавляет слоты для назначаемых черт.

```text
every_army_leader = {
    add_max_trait = 1
}
```

### Черты

Добавить конкретную черту:

```text
add_unit_leader_trait = old_guard
```

Удалить черту:

```text
remove_unit_leader_trait = old_guard
```

Случайная черта из списка:

```text
add_random_trait = {
    old_guard
    brilliant_strategist
    inflexible_strategist
}
```

Временная черта:

```text
add_timed_unit_leader_trait = {
    trait = wounded
    days = 90
}
```

`replace_unit_leader_trait` существует, но считается нестабильным. Надёжнее удалить старую и добавить новую:

```text
remove_unit_leader_trait = old_guard
add_unit_leader_trait = brilliant_strategist
```

### Повышение и понижение

`promote_leader` повышает генерала до фельдмаршала:

`promote_leader = yes`

`demote_leader` понижает фельдмаршала до генерала:

`demote_leader = yes`

### Снабжение и временный боевой бафф

`supply_units` выдаёт войскам текущего лидера указанное количество часов снабжения.

```text
supply_units = 24
```

`add_temporary_buff_to_units` временно меняет боевые параметры войск командира.

| Параметр | Назначение |
|---|---|
| `combat_offense` | Бонус к атаке. |
| `combat_breakthrough` | Бонус к прорыву. |
| `combat_defense` | Бонус к обороне. |
| `combat_entrenchment` | Бонус к окопанности. |
| `org_damage_multiplier` | Множитель урона по организации. |
| `str_damage_multiplier` | Множитель урона по прочности. |
| `war_support_reduction_on_damage` | Изменение потерь поддержки войны от урона. |
| `cannot_retreat_while_attacking` | Запрет отступления во время атаки. |
| `cannot_retreat_while_defending` | Запрет отступления во время обороны. |
| `days` | Длительность. |
| `tooltip` | Ключ подсказки. |

```text
add_temporary_buff_to_units = {
    combat_offense = 0.25
    combat_breakthrough = 0.25
    org_damage_multiplier = -1.0
    str_damage_multiplier = 0.25
    war_support_reduction_on_damage = 0.2
    cannot_retreat_while_attacking = 1.0
    days = 7
    tooltip = ABILITY_FORCE_ATTACK_TOOLTIP
}
```

### Изгнание и удаление

`remove_exile_tag` снимает статус изгнанного лидера:

`remove_exile_tag = yes`

`remove_unit_leader` удаляет текущего unit leader:

`remove_unit_leader = yes`

`remove_unit_leader_role` снимает с персонажа все роли unit leader:

`remove_unit_leader_role = yes`

## Командиры

### Создать генерала

`create_corps_commander` создаёт нового генерала и позволяет сразу задать его основные параметры.

| Параметр | Что делает |
|---|---|
| `name` | Имя командира. |
| `portrait_path` | Путь к портрету командира. |
| `traits` | Черты, которые командир получает при создании. |
| `skill` | Начальный уровень навыка командира. |

Пример:

```text
create_corps_commander = {
    name = "Viktor Zolotov"
    portrait_path = "gfx/leaders/SOV/SOV_zolotov.dds"
    traits = { guerrilla_leader_trait }
    skill = 1
}
```

### Бонусы для подразделений

`add_unit_bonus` добавляет стране постоянные бонусы для типов подразделений и их категорий.

```text
add_unit_bonus = {
    category_light_infantry = {
        soft_attack = 0.05
        name = MDC_light_infantry_bonus
    }
    cavalry = {
        soft_attack = 0.05
        hard_attack = 0.05
        name = MDC_cavalry_bonus
    }
}
```


## Военная техника

### Добавить технику на склад

`add_equipment_to_stockpile` добавляет технику на склад страны или убирает её со склада.

| Параметр | Что делает |
|---|---|
| `type` | Тип оборудования. |
| `amount` | Количество. Положительное значение добавляет технику, отрицательное убирает. |
| `variant_name` | Конкретный вариант техники. |
| `producer` | Страна-производитель техники. |

Пример:

```text
add_equipment_to_stockpile = {
    type = medium_tank_artillery_chassis_0
    variant_name = "2S3 Akatsiya"
    amount = 300
}
```

### Создать вариант техники

`create_equipment_variant` создаёт новый вариант техники на основе указанного типа и родительской версии.

| Параметр | Что делает |
|---|---|
| `name` | Название нового варианта. |
| `type` | Тип техники, для которого создаётся вариант. |
| `name_group` | Группа имён для названия техники. |
| `parent_version` | Родительская версия техники. |

Пример:

```text
create_equipment_variant = {
    name = "Frankenthal 2 Class"
    type = corvette_hull_4
    name_group = GER_MODERN_CORVETTES_NAMES
    parent_version = 0
}
```

## Военно-промышленные организации

Эти эффекты изменяют параметры конкретной военно-промышленной организации (MIO).

### Добавить средства организации

`add_mio_funds` добавляет средства MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_funds = 1500
}
```

### Изменить прирост средств

`add_mio_funds_gain_factor` изменяет множитель получения средств MIO.

```text
add_mio_funds_gain_factor = 0.1
```

### Изменить размер организации

`add_mio_size` изменяет размер/уровень MIO.

```text
mio:GER_artec = {
    add_mio_size = 2
}
```

### Изменить требование для повышения уровня

`add_mio_size_up_requirement_factor` изменяет множитель требования для повышения размера MIO. Отрицательное значение уменьшает требование.

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
}
```

### Добавить бонус к исследованиям

`add_mio_research_bonus` добавляет бонус к исследованиям, связанный с MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_research_bonus = 0.15
}
```

Несколько параметров MIO можно использовать в одном блоке:

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
    add_mio_funds = 1500
    add_mio_research_bonus = 0.15
}
```
