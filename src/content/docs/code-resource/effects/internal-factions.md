---
title: Внутренние фракции
description: "Эффекты и команды внутренних фракций"
---

## Эффекты внутренних фракций MDC

<a id="how-it-works"></a>
### Как это работает

У каждой фракции есть скрытая переменная **мнения** (`<фракция>_opinion`) в диапазоне **0–100**, по умолчанию **50** (нейтрально). Она заводится автоматически, если у страны есть нужный нацдух (идея) — без идеи фракции у страны просто нет.

Менять мнение вручную нужно так — задать временную переменную и вызвать эффект смены:

```
set_temp_variable = { temp_opinion = 5 }
change_small_medium_business_owners_opinion = yes
```

Значение — это изменение (+/-), а не итоговая цифра. Несколько важных нюансов:

- **Автократы получают эффект x2** — если правящая партия относится к автократическому архетипу (прозападные автократы, формирующиеся автократы, неприсоединившиеся автократы, фашисты, военная хунта) и изменение положительное, оно удваивается.
- **Порог не всегда 50** — у некоторых стран есть уникальные идеи, которые двигают минимум/максимум конкретной фракции (например, идея про аграрные субсидии повышает пол для фермеров, идея про банковскую реформу понижает потолок для профсоюзов). Это зашито per-country, не в общей логике.
- **Мнение раз в месяц тянет вниз к минимуму, но только если оно сейчас выше минимума** — если сдвинули вверх и больше не трогаете, оно постепенно осядет обратно к минимуму (обычно 50). А вот если мнение ниже минимума — оно там и останется, автоматического подъёма обратно вверх нет, обратно поднять можно только вручную новым `change_*_opinion`.
- **Мнение напрямую крутит игровые статы** — у каждой фракции есть «динамик-модификатор», который автоматически пересчитывается из мнения: `(мнение − 50) × коэффициент`. Настраивать эти статы вручную не нужно и не получится — они следствие мнения, а не независимая ручка.

### Как правильно менять фракции

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

<a id="faction-list"></a>
### Список фракций

| Категория | Идея (тег) | Эффект смены мнения | Что меняет динамик-модификатор |
|---|---|---|---|
| Экономические | `small_medium_business_owners` | `change_small_medium_business_owners_opinion` | Стабильность, цена потребтоваров, производительность гражд. фабрик, налог на прибыль |
| Экономические | `international_bankers` | `change_international_bankers_opinion` | Очки полит. власти, местные ресурсы, торговое мнение, приемлемость/дрейф демократии, стоимость и срок инвестиций, налог офисов |
| Экономические | `fossil_fuel_industry` | `change_fossil_fuel_industry_opinion` | Местные ресурсы, прирост топлива, время джастификации войны, экспорт нефти, скорость строительства топливных хранилищ |
| Экономические | `industrial_conglomerates` | `change_industrial_conglomerates_opinion` | Местные ресурсы, приемлемость/дрейф коммунизма, налог гражд. промышленности |
| Экономические | `oligarchs` | `change_oligarchs_opinion` | Местные ресурсы, приемлемость/дрейф коммунизма |
| Милитаристские | `maritime_industry` | `change_maritime_industry_opinion` | Скорость и производительность верфей, макс. дальность флота, налог верфей |
| Милитаристские | `defense_industry` | `change_defense_industry_opinion` | Скорость и производительность воен. фабрик, эффективность фабрик, налог воен. промышленности |
| Милитаристские | `the_military` | `change_the_military_opinion` | Организация и мораль армии, время обучения, скорость строительства авиабаз, стоимость персонала |
| Милитаристские | `intelligence_community` | `change_intelligence_community_opinion` | Расшифровка/шифрование (без DLC La Resistance) либо разведка по родам войск (с DLC), радар, иностранное влияние |
| Особые интересы | `labour_unions` | `change_labour_unions_opinion` | Эффективность фабрик, очки полит. власти, здравоохранение, соц. расходы |
| Особые интересы | `landowners` | `change_landowners_opinion` | Местные ресурсы, призыв, очки полит. власти, налог офисов |
| Особые интересы | `farmers` | `change_farmers_opinion` | Призыв, цена потребтоваров, месячный прирост населения, производительность, налог, скорость с/х районов |
| Особые интересы | `communist_cadres` | `change_communist_cadres_opinion` | Восстановление орг. армии, цена потребтоваров, защита ядра армии, скорость мобилизации, стоимость бюрократии |
| Религиозные | `the_priesthood` | `change_the_priesthood_opinion` | Стабильность, месячный прирост населения, полит. власть, стоимость образования |
| Религиозные | `the_ulema` | `change_the_ulema_opinion` | Стабильность, месячный прирост населения, полит. власть, стоимость образования |
| Религиозные | `the_clergy` | `change_the_clergy_opinion` | Стабильность, месячный прирост населения, полит. власть, стоимость образования |
| Религиозные | `wahabi_ulema` | `change_the_wahabi_ulema_opinion` | Стабильность, население, полит. власть, дрейф фашизма, стоимость образования |
| Страновые | `the_donju` (Сев. Корея) | `change_the_donju_opinion` | Скорость гражд. фабрик и инфраструктуры, стабильность, цена потребтоваров |
| Страновые | `saudi_royal_family` (страны Залива) | `change_saudi_royal_family_opinion` | Полит. власть, защита от дрейфа идеологии, стабильность |
| Страновые | `iranian_quds_force` (Иран, включает IRGC) | `change_iranian_quds_force_opinion` | Дрейф коммунизма, влияние на наступление |
| Страновые | `foreign_jihadis` | `change_foreign_jihadis_opinion` | Дрейф фашизма, неманповер, лимит спецназа |
| Страновые | `chaebols` (Юж. Корея) | `change_chaebols_opinion` | Полит. власть, инфраструктура, местные ресурсы |
| Страновые | `wall_street` (США) | `change_wall_street_opinion` | Местные ресурсы, торговое мнение, полит. власть, налог офисов, стоимость и срок инвестиций; дополнительно двигает переменную `USA_strength_of_wall_street_var` |

<a id="bulk-and-utility-effects"></a>
### Служебные эффекты

Изменить мнение сразу у всех активных фракций страны разом:

```
set_temp_variable = { temp_all_opinion = 5 }
change_all_internal_faction_opinion = yes
```

Скопировать набор фракций от одной страны другой (используется при освобождении/формировании новой страны — берёт `var:nation_to_copy_from`, у части фракций есть доп. условия вроде правящей партии):

```
var:nation_to_copy_from = { ... }
copy_internal_factions = yes
```

Дебаг/чит-команды (выставить все фракции в максимум/сбросить в нейтральные 50):

```
set_to_max_internal_faction_opinions = yes
reset_all_internal_faction_opinions = yes
```

<a id="election-funding"></a>
### Влияние на выборы

Мнение фракций напрямую участвует в системе выборов MD: базовое значение переменной `campaign_funding_count` — **10**, и каждая активная фракция дополнительно добавляет от **-2 до +2** в зависимости от того, насколько она враждебна/благосклонна (hostile/negative/indifferent/positive/enthusiastic). Это считается автоматически эффектом `display_election_campaign_status`, вручную дёргать не нужно.

:::note
В старом списке команд встречались `change_isi_pakistan_opinion`, `change_vevak_opinion`, `change_the_bazaar_opinion`, `change_irgc_opinion`. Первые три в актуальном файле системы (`00_internal_faction_effects.txt`) не определены нигде, кроме устаревшего комментария-заголовка — похоже, их вырезали. `IRGC` не вырезан, но и отдельного эффекта у него нет: он слит с `iranian_quds_force` в одну переменную мнения и один динамик-модификатор (`apply_irgc_iranian_quds_force_dynamic_effect_DYNMOD`) — отдельно менять IRGC нельзя, только через `change_iranian_quds_force_opinion`.
:::
