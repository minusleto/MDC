---
title: Скриптовые эффекты
description: "Effects/Scripted Effects — постройки, экономика, фракции, влияние, политика, ЕС, терроризм, картели"
---

<a id="effectsscripted-effects"></a>
## Эффекты / Скриптовые эффекты

Все скриптовые эффекты автоматически создают тултипы — **не** локализуйте их вручную дополнительно.

### Стоимость построек MDC

Для каждой постройки, которая занимает слот строительства (например, гражданская промышленность), стоимость уже учитывает сам слот строительства.

-- Постройки в регионах:

- Гражданская промышленность (industrial_complex) - $7.50
- Военная промышленность (arms_factory) - $7.50
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

В MD 8 единиц ресурсов соответствуют одной гражданской фабрике. Поэтому добавление 1 единицы стали обойдётся стране в $0,938 млрд по стандарту MD. Пример ниже показывает, как следует балансировать стоимость ресурсов.

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

Если вам лень рассчитывать стоимость стандартных эффектов, связанных с постройками, можно посмотреть её в `common\scripted_effects\00_scripted_effects.txt`.

Эффекты уровня региона требуют размещения эффекта внутри региона. Если постройку нельзя добавить в указанный регион, она будет добавлена в любой случайный регион, принадлежащий стране.

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
three_random_industrial_complex = yes #добавляет 3 гражданские фабрики (2 в одном случайном регионе, 3-я — в другом) со слотами и стоимостью
four_random_industrial_complex = yes #добавляет 4 гражданские фабрики (2 в одном случайном регионе, 2 — в другом) со слотами и стоимостью

~~Уровень региона~~
one_state_industrial_complex = yes #добавляет 1 гражданскую фабрику со слотом и стоимостью в заданный регион
two_state_industrial_complex = yes #добавляет 2 гражданские фабрики со слотом и стоимостью в заданный регион
three_state_industrial_complex = yes #добавляет 3 гражданские фабрики со слотом и стоимостью в заданный регион
four_state_industrial_complex = yes #добавляет 4 гражданские фабрики со слотом и стоимостью в заданный регион
```

<a id="military-factory"></a>
#### Военная фабрика

```
one_random_arms_factory = yes #добавляет 1 военную фабрику со слотом и стоимостью
two_random_arms_factory = yes #добавляет 2 военные фабрики со слотами и стоимостью
three_random_arms_factory = yes #добавляет 3 военные фабрики (2 в одном случайном регионе, 3-я — в другом) со слотами и стоимостью
four_random_arms_factory = yes #добавляет 4 военные фабрики (2 в одном случайном регионе, 2 — в другом) со слотами и стоимостью

~~Уровень региона~~
one_state_arms_factory = yes #добавляет 1 военную фабрику со слотом и стоимостью в заданный регион
two_state_arms_factory = yes #добавляет 2 военные фабрики со слотом и стоимостью в заданный регион
three_state_arms_factory = yes #добавляет 3 военные фабрики со слотом и стоимостью в заданный регион
four_state_arms_factory = yes #добавляет 4 военные фабрики со слотом и стоимостью в заданный регион
```

<a id="infrastructure"></a>
#### Инфраструктура

```
one_random_infrastructure = yes #добавляет 1 инфраструктуру со стоимостью
two_random_infrastructure = yes #добавляет 2 инфраструктуры в 2 случайных регионах со стоимостью
three_random_infrastructure = yes #добавляет 3 инфраструктуры в 3 случайных регионах со стоимостью

~~Уровень региона~~
one_state_infrastructure = yes #добавляет 1 инфраструктуру со стоимостью в заданный регион
two_state_infrastructure = yes #добавляет 2 инфраструктуры со стоимостью в заданный регион
three_state_infrastructure = yes #добавляет 3 инфраструктуры со стоимостью в заданный регион
```

<a id="dockyards"></a>
#### Верфьs

```
one_random_dockyard = yes #добавляет 1 верфь со слотом и стоимостью
two_random_dockyards = yes #добавляет 2 верфи со слотами и стоимостью

~~Уровень региона~~
one_state_dockyard = yes #добавляет 1 верфь со слотом и стоимостью в заданный регион
two_state_dockyard = yes #добавляет 2 верфи со слотом и стоимостью в заданный регион
```

<a id="offices"></a>
#### Офисы

Следующие эффекты также дают электростанцию на ископаемом топливе.

```
one_office_construction = yes #добавляет 1 офисный комплекс со слотом и стоимостью
two_office_construction = yes #добавляет 2 офисных комплекса со слотами и стоимостью
three_office_construction = yes #добавляет 3 офисных комплекса (2 в одном случайном регионе, 3-й — в другом) со слотами и стоимостью

~~Уровень региона~~
one_state_office_construction = yes #добавляет 1 офисный комплекс со слотом и стоимостью в заданный регион
two_state_office_construction = yes #добавляет 2 офисных комплекса со слотами и стоимостью в заданный регион
three_state_office_construction = yes #добавляет 3 офисных комплекса со слотами и стоимостью в заданный регион
```

<a id="commercialized-agriculture-district"></a>
#### Коммерческий сельскохозяйственный район

```
one_random_agriculture_district = yes #добавляет 1 сельскохозяйственный район со слотом и стоимостью

~~Уровень региона~~
one_state_agriculture_district = yes #добавляет 1 сельскохозяйственный район со слотом и стоимостью в заданный регион
```

<a id="air-bases-air_base"></a>
#### Авиабазы (air_base)

```
one_air_base = yes #добавляет 1 авиабазу со стоимостью
two_air_base = yes #добавляет 2 авиабазы в разных регионах со стоимостью

~~Уровень региона~~
one_state_air_base = yes #добавляет 1 авиабазу со стоимостью в заданный регион
two_state_air_base = yes #добавляет 2 авиабазы со стоимостью в заданный регион
```

<a id="network-infrastructure-internet_station"></a>
#### Сетевая инфраструктура (internet_station)

```
one_random_network_infrastructure = yes #добавляет 1 сетевую инфраструктуру со стоимостью
two_random_network_infrastructure = yes #добавляет 2 сетевые инфраструктуры в разных регионах со стоимостью

~~Уровень региона~~
one_state_network_infrastructure = yes #добавляет 1 сетевую инфраструктуру со стоимостью в заданный регион
two_state_network_infrastructure = yes #добавляет 2 сетевые инфраструктуры со стоимостью в заданный регион
```

<a id="anti-air-sam-site-anti_air_building"></a>
#### ПВО | ЗРК (anti_air_building)

```
one_anti_air = yes #добавляет 1 ПВО со стоимостью
two_anti_air = yes #добавляет 2 ПВО в разных регионах со стоимостью

~~Уровень региона~~
one_state_anti_air = yes #добавляет 1 ПВО со стоимостью в заданный регион
two_state_anti_air = yes #добавляет 2 ПВО со стоимостью в заданный регион
```

<a id="radar-station-radar_station"></a>
#### Радарная станция (radar_station)

```
one_radar_station = yes #добавляет 1 радарную станцию со стоимостью
two_radar_station = yes #добавляет 2 радарные станции в разных регионах со стоимостью

~~Уровень региона~~
one_state_radar_station = yes #добавляет 1 радарную станцию со стоимостью в заданный регион
two_state_radar_station = yes #добавляет 2 радарные станции со стоимостью в заданный регион
```

<a id="synthetic-refinery-synthetic_refinery"></a>
#### Синтетический НПЗ (synthetic_refinery)

```
one_random_synthetic_refinery = yes #добавляет 1 синтетический НПЗ со слотом и стоимостью
two_random_synthetic_refinery = yes #добавляет 2 синтетических НПЗ в разных регионах со слотами и стоимостью
three_random_synthetic_refinery = yes #добавляет 3 синтетических НПЗ в разных регионах со слотами и стоимостью

~~Уровень региона~~
one_state_synthetic_refinery = yes #добавляет 1 синтетический НПЗ со слотом и стоимостью в заданный регион
two_state_synthetic_refinery = yes #добавляет 2 синтетических НПЗ со слотом и стоимостью в заданный регион
three_state_synthetic_refinery = yes #добавляет 3 синтетических НПЗ со слотом и стоимостью в заданный регион
```

<a id="other-buildings"></a>
#### Другие постройки

```
one_random_nuclear_reactor = yes #добавляет 1 ядерный реактор со слотом и стоимостью
two_random_nuclear_reactor = yes #добавляет 2 ядерных реактора со слотом и стоимостью

~~Уровень региона~~
one_state_nuclear_reactor = yes #добавляет 1 ядерный реактор со слотом и стоимостью в заданный регион
two_state_nuclear_reactor = yes #добавляет 2 ядерных реактора со слотом и стоимостью в заданный регион
```

<a id="mdc-economic-effects"></a>

<a id="basic-effects"></a>
### Базовые эффекты

<a id="treasury"></a>
#### Казна

Поменять казну на произвольную сумму:

```
set_temp_variable = { treasury_change = 10.00 }
modify_treasury_effect = yes
```

**Малый расход** — 0.2% ВВП
```
small_expenditure = yes
```

**Средний расход** — 0.4% ВВП
```
medium_expenditure = yes
```

**Крупный расход** — 0.6% ВВП
```
large_expenditure = yes
```

<a id="debt"></a>
#### Долги

```
set_temp_variable = { debt_change = 1.0 }
modify_debt_effect = yes
```

<a id="investments"></a>
#### Инвестиции

```
set_temp_variable = { int_investment_change = 1.0 }
modify_international_investment_effect = yes
```

<a id="taxes"></a>
#### Налоги

**Корпоративный налог**
```
set_temp_variable = { corp_change = 2 }
modify_corporate_tax_rate_effect = yes
```

**Подоходный налог**
```
set_temp_variable = { pop_change = 2 }
modify_population_tax_rate_effect = yes
```

<a id="productivity"></a>
#### Производительность

```
set_temp_variable = { temp_productivity_change = 25.0 }
flat_productivity_change_effect = yes
```

<a id="capitalization"></a>
#### Капитализация

Изменяет капитализацию страны

```
set_temp_variable = { modify_capitalization = 0.010 }
modify_capitalization_support = yes
```


<a id="base-inflation"></a>
#### Базовая инфляция

Изменяет базовую инфляцию страны

```
set_temp_variable = { base_inflation_percent_change = 1.0 }
modify_base_inflation_effect = yes
```


<a id="increasedecrease-economic-growth"></a>
#### Экономический рост

Увеличивает или уменьшает текущий экономический цикл страны

```
increase_economic_growth = yes
decrease_economic_growth = yes
increase_two_level_economic_growth = yes
decrease_two_level_economic_growth = yes
depression = yes
recession = yes
stagnation = yes
stable_growth = yes
fast_growth = yes
economic_boom = yes
```

<a id="economic-agreements"></a>
### Экономические соглашения

<a id="setremove-trade-agreement"></a>
#### Торговое соглашение

Создаёт или удаляет торговое соглашение

- sender_nation --- страна, отправляющая соглашение
- receiver_nation --- страна, получающая соглашение
- remove_agreement --- необязательный параметр (установить в 1)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_improved_trade_agreement = yes

```

<a id="setremove-mutual-investment-treaty"></a>
#### Взаимный инвестиционный договор

Создаёт или удаляет взаимный инвестиционный договор.

- `sender_nation` — страна, отправляющая соглашение
- `receiver_nation` — страна, получающая соглашение
- `remove_treaty` — необязательный параметр (установить в 1 для отмены)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_mutual_investment_treaty = yes
```

Для отмены:

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_temp_variable = { remove_treaty = 1 }
set_mutual_investment_treaty = yes
```

Торговое соглашение и взаимный инвестиционный договор можно использовать одновременно.

```
set_temp_variable = { receiver_nation = BRA.id }
set_temp_variable = { sender_nation = POR.id }
set_improved_trade_agreement = yes
set_mutual_investment_treaty = yes
```

<a id="setremove-permanent-investment-targets"></a>
#### Постоянные цели инвестиций

Добавляет или удаляет adding_nation из инвестиционного пула другой страны под управлением ИИ

- target_nation --- страна, отправляющая соглашение
- adding_nation --- страна, получающая соглашение
- remove_nation --- необязательный параметр (установить в 1)

```
set_temp_variable = { target_nation = RAJ.id }
set_temp_variable = { adding_nation = SIN.id }
change_permanent_investment_target = yes

```

<a id="other"></a>
### Другое

<a id="guide-on-how-to-do-additional-incomeadditional-expenses"></a>
#### Доп. доходы и расходы

```
Шаг 1: перейдите в common/scripted_effects/00_money_system.txt
Шаг 2: найдите calculate_additional_income_rate
Шаг 3: в этом разделе должна быть отмеченная секция Country Specific. Добавьте код туда.
if = {
  limit = { original_tag = TAG  }
  if = {
    limit = { has_idea = whatever }
    set_variable = { whatever_gain = 0.05 }
    add_to_variable = { additional_income_rate = whatever_gain }
  }
}
Шаг 4: перейдите в common/scripted_localization/money_scripted_localization.txt. Место внутри файла особого значения не имеет.
defined_text = {
    name = additional_income_summary_whatever
    text = {
        trigger = { has_idea = whatever }
        localization_key = "whatever_TT" #задаёт для этой сводки текст "$$[?whatever_gain|+3] from §Y$whatever$§!\n"
    }
    text = {
        trigger = { NOT = { has_idea = whatever } }
        localization_key = ""
    }
}
Шаг 5: перейдите в MD_money_l_english.yml (localisation/english). Найдите ADDITIONAL_INCOME_REVENUES_TOOLTIP
Затем в конце (или в любом другом месте внутри) добавьте [additional_income_summary_whatever]
Шаг 6: вернитесь в исходный файл идеи — теперь сумма должна отображаться в модификаторах spirits

**ПРИМЕЧАНИЕ** Отображение переменных не будет работать в этом разделе. Вам нужно создать отдельный тултип, явно описывающий нужное значение, либо добавить локализацию в _desc идеи.

Сделайте это в модификаторах:

modifiers = {
  custom_modifier_tooltip = whatever_TT
}

```

### Эффекты внутренних фракций MDC

<a id="internal-factions-code-snippet"></a>
#### Фрагмент кода внутренних фракций

```
set_temp_variable = { temp_opinion = 5 }
change_small_medium_business_owners_opinion = yes

Если вы хотите улучшить отношение industrial_conglomerates.

set_temp_variable = { temp_opinion = 5 }
change_industrial_conglomerates_opinion = yes
```

<a id="internal-faction-breakdown"></a>
#### Разбор внутренних фракций

```
# Список фракций по категориям
# ----------------------------------
# Экономический тип: Small & Medium Business Owners, International Bankers, Fossil Fuel Industry
# Industrial Conglomerates, Oligarchs
#
# Милитаристский: Maritime Industry, Military-Industrial Complex, The Military, Intelligence Community
#
# Особые интересы: Labour Unions, Landowners, Farmers, Communist Cadres
#
# Религиозные фракции: Wahhabi Ulema, The Ulema, The Clergy, The Priesthood
#
# Специфичные для конкретной страны: The Donju, The Bazaar, Saudi Royal Family, IRGC, Iranian Quds Force,
# Foreign Jihadis, VEVAK, Chaebols, Wall Street, ISI Pakistan
```

<a id="available-faction-commands"></a>
#### Доступные команды фракций

- change_small_medium_business_owners_opinion
- change_industrial_conglomerates_opinion
- change_fossil_fuel_industry_opinion
- change_defense_industry_opinion
- change_maritime_industry_opinion
- change_international_bankers_opinion
- change_oligarchs_opinion
- change_farmers_opinion
- change_landowners_opinion
- change_labour_unions_opinion
- change_communist_cadres_opinion
- change_the_clergy_opinion
- change_the_ulema_opinion
- change_the_priesthood_opinion
- change_the_wahabi_ulema_opinion
- change_the_military_opinion
- change_intelligence_community_opinion
- change_isi_pakistan_opinion -- уникальная разведка Пакистана
- change_vevak_opinion -- уникальная разведка Ирана
- change_the_bazaar_opinion -- уникальные малые/средние предприниматели Ирана
- change_the_donju_opinion -- олигархи Северной Кореи
- change_saudi_royal_family_opinion -- уникальная фракция для стран Персидского залива
- change_foreign_jihadis_opinion -- уникальная фракция для фашистских государств (например, «Аш-Шабаб»)
- change_irgc_opinion -- уникальная фракция для Ирана
- change_iranian_quds_force_opinion -- уникальная фракция для иранских прокси-государств
- change_chaebols_opinion -- уникальные южнокорейские олигархи (чеболи)
- change_wall_street_opinion -- уникальные американские международные банкиры

<a id="mdc-influence-effects"></a>

### Эффекты влияния MDC

<a id="influence-action-examples"></a>
#### Примеры действий влияния

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

### Политические эффекты MDC

<a id="code-snippet-to-add-party-popularity-to-subideologies"></a>
#### Фрагмент кода для добавления популярности партии к субидеологиям

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
### Протесты

#### Сила протестов

Изменяет силу протестов. Максимальное значение переменной — 100.

```
set_temp_variable = { protest_strength_change = 10 }
modify_protest_effect = yes
```

#### Радикализация протестов

Изменяет радикализацию протестов. Максимальное значение переменной — 10. Значения выше 10 не имеют смысла.

```
set_temp_variable = { protest_radicalisation_change = -10 }
modify_protest_radicalisation_effect = yes
```

### Эффекты терроризма

<a id="terrorism-support"></a>
#### Поддержка терроризма

Доступно только для указанных тегов.

**Коммунистические:** `ITA`, `GER`, `NOR`, `CZE`, `HUN`, `AUS`  
**Другие террористические:** `SYR`, `IRQ`, `SAU`, `UAE`, `EGY`, `NIG`, `ALG`, `TUN`, `TAJ`, `ING`, `KBK`, `KCC`, `DAG`, `CHE`, `ARW`

```txt
set_temp_variable = { modify_terrorism = 1 }
modify_terrorism_support = yes
```

Поддержка терроризма ограничена значением `100`.

<a id="terrorism-mana"></a>
#### Накопление террористической активности

Изменяет накопление террористической активности страны.

```txt
add_to_variable = { terrorism_mana = 10 }
clamp_variable = {
    var = terrorism_mana
    min = 1
    max = 100
}
```

<a id="mdc-cartel-related-effects"></a>

### Эффекты, связанные с картелями MDC

modify_cartel_variables_effect
Назначение: обрабатывает макрос для изменения силы картеля или его политического влияния
set_temp_variable = { cart_strength_change = +- x }
set_temp_variable = { cart_influence_change = +- x }

```
set_temp_variable = { cart_strength_change = 2 }
set_temp_variable = { cart_influence_change = 2 }
modify_cartel_variables_effect = yes
```

<a id="mdc-european-union-effects"></a>

### Эффекты Европейского союза MDC

<a id="euroscepticism-effects"></a>
#### Эффекты евроскептицизма

Чтобы добавить/убрать евроскептицизм, достаточно:

```
set_temp_variable = { modify_eurosceptic = 0.05 }
set_temp_variable = { modify_eurosceptic_target = THIS }
eurosceptic_change = yes
```

Вместо "THIS" можно использовать любое из следующего:

- THIS
- ROOT
- PREV
- FROM
- Любой тег страны (например, GER)

Чтобы этот эффект применился ко _всем_ текущим странам ЕС:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_eurosceptic_change = yes
```

И наконец, чтобы эффект применился к _текущим_ и _потенциальным_ членам ЕС:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_potential_eurosceptic_change = yes
```

<a id="energy-effects"></a>

### Энергетические эффекты

Строит обогатительные объекты для страны. Стоимость — 25.00 за единицу. Скриптовый эффект сам обрабатывает стоимость. Просто укажите число.

```
set_temp_variable = { temp_change = 2 }
build_enrichment_facilities_effect = yes
```

Строит аккумуляторный парк в рамках эффекта. Стоимость — 100.00 за единицу, если у вас нет
модификаторов, уменьшающих или увеличивающих её.

```
set_temp_variable = { temp_change = 2 }
build_battery_park_effect = yes
```

### Смена законов

Каждая категория ниже — это idea group из нескольких уровней. Соответствующий `set_*` эффект переключает страну на нужный уровень и, если она уже на этом уровне, даёт одноразовый бонус (PP/стабильность/популярность). Эффекты `increase_*` / `decrease_*` сдвигают закон на один уровень вверх или вниз по шкале.

#### Содержание

- [Законы о гражданских свободах](#civil-freedom-laws)
- [Демография и деторождение](#demographics-and-birth)
- [Оружие](#weapons)
- [Экономические законы](#economic-laws)

<hr/>

<a id="civil-freedom-laws"></a>
### Законы о гражданских свободах

<a id="censorship-laws"></a>
#### Цензура

| Эффект | Уровень |
|---|---|
| `set_freedom_of_speech = yes` | Свобода слова |
| `set_ban_on_extremism = yes` | Запрет экстремизма |
| `set_censorship = yes` | Госцензура |
| `set_minitrue = yes` | Минправ |

<a id="right-assembly"></a>
#### Свобода собраний

| Эффект | Уровень |
|---|---|
| `set_free_assembly = yes` | Свобода собраний |
| `set_notification_regime = yes` | Уведомительный режим |
| `set_curfew = yes` | Комендантский час |

<a id="internet-law"></a>
#### Интернет

| Эффект | Уровень |
|---|---|
| `set_internet_freedom = yes` | Свободный интернет |
| `set_internet_censorship = yes` | Интернет-цензура |
| `set_white_lists = yes` | Белые списки |
| `set_national_internet = yes` | Чебурнет |
| `set_no_internet = yes` | Ну что, вырубаем свет |

<a id="freedom-religion"></a>
#### Религия

| Эффект | Уровень |
|---|---|
| `set_gov_atheism = yes` | Гос. атеизм |
| `set_secularism = yes` | Светское государство |
| `set_state_religion = yes` | Гос. религия |
| `set_hierocracy = yes` | Иерократия |

<a id="lgbt-laws"></a>
#### ЛГБТ

| Эффект | Уровень |
|---|---|
| `set_nato_gay_world = yes` | Полная Инклюзивность |
| `set_civil_partnerships = yes` | Гражданское Партнерство |
| `set_traditional_values = yes` | Традиционные ценности |
| `set_ban_lgbt = yes` | Криминализация ЛГБТ |

<a id="freedom-trade-unions"></a>
#### Профсоюзы

| Эффект | Уровень |
|---|---|
| `set_ghent_system = yes` | Система Гента |
| `set_free_unions = yes` | Свобода профсоюзов |
| `set_gov_unions = yes` | Госсоюзы |
| `set_ban_unions = yes` | Запрет Профсоюзов |

<hr/>

<a id="demographics-and-birth"></a>
### Демография и деторождение

<a id="demographics"></a>
#### Половозрастная пирамида

| Эффект | Уровень |
|---|---|
| `set_population_pyramid_1 = yes` | Растущая половозрастная пирамида |
| `set_population_pyramid_2 = yes` | Стабильная половозрастная пирамида |
| `set_population_pyramid_3 = yes` | Сокращающаяся половозрастная пирамида |

<a id="birth-policy"></a>
#### Политика рождаемости

| Эффект | Уровень |
|---|---|
| `set_encourage_birth = yes` | Поощрение рождаемости |
| `set_no_birth_control = yes` | Отсутствие контроля рождаемости |
| `set_discourage_birth = yes` | Сдерживание рождаемости |

<a id="abortion-policy"></a>
#### Политика абортов

| Эффект | Уровень |
|---|---|
| `set_ban_abortion = yes` | Запрет абортов |
| `set_no_abortion_control = yes` | Отсутствие ограничений на аборты |
| `set_encourage_abortion = yes` | Свободный доступ к абортам |

<hr/>

<a id="weapons"></a>
### Закон об оружии

| Эффект | Уровень |
|---|---|
| `set_ban_weapons = yes` | Запрет оружия |
| `set_allow_weapons = yes` | Свободное ношение оружия |
| `set_regulate_weapons = yes` | Регулирование оборота оружия |

<hr/>

<a id="economic-laws"></a>
### Экономические законы

Законы, регулирующие государственные расходы (бюджет на бюрократию, соцсферу, образование, здравоохранение, полицию), а также торговый, военный и миграционный законы.

<a id="bureaucracy-law"></a>
#### Бюрократия

| Эффект | Применение |
|---|---|
| `decrease_centralization = yes` | Уменьшить централизацию |
| `decrease_centralization_2 = yes` | Уменьшить централизацию (уровень 2) |
| `decrease_centralization_3 = yes` | Уменьшить централизацию (уровень 3) |
| `increase_centralization = yes` | Увеличить централизацию |
| `increase_centralization_2 = yes` | Увеличить централизацию (уровень 2) |
| `increase_centralization_3 = yes` | Увеличить централизацию (уровень 3) |
| `increase_centralization_4 = yes` | Увеличить централизацию (максимум) |

<a id="education-spending"></a>
#### Образование

| Эффект | Применение |
|---|---|
| `increase_education_budget = yes` | Увеличить расходы на образование |
| `increase_education_budget_2 = yes` | Увеличить расходы на образование (уровень 2) |
| `increase_education_budget_3 = yes` | Увеличить расходы на образование (уровень 3) |
| `increase_education_budget_4 = yes` | Увеличить расходы на образование (максимум) |
| `decrease_education_budget = yes` | Уменьшить расходы на образование |
| `decrease_education_budget_2 = yes` | Уменьшить расходы на образование (уровень 2) |
| `max_education_budget = yes` | Установить максимальные расходы на образование |

<a id="healthcare-spending"></a>
#### Здравоохранение

| Эффект | Применение |
|---|---|
| `increase_healthcare_budget = yes` | Увеличить расходы на здравоохранение |
| `increase_healthcare_budget_2 = yes` | Увеличить расходы на здравоохранение (уровень 2) |
| `increase_healthcare_budget_3 = yes` | Увеличить расходы на здравоохранение (уровень 3) |
| `increase_healthcare_budget_4 = yes` | Увеличить расходы на здравоохранение (максимум) |
| `decrease_healthcare_budget = yes` | Уменьшить расходы на здравоохранение |
| `decrease_healthcare_budget_2 = yes` | Уменьшить расходы на здравоохранение (уровень 2) |
| `max_healthcare_budget = yes` | Установить максимальные расходы на здравоохранение |

<a id="social-spending"></a>
#### Соцрасходы

| Эффект | Применение |
|---|---|
| `increase_social_spending = yes` | Увеличить социальные расходы |
| `increase_social_spending_2 = yes` | Увеличить социальные расходы (уровень 2) |
| `increase_social_spending_3 = yes` | Увеличить социальные расходы (уровень 3) |
| `increase_social_spending_4 = yes` | Увеличить социальные расходы (максимум) |
| `decrease_social_spending = yes` | Уменьшить социальные расходы |
| `decrease_social_spending_2 = yes` | Уменьшить социальные расходы (уровень 2) |
| `max_social_spending = yes` | Установить максимальные социальные расходы |

<a id="policing-spending"></a>
#### Полиция

| Эффект | Применение |
|---|---|
| `increase_policing_budget = yes` | Увеличить расходы на полицию |
| `increase_policing_budget_2 = yes` | Увеличить расходы на полицию (уровень 2) |
| `increase_policing_budget_3 = yes` | Увеличить расходы на полицию (уровень 3) |
| `increase_policing_budget_4 = yes` | Увеличить расходы на полицию (максимум) |
| `decrease_policing_budget = yes` | Уменьшить расходы на полицию |
| `decrease_policing_budget_2 = yes` | Уменьшить расходы на полицию (уровень 2) |

<a id="trade-law"></a>
#### Торговля

| Эффект | Применение |
|---|---|
| `increase_exports = yes` | Увеличить экспорт / торговый закон |
| `decrease_exports = yes` | Уменьшить экспорт / торговый закон |
| `set_exports_to_min = yes` | Установить экспорт на минимум |
| `set_exports_to_max = yes` | Установить экспорт на максимум |

<a id="military-spending-law"></a>
#### Военные расходы

| Эффект | Применение |
|---|---|
| `increase_military_spending = yes` | Увеличить военные расходы |
| `decrease_military_spending = yes` | Уменьшить военные расходы |
| `decrease_military_spending_2 = yes` | Уменьшить военные расходы (уровень 2) |
| `sizeable_military_spending = yes` | Установить значительные военные расходы |

<a id="migration-law"></a>
#### Миграция

| Эффект | Применение |
|---|---|
| `increase_migration_law = yes` | Смягчить миграционный закон |
| `decrease_migration_law = yes` | Ужесточить миграционный закон |
