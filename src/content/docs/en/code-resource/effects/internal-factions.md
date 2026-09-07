---
title: Internal Factions
description: "Internal faction effects and commands"
---

## MDC Internal Faction Effects

<a id="internal-factions-code-snippet"></a>
### Internal Factions Code Snippet

```
set_temp_variable = { temp_opinion = 5 }
change_small_medium_business_owners_opinion = yes

If you want industrial_conglomerates opinion to be improved.

set_temp_variable = { temp_opinion = 5 }
change_industrial_conglomerates_opinion = yes
```

<a id="internal-faction-breakdown"></a>
### Internal Faction Breakdown

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
### Available Faction Commands

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
