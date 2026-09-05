---
title: Scripted Effects
description: "Effects/Scripted Effects — buildings, economy, factions, influence, politics, EU, counter-terror, cartels"
---

All scripted effects automatically create tooltips — do **not** localize them manually as well.

<a id="effectsscripted-effects"></a>
## Effects/Scripted Effects

<a id="mdc-building-costs"></a>
### MDC Building Costs

Each of the values for buildings that consume a building slot (i.e. Civilian Industry) has the building slot factored in.

-- State Buildings:

- Civilian Industry (industrial_complex) - $7.50
- Military Industry (arms_factory) - $7.50
- Dockyard (dockyard) - $7.50
- Offices (offices) - $12
- Commercialized Agriculture District - $3.75
- Infrastructure (infrastructure) - $3.50
- Air Base (air_base) - $2.50
- Sam Site (anti_air_building) - $3.25
- Renewable Energy Infrastructure (synthetic_refinery) - $8.50
- Fuel Silo (fuel_silo) - $3.00
- Radar Station (radar_station) - $1.75
- Network Infrastructure (internet_station) - $3.00
- Missile Launch Site (rocket_site) - $3.00
- Nuclear Reactor (nuclear_reactor) - $9.00
- State-Wide Defensive Network (stronghold_network) - $8.00
- Fossil Fuel Powerplant (fossil_powerplant) - $2.25
- **Building Slots Minimum: $1.00 per slot**

-- Provincial Buildings

- Naval Engineering Facility (naval_facility) - $15.00
- Land Warfare Facility (land_facility) - $15.00
- Aerodynamics & Avionics Facility (air_facility) - $15.00
- Civilian R&D Facility (nuclear_facility) - $15.00
- Naval Base (naval_base) - $0.50 per level
- Land Fort (bunker) - $0.50 per level
- Coastal Bunker (coastal_bunker) - $0.50 per level
- Supply Hub (supply_node) - $2.50
- Railways (rail_way) - $0.01 per province

-- Resources:

Resources in MD translates to a 8 resources to one civilian factory. Therefore, if you were to add 1 steel it would cost the nation $0.938 Billion in MD standard. The below example illustrates how you should balance out resource costs.

Example:

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
### MDC Building Effects

If you are lazy to calculate cost for common effects with buildings, you can check common\scripted_effects\00_scripted_effects.txt

State Scope effects requires to put the effect inside a state. If the building cannot be added into a state, it will be added to any random owned state.

Example:

```
117 = {
	one_state_industrial_complex = yes
}
```

Also try to use as more as possible these effects.

<a id="civilian-factory"></a>
#### Civilian Factory

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
#### Military Factory

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
#### Infrastructure

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
#### Dockyards

```
one_random_dockyard = yes #add 1 dockyard with slot and cost
two_random_dockyards = yes #add 2 dockyards with slots and cost

~~State Scope~~
one_state_dockyard = yes #add 1 dockyard with slot and cost in a predefined state
two_state_dockyard = yes #add 2 dockyards with slot and cost in a predefined state
```

<a id="offices"></a>
#### Offices

The following also give a fossil fuel power plant.

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
#### Commercialized Agriculture District

```
one_random_agriculture_district = yes #add 1 agriculture district construction with slot and cost

~~State Scope~~
one_state_agriculture_district = yes #add 1 agriculture district construction with slot and cost in a predefined state
```

<a id="air-bases-air_base"></a>
#### Air bases (air_base)

```
one_air_base = yes #add 1 air base with cost
two_air_base = yes #add 2 air bases in various states with cost

~~State Scope~~
one_state_air_base = yes #add 1 air base with cost in a predefined state
two_state_air_base = yes #add 2 air bases with cost in a predefined state
```

<a id="network-infrastructure-internet_station"></a>
#### Network Infrastructure (internet_station)

```
one_random_network_infrastructure = yes #add 1 network infrastructure with cost
two_random_network_infrastructure = yes #add 2 network infrastructure in various states with cost

~~State Scope~~
one_state_network_infrastructure = yes #add 1 network infrastructure with cost in a predefined state
two_state_network_infrastructure = yes #add 2 network infrastructure with cost in a predefined state
```

<a id="anti-air-sam-site-anti_air_building"></a>
#### Anti Air | Sam Site (anti_air_building)

```
one_anti_air = yes #add 1 anti air with cost
two_anti_air = yes #add 2 anti airs in various states with cost

~~State Scope~~
one_state_anti_air = yes #add 1 anti air with cost in a predefined state
two_state_anti_air = yes #add 2 anti airs with cost in a predefined state
```

<a id="radar-station-radar_station"></a>
#### Radar Station (radar_station)

```
one_radar_station = yes #add 1 radar station with cost
two_radar_station = yes #add 2 radar stations in various states with cost

~~State Scope~~
one_state_radar_station = yes #add 1 radar station with cost in a predefined state
two_state_radar_station = yes #add 2 radar stations with cost in a predefined state
```

<a id="synthetic-refinery-synthetic_refinery"></a>
#### Synthetic refinery (synthetic_refinery)

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
#### Other buildings

```
one_random_nuclear_reactor = yes #add 1 nuclear reactor with slot and cost
two_random_nuclear_reactor = yes #add 2 nuclear reactors with slot and cost

~~State Scope~~
one_state_nuclear_reactor = yes #add 1 nuclear reactor with slot and cost in a predefined state
two_state_nuclear_reactor = yes #add 2 nuclear reactors with slot and cost in a predefined state
```

<a id="mdc-economic-effects"></a>
### MDC Economic Effects

All scripted effects provided _automatically_ create tooltips for you. Do **NOT** localize additional tooltips.

<a id="how-to-modify-treasury"></a>
#### How to Modify Treasury

```
# - reduces the treasury
set_temp_variable = { treasury_change = -10.00 }
modify_treasury_effect = yes

small_expenditure = yes
medium_expenditure = yes
large_expenditure = yes
```

<a id="other-economic-effects"></a>
#### Other Economic Effects

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
#### Guide on How To-Do Additional Income/Additional Expenses

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
#### Set/Remove Trade Agreement

Creates or removes a trade agreement

- sender_nation --- The nation sending the agreement
- receiver_nation --- Nation retrieving the agreement
- remove_agreement --- Optional (Set to 1)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_improved_trade_agreement = yes

```

<a id="setremove-permanent-investment-targets"></a>
#### Set/Remove Permanent Investment Targets

Creates or removes adding_nation to another AI's investment pool

- target_nation --- The nation sending the agreement
- adding_nation --- Nation retrieving the agreement
- remove_nation --- Optional (Set to 1)

```
set_temp_variable = { target_nation = RAJ.id }
set_temp_variable = { adding_nation = SIN.id }
change_permanent_investment_target = yes

```

<a id="increasedecrease-economic-growth"></a>
#### Increase/Decrease Economic Growth

Increases or decreases the nation's current economic cycle

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
#### Increase/Decrease Bureaucracy Law

Increases or decreases the nation's current Bureaucracy Spending Law

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
#### Increase/Decrease Social Spending

Increase or decreases the nation's current Social Spending Law

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
#### Increase/Decrease Education Spending

Increase or decreases the nation's current Education Spending Law

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
#### Increase/Decrease Health Spending

Increase or decreases the nation's current Education Spending Law

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
#### Increase/Decrease Police Spending

Increase or decreases the nation's current Police Spending Law

```
increase_policing_budget = yes
increase_policing_budget_2 = yes
increase_policing_budget_2 = yes
increase_policing_budget_4 = yes
decrease_policing_budget = yes
decrease_policing_budget_2 = yes
```

<a id="increasedecrease-trade-law"></a>
#### Increase/Decrease Trade Law

The following are for increasing and decreasing the "Trade Law" of your nation:

```
increase_exports = yes
decrease_exports = yes
set_exports_to_min = yes
set_exports_to_max = yes
```

<a id="increasedecrease-military-spending-law"></a>
#### Increase/Decrease Military Spending Law

The following are for increasing your military spending law.

```
increase_military_spending = yes
decrease_military_spending = yes
decrease_military_spending_2 = yes
sizeable_military_spending = yes # Sets your military spending to sizeable
```

<a id="increasedecrease-migration-law"></a>
#### Increase/Decrease Migration Law

The following are for increasing and decreasing your Migration and Border Regulations laws

```
increase_migration_law = yes
decrease_migration_law = yes
```

<a id="mdc-internal-faction-effects"></a>
### MDC Internal Faction Effects

<a id="internal-factions-code-snippet"></a>
#### Internal Factions Code Snippet

```
set_temp_variable = { temp_opinion = 5 }
change_small_medium_business_owners_opinion = yes

If you want industrial_conglomerates opinion to be improved.

set_temp_variable = { temp_opinion = 5 }
change_industrial_conglomerates_opinion = yes
```

<a id="internal-faction-breakdown"></a>
#### Internal Faction Breakdown

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
#### Available Faction Commands

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
- change_the_donju_opinion -- North Korean Oligarchs
- change_saudi_royal_family_opinion -- Unique Faction for Gulf States
- change_foreign_jihadis_opinion -- Unique Faction for Fascist States (Al-Shabaab i.e.)
- change_irgc_opinion -- Unique Faction for Iran
- change_iranian_quds_force_opinion -- Unique Faction for Iranian Proxy States
- change_chaebols_opinion -- Unique South Korean oligarchs
- change_wall_street_opinion -- Unique American International Bankers

<a id="mdc-influence-effects"></a>
### MDC Influence Effects

<a id="influence-action-examples"></a>
#### Influence Action Examples

Percent Change is given in a whole number increment (i.e. 10 = 10%)

- Domestic Influence

```
# set_temp_variable = { percent_change = +-x }
change_domestic_influence_percentage = yes
```

- Change Index Influencers

```
# set_temp_variable = { percent_change = +-x }
# set_temp_variable = { influencer_index = 0-6 }
change_current_influencer_index_percentage = yes
```

- General Influence Change
-- Keep in mind if the 7th influencer has more influence then your percent_change the target nation will gain domestic influence instead of you gaining influence.

i.e.
7th Influencer has 5% influence and you are influencing by 3%. The target nation gains domestic influence instead.

```
# set_temp_variable = { percent_change = -+ x }
# set_temp_variable = { tag_index = SCOPE }
# set_temp_variable = { influence_target = SCOPE }
# Supported Scope: FROM, ROOT, PREV, TAG
change_influence_percentage = yes
```

<a id="mdc-political-effects"></a>
### MDC Political Effects

<a id="code-snippet-to-add-party-popularity-to-subideologies"></a>
#### Code Snippet to Add Party Popularity to Subideologies

- set_temp_variable = { party_index = X } #Index of party to be changed 0-23
- set_party_index_to_ruling_party = yes -- automatically sets index to ruling party
- set_temp_variable = { party_popularity_increase = Y } #How much party popularity is changed, must be in decimals so 2% is 0.02
- set_temp_variable = { temp_outlook_increase = Z } #OPTIONAL PARAMETER -- Must be in decimals so 2% is 0.02
- add_relative_party_popularity = yes

```
set_temp_variable = { party_index = 2 }
set_temp_variable = { party_popularity_increase = 0.10 }
set_temp_variable = { temp_outlook_increase = 0.10 } -- OPTIONAL
add_relative_party_popularity = yes
```

_**Modify Ruling Outlook Popularity:**_

Purpose: Modifies the ruling outlook only by `arg_popularity`

```
set_temp_variable = { arg_popularity = +- }
add_ruling_outlook_popularity = yes
```

_**Add a Party to Coalition**_

Purpose: Lightweight script to dynamically localize the addition of members into coalition.

```
set_temp_variable = { add_col_one = 0-23 }
add_coalition_members_effect = yes
```

_**Remove a Party from Coalition**_

Purpose: Lightweight script to dynamically localize the removal of members into coalition.

```
set_temp_variable = { remove_col_one = 0-23 }
remove_coalition_members_effect = yes
```

_**Set the Ruling Party Via Effect**_

Purpose: Set the ruling party via scripted effect to some subideology. You need to still do the set_politics as I cannot parameterize it.

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

_**Modifying Election Threshold:**_

Purpose: Modifies the Election Threshold (minimum value a party needs to be considered for coalitions).

```
set_temp_variable = { threshold_change = 0.03 }
modify_election_threshold = yes
```

_**Allow/Ban Parties**_

Bans the provided party index for elections

```
set_temp_variable = { party_index = 1-24 }
ban_party_scripted_call = yes
```

Allows the provided party index for elections

```
set_temp_variable = { party_index = 1-24 }
unban_party_scripted_call = yes
```

```
set_country_flag = free_allow_parties # Set this if you don't want a PP cost
set_partyall_allowed = yes # Allows all the parties
```

```
set_country_flag = free_ban_parties # Set this if you don't want a PP cost
set_partyall_banned = yes # Bans all the parties
```

<a id="counter-terror-effects"></a>
### Counter Terror Effects

<a id="radicalization-threat-level"></a>
#### Radicalization / Threat Level

Only Counter Terror nations can use this. For a full list of tags go to common -> on_actions.txt and look for _ct_states.

```
set_temp_variable = { rad_change = -5 }
modify_radicalization_effect = yes

```

```
set_temp_variable = { threat_change = 2 }
modify_terror_threat_effect = yes

```

<a id="mdc-cartel-related-effects"></a>
### MDC Cartel Related Effects

modify_cartel_variables_effect
Purpose: Handles the macro for needing to change any cartel strength or cartel political influence
set_temp_variable = { cart_strength_change = +- x }
set_temp_variable = { cart_influence_change = +- x }

```
set_temp_variable = { cart_strength_change = 2 }
set_temp_variable = { cart_influence_change = 2 }
modify_cartel_variables_effect = yes
```

<a id="mdc-european-union-effects"></a>
### MDC European Union Effects

<a id="euroscepticism-effects"></a>
#### Euroscepticism Effects

To add/remove Euroscepticism all you need to do is:

```
set_temp_variable = { modify_eurosceptic = 0.05 }
set_temp_variable = { modify_eurosceptic_target = THIS }
eurosceptic_change = yes
```

"THIS" can use any of the following:

- THIS
- ROOT
- PREV
- FROM
- Any country tag (such as GER)

For this effect to occur in _all_ current EU states:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_eurosceptic_change = yes
```

And finally, for this effect to occur in _current_ and _potential_ EU member states:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_potential_eurosceptic_change = yes
```

<a id="energy-effects"></a>
### Energy Effects

Constructs enrichment facilities for the nation. It costs 25.00 per. The scripted effect handles the cost. Just input a number.

```
set_temp_variable = { temp_change = 2 }
build_enrichment_facilities_effect = yes
```

Constructs a battery park as part of an effect. It costs 100.00 per unless you have
modifiers to reduce or increase it.

```
set_temp_variable = { temp_change = 2 }
build_battery_park_effect = yes
```
