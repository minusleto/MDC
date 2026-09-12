---
title: Внутренние фракции
description: "Эффекты и команды внутренних фракций"
---

## Эффекты внутренних фракций MDC

<a id="internal-factions-code-snippet"></a>
### Фрагмент кода внутренних фракций

```
set_temp_variable = { temp_opinion = 5 }
change_small_medium_business_owners_opinion = yes

Если вы хотите улучшить отношение industrial_conglomerates.

set_temp_variable = { temp_opinion = 5 }
change_industrial_conglomerates_opinion = yes
```

<a id="how-to-change-factions"></a>
## Как правильно менять фракции

При смене основной фракции не стоит просто делать `add_idea` или безусловный `swap_ideas`. Закон или другое действие может срабатывать при разных текущих фракциях, поэтому сначала нужно проверить, какая фракция уже установлена, и только после этого заменить её на нужную.

Для этого удобно использовать цепочку `if` / `else_if` с `has_idea` и `swap_ideas`:

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

**Не обязательно перечислять здесь абсолютно все фракции.** В законе достаточно обработать те варианты, которые реально могут встретиться в его условиях. В примере выше сначала перечислены наиболее логичные варианты для перехода на `the_military`; уникальные или зависящие от конкретной страны фракции лучше добавлять только там, где закон действительно может их затронуть.

<a id="internal-faction-breakdown"></a>
### Разбор внутренних фракций

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
### Доступные команды фракций

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
