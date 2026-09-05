---
title: Modifiers
description: MDC Economic, Law, Migration, Influence, Energy and Political modifiers
---

<a id="modifiers"></a>
## Modifiers

MDC modifiers follow standard HOI4 syntax, but include a lot of unique economic, political and energy systems.

<a id="economic-modifiers"></a>
### Economic Modifiers

Affect the economy, taxes, trade and productivity.

<a id="vanilla"></a>
#### Vanilla

| Modifier | Description | Note |
|---|---|---|
| `monthly_population` | Modifies monthly population growth in states | N/A |
| `consumer_goods_factor` | Modifies the share of factories used for consumer goods | Stacks multiplicatively, see HOI4 wiki |
| `local_resources_factor` | Modifies the efficiency of local resource gathering | N/A |
| `research_speed_factor` | Modifies research speed | N/A |
| `industrial_capacity_factory` | Modifies military factory output | N/A |
| `industrial_capacity_dockyard` | Modifies dockyard output | N/A |
| `production_speed_buildings_factor` | Modifies the construction speed of all buildings | N/A |
| `industry_repair_factor` | Modifies building repair speed | N/A |
| `global_building_slots` | Modifies the number of building slots in all states | N/A |
| `global_building_slots_factor` | Same, as a percentage | N/A |
| `conversion_cost_civ_to_mil_factor` | Modifies the cost of converting civilian factories to military | N/A |
| `conversion_cost_mil_to_civ_factor` | Modifies the cost of converting military factories to civilian | N/A |
| `production_oil_factor` | Modifies synthetic oil gain | N/A |
| `nuclear_production_factor` | Modifies nuclear weapon production speed | N/A |
| `surrender_limit` | Modifies the % of capitals/VPs that must be lost to force surrender | N/A |

<a id="general-economic"></a>
#### General Economic

| Modifier | Description | Note |
|---|---|---|
| `interest_rate_multiplier_modifier` | Modifies the country's interest rate | This is whole number ( i.e. -1 ) |
| `personnel_cost_multiplier_modifier` | Modifies the country's military wages | N/A |
| `army_personnel_cost_multiplier_modifier` | Modifies the country's land forces wages | N/A |
| `navy_personnel_cost_multiplier_modifier` | Modifies the country's naval forces wages | N/A |
| `airforce_personnel_cost_multiplier_modifier` | Modifies the country's air forces wages | N/A |
| `equipment_cost_multiplier_modifier` | Modifies the country's equipment upkeep | N/A |
| `bureaucracy_cost_multiplier_modifier` | Modifies the country's bureaucracy spending cost | N/A |
| `police_cost_multiplier_modifier` | Modifies the country's internal security spending cost | N/A |
| `education_cost_multiplier_modifier` | Modifies the country's internal security spending cost | N/A |
| `health_cost_multiplier_modifier` | Modifies the country's health care spending cost | N/A |
| `social_cost_multiplier_modifier` | Modifies the country's welfare spending cost | N/A |
| `tax_rate_change_multiplier_modifier` | Modifies the tax rate law change pp cost | N/A |
| `projects_cost_modifier` | Modifies the economic projects (the project section in the Economic Preview tab) | N/A |
| `tax_gain_multiplier_modifier` | Modifies the amount of money gained from all taxes (Population and Corporate) | N/A |
| `population_tax_income_multiplier_modifier` | Modifies the amount of money gained from population taxes | N/A |
| `corporate_tax_income_multiplier_modifier` | Modifies the amount of money gained from corporate taxes | N/A |
| `productivity_growth_modifier` | Modifies the productivity growth of a nation | Keep this small or else it quickly snowballs |
| `state_productivity_growth_modifier` | State level modifier to increase/decrease the productivity growth of a state | N/A |
| `country_productivity_growth_modifier` | Country level modifier increase/decrease the productivity growth of a state | N/A |
| `international_market_income_modifier` | Modifier to increase/decrease the amount of money gained from selling equipment on the international market | N/A |
| `international_market_purchase_modifier` | Modifier to increase/decrease the cost of buying equipment from the international market | N/A |

<a id="exports-resources"></a>
#### Exports & Resources

| Modifier | Description | Note |
|---|---|---|
| `resource_export_multiplier_modifier` | Modifies the amount of money gained from all Resource Exports | N/A |
| `oil_export_multiplier_modifier` | Modifies the amount of money gained from Fossil Fuel Exports | N/A |
| `steel_export_multiplier_modifier` | Modifies the amount of money gained from Steel Exports | N/A |
| `aluminium_export_multiplier_modifier` | Modifies the amount of money gained from Light Metal Exports | N/A |
| `tungsten_export_multiplier_modifier` | Modifies the amount of money gained from Technology Metal Exports | N/A |
| `chromium_export_multiplier_modifier` | Modifies the amount of money gained from Precious Metal Exports | N/A |
| `rubber_export_multiplier_modifier` | Modifies the amount of money gained from Rubber Exports | N/A |
| `gdp_from_resource_sector_modifier` | Modifier to increase/decrease the gdp from the resource sector | N/A |

<a id="industry-productivity"></a>
#### Industry Productivity

| Modifier | Description | Note |
|---|---|---|
| `agricolture_productivity_modifier` | Modifier to increase/decrease the productivity generate from agriculture | N/A |
| `civilian_factories_productivity` | Modifier to increase/decrease the productivity generate from civilian factories | N/A |
| `military_factories_productivity` | Modifier to increase/decrease the productivity generate from mil factories | N/A |
| `dockyard_prodctivity` | Modifier to increase/decrease the productivity generate from dockyards | N/A |
| `offices_productivity` | Modifier to increase/decrease the productivity generated from offices | N/A |

<a id="industry-income-taxes"></a>
#### Industry Income Taxes

| Modifier | Description | Note |
|---|---|---|
| `office_park_income_tax_modifier` | Modifies the amount of money gained from Office Parks | N/A |
| `agriculture_district_income_tax_modifier` | Modifies the amount of money gained from Commercialized Agriculture Districts | N/A |
| `dockyard_income_tax_modifier` | Modifies the amount of money gained from Naval Yards | N/A |
| `military_industry_tax_modifier` | Modifies the amount of money gained from Military Industry | N/A |
| `civilian_industry_tax_modifier` | Modifies the amount of money gained from Civilian Industry | N/A |
| `agriculture_tax_modifier` | Modifies the amount of money gained from Agriculture | N/A |

<a id="campaign-costs"></a>
#### Campaign Costs

| Modifier | Description | Note |
|---|---|---|
| `salafist_outlook_campaign_cost_modifier` | Modifies the Salafi Indoctrination campaign decision monetary cost | N/A |
| `nonaligned_outlook_campaign_cost_modifier` | Modifies the Non-Aligned campaign decision monetary cost | N/A |
| `western_outlook_campaign_cost_modifier` | Modifies the Western Outlook campaign decision monetary cost | N/A |
| `emerging_outlook_campaign_cost_modifier` | Modifies the Emerging Outlook campaign decision monetary cost | N/A |
| `nationalist_outlook_campaign_cost_modifier` | Modifies the Nationalist Outlook campaign decision monetary cost | N/A |
| `propaganda_campaign_cost_modifier` | Modifies all propaganda campaign decision monetary cost | N/A |

<a id="investment-modifiers"></a>
#### Investment Modifiers

| Modifier | Description | Note |
|---|---|---|
| `investment_duration_modifier` | Modifies the duration of an outgoing International Investment project | N/A |
| `receiving_investment_duration_modifier` | Modifies the duration of incoming International Investment projects | N/A |
| `investment_cost_modifier` | Modifies the cost of an outgoing International Investment project | N/A |
| `receiving_investment_cost_modifier` | Modifies the cost of incoming International Investment projects | N/A |
| `internal_investments_pp_cost_modifier` | Modifier to increase/decrease the amount of political power spent on Internal Investments | N/A |
| `internal_investments_money_cost_modifier` | MModifier to increase/decrease the amount of money spent on Internal Investments | N/A |
| `return_on_investment_modifier` | Modifies the return rate on International Investment | 0.02 will add 2% to your ROI rate |

<a id="workforce-labor"></a>
#### Workforce & Labor

| Modifier | Description | Note |
|---|---|---|
| `total_workforce_modifier` | Modifier to increase/decrease the amount of your workforce for buildings | N/A |
| `high_unemployment_threshold_modifier` | Modifier to increase/decrease the limit before you suffer penalties from high unemployment | N/A |
| `agriculture_workers_modifier` | Modifies the number of workers required by agriculture | N/A |
| `resource_sector_workers_modifier` | Modifies the number of workers required by the resource sectors | N/A |
| `civ_facs_worker_requirement_modifier` | Modifies the number of workers required by a Civilian Factory | N/A |
| `mil_facs_worker_requirement_modifier` | Modifies the number of workers required by a Military Factory and Dockyard | N/A |
| `offices_worker_requirement_modifier` | Modifies the number of workers required by an Office Park | N/A |
| `agriculture_district_worker_requirement_modifier` | Modifies the number of workers required by Commercialized Agriculture Districts | N/A |
| `buildings_worker_requirement_modifier` | Modifies the number of workers required by all buildings | N/A |

<a id="upgrade-special-costs"></a>
#### Upgrade & Special Costs

| Modifier | Description | Note |
|---|---|---|
| `econ_cycle_upg_cost_multiplier_modifier` | Modifies the economic cycle upgrade cost | N/A |

<a id="law-modifiers"></a>
### Law Modifiers

Modify the cost (in political power, PP) of changing national laws.

<a id="expected-spending"></a>
#### Expected Spending

| Modifier | Description | Note |
|---|---|---|
| `expected_adm_modifier` | Modifier that increases/decreases the expected government spending on Bureau (Laws) | N/A |
| `expected_police_modifier` | Modifier that increases/decreases the expected government spending on Police/Internal Security (Law) | N/A |
| `expected_education_modifier` | Modifier that increases/decreases the expected government spending on Education (Law) | N/A |
| `expected_healthcare_modifier` | Modifier that increases/decreases the expected government spending on Healthcare (Law) | N/A |
| `expected_welfare_modifier` | Modifier that increases/decreases the expected government spending on Social Spending (Law) | N/A |
| `expected_mil_modifier` | Modifier that increases/decreases the expected government spending on Military (Law) | N/A |

<a id="law-change-costs"></a>
#### Law Change Costs

| Modifier | Description | Note |
|---|---|---|
| `corruption_cost_factor` | Modifies the political power cost of changing Corruption | N/A |
| `economic_cycles_cost_factor` | Modifies the political power cost of changing Economic Cycles | N/A |
| `internal_factions_cost_factor` | Modifies the political power cost of changing Internal Factions | N/A |
| `bureaucracy_cost_factor` | Modifies the political power cost of changing Bureaucracy Spending | N/A |
| `Military_Spending_cost_factor` | Modifies the political power cost of changing Military Spending | N/A |
| `crime_fighting_cost_factor` | Modifies the political power cost of changing Police/Internal Security Spending | N/A |
| `education_budget_cost_factor` | Modifies the political power cost of changing Education Spending | N/A |
| `health_budget_cost_factor` | Modifies the political power cost of changing Healthcare Spending | N/A |
| `social_budget_cost_factor` | Modifies the political power cost of changing Welfare Spending | N/A |
| `trade_laws_cost_factor` | Modifies the political power cost of changing Trade Law | N/A |
| `Conscription_Law_cost_factor` | Modifies the political power cost of changing Conscription Law | N/A |
| `Military_Status_Women_cost_factor` | Modifies the political power cost of changing Military Status of Women Law | N/A |
| `Foreign_Intervention_Law_cost_factor` | Modifies the political power cost of changing Foreign Intervention Law | N/A |
| `Officer_Training_Law_cost_factor` | Modifies the political power cost of changing Officer Training Law | N/A |

<a id="manufacturer-change-costs"></a>
#### Manufacturer Change Costs

| Modifier | Description | Note |
|---|---|---|
| `materiel_manufacturer_cost_factor` | Modifies the political power cost of changing Infantry/Other Design Companies | This is used when you do not have Arms Against Tyranny enabled. |
| `tank_manufacturer_cost_factor` | Modifies the political power cost of changing Armour Design Companies | This is used when you do not have Arms Against Tyranny enabled. |
| `aircraft_manufacturer_cost_factor` | Modifies the political power cost of changing Aircraft Design Companies | This is used when you do not have Arms Against Tyranny enabled. |
| `naval_manufacturer_cost_factor` | Modifies the political power cost of changing Naval Design Companies | This is used when you do not have Arms Against Tyranny enabled. |

<a id="migration-modifiers"></a>
### Migration Modifiers

Affect population migration.

| Modifier | Description | Note |
|---|---|---|
| `migration_rate_value_factor` | Modifier to increase/decrease the amount of net migration into your country | N/A |

<a id="influence-modifiers"></a>
### Influence Modifiers

Affect the Foreign Influence system.

| Modifier | Description | Note |
|---|---|---|
| `foreign_influence_modifier` | Modifier that increases the effectiveness of your influence actions | N/A |
| `foreign_influence_defense_modifier` | Modifier that decreases the effectiveness of foreign influence actions in our country | N/A |
| `foreign_influence_auto_influence_cap_modifier` | Modifier that increases the number of Auto-Influence slots a tag has available | N/A |
| `influence_coup_modifier` | Modifier that increase/decreases the success rate of a coup | N/A |
| `foreign_influence_continent_modifier` | Modifier that increase/decreases the effectiveness of foreign influence on other continents | This modifier is a negative modifier. |
| `foreign_influence_home_continent_modifier` | Modifier that increase/decreases the effectiveness of foreign influence on our home continents | This modifier is a negative modifier. |
| `foreign_influence_monthly_domestic_independence_gain_modifier` | Increases the amount of the monthly Domestic Independence Gain | N/A |
| `foreign_influence_monthly_domestic_independence_gain_factor` | Modifier that increases/decreases the effectiveness of foreign influence on other continents | Increases the amount of the monthly Domestic Independence Gain by this factor |

<a id="energy-modifiers"></a>
### Energy Modifiers

Govern energy production and consumption.

<a id="general-energy"></a>
#### General Energy

| Modifier | Description | Note |
|---|---|---|
| `energy_gain` | Modifies energy gain as a flat amount | 10 = 10 more energy gain |
| `energy_gain_multiplier` | Modifies energy gain as a percentage, modifies all sources of energy gain | N/A |
| `energy_use` | Modifies energy use as a flat amount | 10 = 10 more energy consumption |
| `energy_use_multiplier` | Modifies energy consumption as a percentage, modifies all sources of energy consumption | N/A |
| `renewable_energy_gain` | Modifies energy gain from renewable | N/A |
| `renewable_energy_gain_multiplier` | Modifies energy gain from renewable as a modifier | N/A |

<a id="population-energy"></a>
#### Population Energy

| Modifier | Description | Note |
|---|---|---|
| `pop_energy_use_multiplier` | Modifies the amount of energy used by the population | N/A |
| `non_electric_fuel_consumption_modifier` | Modifies the consumption of fuel by a countries population | N/A |

<a id="fossil-fuels"></a>
#### Fossil Fuels

| Modifier | Description | Note |
|---|---|---|
| `fossil_pp_energy_generation_modifier` | Modifies the energy generated by a Fossil Fuel Powerplant | N/A |
| `fossil_pp_fuel_consumption_modifier` | Modifies the consumption of fuel by Fossil Fuel Powerplant | N/A |

<a id="nuclear-energy"></a>
#### Nuclear Energy

| Modifier | Description | Note |
|---|---|---|
| `nuclear_energy_generation_modifier` | Modifies energy generated by a Nuclear Reactor | N/A |
| `nuclear_fuel_consumption_modifier` | Modifies the consumption of LEU fuel by Nuclear Reactors | N/A |
| `leu_fuel_production_modifier` | Modifies the amount of LEU fuel produced each week by enrichment facilities | N/A |
| `heu_fuel_production_modifier` | Modifies the amount of HEU fuel produced each week by enrichment facilities | N/A |

<a id="renewable-infrastructure"></a>
#### Renewable Infrastructure

| Modifier | Description | Note |
|---|---|---|
| `hydroelectric_energy_storage` | Used for basic static energy use/storage for hydroelectric modifiers in a particular state | N/A |
| `state_renewable_energy_generation_modifier` | Modifies the amount of State Renewable Energy Generation | N/A |

<a id="battery-storage"></a>
#### Battery & Storage

| Modifier | Description | Note |
|---|---|---|
| `battery_park_construction_cost` | Modifies the cost of building a battery park | N/A |

<a id="political-modifiers"></a>
### Political Modifiers

Affect domestic politics (parties).

<a id="vanilla"></a>
#### Vanilla

| Modifier | Description | Note |
|---|---|---|
| `political_power_gain` | Daily political power gain | N/A |
| `political_power_factor` | Daily political power gain (%) | N/A |
| `political_power_cost` | Daily political power cost | N/A |
| `stability_factor` | Modifies stability | N/A |
| `stability_weekly` | Weekly stability gain | N/A |
| `stability_weekly_factor` | Weekly stability gain (%) | N/A |
| `party_popularity_stability_factor` | Stability gained from ruling party's popularity | N/A |
| `drift_defence_factor` | Ideology drift defense | N/A |
| `<ideology>_drift` | Daily drift of the specified ideology | E.g. `communism_drift` |
| `<ideology>_acceptance` | AI willingness to accept the specified ideology | E.g. `fascism_acceptance` |

<a id="mdc"></a>
#### MDC

| Modifier | Description | Note |
|---|---|---|
| `popularity_attack_modifier` | Modifier that increases the effectiveness of attacking political parties in the political GUI | The modifier is not percentual. EX: popularity_attack_modifier = 2.0 for 2x damage |
| `popularity_boost_modifier` | Modifier that increases the effectiveness of boosting political parties in the political GUI | The modifier is not percentual. EX: popularity_boost_modifier = 2.0 for 2x boost |

<a id="military-modifiers"></a>
### Military Modifiers

Basics. Unit/combat-specific modifiers are separate, coming later.

<a id="vanilla-military"></a>
#### Vanilla

| Modifier | Description | Note |
|---|---|---|
| `war_support_factor` | Modifies war support | N/A |
| `war_support_weekly` | Weekly war support gain | N/A |
| `war_support_weekly_factor` | Weekly war support gain (%) | N/A |
| `war_stability_factor` | Stability penalty from being at war | N/A |
| `offensive_war_stability_factor` | Stability penalty from participating in an offensive war | N/A |
| `defensive_war_stability_factor` | Stability penalty from participating in a defensive war | N/A |
| `weekly_casualties_war_support` | War support from weekly casualties | N/A |
| `weekly_convoys_war_support` | War support from sunk convoys | N/A |
| `weekly_bombing_war_support` | War support from enemy bombing of our states | N/A |

