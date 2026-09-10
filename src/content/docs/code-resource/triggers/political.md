---
title: Политика
description: "Скриптовые триггеры политической системы MDC: партии, коалиции, идеологические блоки, пороги популярности."
---

## Базовая идеология страны

Ванильный триггер `has_government = <тег>` работает как обычно, принимает любой из 5 тегов идеологий MDC:

```
has_government = democratic   # Западники
has_government = communism    # Реакционеры (в файлах ещё называются "emerging")
has_government = neutrality   # Нейтралы
has_government = nationalist  # Националисты
has_government = fascism      # Салафиты (в файлах ещё называются "totalitarian/caliphate")
```

Соответствие тегов группам и полный список субидеологий (0–23) — см. [Системы → Политика](../systems/politics/#subideologies).

## Партия у власти / в коалиции

Помимо `is_in_array = { ruling_party = N }` (сырая проверка индекса), для каждой из 24 субидеологий заведён именованный триггер с тултипом — их и стоит использовать в скриптах.

```
western_liberals_are_in_power = {
	custom_trigger_tooltip = {
		tooltip = has_liberalism_government_TT
		is_in_array = { ruling_party = 2 }
	}
}
```

Чтобы проверить **обратное** («партии нет у власти»), никакого отдельного `_not_in_power` триггера не заведено — оборачивайте в `NOT`:

```
NOT = { western_liberals_are_in_power = yes }
```

Тот же принцип работает для любого триггера ниже на этой странице.

<div style="overflow-x:auto">
<table style="width:100%; border-collapse:collapse; font-size:0.8em; line-height:1.25">
<thead>
<tr style="background:#2d2d2d; color:#fff">
<th style="padding:3px 8px; text-align:left; width:2em">#</th>
<th style="padding:3px 8px; text-align:left">Партия</th>
<th style="padding:3px 8px; text-align:left">У власти</th>
<th style="padding:3px 8px; text-align:left">В коалиции</th>
<th style="padding:3px 8px; text-align:left">У власти или в коалиции</th>
</tr>
</thead>
<tbody>
<tr style="background:#DCE6F5"><td style="padding:2px 8px">0</td><td style="padding:2px 8px">Прозападные автократы</td><td style="padding:2px 8px"><code>western_autocrats_are_in_power</code></td><td style="padding:2px 8px"><code>western_autocrats_are_in_coalition</code></td><td style="padding:2px 8px"><code>western_autocrats_are_in_power_or_coalition</code></td></tr>
<tr style="background:#DCE6F5"><td style="padding:2px 8px">1</td><td style="padding:2px 8px">Консерваторы</td><td style="padding:2px 8px"><code>western_conservatism_are_in_power</code></td><td style="padding:2px 8px"><code>western_conservatism_are_in_coalition</code></td><td style="padding:2px 8px"><code>western_conservatism_are_in_power_or_coalition</code></td></tr>
<tr style="background:#DCE6F5"><td style="padding:2px 8px">2</td><td style="padding:2px 8px">Либералы</td><td style="padding:2px 8px"><code>western_liberals_are_in_power</code></td><td style="padding:2px 8px"><code>western_liberals_are_in_coalition</code></td><td style="padding:2px 8px"><code>western_liberal_are_in_power_or_coalition</code></td></tr>
<tr style="background:#DCE6F5"><td style="padding:2px 8px">3</td><td style="padding:2px 8px">Социал-демократы</td><td style="padding:2px 8px"><code>western_social_democrats_are_in_power</code></td><td style="padding:2px 8px"><code>western_social_democrats_are_in_coalition</code></td><td style="padding:2px 8px"><code>western_socialism_are_in_power_or_coalition</code></td></tr>

<tr style="background:#E6F2DF"><td style="padding:2px 8px">4</td><td style="padding:2px 8px">Формирующиеся коммунисты</td><td style="padding:2px 8px"><code>emerging_communist_state_are_in_power</code></td><td style="padding:2px 8px"><code>emerging_communist_state_are_in_coalition</code></td><td style="padding:2px 8px"><code>emerging_communist_state_in_power_or_coalition</code></td></tr>
<tr style="background:#E6F2DF"><td style="padding:2px 8px">5</td><td style="padding:2px 8px">Левый радикализм</td><td style="padding:2px 8px"><code>emerging_anarchist_communism_are_in_power</code></td><td style="padding:2px 8px"><code>emerging_anarchist_communism_are_in_coalition</code></td><td style="padding:2px 8px"><code>emerging_anarchist_communism_in_power_or_coalition</code></td></tr>
<tr style="background:#E6F2DF"><td style="padding:2px 8px">6</td><td style="padding:2px 8px">Реакционеры</td><td style="padding:2px 8px"><code>emerging_reactionaries_are_in_power</code></td><td style="padding:2px 8px"><code>emerging_reactionaries_are_in_coalition</code></td><td style="padding:2px 8px"><code>emerging_conservative_in_power_or_coalition</code></td></tr>
<tr style="background:#E6F2DF"><td style="padding:2px 8px">7</td><td style="padding:2px 8px">Формирующиеся автократы</td><td style="padding:2px 8px"><code>emerging_autocracy_are_in_power</code></td><td style="padding:2px 8px"><code>emerging_autocracy_are_in_coalition</code></td><td style="padding:2px 8px"><code>emerging_autocracy_in_power_or_coalition</code></td></tr>
<tr style="background:#E6F2DF"><td style="padding:2px 8px">8</td><td style="padding:2px 8px">Умеренные шиитские революционеры</td><td style="padding:2px 8px"><code>emerging_moderate_shiite_are_in_power</code></td><td style="padding:2px 8px"><code>emerging_moderate_shiite_are_in_coalition</code></td><td style="padding:2px 8px"><code>emerging_mod_vilyat_e_faqih_in_power_or_coalition</code></td></tr>
<tr style="background:#E6F2DF"><td style="padding:2px 8px">9</td><td style="padding:2px 8px">Радикальные шиитские революционеры</td><td style="padding:2px 8px"><code>emerging_hardline_shiite_are_in_power</code></td><td style="padding:2px 8px"><code>emerging_hardline_shiite_are_in_coalition</code></td><td style="padding:2px 8px"><code>emerging_vilayat_e_faqih_in_power_or_coalition</code></td></tr>

<tr style="background:#E3E3E3"><td style="padding:2px 8px">10</td><td style="padding:2px 8px">Ваххабитские монархисты</td><td style="padding:2px 8px"><code>salafist_kingdom_are_in_power</code></td><td style="padding:2px 8px"><code>salafist_kingdom_are_in_coalition</code></td><td style="padding:2px 8px"><code>salafist_kingdom_in_power_or_coalition</code></td></tr>
<tr style="background:#E3E3E3"><td style="padding:2px 8px">11</td><td style="padding:2px 8px">Салафитский джихадизм</td><td style="padding:2px 8px"><code>salafist_caliphate_are_in_power</code></td><td style="padding:2px 8px"><code>salafist_caliphate_are_in_coalition</code></td><td style="padding:2px 8px"><code>salafist_caliphate_in_power_or_coalition</code></td></tr>

<tr style="background:#FAFAFA"><td style="padding:2px 8px">12</td><td style="padding:2px 8px">Умеренные исламисты</td><td style="padding:2px 8px"><code>neutrality_neutral_muslim_brotherhood_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_muslim_brotherhood_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_muslim_brotherhood_in_power_or_coalition</code></td></tr>
<tr style="background:#FAFAFA"><td style="padding:2px 8px">13</td><td style="padding:2px 8px">Неприсоединившиеся автократы</td><td style="padding:2px 8px"><code>neutrality_neutral_autocracy_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_autocracy_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_neutral_autocracy_in_power_or_coalition</code></td></tr>
<tr style="background:#FAFAFA"><td style="padding:2px 8px">14</td><td style="padding:2px 8px">Консерваторы</td><td style="padding:2px 8px"><code>neutrality_neutral_conservatism_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_conservatism_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_neutral_conservatism_in_power_or_coalition</code></td></tr>
<tr style="background:#FAFAFA"><td style="padding:2px 8px">15</td><td style="padding:2px 8px">Олигархи</td><td style="padding:2px 8px"><code>neutrality_neutral_oligarch_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_oligarch_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_oligarchism_in_power_or_coalition</code></td></tr>
<tr style="background:#FAFAFA"><td style="padding:2px 8px">16</td><td style="padding:2px 8px">Либертарианцы</td><td style="padding:2px 8px"><code>neutrality_neutral_libertarians_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_libertarians_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_neutral_libertarian_in_power_or_coalition</code></td></tr>
<tr style="background:#FAFAFA"><td style="padding:2px 8px">17</td><td style="padding:2px 8px">Зелёные</td><td style="padding:2px 8px"><code>neutrality_neutral_green_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_green_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_neutral_green_in_power_or_coalition</code></td></tr>
<tr style="background:#FAFAFA"><td style="padding:2px 8px">18</td><td style="padding:2px 8px">Социал-демократы</td><td style="padding:2px 8px"><code>neutrality_neutral_social_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_social_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_neutral_social_in_power_or_coalition</code></td></tr>
<tr style="background:#FAFAFA"><td style="padding:2px 8px">19</td><td style="padding:2px 8px">Коммунисты</td><td style="padding:2px 8px"><code>neutrality_neutral_communism_are_in_power</code></td><td style="padding:2px 8px"><code>neutrality_neutral_communism_are_in_coalition</code></td><td style="padding:2px 8px"><code>neutrality_neutral_communism_in_power_or_coalition</code></td></tr>

<tr style="background:#F7DFC4"><td style="padding:2px 8px">20</td><td style="padding:2px 8px">Правые популисты</td><td style="padding:2px 8px"><code>nationalist_right_wing_populists_are_in_power</code></td><td style="padding:2px 8px"><code>nationalist_right_wing_populists_are_in_coalition</code></td><td style="padding:2px 8px"><code>nationalist_right_wing_populists_are_in_power_or_coalition</code></td></tr>
<tr style="background:#F7DFC4"><td style="padding:2px 8px">21</td><td style="padding:2px 8px">Фашисты</td><td style="padding:2px 8px"><code>nationalist_fascist_are_in_power</code></td><td style="padding:2px 8px"><code>nationalist_fascist_are_in_coalition</code></td><td style="padding:2px 8px"><code>nationalist_fascists_are_in_power_or_coalition</code></td></tr>
<tr style="background:#F7DFC4"><td style="padding:2px 8px">22</td><td style="padding:2px 8px">Военная хунта</td><td style="padding:2px 8px"><code>nationalist_military_junta_are_in_power</code></td><td style="padding:2px 8px"><code>nationalist_military_junta_are_in_coalition</code></td><td style="padding:2px 8px"><code>nationalist_military_junta_are_in_power_or_coalition</code></td></tr>
<tr style="background:#F7DFC4"><td style="padding:2px 8px">23</td><td style="padding:2px 8px">Абсолютные монархисты</td><td style="padding:2px 8px"><code>nationalist_monarchists_are_in_power</code></td><td style="padding:2px 8px"><code>nationalist_monarchists_are_in_coalition</code></td><td style="padding:2px 8px"><code>nationalist_monarchists_are_in_power_or_coalition</code></td></tr>
</tbody>
</table>
</div>

:::caution
В исходниках встречаются несогласованные окончания (`western_liberal_are_in_power_or_coalition` вместо `_liberals_`, `emerging_conservative_...` вместо `_reactionaries_`, `nationalist_fascist_...` вместо `_fascists_`) — это не опечатка в доке, так буквально называются триггеры в моде. Копируйте имена из таблицы, не по аналогии с соседними строками.
:::

## Идеологические блоки (по кластеру взглядов)

Группируют несколько партий по общей политической позиции — то, что реально стоит проверять в решениях/фокусах, вместо перечисления индивидуальных `is_in_array`.

| Позиция | У власти | В коалиции | У власти или в коалиции | Партии (индексы) |
|---|---|---|---|---|
| Социалисты | `has_socialist_government` | `has_socialist_in_coalition` | `has_socialist_government_or_in_coalition` | 3, 4, 5, 18, 19 |
| Коммунисты | `has_communist_government` | `has_communist_in_coalition` | `has_communist_government_or_in_coalition` | 4, 5, 19 |
| Экологи | `has_environmentalist_government` | `has_environmentalist_in_coalition` | `has_environmentalist_government_or_in_coalition` | 17 (в коалиции — ещё и 5) |
| Либералы | `has_liberal_government` | `has_liberal_in_coalition` | `has_liberal_government_or_in_coalition` | 2, 16, 17 |
| Консерваторы | `has_conservative_government` | `has_conservative_in_coalition` | `has_conservative_government_or_in_coalition` | 0, 1, 6, 7, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23 |
| Реакционеры | `has_reactionary_government` | `has_reactionary_in_coalition`¹ | `has_reactionary_government_or_in_coalition` | 0, 7, 10, 11, 13, 15, 20, 21, 22, 23 |
| Автократы | `has_autocratic_government` | `has_autocratic_in_coalition` | `has_autocratic_government_or_in_coalition` | 0, 4, 7, 9, 10, 11, 13, 15, 19, 20, 21, 22, 23 |
| Тоталитаристы | `has_totalitarian_government` | `has_totalitarian_in_coalition` | `has_totalitarian_government_or_in_coalition` | 4, 11, 21 |
| Экономически либеральные | `has_economically_liberal_government` | `has_economically_liberal_in_coalition` | `has_economically_liberal_government_or_in_coalition`² | 1, 2, 14, 16 |

¹ Для индекса 0 (Прозападные автократы) вариант «в коалиции» дополнительно требует `NOT = { has_country_leader_with_trait = western_technocrat }` — технократ-лидер выводит партию из числа реакционных даже формально.
² `has_economically_liberal_government_or_in_coalition` — это `OR` из двух предыдущих триггеров, а не отдельный список индексов.

Отдельно: `has_not_environmentalist_government_or_in_coalition` — инверсия `has_environmentalist_government_or_in_coalition` (готовый, не через `NOT` снаружи).

## Идеологический блок целиком (5 групп)

Совпадает по границам индексов с группами из [Системы → Политика](../systems/politics/#subideologies):

| Триггер | Индексы | Инверсия |
|---|---|---|
| `has_western_aligned_government` | 0–3 | `not_has_western_aligned_government` |
| `has_emerging_aligned_government` | 4–9 | `not_has_emerging_aligned_government` |
| `has_salafist_government` | 10–11 | — |
| `has_neutral_government` | 12–19 | — |
| `has_nationalist_government` | 20–23 | — |

## Общественное настроение по группе (outlook)

Проверяет не правящую партию, а общий уровень поддержки идеологического блока (`party_popularity@<тег>`), даже если у власти другая партия:

```
democratic_outlook_larger_than_0 = {
	custom_trigger_tooltip = {
		tooltip = democratic_outlook_greater_than_0_tt
		check_variable = { party_popularity@democratic > 0 }
	}
}
```

| Триггер | Тег идеологии |
|---|---|
| `democratic_outlook_larger_than_0` | `democratic` |
| `emerging_outlook_larger_than_0` | `communism` |
| `fascism_outlook_larger_than_0` | `fascism` |
| `neutrality_outlook_larger_than_0` | `neutrality` |
| `nationalist_outlook_larger_than_0` | `nationalist` |

## Фракции влияния

```
has_economic_faction = {
	custom_trigger_tooltip = {
		tooltip = has_economic_faction_TT
		OR = {
			has_idea = small_medium_business_owners
			has_idea = international_bankers
			has_idea = fossil_fuel_industry
			has_idea = industrial_conglomerates
			has_idea = oligarchs
			has_idea = landowners
			has_idea = maritime_industry
			has_idea = defense_industry
			# Nation Specific
			has_idea = wall_street
			has_idea = chaebols
			has_idea = the_donju
		}
	}
}
```

| Триггер | Проверяет наличие идеи |
|---|---|
| `has_economic_faction` | `small_medium_business_owners`, `international_bankers`, `fossil_fuel_industry`, `industrial_conglomerates`, `oligarchs`, `landowners`, `maritime_industry`, `defense_industry`, а также нация-специфичные `wall_street`, `chaebols`, `the_donju` |
| `has_religious_faction` | `the_priesthood`, `the_ulema`, `the_clergy`, `wahabi_ulema` |

## Пороги популярности

### Сила правящей коалиции

`government_coalition_strength` — суммарная популярность правящей партии + союзников. Готовые пороги:

`10_percent_government_popularity`, `20_percent_government_popularity`, `30_percent_government_popularity`, `35_percent_government_popularity`, `40_percent_government_popularity`, `50_percent_government_popularity`, `60_percent_government_popularity`, `66_percent_government_popularity`, `70_percent_government_popularity`, `80_percent_government_popularity`, `90_percent_government_popularity`

(число в названии — реальный порог минус 0.001, т.е. `check_variable = { government_coalition_strength > 0.099 }` и т.д.)

### Пороги отдельных партий

| Триггер | Партия (индекс) | Порог |
|---|---|---|
| `35_percent_emerging_communist_state_popularity` | Формирующиеся коммунисты (4) | > 35% |
| `35_percent_neutral_communist_popularity` | Коммунисты (19) | > 35% |
| `35_percent_nationalist_right_wing_populists_popularity` | Правые популисты (20) | > 35% |
| `35_percent_nationalist_nat_autocracy_popularity` | Военная хунта (22) | > 35% |
| `35_percent_nationalist_absolutist_monarchist_popularity` | Абсолютные монархисты (23) | > 35% |
| `45_percent_nationalist_nat_autocracy_popularity` | Военная хунта (22) | > 45% |

### Порог явки на выборы, по каждой партии

`party_0_has_more_than_threshold` … `party_23_has_more_than_threshold` — проверяет `party_pop_array^N > election_threshold` для соответствующего индекса N (0–23, см. таблицу субидеологий). Используется, чтобы понять, преодолела ли партия заградительный барьер для участия в выборах/коалиции, независимо от того, у власти она сейчас или нет.

## Служебные (параметризованные) триггеры/эффекты

Эти блоки не предназначены для прямого копирования в контент мода — они принимают вход через `party_index` или `ruling_party` и используются внутри других скриптов избирательной системы:

- **`is_party_banned_trigger`** — принимает `party_index` (temp-переменная), возвращает `yes`, если соответствующая партия (флаг `partyN_banned`) запрещена.
- **`outlook_larger_than_0_by_index`** — параметризованная версия блока «Общественное настроение по группе»: сама определяет идеологический блок по диапазону `party_index` (0–3 / 4–9 / 10–11 / 12–19 / 20–23) и вызывает нужный `*_outlook_larger_than_0`.
- **`bigger_than_ruling_elect_zero` … `bigger_than_ruling_elect_twenty_three`** (24 блока) — сравнивает `party_pop_elect_array^N` конкретной партии N с массивом текущей правящей партии; внутренняя логика подсчёта результатов выборов.
- **`calculate_pp_cost_banned_amount`** — на самом деле **эффект**, а не триггер (несмотря на расположение в этом файле): считает стоимость PP за снятие банов со всех незапрещённых партий, кроме правящей.

Если нужно разобрать конкретно один из них — спрашивай, распишу подробнее с примером использования.
