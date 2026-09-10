---
title: Военные
description: "Военные скриптовые эффекты: дивизии, командиры, оборудование и военно-промышленные организации."
---

# Военные эффекты

Эффекты, которые используются для изменения армии, командиров, военного оборудования и военно-промышленных организаций.

## Армии и дивизии

### `create_unit`

Создаёт одну или несколько дивизий на основе существующего шаблона.

| Параметр | Назначение |
|---|---|
| `division` | Описание создаваемой дивизии: имя, шаблон и начальный опыт. |
| `owner` | Страна-владелец создаваемой дивизии. |
| `count` | Количество создаваемых дивизий. |
| `start_experience_base` | Базовый начальный опыт создаваемой дивизии. |
| `start_experience_factor` | Множитель начального опыта создаваемой дивизии. |
| `prioritize_location` | Управляет выбором приоритетного места появления. |

Пример из MDC:

```text
create_unit = {
    division = "name = \"Russian Revolutionaries\" division_template = \"Russian Revolutionaries\" start_experience_factor = 0.1"
    owner = SOV
}
```

Можно создать несколько дивизий одновременно:

```text
create_unit = {
    division = "name = \"6th. Gardekorps Division\" division_template = \"Gardekorps Division\" start_experience_factor = 1.0"
    owner = ROOT
    count = 1
}
```

### Военный опыт

| Эффект | Назначение |
|---|---|
| `army_experience` | Добавляет опыт армии. |
| `air_experience` | Добавляет опыт ВВС. |
| `navy_experience` | Добавляет опыт флота. |

Пример:

```text
army_experience = 25
air_experience = 25
navy_experience = 25
```

## Командиры

### `create_corps_commander`

Создаёт нового генерала и позволяет сразу задать его основные параметры.

| Параметр | Назначение |
|---|---|
| `name` | Имя командира. |
| `portrait_path` | Путь к портрету командира. |
| `traits` | Трейты, которыми командир будет обладать при создании. |
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

Это позволяет создавать уникального генерала непосредственно из эффекта: имя, портрет, уровень навыка и стартовые трейты задаются в одном блоке.

## Оборудование

### `add_equipment_to_stockpile`

Добавляет или убирает оборудование из складских запасов страны. Можно указать конкретный вариант техники и производителя.

| Параметр | Назначение |
|---|---|
| `type` | Тип оборудования. |
| `amount` | Количество. Положительное значение добавляет технику, отрицательное убирает. |
| `variant_name` | Конкретный вариант оборудования. |
| `producer` | Страна-производитель оборудования. |

Пример с конкретным вариантом:

```text
add_equipment_to_stockpile = {
    type = medium_tank_artillery_chassis_0
    variant_name = "2S3 Akatsiya"
    amount = 300
}
```

Пример с производителем:

```text
add_equipment_to_stockpile = {
    type = infantry_weapons2
    amount = 6000
    producer = SOV
}
```

### `create_equipment_variant`

Создаёт новый вариант оборудования на основе указанного типа и версии.

| Параметр | Назначение |
|---|---|
| `name` | Название нового варианта. |
| `type` | Тип оборудования, для которого создаётся вариант. |
| `name_group` | Группа имён, используемая для названия. |
| `parent_version` | Родительская версия оборудования. |

Пример из MDC:

```text
create_equipment_variant = {
    name = "Frankenthal 2 Class"
    type = corvette_hull_4
    name_group = GER_MODERN_CORVETTES_NAMES
    parent_version = 0
}
```

## Военно-промышленные организации (MIO)

Эффекты MIO изменяют конкретную военно-промышленную организацию или её общие параметры.

### `add_mio_funds`

Добавляет средства конкретной MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_funds = 1500
}
```

### `add_mio_funds_gain_factor`

Изменяет множитель получения средств MIO.

```text
add_mio_funds_gain_factor = 0.1
```

### `add_mio_size`

Изменяет размер/уровень MIO.

```text
mio:GER_artec = {
    add_mio_size = 2
}
```

### `add_mio_size_up_requirement_factor`

Изменяет множитель требования для повышения размера MIO. Отрицательное значение уменьшает требование.

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
}
```

### `add_mio_research_bonus`

Добавляет бонус к исследованиям, связанный с MIO.

```text
mio:GER_rheinmetall_man = {
    add_mio_research_bonus = 0.15
}
```

Параметры MIO можно комбинировать в одном блоке:

```text
mio:GER_rheinmetall_man = {
    add_mio_size_up_requirement_factor = -0.15
    add_mio_funds = 1500
    add_mio_research_bonus = 0.15
}
```

## Что ещё относится к военным эффектам

В общем справочнике эффектов также встречаются специализированные механики для флота, железнодорожных орудий, ядерного оружия, операций и рейдов. Их стоит документировать здесь отдельными подразделами после проверки фактического использования в MDC, чтобы не смешивать подтверждённые конструкции с эффектами, которые в SOV/GER focus tree не используются.
