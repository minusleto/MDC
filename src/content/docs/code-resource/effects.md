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
one_random_industrial_complex = yes #add 1 civ with slot and cost
two_random_industrial_complex = yes #add 2 civs with slots and cost
three_random_industrial_complex = yes #add 3 civs (2 in 1st random state and 3rd in another one) with slots and cost
four_random_industrial_complex = yes #add 4 civs (2 in 1st random state and 2 in another one) with slots and cost

~~State Scope~~
one_state_industrial_complex = yes #add 1 civ with slot and cost in a predefined state
two_state_industrial_complex = yes #add 2 civs with slot and cost in a predefined state
three_state_industrial_complex = yes #add 3 civs with slot and cost in a predefined state
four_state_industrial_complex = yes #add 4 civs with slot and cost in a predefined state
```

<a id="military-factory"></a>
#### Военная фабрика

```
one_random_arms_factory = yes #add 1 military factory with slot and cost
two_random_arms_factory = yes #add 2 military factories with slots and cost
three_random_arms_factory = yes #add 3 military factories (2 in 1st random state and 3rd in another one) with slots and cost
four_random_arms_factory = yes #add 4 military factories (2 in 1st random state and 2 in another one) with slots and cost

~~State Scope~~
one_state_arms_factory = yes #add 1 military factory with slot and cost in a predefined state
two_state_arms_factory = yes #add 2 military factories with slot and cost in a predefined state
three_state_arms_factory = yes #add 3 military factories with slot and cost in a predefined state
four_state_arms_factory = yes #add 4 military factories with slot and cost in a predefined state
```

<a id="infrastructure"></a>
#### Инфраструктура

```
one_random_infrastructure = yes #add 1 infrastructure with cost
two_random_infrastructure = yes #add 2 infrastructure in 2 random states with cost
three_random_infrastructure = yes #add 3 infrastructure in 3 random states with cost

~~State Scope~~
one_state_infrastructure = yes #add 1 infrastructure with cost in a predefined state
two_state_infrastructure = yes #add 2 infrastructure with cost in a predefined state
three_state_infrastructure = yes #add 3 infrastructure with cost in a predefined state
```

<a id="dockyards"></a>
#### Верфьs

```
one_random_dockyard = yes #add 1 dockyard with slot and cost
two_random_dockyards = yes #add 2 dockyards with slots and cost

~~State Scope~~
one_state_dockyard = yes #add 1 dockyard with slot and cost in a predefined state
two_state_dockyard = yes #add 2 dockyards with slot and cost in a predefined state
```

<a id="offices"></a>
#### Офисы

Следующие эффекты также дают электростанцию на ископаемом топливе.

```
one_office_construction = yes #add 1 office construction with slot and cost
two_office_construction = yes #add 2 office constructions with slots and cost
three_office_construction = yes #add 3 office constructions (2 in 1st random state and 3rd in another one state) with slots and cost

~~State Scope~~
one_state_office_construction = yes #add 1 office construction with slot and cost in a predefined state
two_state_office_construction = yes #add 2 office constructions with slots and cost in a predefined state
three_state_office_construction = yes #add 3 office constructions with slots and cost in a predefined state
```

<a id="commercialized-agriculture-district"></a>
#### Коммерческий сельскохозяйственный район

```
one_random_agriculture_district = yes #add 1 agriculture district construction with slot and cost

~~State Scope~~
one_state_agriculture_district = yes #add 1 agriculture district construction with slot and cost in a predefined state
```

<a id="air-bases-air_base"></a>
#### Авиабазы (air_base)

```
one_air_base = yes #add 1 air base with cost
two_air_base = yes #add 2 air bases in various states with cost

~~State Scope~~
one_state_air_base = yes #add 1 air base with cost in a predefined state
two_state_air_base = yes #add 2 air bases with cost in a predefined state
```

<a id="network-infrastructure-internet_station"></a>
#### Сетевая инфраструктура (internet_station)

```
one_random_network_infrastructure = yes #add 1 network infrastructure with cost
two_random_network_infrastructure = yes #add 2 network infrastructure in various states with cost

~~State Scope~~
one_state_network_infrastructure = yes #add 1 network infrastructure with cost in a predefined state
two_state_network_infrastructure = yes #add 2 network infrastructure with cost in a predefined state
```

<a id="anti-air-sam-site-anti_air_building"></a>
#### ПВО | ЗРК (anti_air_building)

```
one_anti_air = yes #add 1 anti air with cost
two_anti_air = yes #add 2 anti airs in various states with cost

~~State Scope~~
one_state_anti_air = yes #add 1 anti air with cost in a predefined state
two_state_anti_air = yes #add 2 anti airs with cost in a predefined state
```

<a id="radar-station-radar_station"></a>
#### Радарная станция (radar_station)

```
one_radar_station = yes #add 1 radar station with cost
two_radar_station = yes #add 2 radar stations in various states with cost

~~State Scope~~
one_state_radar_station = yes #add 1 radar station with cost in a predefined state
two_state_radar_station = yes #add 2 radar stations with cost in a predefined state
```

<a id="synthetic-refinery-synthetic_refinery"></a>
#### Синтетический НПЗ (synthetic_refinery)

```
one_random_synthetic_refinery = yes #add 1 Synthetic refinery with slot and cost
two_random_synthetic_refinery = yes #add 2 Synthetic refineries in various states with slots and cost
three_random_synthetic_refinery = yes #add 3 Synthetic refineries in various states with slots and cost

~~State Scope~~
one_state_synthetic_refinery = yes #add 1 Synthetic refinery with slot and cost in a predefined state
two_state_synthetic_refinery = yes #add 2 Synthetic refineries with slot and cost in a predefined state
three_state_synthetic_refinery = yes #add 3 Synthetic refineries with slot and cost in a predefined state
```

<a id="other-buildings"></a>
#### Другие постройки

```
one_random_nuclear_reactor = yes #add 1 nuclear reactor with slot and cost
two_random_nuclear_reactor = yes #add 2 nuclear reactors with slot and cost

~~State Scope~~
one_state_nuclear_reactor = yes #add 1 nuclear reactor with slot and cost in a predefined state
two_state_nuclear_reactor = yes #add 2 nuclear reactors with slot and cost in a predefined state
```

<a id="mdc-economic-effects"></a>
### Экономические эффекты MDC

Все предоставленные скриптовые эффекты _автоматически_ создают для вас тултипы. **НЕ** локализуйте дополнительные тултипы.

<a id="how-to-modify-treasury"></a>
#### Как изменить казну

```
# - reduces the treasury
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
# - Adjusting the productivity of a number as a flat value
set_temp_variable = { temp_productivity_change = 0.025 }
flat_productivity_change_effect = yes
```

<a id="guide-on-how-to-do-additional-incomeadditional-expenses"></a>
#### Руководство: дополнительные доходы / дополнительные расходы

```
Step One: go to common/scripted_effects/00_money_system.txt
Step Two: look for calculate_additional_income_rate
Step Three: In that section there should be a noted one that says Country Specific. Throw it in there.
if = {
  limit = { original_tag = TAG  }
  if = {
    limit = { has_idea = whatever }
    set_variable = { whatever_gain = 0.05 }
    add_to_variable = { additional_income_rate = whatever_gain }
  }
}
Step Four: go to common/scripted_localization/money_scripted_localization.txt. It doesn't really matter where you put it in here.
defined_text = {
    name = additional_income_summary_whatever
    text = {
        trigger = { has_idea = whatever }
        localization_key = "whatever_TT" #define this summary "$$[?whatever_gain|+3] from §Y$whatever$§!\n"
    }
    text = {
        trigger = { NOT = { has_idea = whatever } }
        localization_key = ""
    }
}
Step Five: go to MD_money_l_english.yml (localisation/english). Look up ADDITIONAL_INCOME_REVENUES_TOOLTIP
Then at the end or somewhere in it just put [additional_income_summary_whatever]
Step Six: Go back to your original idea file this should show you the amount in the spirits modifiers

**NOTE** Variable displays will not work in this section. You will need to create seperate tooltip that states expclitly what you want or added the localization into the _desc of the idea.

Do this in the modifiers:

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
sizeable_military_spending = yes # Sets your military spending to sizeable
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

If you want industrial_conglomerates opinion to be improved.

set_temp_variable = { temp_opinion = 5 }
change_industrial_conglomerates_opinion = yes
```

<a id="internal-faction-breakdown"></a>
#### Разбор внутренних фракций

```
# List of Factions sorted by category
# ----------------------------------
# Economic Type: Small & Medium Business Owners, International Bankers, Fossil Fuel Industry
# Industrial Conglomerates, Oligarchs
#
# Militaristic: Maritime Industry, Military-Industrial Complex, The Military, Intelligence Community
#
# Special Interest: Labour Unions, Landowners, Farmers, Communist Cadres
#
# Religious Factions: Wahhabi Ulema, The Ulema, The Clergy, The Priesthood
#
# Nation Specific: The Donju, The Bazaar, Saudi Royal Family, IRGC, Iranian Quds Force,
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
- change_isi_pakistan_opinion -- Pakistani Unique Intelligence Community
- change_vevak_opinion -- Iranian Unique Intelligence Community
- change_the_bazaar_opinion -- Iranian Unique Small Medium Business Owners
- change_the_donju_opinion -- North Korean Олигархи
- change_saudi_royal_family_opinion -- Unique Faction for Gulf States
- change_foreign_jihadis_opinion -- Unique Faction for Fascist States (Al-Shabaab например,)
- change_irgc_opinion -- Unique Faction for Iran
- change_iranian_quds_force_opinion -- Unique Faction for Iranian Proxy States
- change_chaebols_opinion -- Unique South Korean oligarchs
- change_wall_street_opinion -- Unique American International Bankers

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
# Supported Scope: FROM, ROOT, PREV, TAG
change_influence_percentage = yes
```

<a id="mdc-political-effects"></a>
### Политические эффекты MDC

<a id="code-snippet-to-add-party-popularity-to-subideologies"></a>
#### Фрагмент кода для добавления популярности партии субидеологиям

- set_temp_variable = { party_index = X } # Индекс изменяемой партии, 0–23
- set_party_index_to_ruling_party = yes -- automatically sets index to ruling party
- set_temp_variable = { party_popularity_increase = Y } # Насколько изменяется популярность партии; значение задаётся десятичной дробью, поэтому 2% = 0.02
- set_temp_variable = { temp_outlook_increase = Z } # НЕОБЯЗАТЕЛЬНЫЙ ПАРАМЕТР -- значение задаётся десятичной дробью, поэтому 2% = 0.02
- add_relative_party_popularity = yes

```
set_temp_variable = { party_index = 2 }
set_temp_variable = { party_popularity_increase = 0.10 }
set_temp_variable = { temp_outlook_increase = 0.10 } -- OPTIONAL
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
# set_temp_variable = { col_one = 0 - 23 }  -- Optional: This sets the first coalition member
# set_temp_variable = { col_two = 0 - 23 }  -- Optional: This sets the second coalition member
# set_temp_variable = { col_three = 0 - 23 }  -- Optional: This sets the third coalition member
# set_temp_variable = { change_leader_temp = 0-1 } -- Optional: If you do not want to change the ruling leader then set this value to 1
# It's imperative you put the set_politics second! Else it doesn't properly update the set_party_name

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
