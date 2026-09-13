---
title: Внутренние фракции
description: "Скриптовые триггеры отношения внутренних фракций влияния MDC: уровни мнения по каждой группе."
---

## Как устроена шкала мнения

У каждой внутренней фракции влияния (см. список ниже) есть переменная `<фракция>_opinion` (0–100). Для 23 фракций заведён одинаковый набор из 6 триггеров-порогов по этой переменной:

```
enthusiastic_oligarchs = yes      # oligarchs_opinion > 79
positive_oligarchs = yes          # 60–79
indifferent_oligarchs = yes       # 40–60
negative_oligarchs = yes          # 20–39
hostile_oligarchs = yes           # < 20
non_indifferent_oligarchs = yes   # см. предупреждение ниже
```

| Уровень | Условие (на примере `oligarchs_opinion`) |
|---|---|
| `enthusiastic_*` | `> 79` |
| `positive_*` | `< 80` и `> 59` |
| `indifferent_*` | `< 61` и `> 39` |
| `negative_*` | `< 40` и `> 19` |
| `hostile_*` | `< 20` |
| `non_indifferent_*` | `> 61` **и** `< 39` |

:::caution
`non_indifferent_*` **сломан у всех 23 фракций без исключения**: условие требует, чтобы значение было одновременно `> 61` и `< 39` — это невозможно, поэтому триггер всегда возвращает «нет», при любом реальном значении мнения. Не используйте этот триггер вообще (или используйте `NOT = { indifferent_X = yes }`, что и есть его настоящий смысл).

Заодно у `positive_*`/`indifferent_*` есть небольшое пересечение границы: `positive` требует `> 59` (т.е. ≥60), `indifferent` требует `< 61` (т.е. ≤60) — при значении ровно 60 истинны оба триггера сразу.
:::

## Список фракций

Подставьте любой из этих идентификаторов вместо `X` в `enthusiastic_X` / `positive_X` / `indifferent_X` / `negative_X` / `hostile_X`:

`small_medium_business_owners`, `international_bankers`, `oligarchs`, `industrial_conglomerates`, `fossil_fuel_industry`, `intelligence_community`, `the_military`, `defense_industry`, `maritime_industry`, `wahabi_ulema`, `the_priesthood`, `the_ulema`, `the_clergy`, `communist_cadres`, `farmers`, `landowners`, `labour_unions`, `foreign_jihadis`, `iranian_quds_force`, `saudi_royal_family`, `chaebols`, `wall_street`, `the_donju`

## Дополнительные пороги (только у части фракций)

Для нескольких фракций дополнительно заведены отдельные именованные триггеры с не всегда предсказуемым названием (не всегда полное имя фракции) и слегка отличающимися порогами:

| Триггер | Условие |
|---|---|
| `oligarchs_at_least_enthusiastic_opinion` | `oligarchs_opinion > 74` |
| `oligarchs_at_least_positive_opinion` | `> 50` |
| `oligarchs_not_positive_opinion` | `< 50` |
| `industrial_conglomerates_at_least_enthusiastic_opinion` | `> 74` |
| `intelligence_community_at_least_positive_opinion` | `> 59` |
| `intelligence_community_not_positive_opinion` | `< 59` |
| `military_at_least_enthusiastic_opinion`¹ | `the_military_opinion > 74.99`, но только если `has_idea = the_military` |
| `military_at_least_positive_opinion`¹ | `> 50`, тоже требует `has_idea = the_military` |
| `wahule_at_least_positive_opinion` | `wahabi_ulema_opinion > 59` |
| `the_priesthood_at_least_enthusiastic_opinion` | `> 75` |
| `the_priesthood_at_least_indifferent_opinion` | `> 49` |
| `the_ulema_at_least_positive_opinion` | `> 59` |
| `communist_cadres_at_least_enthusiastic_opinion`¹ | `communist_cadres_opinion > 74.99`, только если `has_idea = communist_cadres` |
| `communist_cadres_at_least_positive_opinion`¹ | `> 50`, тоже требует идею |
| `sarf_at_least_positive_opinion` | `saudi_royal_family_opinion > 59` |
| `sarf_at_least_indifferent_opinion` | `> 49` |

¹ Если у страны вообще нет идеи-фракции (`has_idea = the_military` / `has_idea = communist_cadres`), эти два триггера возвращают «нет» независимо от значения opinion — обычные `enthusiastic_the_military`/`enthusiastic_communist_cadres` такой проверки не делают.

:::note
Сокращения в названиях не всегда очевидны: `wahule` = wahabi ulema, `sarf` = saudi royal family, `oli` (в тултипах) = oligarchs. Копируйте имена из таблицы, не пытайтесь угадать по аналогии.
:::
