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

<a id="mdc-influence-effects"></a>
