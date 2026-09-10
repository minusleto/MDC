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
