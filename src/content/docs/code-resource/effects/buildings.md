---
title: Постройки
description: "Стоимость и скриптовые эффекты для зданий"
---

## Стоимость построек MDC

Для построек, которые занимают строительный слот, указанная стоимость уже включает стоимость самого слота.

### Промышленность

| Постройка | ID | Стоимость |
|---|---|---:|
| Гражданская промышленность | `industrial_complex` | $7.50 |
| Военная промышленность | `arms_factory` | **$3.75** |
| Верфь | `dockyard` | $7.50 |
| Офисы | `offices` | $12.00 |
| Коммерческий сельскохозяйственный район | `agriculture_district` | $3.75 |

### Инфраструктура и связь

| Постройка | ID | Стоимость |
|---|---|---:|
| Инфраструктура | `infrastructure` | $3.50 |
| Авиабаза | `air_base` | $2.50 |
| Сетевая инфраструктура | `internet_station` | $3.00 |
| Железные дороги | `rail_way` | $0.01 за провинцию |

### Энергетика и топливо

| Постройка | ID | Стоимость |
|---|---|---:|
| Инфраструктура возобновляемой энергетики | `synthetic_refinery` | $8.50 |
| Топливное хранилище | `fuel_silo` | $3.00 |
| Электростанция на ископаемом топливе | `fossil_powerplant` | $2.25 |
| Ядерный реактор | `nuclear_reactor` | $9.00 |

### Оборона

| Постройка | ID | Стоимость |
|---|---|---:|
| ЗРК | `anti_air_building` | $3.25 |
| Радарная станция | `radar_station` | $1.75 |
| Региональная оборонительная сеть | `stronghold_network` | $8.00 |
| Сухопутный форт | `bunker` | $0.50 за уровень |
| Береговой бункер | `coastal_bunker` | $0.50 за уровень |

### Специальные и провинциальные постройки

| Постройка | ID | Стоимость |
|---|---|---:|
| Пусковая площадка ракет | `rocket_site` | $3.00 |
| Объект военно-морских исследований | `naval_facility` | $15.00 |
| Объект сухопутных исследований | `land_facility` | $15.00 |
| Объект аэродинамики и авионики | `air_facility` | $15.00 |
| Гражданский научно-исследовательский объект | `nuclear_facility` | $15.00 |
| Военно-морская база | `naval_base` | $0.50 за уровень |
| Узел снабжения | `supply_node` | $2.50 |

**Минимальная стоимость строительного слота: $1.00 за слот.**

### Ресурсы

В MD 8 единиц ресурсов соответствуют одной гражданской фабрике. Поэтому добавление 1 единицы стали обходится стране в $0.938 млрд по стандарту MD. Ниже показан принцип расчёта стоимости ресурсов через казну.

```text
capital_scope = {
    add_resource = {
        type = steel
        amount = 4
    }
}
set_temp_variable = { treasury_change = -3.75 }
modify_treasury_effect = yes
```

<a id="mdc-building-effects"></a>

## Как добавить здание

Для стандартных построек MDC используйте готовые scripted effects из `common\\scripted_effects\\00_scripted_effects.txt`. Они уже содержат необходимую логику добавления здания и его стоимости.

Есть два основных варианта:

- `one_random_*`, `two_random_*`, `three_random_*`, `four_random_*` — добавить постройку в случайные подходящие регионы.
- `one_state_*`, `two_state_*`, `three_state_*`, `four_state_*` — добавить постройку в конкретный регион.

Эффекты `one_state_*` и другие `*_state_*` должны использоваться внутри scope нужного региона.

### Бесплатное добавление здания

Если нужно добавить здание напрямую, без списания стоимости через scripted effect MDC, используйте `add_building_construction`. Параметр `instant_build = yes` завершает строительство сразу.

Шаблон:

```text
add_building_construction = {
    type = industrial_complex
    level = 1
    instant_build = yes
}
```

В `type` указывается ID здания. Основные типы:

| Тип | ID |
|---|---|
| Гражданская промышленность | `industrial_complex` |
| Военная промышленность | `arms_factory` |
| Верфь | `dockyard` |
| Офисы | `offices` |
| Коммерческий сельскохозяйственный район | `agriculture_district` |
| Инфраструктура | `infrastructure` |
| Авиабаза | `air_base` |
| Сетевая инфраструктура | `internet_station` |
| Железная дорога | `rail_way` |
| Инфраструктура возобновляемой энергетики | `synthetic_refinery` |
| Топливное хранилище | `fuel_silo` |
| Электростанция на ископаемом топливе | `fossil_powerplant` |
| Ядерный реактор | `nuclear_reactor` |
| ЗРК | `anti_air_building` |
| Радарная станция | `radar_station` |
| Региональная оборонительная сеть | `stronghold_network` |
| Сухопутный форт | `bunker` |
| Береговой бункер | `coastal_bunker` |
| Пусковая площадка ракет | `rocket_site` |
| Объект военно-морских исследований | `naval_facility` |
| Объект сухопутных исследований | `land_facility` |
| Объект аэродинамики и авионики | `air_facility` |
| Гражданский научно-исследовательский объект | `nuclear_facility` |
| Военно-морская база | `naval_base` |
| Узел снабжения | `supply_node` |

Пример для нескольких уровней:

```text
add_building_construction = {
    type = arms_factory
    level = 3
    instant_build = yes
}
```

Этот способ не использует `treasury_change`: стоимость из таблицы выше относится к платным MDC scripted effects, а `add_building_construction` в таком виде используется для бесплатного прямого добавления.

### Гражданская фабрика

**Случайный регион**

```text
one_random_industrial_complex = yes
two_random_industrial_complex = yes
three_random_industrial_complex = yes
four_random_industrial_complex = yes
```

**Конкретный регион**

```text
one_state_industrial_complex = yes
two_state_industrial_complex = yes
three_state_industrial_complex = yes
four_state_industrial_complex = yes
```

### Военная фабрика

**Случайный регион**

```text
one_random_arms_factory = yes
two_random_arms_factory = yes
three_random_arms_factory = yes
four_random_arms_factory = yes
```

**Конкретный регион**

```text
one_state_arms_factory = yes
two_state_arms_factory = yes
three_state_arms_factory = yes
four_state_arms_factory = yes
```

### Инфраструктура

**Случайный регион**

```text
one_random_infrastructure = yes
two_random_infrastructure = yes
three_random_infrastructure = yes
```

**Конкретный регион**

```text
one_state_infrastructure = yes
two_state_infrastructure = yes
three_state_infrastructure = yes
```

### Верфь

**Случайный регион**

```text
one_random_dockyard = yes
two_random_dockyards = yes
```

**Конкретный регион**

```text
one_state_dockyard = yes
two_state_dockyard = yes
```

### Офисы

Следующие эффекты также дают электростанцию на ископаемом топливе.

**Случайный регион**

```text
one_office_construction = yes
two_office_construction = yes
three_office_construction = yes
```

**Конкретный регион**

```text
one_state_office_construction = yes
two_state_office_construction = yes
three_state_office_construction = yes
```

### Коммерческий сельскохозяйственный район

**Случайный регион**

```text
one_random_agriculture_district = yes
```

**Конкретный регион**

```text
one_state_agriculture_district = yes
```

### Авиабазы

**Случайный регион**

```text
one_air_base = yes
two_air_base = yes
```

**Конкретный регион**

```text
one_state_air_base = yes
two_state_air_base = yes
```

### Сетевая инфраструктура

**Случайный регион**

```text
one_random_network_infrastructure = yes
two_random_network_infrastructure = yes
```

**Конкретный регион**

```text
one_state_network_infrastructure = yes
two_state_network_infrastructure = yes
```

### ПВО / ЗРК

**Случайный регион**

```text
one_anti_air = yes
two_anti_air = yes
```

**Конкретный регион**

```text
one_state_anti_air = yes
two_state_anti_air = yes
```

### Радарная станция

**Случайный регион**

```text
one_radar_station = yes
two_radar_station = yes
```

**Конкретный регион**

```text
one_state_radar_station = yes
two_state_radar_station = yes
```

### Синтетический НПЗ

**Случайный регион**

```text
one_random_synthetic_refinery = yes
two_random_synthetic_refinery = yes
three_random_synthetic_refinery = yes
```

**Конкретный регион**

```text
one_state_synthetic_refinery = yes
two_state_synthetic_refinery = yes
three_state_synthetic_refinery = yes
```

### Ядерный реактор

**Случайный регион**

```text
one_random_nuclear_reactor = yes
two_random_nuclear_reactor = yes
```

**Конкретный регион**

```text
one_state_nuclear_reactor = yes
two_state_nuclear_reactor = yes
```