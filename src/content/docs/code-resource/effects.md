---
title: Скриптовые эффекты
description: "Effects/Scripted Effects — постройки, экономика, фракции, влияние, политика, ЕС, антитеррор, картели"
---

Все скриптовые эффекты автоматически создают тултипы — **не** локализуйте их вручную дополнительно。

<a id="effectsscripted-effects"></a>
## Эффекты / Скриптовые эффекты

<a id="mdc-building-costs"></a>
### Стоимость построек MDC

Для каждой постройки, которая занимает слот строительства (например, гражданская промышленность), стоимос... (содержимое сокращено для краткости)

-- Постройки в регионах:

- Гражданская промышленность (industrial_complex) - $7.50
- Военная пр��мышленность (arms_factory) - $7.50
- Верфь (dockyard) - $7.50
- Офисы (offices) - $12
- Коммерческий сельскохозяйственный район - $3.75
- Инфраструктура (infrastructure) - $3.50
- Авиабаза (air_base) - $2.50
- ЗРК (anti_air_building) - $3.25
- Инфраструктура возобновляемой энергетики (synthetic_refinery) - $8.50
- Топливное хранилище (fuel_silo) - $3.00
- Радарная станция (radar_station) - $1.75
- Сетевая инфраструктура (internet_station) - $3.00
- Пусковая площадка ракет (rocket_site) - $3.00
- Ядерный реактор (nuclear_reactor) - $9.00
- Региональная оборонительная сеть (stronghold_network) - $8.00
- Электростанция на ископаемом топливе (fossil_powerplant) - $2.25
- **Минимальная стоимость слота строительства: $1,00 за слот**

-- Провинциальные постройки

- Объект военно-морских исследований (naval_facility) - $15.00
- Объект сухопутных исследований (land_facility) - $15.00
- Объект аэродинамики и авионики (air_facility) - $15.00
- Гражданский научно-исследовательский объект (nuclear_facility) - $15.00
- Военно-морская база (naval_base) - $0.50 per level
- Сухопутный форт (bunker) - $0.50 per level
- Береговой бункер (coastal_bunker) - $0.50 per level
- Узел снабжения (supply_node) - $2.50
- Железные дороги (rail_way) - $0.01 per province

-- Ресурсы:

В MD 8 единиц ресурсов соответствуют одной гражданской фабрике. Поэтому добавление 1 единицы стали обойдётс...

Пример:

```
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
### Эффекты построек MDC

Если вам лень рассчитывать стоимость стандартных эффектов, связанных с постройками, можно посмотреть её в [...]

Эффекты уровня региона требуют размещения эффекта внутри региона. Если постройку нельзя добавить в указан...

Пример:

```
117 = {
	one_state_industrial_complex = yes
}
```

По возможности используйте эти эффекты как можно чаще.

<a id="civilian-factory"></a>
#### Гражданская фабрика

```
one_random_industrial_complex = yes #добавляет 1 гражданскую фабрику со слотом и стоимостью
two_random_industrial_complex = yes #добавляет 2 гражданские фабрики со слотами и стоимостью
three_random_industrial_complex = yes #добавляет 3 гражданские фабрики (2 в одном случайном регионе, 3-я — в другом) со слотами [...]
four_random_industrial_complex = yes #добавляет 4 гражданские фабрики (2 в одном случайном регионе, 2 — в другом) со слотами и …

~~Уровень региона~~
one_state_industrial_complex = yes #добавляет 1 гражданскую фабрику со слотом и стоимостью в заданный регион
two_state_industrial_complex = yes #добавляет 2 гражданские фабрики со слотом и стоимостью в заданный регион
three_state_industrial_complex = yes #добавляет 3 гражданские фабрики со слотом и стоимостью в заданный регион
four_state_industrial_complex = yes #добавляет 4 гражданские фабрики со слотом и стоимостью в заданный регион
```

... (остальная часть файла без изменений) ...

<a id="freedom-laws-effects"></a>
### Эффекты «Свобода законов"

Каждая категория — это idea group из нескольких уровней. Соответствующий `set_*` эффект переключает страну на нужный уровень и, если она уже на этом уровне, даёт одноразовый бонус (PP/стабильность/популярность).

<a id="censorship-laws"></a>
#### Цензура (censorship_laws)

| Эффект | Уровень |
|---|---|
| `set_freedom_of_speech = yes` | Свобода слова |
| `set_ban_on_extremism = yes` | Запрет экстремизма |
| `set_censorship = yes` | Госцензура |
| `set_minitrue = yes` | Минправ |

<a id="right-assembly"></a>
#### Свобода собраний (right_assembly)

| Эффект | Уровень |
|---|---|
| `set_free_assembly = yes` | Свобода собраний |
| `set_notification_regime = yes` | Уведомительный режим |
| `set_curfew = yes` | Комендантский час |

<a id="internet-law"></a>
#### Интернет (internet_law)

| Эффект | Уровень |
|---|---|
| `set_internet_freedom = yes` | Свободный интернет |
| `set_internet_censorship = yes` | Интернет-цензура |
| `set_white_lists = yes` | Белые списки |
| `set_national_internet = yes` | Чебурнет |
| `set_no_internet = yes` | Ну что, вырубаем свет |

<a id="freedom-religion"></a>
#### Религия (freedom_religion)

| Эффект | Уровень |
|---|---|
| `set_gov_atheism = yes` | Гос. атеизм |
| `set_secularism = yes` | Светское государство |
| `set_state_religion = yes` | Гос. религия |
| `set_hierocracy = yes` | Иерократия |

<a id="lgbt-laws"></a>
#### ЛГБТ (lgbt_laws)

| Эффект | Уровень |
|---|---|
| `set_nato_gay_world = yes` | Полная Инклюзивность |
| `set_civil_partnerships = yes` | Гражданское Партнерство |
| `set_traditional_values = yes` | Традиционные ценности |
| `set_ban_lgbt = yes` | Криминализация ЛГБТ |

<a id="freedom-trade-unions"></a>
#### Профсоюзы (freedom_trade_unions)

| Эффект | Уровень |
|---|---|
| `set_ghent_system = yes` | Система Гента |
| `set_free_unions = yes` | Свобода профсоюзов |
| `set_gov_unions = yes` | Госсоюзы |
| `set_ban_unions = yes` | Заборонено профсоюзить |

