---
title: Скриптовые эффекты
description: "Effects/Scripted Effects — постройки, экономика, фракции, влияние, политика, ЕС, антитеррор, картели"
---

Все скриптовые эффекты автоматически создают тултипы — **не** локализуйте их вручную дополнительно.

<a id="effectsscripted-effects"></a>
## Эффекты / Скриптовые эффекты

<a id="mdc-building-costs"></a>
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
### Экономические эффекты MDC

Все предоставленные скриптовые эффекты _автоматически_ создают для вас тултипы. **НЕ** локализуйте дополнительные тултипы.

<a id="how-to-modify-treasury"></a>
#### Как изменить казну

```
# - уменьшает казну
set_temp_variable = { treasury_change = -10.00 }
modify_treasury_effect = yes

small_expenditure = yes
medium_expenditure = yes
large_expenditure = yes
```

<a id="other-economic-effects"></a>
#### Другие экономические эффекты

```
set_temp_variable = { debt_change = 0.1 }
modify_debt_effect = yes
```

```
set_temp_variable = { int_investment_change = 0.1 }
modify_international_investment_effect = yes
```

```
set_temp_variable = { corp_change = 2 }
modify_corporate_tax_rate_effect = yes
```

```
set_temp_variable = { pop_change = 2 }
modify_population_tax_rate_effect = yes
```

```
# - Изменяет производительность на фиксированную величину
set_temp_variable = { temp_productivity_change = 0.025 }
flat_productivity_change_effect = yes
```

<a id="guide-on-how-to-do-additional-incomeadditional-expenses"></a>
#### Руководство: дополнительные доходы / дополнительные расходы

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

<a id="setremove-trade-agreement"></a>
#### Установить / удалить торговое соглашение

Создаёт или удаляет торговое соглашение

- sender_nation --- страна, отправляющая соглашение
- receiver_nation --- страна, получающая соглашение
- remove_agreement --- необязательный параметр (установить в 1)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_improved_trade_agreement = yes

```

<a id="setremove-permanent-investment-targets"></a>
#### Установить / удалить постоянные цели инвестиций

Добавляет или удаляет adding_nation из инвестиционного пула другой страны под управлением ИИ

- target_nation --- страна, отправляющая соглашение
- adding_nation --- страна, получающая соглашение
- remove_nation --- необязательный параметр (установить в 1)

```
set_temp_variable = { target_nation = RAJ.id }
set_temp_variable = { adding_nation = SIN.id }
change_permanent_investment_target = yes

```

<a id="increasedecrease-economic-growth"></a>
#### Увеличить / уменьшить экономический рост

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

<a id="increasedecrease-bureaucracy-law"></a>
#### Увеличить / уменьшить закон о расходах на бюрократию

Увеличивает или уменьшает текущий закон страны о расходах на бюрократию

```
decrease_centralization = yes
decrease_centralization_2 = yes
decrease_centralization_3 = yes
increase_centralization = yes
increase_centralization_2 = yes
increase_centralization_3 = yes
increase_centralization_4 = yes
```

<a id="increasedecrease-social-spending"></a>
#### Увеличить / уменьшить социальные расходы

Увеличивает или уменьшает текущий закон страны о социальных расходах

```
increase_social_spending = yes
increase_social_spending_2 = yes
increase_social_spending_3 = yes
increase_social_spending_4 = yes
decrease_social_spending = yes
decrease_social_spending_2 = yes
max_social_spending = yes
```

<a id="increasedecrease-education-spending"></a>
#### Увеличить / уменьшить расходы на образование

Увеличивает или уменьшает текущий закон страны о расходах на здравоохранение

```
increase_education_budget = yes
increase_education_budget_2 = yes
increase_education_budget_3 = yes
increase_education_budget_4 = yes
decrease_education_budget = yes
decrease_education_budget_2 = yes
max_education_budget = yes
```

<a id="increasedecrease-health-spending"></a>
#### Увеличить / уменьшить расходы на здравоохранение

Увеличивает или уменьшает текущий закон страны о расходах на здравоохранение

```
increase_healthcare_budget = yes
increase_healthcare_budget_2 = yes
increase_healthcare_budget_3 = yes
increase_healthcare_budget_4 = yes
decrease_healthcare_budget = yes
decrease_healthcare_budget_2 = yes
max_healthcare_budget = yes
```

<a id="increasedecrease-police-spending"></a>
#### Увеличить / уменьшить расходы на полицию

Увеличивает или уменьшает текущий закон страны о расходах на полицию

```
increase_policing_budget = yes
increase_policing_budget_2 = yes
increase_policing_budget_2 = yes
increase_policing_budget_4 = yes
decrease_policing_budget = yes
decrease_policing_budget_2 = yes
```

<a id="increasedecrease-trade-law"></a>
#### Увеличить / уменьшить торговый закон

Следующие эффекты используются для увеличения и уменьшения «Торгового закона» вашей страны:

```
increase_exports = yes
decrease_exports = yes
set_exports_to_min = yes
set_exports_to_max = yes
```

<a id="increasedecrease-military-spending-law"></a>
#### Увеличить / уменьшить закон о военных расходах

Следующие эффекты используются для увеличения закона о военных расходах.

```
increase_military_spending = yes
decrease_military_spending = yes
decrease_military_spending_2 = yes
sizeable_military_spending = yes # Устанавливает военные расходы на уровень "значительные"
```

<a id="increasedecrease-migration-law"></a>
#### Увеличить / уменьшить закон о миграции

Следующие эффекты используются для увеличения и уменьшения законов о миграции и пограничном регулировании.

```
increase_migration_law = yes
decrease_migration_law = yes
```

<a id="mdc-internal-faction-effects"></a>
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

Изменение в процентах задаётся целым числом (например, 10 = 10%).

- Внутреннее влияние

```
# set_temp_variable = { percent_change = +-x }
change_domestic_influence_percentage = yes
```

- Изменение влияния участников рейтинга

```
# set_temp_variable = { percent_change = +-x }
# set_temp_variable = { influencer_index = 0-6 }
change_current_influencer_index_percentage = yes
```

- Общее изменение влияния
-- Учтите: если 7-й участник рейтинга имеет больше влияния, чем ваш percent_change, целевая страна получит внутреннее влияние вместо того, чтобы влияние получили вы.

например,
7-й участник имеет 5% влияния, а вы добавляете 3%. В таком случае целевая страна получает внутреннее влияние.

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
#### Фрагмент кода для добавления популярности партии субидеологиям

- set_temp_variable = { party_index = X } # Индекс изменяемой партии, 0–23
- set_party_index_to_ruling_party = yes -- автоматически устанавливает индекс правящей партии
- set_temp_variable = { party_popularity_increase = Y } # Насколько изменяется популярность партии; значение задаётся десятичной дробью, поэтому 2% = 0.02
- set_temp_variable = { temp_outlook_increase = Z } # НЕОБЯЗАТЕЛЬНЫЙ ПАРАМЕТР -- значение задаётся десятичной дробью, поэтому 2% = 0.02
- add_relative_party_popularity = yes

```
set_temp_variable = { party_index = 2 }
set_temp_variable = { party_popularity_increase = 0.10 }
set_temp_variable = { temp_outlook_increase = 0.10 } -- НЕОБЯЗАТЕЛЬНО
add_relative_party_popularity = yes
```

_**Изменение популярности правящей субидеологии:**_

Назначение: изменяет только популярность правящей субидеологии на значение `arg_popularity`

```
set_temp_variable = { arg_popularity = +- }
add_ruling_outlook_popularity = yes
```

_**Добавление партии в коалицию**_

Назначение: лёгкий скрипт для динамической локализации добавления участников в коалицию.

```
set_temp_variable = { add_col_one = 0-23 }
add_coalition_members_effect = yes
```

_**Удаление партии из коалиции**_

Назначение: лёгкий скрипт для динамической локализации удаления участников из коалиции.

```
set_temp_variable = { remove_col_one = 0-23 }
remove_coalition_members_effect = yes
```

_**Установить правящую партию через эффект**_

Назначение: устанавливает правящую партию через скриптовый эффект на указанную субидеологию. При этом всё равно необходимо выполнить set_politics, поскольку этот параметр нельзя сделать динамическим.

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

_**Изменение избирательного порога:**_

Назначение: изменяет избирательный порог (минимальное значение, необходимое партии для рассмотрения в качестве участника коалиции).

```
set_temp_variable = { threshold_change = 0.03 }
modify_election_threshold = yes
```

_**Разрешение / запрет партий**_

Запрещает указанный индекс партии для участия в выборах

```
set_temp_variable = { party_index = 1-24 }
ban_party_scripted_call = yes
```

Разрешает указанному индексу партии участвовать в выборах

```
set_temp_variable = { party_index = 1-24 }
unban_party_scripted_call = yes
```

```
set_country_flag = free_allow_parties # Установите это, если не хотите платить PP
set_partyall_allowed = yes # Разрешает все партии
```

```
set_country_flag = free_ban_parties # Установите это, если не хотите платить PP
set_partyall_banned = yes # Запрещает все партии
```

<a id="counter-terror-effects"></a>
### Эффекты борьбы с терроризмом

<a id="radicalization-threat-level"></a>
#### Радикализация / уровень угрозы

Использовать это могут только страны, участвующие в борьбе с терроризмом. Полный список тегов можно найти в `common -> on_actions.txt`, найдя `_ct_states`.

```
set_temp_variable = { rad_change = -5 }
modify_radicalization_effect = yes

```

```
set_temp_variable = { threat_change = 2 }
modify_terror_threat_effect = yes

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

Чтобы добавить / убрать евроскептицизм, достаточно сделать следующее:

```
set_temp_variable = { modify_eurosceptic = 0.05 }
set_temp_variable = { modify_eurosceptic_target = THIS }
eurosceptic_change = yes
```

«THIS» может обозначать любое из следующего:

- THIS
- ROOT
- PREV
- FROM
- Любой тег страны (например, GER)

Чтобы этот эффект применялся ко _всем_ текущим странам ЕС:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_eurosceptic_change = yes
```

И наконец, чтобы этот эффект применялся к _текущим_ и _потенциальным_ членам ЕС:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_potential_eurosceptic_change = yes
```

<a id="energy-effects"></a>
### Энергетические эффекты

Строит объекты по обогащению для страны. Каждый объект стоит 25,00. Скриптовый эффект сам обрабатывает стоимость — просто укажите число.

```
set_temp_variable = { temp_change = 2 }
build_enrichment_facilities_effect = yes
```

Строит аккумуляторный парк в рамках эффекта. Каждый парк стоит 100,00, если у вас нет
модификаторов, изменяющих эту стоимость.

```
set_temp_variable = { temp_change = 2 }
build_battery_park_effect = yes
```
