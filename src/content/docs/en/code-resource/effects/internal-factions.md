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

<a id="how-to-change-factions"></a>
## How to Properly Change Factions

When changing the main faction, do not simply use `add_idea` or an unconditional `swap_ideas`. A law or another action may run while different factions are currently active, so first check which faction is present and only then replace it with the target faction.

A practical pattern is an `if` / `else_if` chain using `has_idea` and `swap_ideas`:

```hoi4
if = {
    limit = { has_idea = labour_unions }
    swap_ideas = {
        remove_idea = labour_unions
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = farmers }
    swap_ideas = {
        remove_idea = farmers
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = industrial_conglomerates }
    swap_ideas = {
        remove_idea = industrial_conglomerates
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = landowners }
    swap_ideas = {
        remove_idea = landowners
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = oligarchs }
    swap_ideas = {
        remove_idea = oligarchs
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = international_bankers }
    swap_ideas = {
        remove_idea = international_bankers
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = maritime_industry }
    swap_ideas = {
        remove_idea = maritime_industry
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = the_clergy }
    swap_ideas = {
        remove_idea = the_clergy
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = intelligence_community }
    swap_ideas = {
        remove_idea = intelligence_community
        add_idea = the_military
    }
}
else_if = {
    limit = { has_idea = small_medium_business_owners }
    swap_ideas = {
        remove_idea = small_medium_business_owners
        add_idea = the_military
    }
}
```

**You do not need to list every possible faction.** In a law, it is enough to handle the factions that can realistically be present under its conditions. The example above lists the most logical candidates for a transition to `the_military`; unique or country-specific factions should only be added when the law can actually encounter them.

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
