---
title: Scripted Effects
description: "Effects/Scripted Effects — buildings, economy, factions, influence, politics, EU, terrorism, cartels"
---

<a id="effectsscripted-effects"></a>
## Effects / Scripted Effects

All scripted effects automatically create tooltips — do **not** localize them manually as well.

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

<a id="basic-effects"></a>
### Basic Effects

<a id="treasury"></a>
#### Treasury

Change the treasury by a custom amount:

```
set_temp_variable = { treasury_change = 10.00 }
modify_treasury_effect = yes
```

**Small Expenditure** — 0.2% of GDP
```
small_expenditure = yes
```

**Medium Expenditure** — 0.4% of GDP
```
medium_expenditure = yes
```

**Large Expenditure** — 0.6% of GDP
```
large_expenditure = yes
```

<a id="debt"></a>
#### Debt

```
set_temp_variable = { debt_change = 1.0 }
modify_debt_effect = yes
```

<a id="investments"></a>
#### Investments

```
set_temp_variable = { int_investment_change = 1.0 }
modify_international_investment_effect = yes
```

<a id="taxes"></a>
#### Taxes

**Corporate Tax**
```
set_temp_variable = { corp_change = 2 }
modify_corporate_tax_rate_effect = yes
```

**Population Tax**
```
set_temp_variable = { pop_change = 2 }
modify_population_tax_rate_effect = yes
```

<a id="productivity"></a>
#### Productivity

```
set_temp_variable = { temp_productivity_change = 25.0 }
flat_productivity_change_effect = yes
```

<a id="capitalization"></a>
#### Capitalization

Changes the country's capitalization:

```
set_temp_variable = { modify_capitalization = 0.010 }
modify_capitalization_support = yes
```


<a id="base-inflation"></a>
#### Base Inflation

Changes the country's base inflation:

```
set_temp_variable = { base_inflation_percent_change = 1.0 }
modify_base_inflation_effect = yes
```


<a id="increasedecrease-economic-growth"></a>
#### Economic Growth

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

<a id="economic-agreements"></a>
### Economic Agreements

<a id="setremove-trade-agreement"></a>
#### Trade Agreement

Creates or removes a trade agreement

- sender_nation --- The nation sending the agreement
- receiver_nation --- Nation retrieving the agreement
- remove_agreement --- Optional (Set to 1)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_improved_trade_agreement = yes

```

<a id="setremove-mutual-investment-treaty"></a>
#### Mutual Investment Treaty

Creates or removes a mutual investment treaty.

- `sender_nation` — nation sending the agreement
- `receiver_nation` — nation receiving the agreement
- `remove_treaty` — optional parameter (set to 1 to cancel)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_mutual_investment_treaty = yes
```

To cancel it:

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_temp_variable = { remove_treaty = 1 }
set_mutual_investment_treaty = yes
```

The improved trade agreement and mutual investment treaty can be used at the same time.

```
set_temp_variable = { receiver_nation = BRA.id }
set_temp_variable = { sender_nation = POR.id }
set_improved_trade_agreement = yes
set_mutual_investment_treaty = yes
```

<a id="setremove-permanent-investment-targets"></a>
#### Permanent Investment Targets

Creates or removes adding_nation to another AI's investment pool

- target_nation --- The nation sending the agreement
- adding_nation --- Nation retrieving the agreement
- remove_nation --- Optional (Set to 1)

```
set_temp_variable = { target_nation = RAJ.id }
set_temp_variable = { adding_nation = SIN.id }
change_permanent_investment_target = yes

```

<a id="other"></a>
### Other

<a id="guide-on-how-to-do-additional-incomeadditional-expenses"></a>
#### Additional Income/Expenses

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

<a id="protests"></a>
### Protests

#### Protest Strength

Changes protest strength. The maximum value of the variable is 100.

```
set_temp_variable = { protest_strength_change = 10 }
modify_protest_effect = yes
```

#### Protest Radicalisation

Changes protest radicalisation. The maximum value of the variable is 10. Values above 10 have no meaningful effect.

```
set_temp_variable = { protest_radicalisation_change = -10 }
modify_protest_radicalisation_effect = yes
```

### Terrorism Effects

<a id="terrorism-support"></a>
#### Terrorism Support

Available only for the listed tags.

**Communist:** `ITA`, `GER`, `NOR`, `CZE`, `HUN`, `AUS`  
**Other terrorist:** `SYR`, `IRQ`, `SAU`, `UAE`, `EGY`, `NIG`, `ALG`, `TUN`, `TAJ`, `ING`, `KBK`, `KCC`, `DAG`, `CHE`, `ARW`

```txt
set_temp_variable = { modify_terrorism = 1 }
modify_terrorism_support = yes
```

Terrorism support is capped at `100`.

<a id="terrorism-mana"></a>
#### Terrorist Activity Accumulation

Changes the country's terrorist activity accumulation.

```txt
add_to_variable = { terrorism_mana = 10 }
clamp_variable = {
    var = terrorism_mana
    min = 1
    max = 100
}
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

### Law Changes

Each category below is an idea group with several tiers. The matching `set_*` effect switches the country to that tier and, if it's already there, grants a one-time bonus (PP/stability/popularity). The `increase_*` / `decrease_*` effects shift the law one tier up or down the scale.

#### Contents

- [Civil Freedom Laws](#civil-freedom-laws)
- [Demographics and Birth Policy](#demographics-and-birth)
- [Weapons](#weapons)
- [Economic Laws](#economic-laws)

<hr/>

<a id="civil-freedom-laws"></a>
### Civil Freedom Laws

<a id="censorship-laws"></a>
#### Censorship (censorship_laws)

| Effect | Tier |
|---|---|
| `set_freedom_of_speech = yes` | Freedom of Speech |
| `set_ban_on_extremism = yes` | Ban on Extremism |
| `set_censorship = yes` | State Censorship |
| `set_minitrue = yes` | Minitrue |

<a id="right-assembly"></a>
#### Freedom of Assembly (right_assembly)

| Effect | Tier |
|---|---|
| `set_free_assembly = yes` | Free Assembly |
| `set_notification_regime = yes` | Notification Regime |
| `set_curfew = yes` | Curfew |

<a id="internet-law"></a>
#### Internet (internet_law)

| Effect | Tier |
|---|---|
| `set_internet_freedom = yes` | Free Internet |
| `set_internet_censorship = yes` | Internet Censorship |
| `set_white_lists = yes` | White Lists |
| `set_national_internet = yes` | National Internet |
| `set_no_internet = yes` | Well, let's cut the power |

<a id="freedom-religion"></a>
#### Religion (freedom_religion)

| Effect | Tier |
|---|---|
| `set_gov_atheism = yes` | State Atheism |
| `set_secularism = yes` | Secular State |
| `set_state_religion = yes` | State Religion |
| `set_hierocracy = yes` | Hierocracy |

<a id="lgbt-laws"></a>
#### LGBT (lgbt_laws)

| Effect | Tier |
|---|---|
| `set_nato_gay_world = yes` | Full inclusion, actively promoted |
| `set_civil_partnerships = yes` | Not promoted, but actively supported |
| `set_traditional_values = yes` | Not promoted and not supported |
| `set_ban_lgbt = yes` | Criminalized |

<a id="freedom-trade-unions"></a>
#### Trade Unions (freedom_trade_unions)

| Effect | Tier |
|---|---|
| `set_ghent_system = yes` | The Ghent System |
| `set_free_unions = yes` | Free Trade Unions |
| `set_gov_unions = yes` | State Unions |
| `set_ban_unions = yes` | Trade Unions Banned |

<hr/>

<a id="demographics-and-birth"></a>
### Demographics and Birth Policy

<a id="demographics"></a>
#### Population Pyramid

| Effect | Tier |
|---|---|
| `set_population_pyramid_1 = yes` | Growing Population Pyramid |
| `set_population_pyramid_2 = yes` | Stable Population Pyramid |
| `set_population_pyramid_3 = yes` | Shrinking Population Pyramid |

<a id="birth-policy"></a>
#### Birth Policy

| Effect | Tier |
|---|---|
| `set_encourage_birth = yes` | Encourage Birth |
| `set_no_birth_control = yes` | No Birth Control |
| `set_discourage_birth = yes` | Discourage Birth |

<a id="abortion-policy"></a>
#### Abortion Policy

| Effect | Tier |
|---|---|
| `set_ban_abortion = yes` | Ban Abortion |
| `set_no_abortion_control = yes` | No Abortion Restrictions |
| `set_encourage_abortion = yes` | Encourage Abortion Access |

<hr/>

<a id="weapons"></a>
### Weapons Law

| Effect | Tier |
|---|---|
| `set_ban_weapons = yes` | Ban Weapons |
| `set_allow_weapons = yes` | Allow Private Ownership |
| `set_regulate_weapons = yes` | Regulate Weapons |

<hr/>

<a id="economic-laws"></a>
### Economic Laws

Laws that govern government spending (bureaucracy, social spending, education, healthcare, policing budgets), plus the trade, military spending, and migration laws.

<a id="bureaucracy-law"></a>
#### Bureaucracy

| Effect | Application |
|---|---|
| `decrease_centralization = yes` | Decrease centralisation |
| `decrease_centralization_2 = yes` | Decrease centralisation (level 2) |
| `decrease_centralization_3 = yes` | Decrease centralisation (level 3) |
| `increase_centralization = yes` | Increase centralisation |
| `increase_centralization_2 = yes` | Increase centralisation (level 2) |
| `increase_centralization_3 = yes` | Increase centralisation (level 3) |
| `increase_centralization_4 = yes` | Increase centralisation (max) |

<a id="education-spending"></a>
#### Education

| Effect | Application |
|---|---|
| `increase_education_budget = yes` | Increase education spending |
| `increase_education_budget_2 = yes` | Increase education spending (level 2) |
| `increase_education_budget_3 = yes` | Increase education spending (level 3) |
| `increase_education_budget_4 = yes` | Increase education spending (max) |
| `decrease_education_budget = yes` | Decrease education spending |
| `decrease_education_budget_2 = yes` | Decrease education spending (level 2) |
| `max_education_budget = yes` | Maximise education spending |

<a id="healthcare-spending"></a>
#### Healthcare

| Effect | Application |
|---|---|
| `increase_healthcare_budget = yes` | Increase healthcare spending |
| `increase_healthcare_budget_2 = yes` | Increase healthcare spending (level 2) |
| `increase_healthcare_budget_3 = yes` | Increase healthcare spending (level 3) |
| `increase_healthcare_budget_4 = yes` | Increase healthcare spending (max) |
| `decrease_healthcare_budget = yes` | Decrease healthcare spending |
| `decrease_healthcare_budget_2 = yes` | Decrease healthcare spending (level 2) |
| `max_healthcare_budget = yes` | Maximise healthcare spending |

<a id="social-spending"></a>
#### Social Spending

| Effect | Application |
|---|---|
| `increase_social_spending = yes` | Increase social spending |
| `increase_social_spending_2 = yes` | Increase social spending (level 2) |
| `increase_social_spending_3 = yes` | Increase social spending (level 3) |
| `increase_social_spending_4 = yes` | Increase social spending (max) |
| `decrease_social_spending = yes` | Decrease social spending |
| `decrease_social_spending_2 = yes` | Decrease social spending (level 2) |
| `max_social_spending = yes` | Maximise social spending |

<a id="policing-spending"></a>
#### Policing

| Effect | Application |
|---|---|
| `increase_policing_budget = yes` | Increase policing spending |
| `increase_policing_budget_2 = yes` | Increase policing spending (level 2) |
| `increase_policing_budget_3 = yes` | Increase policing spending (level 3) |
| `increase_policing_budget_4 = yes` | Increase policing spending (max) |
| `decrease_policing_budget = yes` | Decrease policing spending |
| `decrease_policing_budget_2 = yes` | Decrease policing spending (level 2) |

<a id="trade-law"></a>
#### Trade

| Effect | Application |
|---|---|
| `increase_exports = yes` | Increase exports / trade law |
| `decrease_exports = yes` | Decrease exports / trade law |
| `set_exports_to_min = yes` | Set exports to minimum |
| `set_exports_to_max = yes` | Set exports to maximum |

<a id="military-spending-law"></a>
#### Military Spending

| Effect | Application |
|---|---|
| `increase_military_spending = yes` | Increase military spending |
| `decrease_military_spending = yes` | Decrease military spending |
| `decrease_military_spending_2 = yes` | Decrease military spending (level 2) |
| `sizeable_military_spending = yes` | Set sizeable military spending |

<a id="migration-law"></a>
#### Migration

| Effect | Application |
|---|---|
| `increase_migration_law = yes` | Loosen migration law |
| `decrease_migration_law = yes` | Tighten migration law |
