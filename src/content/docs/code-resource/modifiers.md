---
title: Модификаторы
description: Economic, Law, Migration, Influence, Energy и Political модификаторы MDC
---

<a id="modifiers"></a>
## Модификаторы

Модификаторы MDC следуют стандартному синтаксису HOI4, но включают много уникальных экономических, политических и энергетических систем.

<a id="economic-modifiers"></a>
### Экономические модификаторы

Влияют на экономику, налоги, торговлю и производительность.

<a id="general-economic"></a>
#### Общие экономические

| Модификатор | Описание | Примечание |
|---|---|---|
| `interest_rate_multiplier_modifier` | Меняет процентную ставку страны | Целое число (например, -1) |
| `personnel_cost_multiplier_modifier` | Меняет расходы на военные зарплаты | Н/Д |
| `army_personnel_cost_multiplier_modifier` | Меняет расходы на зарплаты армии | Н/Д |
| `navy_personnel_cost_multiplier_modifier` | Меняет расходы на зарплаты флота | Н/Д |
| `airforce_personnel_cost_multiplier_modifier` | Меняет расходы на зарплаты авиации | Н/Д |
| `equipment_cost_multiplier_modifier` | Меняет стоимость содержания снаряжения | Н/Д |
| `bureaucracy_cost_multiplier_modifier` | Меняет расходы на бюрократию | Н/Д |
| `police_cost_multiplier_modifier` | Меняет расходы на внутреннюю безопасность | Н/Д |
| `education_cost_multiplier_modifier` | Меняет расходы на образование | Н/Д |
| `health_cost_multiplier_modifier` | Меняет расходы на здравоохранение | Н/Д |
| `social_cost_multiplier_modifier` | Меняет расходы на соцобеспечение | Н/Д |
| `tax_rate_change_multiplier_modifier` | Меняет цену смены налоговой ставки в PP | Н/Д |
| `projects_cost_modifier` | Меняет стоимость экономических проектов | Н/Д |
| `tax_gain_multiplier_modifier` | Меняет доход от всех налогов | Н/Д |
| `population_tax_income_multiplier_modifier` | Меняет доход от налогов с населения | Н/Д |
| `corporate_tax_income_multiplier_modifier` | Меняет доход от корпоративных налогов | Н/Д |
| `productivity_growth_modifier` | Меняет рост производительности страны | Держите значение небольшим — эффект накапливается |
| `state_productivity_growth_modifier` | То же самое, на уровне региона | Н/Д |
| `country_productivity_growth_modifier` | То же самое, на уровне страны | Н/Д |
| `international_market_income_modifier` | Меняет доход от продажи снаряжения на рынке | Н/Д |
| `international_market_purchase_modifier` | Меняет стоимость покупки снаряжения на рынке | Н/Д |

<a id="exports-resources"></a>
#### Экспорт и ресурсы

| Модификатор | Описание | Примечание |
|---|---|---|
| `resource_export_multiplier_modifier` | Меняет доход от экспорта всех ресурсов | Н/Д |
| `oil_export_multiplier_modifier` | Меняет доход от экспорта топлива | Н/Д |
| `steel_export_multiplier_modifier` | Меняет доход от экспорта стали | Н/Д |
| `aluminium_export_multiplier_modifier` | Меняет доход от экспорта лёгких металлов | Н/Д |
| `tungsten_export_multiplier_modifier` | Меняет доход от экспорта техн. металлов | Н/Д |
| `chromium_export_multiplier_modifier` | Меняет доход от экспорта драг. металлов | Н/Д |
| `rubber_export_multiplier_modifier` | Меняет доход от экспорта каучука | Н/Д |
| `gdp_from_resource_sector_modifier` | Меняет ВВП от ресурсного сектора | Н/Д |

<a id="industry-productivity"></a>
#### Производительность промышленности

| Модификатор | Описание | Примечание |
|---|---|---|
| `agricolture_productivity_modifier` | Меняет производительность сельского хозяйства | Н/Д |
| `civilian_factories_productivity` | Меняет производительность гражд. фабрик | Н/Д |
| `military_factories_productivity` | Меняет производительность военных фабрик | Н/Д |
| `dockyard_prodctivity` | Меняет производительность верфей | Н/Д |
| `offices_productivity` | Меняет производительность офисов | Н/Д |

<a id="industry-income-taxes"></a>
#### Налоги на доходы промышленности

| Модификатор | Описание | Примечание |
|---|---|---|
| `office_park_income_tax_modifier` | Меняет доход от офисных комплексов | Н/Д |
| `agriculture_district_income_tax_modifier` | Меняет доход от с/х районов | Н/Д |
| `dockyard_income_tax_modifier` | Меняет доход от верфей | Н/Д |
| `military_industry_tax_modifier` | Меняет доход от военной промышленности | Н/Д |
| `civilian_industry_tax_modifier` | Меняет доход от гражданской промышленности | Н/Д |
| `agriculture_tax_modifier` | Меняет доход от сельского хозяйства | Н/Д |

<a id="campaign-costs"></a>
#### Стоимость кампаний

| Модификатор | Описание | Примечание |
|---|---|---|
| `salafist_outlook_campaign_cost_modifier` | Меняет цену кампании салафитской индоктринации | Н/Д |
| `nonaligned_outlook_campaign_cost_modifier` | Меняет цену кампании неприсоединившихся | Н/Д |
| `western_outlook_campaign_cost_modifier` | Меняет цену кампании западной ориентации | Н/Д |
| `emerging_outlook_campaign_cost_modifier` | Меняет цену кампании развивающейся ориентации | Н/Д |
| `nationalist_outlook_campaign_cost_modifier` | Меняет цену кампании националистов | Н/Д |
| `propaganda_campaign_cost_modifier` | Меняет цену всех пропагандистских кампаний | Н/Д |

<a id="investment-modifiers"></a>
#### Модификаторы инвестиций

| Модификатор | Описание | Примечание |
|---|---|---|
| `investment_duration_modifier` | Меняет длительность исходящих инвестиций | Н/Д |
| `receiving_investment_duration_modifier` | Меняет длительность входящих инвестиций | Н/Д |
| `investment_cost_modifier` | Меняет стоимость исходящих инвестиций | Н/Д |
| `receiving_investment_cost_modifier` | Меняет стоимость входящих инвестиций | Н/Д |
| `internal_investments_pp_cost_modifier` | Меняет цену внутр. инвестиций в PP | Н/Д |
| `internal_investments_money_cost_modifier` | Меняет цену внутр. инвестиций в деньгах | Н/Д |
| `return_on_investment_modifier` | Меняет норму доходности инвестиций | 0,02 = +2% к доходности |

<a id="workforce-labor"></a>
#### Рабочая сила и труд

| Модификатор | Описание | Примечание |
|---|---|---|
| `total_workforce_modifier` | Меняет размер рабочей силы для строительства | Н/Д |
| `high_unemployment_threshold_modifier` | Меняет порог штрафа за высокую безработицу | Н/Д |
| `agriculture_workers_modifier` | Меняет число работников для сельского хозяйства | Н/Д |
| `resource_sector_workers_modifier` | Меняет число работников для ресурсных секторов | Н/Д |
| `civ_facs_worker_requirement_modifier` | Меняет число работников для гражд. фабрики | Н/Д |
| `mil_facs_worker_requirement_modifier` | Меняет число работников для воен. фабрики/верфи | Н/Д |
| `offices_worker_requirement_modifier` | Меняет число работников для офисного комплекса | Н/Д |
| `agriculture_district_worker_requirement_modifier` | Меняет число работников для с/х районов | Н/Д |
| `buildings_worker_requirement_modifier` | Меняет число работников для всех построек | Н/Д |

<a id="upgrade-special-costs"></a>
#### Стоимость улучшений и специальных действий

| Модификатор | Описание | Примечание |
|---|---|---|
| `econ_cycle_upg_cost_multiplier_modifier` | Меняет стоимость улучшения экон. цикла | Н/Д |

<a id="law-modifiers"></a>
### Модификаторы законов

Модифицируют стоимость (в очках политической власти, PP) смены государственных законов.

<a id="expected-spending"></a>
#### Ожидаемые расходы

| Модификатор | Описание | Примечание |
|---|---|---|
| `expected_adm_modifier` | Меняет ожидаемые расходы на бюрократию (закон) | Н/Д |
| `expected_police_modifier` | Меняет ожидаемые расходы на полицию (закон) | Н/Д |
| `expected_education_modifier` | Меняет ожидаемые расходы на образование (закон) | Н/Д |
| `expected_healthcare_modifier` | Меняет ожидаемые расходы на здравоохранение (закон) | Н/Д |
| `expected_welfare_modifier` | Меняет ожидаемые соц. расходы (закон) | Н/Д |
| `expected_mil_modifier` | Меняет ожидаемые военные расходы (закон) | Н/Д |

<a id="law-change-costs"></a>
#### Стоимость смены законов

| Модификатор | Описание | Примечание |
|---|---|---|
| `corruption_cost_factor` | Меняет цену PP смены уровня коррупции | Н/Д |
| `economic_cycles_cost_factor` | Меняет цену PP смены экон. цикла | Н/Д |
| `internal_factions_cost_factor` | Меняет цену PP смены внутр. фракций | Н/Д |
| `bureaucracy_cost_factor` | Меняет цену PP смены расходов на бюрократию | Н/Д |
| `Military_Spending_cost_factor` | Меняет цену PP смены военных расходов | Н/Д |
| `crime_fighting_cost_factor` | Меняет цену PP смены расходов на полицию | Н/Д |
| `education_budget_cost_factor` | Меняет цену PP смены расходов на образование | Н/Д |
| `health_budget_cost_factor` | Меняет цену PP смены расходов на здравоохранение | Н/Д |
| `social_budget_cost_factor` | Меняет цену PP смены соц. расходов | Н/Д |
| `trade_laws_cost_factor` | Меняет цену PP смены торгового закона | Н/Д |
| `Conscription_Law_cost_factor` | Меняет цену PP смены закона о призыве | Н/Д |
| `Military_Status_Women_cost_factor` | Меняет цену PP смены закона о статусе женщин | Н/Д |
| `Foreign_Intervention_Law_cost_factor` | Меняет цену PP смены закона о вмешательстве | Н/Д |
| `Officer_Training_Law_cost_factor` | Меняет цену PP смены закона о подготовке офицеров | Н/Д |

<a id="manufacturer-change-costs"></a>
#### Смена военных производителей

| Модификатор | Описание | Примечание |
|---|---|---|
| `materiel_manufacturer_cost_factor` | Меняет цену PP смены конструкторов пехоты | Только без DLC Arms Against Tyranny |
| `tank_manufacturer_cost_factor` | Меняет цену PP смены конструкторов бронетехники | Только без DLC Arms Against Tyranny |
| `aircraft_manufacturer_cost_factor` | Меняет цену PP смены конструкторов авиации | Только без DLC Arms Against Tyranny |
| `naval_manufacturer_cost_factor` | Меняет цену PP смены конструкторов флота | Только без DLC Arms Against Tyranny |

<a id="migration-modifiers"></a>
### Модификаторы миграции

Влияют на миграцию населения.

| Модификатор | Описание | Примечание |
|---|---|---|
| `migration_rate_value_factor` | Меняет чистый приток миграции | Н/Д |

<a id="influence-modifiers"></a>
### Модификаторы влияния

Влияют на систему иностранного влияния (Foreign Influence).

| Модификатор | Описание | Примечание |
|---|---|---|
| `foreign_influence_modifier` | Меняет эффективность действий влияния | Н/Д |
| `foreign_influence_defense_modifier` | Снижает эффективность влияния на нас | Н/Д |
| `foreign_influence_auto_influence_cap_modifier` | Увеличивает слоты авто-влияния | Н/Д |
| `influence_coup_modifier` | Меняет вероятность успеха переворота | Н/Д |
| `foreign_influence_continent_modifier` | Меняет эффективность влияния на других континентах | Модификатор отрицательный |
| `foreign_influence_home_continent_modifier` | Меняет эффективность влияния на родных континентах | Модификатор отрицательный |
| `foreign_influence_monthly_domestic_independence_gain_modifier` | Увеличивает ежемес. прирост независимости | Н/Д |
| `foreign_influence_monthly_domestic_independence_gain_factor` | Коэффициент к приросту независимости | Н/Д |

<a id="energy-modifiers"></a>
### Модификаторы энергии

Управляют производством и потреблением энергии.

<a id="general-energy"></a>
#### Общая энергия

| Модификатор | Описание | Примечание |
|---|---|---|
| `energy_gain` | Меняет прирост энергии на фикс. величину | 10 = +10 к приросту энергии |
| `energy_use` | Меняет потребление энергии на фикс. величину | 10 = +10 к потреблению энергии |
| `energy_gain_multiplier` | Меняет прирост энергии в % (все источники) | Н/Д |
| `energy_use_multiplier` | Меняет потребление энергии в % (все источники) | Н/Д |
| `renewable_energy_gain` | Меняет прирост энергии из возобновляемых источников | Н/Д |
| `renewable_energy_gain_multiplier` | То же самое, в процентах | Н/Д |

<a id="population-energy"></a>
#### Энергия населения

| Модификатор | Описание | Примечание |
|---|---|---|
| `pop_energy_use_multiplier` | Меняет энергию, потребляемую населением | Н/Д |
| `non_electric_fuel_consumption_modifier` | Меняет потребление топлива населением | Н/Д |

<a id="fossil-fuels"></a>
#### Ископаемое топливо

| Модификатор | Описание | Примечание |
|---|---|---|
| `fossil_pp_energy_generation_modifier` | Меняет энергию с электростанций на топливе | Н/Д |
| `fossil_pp_fuel_consumption_modifier` | Меняет потребление топлива этих электростанций | Н/Д |

<a id="nuclear-energy"></a>
#### Ядерная энергетика

| Модификатор | Описание | Примечание |
|---|---|---|
| `nuclear_energy_generation_modifier` | Меняет энергию с ядерного реактора | Н/Д |
| `nuclear_fuel_consumption_modifier` | Меняет потребление топлива НОУ реакторами | Н/Д |
| `leu_fuel_production_modifier` | Меняет производство топлива НОУ в неделю | Н/Д |
| `heu_fuel_production_modifier` | Меняет производство топлива ВОУ в неделю | Н/Д |

<a id="renewable-infrastructure"></a>
#### Инфраструктура возобновляемой энергетики

| Модификатор | Описание | Примечание |
|---|---|---|
| `hydroelectric_energy_storage` | Базовое хранение энергии ГЭС в регионе | Н/Д |
| `state_renewable_energy_generation_modifier` | Меняет объём возобн. энергии в регионе | Н/Д |

<a id="battery-storage"></a>
#### Аккумуляторы и хранение

| Модификатор | Описание | Примечание |
|---|---|---|
| `battery_park_construction_cost` | Меняет стоимость постройки аккум. парка | Н/Д |

<a id="political-modifiers"></a>
### Политические модификаторы

Влияют на внутреннюю политику (партии).

| Модификатор | Описание | Примечание |
|---|---|---|
| `popularity_attack_modifier` | Меняет эффективность атак на партии в политическом интерфейсе | Не процент: 2.0 = урон ×2 |
| `popularity_boost_modifier` | Меняет эффективность поддержки партий в политическом интерфейсе | Не процент: 2.0 = поддержка ×2 |
