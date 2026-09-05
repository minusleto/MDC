---
title: Экономические модификаторы
description: ""
---

## Экономические модификаторы

Влияют на экономику, налоги, торговлю и производительность.

<a id="vanilla"></a>
### Ванильные

| Модификатор | Описание | Примечание |
|---|---|---|
| `monthly_population` | Меняет ежемесячный прирост населения в регионах | Н/Д |
| `consumer_goods_factor` | Меняет долю фабрик под потребительские товары | Складывается мультипликативно, см. вики HOI4 |
| `local_resources_factor` | Меняет эффективность добычи ресурсов на месте | Н/Д |
| `research_speed_factor` | Меняет скорость исследований | Н/Д |
| `industrial_capacity_factory` | Меняет выпуск военных фабрик | Н/Д |
| `industrial_capacity_dockyard` | Меняет выпуск верфей | Н/Д |
| `production_speed_buildings_factor` | Меняет скорость строительства всех построек | Н/Д |
| `industry_repair_factor` | Меняет скорость починки построек | Н/Д |
| `global_building_slots` | Меняет число слотов построек во всех регионах | Н/Д |
| `global_building_slots_factor` | То же самое, в процентах | Н/Д |
| `conversion_cost_civ_to_mil_factor` | Меняет цену конверсии гражд. фабрик в военные | Н/Д |
| `conversion_cost_mil_to_civ_factor` | Меняет цену конверсии военных фабрик в гражданские | Н/Д |
| `production_oil_factor` | Меняет прирост синтетической нефти | Н/Д |
| `nuclear_production_factor` | Меняет скорость производства ядерного оружия | Н/Д |

<a id="general-economic"></a>
### Общие экономические

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

<a id="inflation"></a>
### Инфляция

Все значения в процентах: 1 = +100%.

| Модификатор | Описание | Примечание |
|---|---|---|
| `inflation_multiplier_modifier` | Модификатор инфляции | 1 = +100% |
| `inflation_defence_multiplier_modifier` | Модификатор защиты от инфляции | 1 = +100% |
| `inflation_from_dept_multiplier_modifier` | Влияние долга на инфляцию | 1 = +100% |
| `inflation_from_export_multiplier_modifier` | Влияние экспорта на инфляцию | 1 = +100% |
| `treasury_to_gdp_inflation_multiplier_modifier` | Влияние казны на инфляцию | 1 = +100% |
| `base_inflation_percent_modifier` | Модификатор базовой инфляции | 1 = +100% |

<a id="exports-resources"></a>
### Экспорт и ресурсы

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
### Производительность промышленности

| Модификатор | Описание | Примечание |
|---|---|---|
| `agricolture_productivity_modifier` | Меняет производительность сельского хозяйства | Н/Д |
| `civilian_factories_productivity` | Меняет производительность гражд. фабрик | Н/Д |
| `military_factories_productivity` | Меняет производительность военных фабрик | Н/Д |
| `dockyard_prodctivity` | Меняет производительность верфей | Н/Д |
| `offices_productivity` | Меняет производительность офисов | Н/Д |

<a id="industry-income-taxes"></a>
### Налоги на доходы промышленности

| Модификатор | Описание | Примечание |
|---|---|---|
| `office_park_income_tax_modifier` | Меняет доход от офисных комплексов | Н/Д |
| `agriculture_district_income_tax_modifier` | Меняет доход от с/х районов | Н/Д |
| `dockyard_income_tax_modifier` | Меняет доход от верфей | Н/Д |
| `military_industry_tax_modifier` | Меняет доход от военной промышленности | Н/Д |
| `civilian_industry_tax_modifier` | Меняет доход от гражданской промышленности | Н/Д |
| `agriculture_tax_modifier` | Меняет доход от сельского хозяйства | Н/Д |

<a id="campaign-costs"></a>
### Стоимость кампаний

| Модификатор | Описание | Примечание |
|---|---|---|
| `salafist_outlook_campaign_cost_modifier` | Меняет цену кампании салафитской индоктринации | Н/Д |
| `nonaligned_outlook_campaign_cost_modifier` | Меняет цену кампании неприсоединившихся | Н/Д |
| `western_outlook_campaign_cost_modifier` | Меняет цену кампании западной ориентации | Н/Д |
| `emerging_outlook_campaign_cost_modifier` | Меняет цену кампании развивающейся ориентации | Н/Д |
| `nationalist_outlook_campaign_cost_modifier` | Меняет цену кампании националистов | Н/Д |
| `propaganda_campaign_cost_modifier` | Меняет цену всех пропагандистских кампаний | Н/Д |

<a id="investment-modifiers"></a>
### Модификаторы инвестиций

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
### Рабочая сила и труд

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
### Стоимость улучшений и специальных действий

| Модификатор | Описание | Примечание |
|---|---|---|
| `econ_cycle_upg_cost_multiplier_modifier` | Меняет стоимость улучшения экон. цикла | Н/Д |
