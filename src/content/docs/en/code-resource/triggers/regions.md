---
title: Regions & States
description: "Triggers for historical/geographic regions, continents, country groups, and the Arctic"
---

## Named regions (85)

Each of the 85 historical/geographic regions has a matching pair of triggers:

- **`is_X_state`** — checked in state (province) scope: does this province belong to region X. Implemented as an `OR` over specific state IDs.
- **`is_X_state_owned`** — checked in country scope: does the country own **every single** province of region X. Implemented as an `AND` over `owns_state = ID`.


**North America**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| North American Union (USA+Canada+Mexico) | `is_north_american_union_state` | `is_north_american_union_state_owned` |
| USA | `is_usa_state` | `is_usa_state_owned` |
| Canada | `is_canada_state` | `is_canada_state_owned` |
| Mexico | `is_mexico_state` | `is_mexico_state_owned` |

**CIS / former USSR**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Soviet Union (entire former USSR) | `is_soviet_union_state` | `is_soviet_union_state_owned` |
| Russia | `is_russia_state` | `is_russia_state_owned` |
| Ukraine | `is_ukraine_state` | `is_ukraine_state_owned` |
| Belarus | `is_belarus_state` | `is_belarus_state_owned` |
| Baltics | `is_baltic_state` | `is_baltic_state_owned` |
| Kazakhstan | `is_kazakhstan_state` | `is_kazakhstan_state_owned` |
| Central Asia | `is_center_asia_state` | `is_center_asia_state_owned` |
| Caucasus | `is_caucasus_state` | `is_caucasus_state_owned` |
| Moldova | `is_moldova_state` | `is_moldova_state_owned` |

**East Asia**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Mainland China | `is_mainland_china_state` | `is_mainland_china_state_owned` |
| Greater China (mainland+Taiwan+Hong Kong etc.) | `is_greater_china_state` | `is_greater_china_state_owned` |
| Taiwan area | `is_taiwan_area_state` | `is_taiwan_area_state_owned` |
| South China Sea minor islands | `is_south_china_sea_minor_state` | `is_south_china_sea_minor_state_owned` |
| Outer Mongolia | `is_outer_mongolia_state` | `is_outer_mongolia_state_owned` |
| Outer Manchuria | `is_outer_manchuria_state` | `is_outer_manchuria_state_owned` |
| Buryatia | `is_buryatia_state` | `is_buryatia_state_owned` |
| Uriankhai (Tuva) | `is_uriankhai_state` | `is_uriankhai_state_owned` |
| Outer Xinjiang | `is_outer_xinjiang_state` | `is_outer_xinjiang_state_owned` |

**Oceania**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Australasia (Australia+New Zealand) | `is_australasia_state` | `is_australasia_state_owned` |
| Australia | `is_australia_state` | `is_australia_state_owned` |
| New Zealand | `is_newzealand_state` | `is_newzealand_state_owned` |

**British Isles & CANZUK**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| United Kingdom | `is_uk_state` | `is_uk_state_owned` |
| Great Britain island (excl. Northern Ireland) | `is_great_britain_state` | `is_great_britain_state_owned` |
| CANZUK (Canada+Australia+NZ+UK) | `is_canzuk_state` | `is_canzuk_state_owned` |

**South America**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Union of South American Nations | `is_union_of_south_american_state` | `is_union_of_south_american_state_owned` |
| Brazil | `is_brazil_state` | `is_brazil_state_owned` |
| Brazilian Amazon | `is_brazilian_amazon_state` | `is_brazilian_amazon_state_owned` |
| Argentina | `is_argentina_state` | `is_argentina_state_owned` |
| Chile | `is_chile_state` | `is_chile_state_owned` |
| Peru | `is_peru_state` | `is_peru_state_owned` |
| Colombia | `is_colombia_state` | `is_colombia_state_owned` |
| Venezuela | `is_venezuela_state` | `is_venezuela_state_owned` |
| Bolivia | `is_bolivia_state` | `is_bolivia_state_owned` |
| Ecuador | `is_ecuador_state` | `is_ecuador_state_owned` |
| Yugoslavia | `is_yugoslavia_state` | `is_yugoslavia_state_owned` |

**Central America**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| United Provinces of Central America | `is_united_provinces_of_central_america_state` | `is_united_provinces_of_central_america_state_owned` |

**Western Europe**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| France | `is_france_state` | `is_france_state_owned` |
| Germany | `is_germany_state` | `is_germany_state_owned` |
| Germany + Austria (Anschluss) | `is_germany_anschluss_state` | `is_germany_anschluss_state_owned` |
| Italy | `is_italy_state` | `is_italy_state_owned` |
| Spain | `is_spain_state` | `is_spain_state_owned` |
| Portugal | `is_portugal_state` | `is_portugal_state_owned` |
| Iberian Peninsula (Spain+Portugal) | `is_iberian_state` | `is_iberian_state_owned` |
| Benelux | `is_benelux_state` | `is_benelux_state_owned` |
| Poland | `is_poland_state` | `is_poland_state_owned` |
| Romania | `is_romania_state` | `is_romania_state_owned` |

**Eastern Europe**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Greater Romania (with Moldova etc.) | `is_great_romania_state` | `is_great_romania_state_owned` |
| Switzerland | `is_switzerland_state` | `is_switzerland_state_owned` |
| Kalmar Union (Denmark+Sweden+Norway) | `is_kalmar_union_state` | `is_kalmar_union_state_owned` |

**Northern Europe**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Denmark | `is_denmark_state` | `is_denmark_state_owned` |
| Sweden | `is_sweden_state` | `is_sweden_state_owned` |
| Norway | `is_norway_state` | `is_norway_state_owned` |
| Finland | `is_finland_state` | `is_finland_state_owned` |
| Greater Hindustan | `is_great_hindustan_state` | `is_great_hindustan_state_owned` |

**South Asia**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| India | `is_indian_state` | `is_indian_state_owned` |
| Pakistan | `is_pakistan_state` | `is_pakistan_state_owned` |
| Bangladesh | `is_bangladesh_state` | `is_bangladesh_state_owned` |
| Nepal | `is_nepal_state` | `is_nepal_state_owned` |
| Bhutan | `is_bhutan_state` | `is_bhutan_state_owned` |
| Sri Lanka | `is_srilanka_state` | `is_srilanka_state_owned` |
| Afghanistan | `is_afghanistan_state` | `is_afghanistan_state_owned` |
| Iran | `is_iran_state` | `is_iran_state_owned` |

**Iran / Afghanistan / Kurdistan**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Kurdistan | `is_kurdistan_state` | `is_kurdistan_state_owned` |
| Algeria | `is_algeria_state` | `is_algeria_state_owned` |
| Libya | `is_libya_state` | `is_libya_state_owned` |

**North Africa & Middle East**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Austria-Hungary | `is_austria_hungary_state` | `is_austria_hungary_state_owned` |
| Syria | `is_syria_state` | `is_syria_state_owned` |
| Egypt | `is_egypt_state` | `is_egypt_state_owned` |
| Lebanon | `is_lebanese_state` | `is_lebanese_state_owned` |
| Iraq | `is_iraq_state` | `is_iraq_state_owned` |
| Mauritania | `is_mauritania_state` | `is_mauritania_state_owned` |
| Saudi Arabia | `is_saudi_state` | `is_saudi_state_owned` |
| Oman | `is_oman_state` | `is_oman_state_owned` |
| UAE | `is_uae_state` | `is_uae_state_owned` |
| Western Sahara | `is_sahrawi_state` | `is_sahrawi_state_owned` |
| Tunisia | `is_tunis_state` | `is_tunis_state_owned` |

**Sub-Saharan Africa**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Somalia | `is_somali_state` | `is_somali_state_owned` |
| Central African states | `is_central_african_state` | `is_central_african_state_owned` |
| Malian states | `is_malian_state` | `is_malian_state_owned` |
| Senegalese states | `is_senegal_state` | `is_senegal_state_owned` |

**Caribbean**

| Region | `is_X_state` (state belongs to region) | `is_X_state_owned` (country owns the whole region) |
|---|---|---|
| Caribbean islands | `is_caribbean_island_state` | — |

⚠️ Two mismatches between the lists: `is_caribbean_island_states` has no `_owned` counterpart (the Caribbean is split among too many owners for that to be meaningful), and the USA has an extra `is_usa_state_mainland_owned` — a variant covering only the continental US, excluding overseas territories (Alaska, Puerto Rico, etc. don't count).

<a id="continents"></a>
## Continents

| Trigger | Condition |
|---|---|
| `is_in_africa` / `is_in_asia` / `is_in_europe` / `is_in_south_america` / `is_in_north_america` | The country's capital is on that continent |
| `is_in_the_americas` | Capital in North **or** South America |
| `is_in_the_middle_east` | Capital in the Middle East (a separate continent from Asia/Africa on this map) |
| `is_in_oceania` | Capital in Oceania |
| `is_in_the_caribbean` | At least one of the country's states is in ai_area 16 (Caribbean) |
| `PREV_is_on_same_continent` | THIS and PREV are on the same continent (checks every continent pairwise) |
| `PREV_is_not_on_same_continent` | The opposite — THIS and PREV are on different continents |

⚠️ **Possible inconsistency**: `is_in_oceania` uses the `oceania` continent, but `PREV_is_on_same_continent`/`PREV_is_not_on_same_continent` instead compare the `australia` continent — meaning these two triggers effectively don't know Oceania exists as its own continent, and may misjudge "same continent" for Pacific island nations. This might be worth unifying under one continent name.

<a id="country-groups"></a>
## Country groups

A mixed bag — geographic, linguistic, and thematic/lore groups.

**Geographic unions/blocs**

| Trigger | Description |
|---|---|
| `is_EFTA` | EFTA member |
| `is_Schengen_Area` | Schengen Area member |
| `is_North_America` / `is_Central_America` / `is_South_America` | Country is in that part of the Americas |
| `is_Central_Asia` / `is_Caucasus` / `is_South_Asia` / `is_East_Asia` | Asian sub-region |
| `is_asean_nation` | ASEAN member |
| `is_oceania_nation` | Pacific nation |
| `is_caribbean_nation` | Caribbean nation |

**Broader civilizational/cultural groups**

| Trigger | Description |
|---|---|
| `is_european_nation` / `is_east_european_nation` / `is_balkan_nation` | Europe as a whole / Eastern Europe / Balkans |
| `is_middle_eastern_nation` / `is_arabic_nation` / `is_iranian_nation` | Middle East / Arab world / Iran (Persian world) |
| `is_asian_nation` / `is_american_nation` / `is_western_nation` / `is_african_nation` | Broad civilizational blocs |
| `is_west_african_nation` / `is_central_african_nation` / `is_horn_of_africa_nation` / `is_somali_nation` / `is_sudanese_nation` | African sub-regions |
| `is_sahara_nation` / `is_sahel_nation` | Sahara / Sahel |
| `is_french_africa_nation` | Francophone Africa |

⚠️ **Bug: `is_sahel_nation` is defined twice** in the file — the first version (12 tags, including BUF/ERI/GUB/TIE/TUA) appears earlier, but a second version with a different list (6 tags, including BFA instead of BUF) follows later. In HOI4 scripting, redefining a trigger with the same name **silently overwrites** the earlier one — so the first version is dead code and never actually used, regardless of original intent.

**Language groups**

`French_Speaking`, `Spanish_Speaking`, `Portugese_Speaking`, `Chinese_Speaking`, `Swahili_Speaking`, `German_Speaking`, `Russian_Proficient`, `English_Speaking` — check whether the country speaks the corresponding language (tag list).

**Thematic / lore groups**

| Trigger | Description |
|---|---|
| `is_islamist_secularism_mechanic` | Country uses the "Islamism vs. Secularism" mechanic |
| `is_arid_nation` / `is_tropical_nation` | Country has an arid / tropical climate |
| `is_earthquake_prone_nation` | Country is in an earthquake-prone zone |
| `is_micro_nation` | Micro-state |
| `is_banana_nation` | "Banana republic" — monoculture-dependent economy (CAM, CDI, COL, COS, DOM, ECU, GUA, HON, PHI) |
| `is_island_country` | Island nation |
| `HIV_Epidemic` | Country with an HIV epidemic (for the African continent) |
| `Is_Possible_Muslim_Brotherhood` / `Is_Muslim_Brotherhood` | Potentially/actually governed by the Muslim Brotherhood |
| `Is_2017_Riyadh_Summit_Member` | Member of the 2017 Riyadh Summit (counter-terrorism coalition) |
| `Is_Permanent_UN_Member` / `Is_UN_Member` | Permanent UNSC member / regular UN member |
| `is_not_custom_mio_country` | Country is NOT one of the 9 powers with a unique military-industrial bloc (BRA, ROM, JAP, CHI, HOL, GER, ENG, SWE, AST) |
| `mediterranean_tags` | Not really a trigger in the usual sense — a list of Mediterranean tags used for AI purposes |
| `ROOT_and_THIS_are_in_the_same_group` | ROOT and THIS belong to the same named country group (used as a generic check) |

<a id="arctic"></a>
## Arctic

The Arctic system divides the map into ~19 numbered zones (0–18) with its own adjacency table (which zone borders which) and global arrays `global.arctic_controllers` (who controls the zone), `global.arctic_military` (whether there's a military base), `global.arctic_unit_strngth`/`global.arctic_unit_org` (troops present in the zone).

| Trigger | Description |
|---|---|
| `arctic_state_is_coastal` | ROOT's zone is one of the coastal ones (specific list of zone IDs) |
| `arctic_state_is_neighbor` | Checks whether ROOT's zone borders a specific other zone (via the adjacency table) |
| `controlls_neighbor_arctic_state` | ROOT controls at least one zone adjacent to its own |
| `has_enemy_neighbor_states` | A hostile (at-war) power sits in a neighboring zone |
| `has_root_neighbor_state_with_unit` | The controller of a neighboring zone has combat-capable troops there (strength and org > 0) |
| `has_arctic_military_base` | The country has a military base in at least one of its Arctic zones |

Decoding which actual geographic territory each zone number (0–18) represents isn't possible from this file alone — the "zone number → real region" mapping lives in other files (decisions/state IDs) not included in this archive.
