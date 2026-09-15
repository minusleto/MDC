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
### Название и смена мнения фракций

<table style="width:100%; border-collapse:collapse; font-size:0.88em; line-height:1.3; table-layout:auto; border:1px solid rgba(70,60,70,.25)">
<thead>
<tr style="background:#f0e7dc; color:#403a36"><th style="padding:6px 8px; text-align:left; width:2.5em; border-bottom:1px solid rgba(70,60,70,.25)">#</th><th style="padding:6px 8px; text-align:left; border-bottom:1px solid rgba(70,60,70,.25)">Фракция</th><th style="padding:6px 8px; text-align:left; border-bottom:1px solid rgba(70,60,70,.25)">Идея (тег)</th><th style="padding:6px 8px; text-align:left; border-bottom:1px solid rgba(70,60,70,.25)">Эффект смены мнения</th></tr>
</thead>
<tbody>
<tr><td colspan="4" style="padding:5px 8px; background:#c5dced; color:#403a36; font-weight:600">Экономические</td></tr>
<tr style="background:#d8e8f3; color:#403a36"><td style="padding:4px 8px">1</td><td style="padding:4px 8px">Малый и средний бизнес</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">small_medium_business_owners</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_small_medium_business_owners_opinion</code></td></tr>
<tr style="background:#d8e8f3; color:#403a36"><td style="padding:4px 8px">2</td><td style="padding:4px 8px">Международные банкиры</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">international_bankers</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_international_bankers_opinion</code></td></tr>
<tr style="background:#d8e8f3; color:#403a36"><td style="padding:4px 8px">3</td><td style="padding:4px 8px">Нефтегазовая промышленность</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">fossil_fuel_industry</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_fossil_fuel_industry_opinion</code></td></tr>
<tr style="background:#d8e8f3; color:#403a36"><td style="padding:4px 8px">4</td><td style="padding:4px 8px">Промышленные конгломераты</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">industrial_conglomerates</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_industrial_conglomerates_opinion</code></td></tr>
<tr style="background:#d8e8f3; color:#403a36"><td style="padding:4px 8px">5</td><td style="padding:4px 8px">Олигархи</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">oligarchs</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_oligarchs_opinion</code></td></tr>
<tr><td colspan="4" style="padding:5px 8px; background:#cfe1b9; color:#403a36; font-weight:600">Милитаристские</td></tr>
<tr style="background:#dfedcf; color:#403a36"><td style="padding:4px 8px">6</td><td style="padding:4px 8px">Морская промышленность</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">maritime_industry</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_maritime_industry_opinion</code></td></tr>
<tr style="background:#dfedcf; color:#403a36"><td style="padding:4px 8px">7</td><td style="padding:4px 8px">Оборонная промышленность</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">defense_industry</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_defense_industry_opinion</code></td></tr>
<tr style="background:#dfedcf; color:#403a36"><td style="padding:4px 8px">8</td><td style="padding:4px 8px">Военные</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">the_military</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_the_military_opinion</code></td></tr>
<tr style="background:#dfedcf; color:#403a36"><td style="padding:4px 8px">9</td><td style="padding:4px 8px">Разведывательное сообщество</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">intelligence_community</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_intelligence_community_opinion</code></td></tr>
<tr><td colspan="4" style="padding:5px 8px; background:#f1d1ae; color:#403a36; font-weight:600">Особые интересы</td></tr>
<tr style="background:#f7e0c5; color:#403a36"><td style="padding:4px 8px">10</td><td style="padding:4px 8px">Профсоюзы</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">labour_unions</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_labour_unions_opinion</code></td></tr>
<tr style="background:#f7e0c5; color:#403a36"><td style="padding:4px 8px">11</td><td style="padding:4px 8px">Землевладельцы</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">landowners</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_landowners_opinion</code></td></tr>
<tr style="background:#f7e0c5; color:#403a36"><td style="padding:4px 8px">12</td><td style="padding:4px 8px">Фермеры</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">farmers</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_farmers_opinion</code></td></tr>
<tr style="background:#f7e0c5; color:#403a36"><td style="padding:4px 8px">13</td><td style="padding:4px 8px">Коммунистические кадры</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">communist_cadres</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_communist_cadres_opinion</code></td></tr>
<tr><td colspan="4" style="padding:5px 8px; background:#d9cee8; color:#403a36; font-weight:600">Религиозные</td></tr>
<tr style="background:#e9e0f1; color:#403a36"><td style="padding:4px 8px">14</td><td style="padding:4px 8px">Священство</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">the_priesthood</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_the_priesthood_opinion</code></td></tr>
<tr style="background:#e9e0f1; color:#403a36"><td style="padding:4px 8px">15</td><td style="padding:4px 8px">Улемы</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">the_ulema</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_the_ulema_opinion</code></td></tr>
<tr style="background:#e9e0f1; color:#403a36"><td style="padding:4px 8px">16</td><td style="padding:4px 8px">Духовенство</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">the_clergy</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_the_clergy_opinion</code></td></tr>
<tr style="background:#e9e0f1; color:#403a36"><td style="padding:4px 8px">17</td><td style="padding:4px 8px">Ваххабитские улемы</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">wahabi_ulema</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_the_wahabi_ulema_opinion</code></td></tr>
<tr><td colspan="4" style="padding:5px 8px; background:#e5cccc; color:#403a36; font-weight:600">Страновые</td></tr>
<tr style="background:#f0dddd; color:#403a36"><td style="padding:4px 8px">18</td><td style="padding:4px 8px">Донжу (Северная Корея)</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">the_donju</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_the_donju_opinion</code></td></tr>
<tr style="background:#f0dddd; color:#403a36"><td style="padding:4px 8px">19</td><td style="padding:4px 8px">Саудовская королевская семья (страны Залива)</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">saudi_royal_family</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_saudi_royal_family_opinion</code></td></tr>
<tr style="background:#f0dddd; color:#403a36"><td style="padding:4px 8px">20</td><td style="padding:4px 8px">Иранские силы Кудс (Иран, включает IRGC)</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">iranian_quds_force</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_iranian_quds_force_opinion</code></td></tr>
<tr style="background:#f0dddd; color:#403a36"><td style="padding:4px 8px">21</td><td style="padding:4px 8px">Иностранные джихадисты</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">foreign_jihadis</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_foreign_jihadis_opinion</code></td></tr>
<tr style="background:#f0dddd; color:#403a36"><td style="padding:4px 8px">22</td><td style="padding:4px 8px">Чеболи (Южная Корея)</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">chaebols</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_chaebols_opinion</code></td></tr>
<tr style="background:#f0dddd; color:#403a36"><td style="padding:4px 8px">23</td><td style="padding:4px 8px">Уолл-стрит (США)</td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">wall_street</code></td><td style="padding:4px 8px; overflow-wrap:anywhere"><code style="background:rgba(255,255,255,.5); color:#302b2b; padding:1px 5px; border-radius:4px">change_wall_street_opinion</code></td></tr>
</tbody>
</table>

<a id="bulk-and-utility-effects"></a>
### Служебные эффекты

Изменить мнение сразу у всех активных фракций страны разом:

```
set_temp_variable = { temp_all_opinion = 5 }
change_all_internal_faction_opinion = yes
```

Дебаг/чит-команды (выставить все фракции в максимум/сбросить в нейтральные 50):

```
set_to_max_internal_faction_opinions = yes
reset_all_internal_faction_opinions = yes
```

<a id="election-funding"></a>
### Влияние на выборы

Мнение фракций напрямую участвует в системе выборов MDC: базовое значение переменной `campaign_funding_count` — **10**, и каждая активная фракция дополнительно добавляет от **-2 до +2** в зависимости от того, насколько она враждебна/благосклонна (hostile/negative/indifferent/positive/enthusiastic). Это считается автоматически эффектом `display_election_campaign_status`, вручную дёргать не нужно.

:::note
В старом списке команд встречались `change_isi_pakistan_opinion`, `change_vevak_opinion`, `change_the_bazaar_opinion`, `change_irgc_opinion`. Первые три в актуальном файле системы (`00_internal_faction_effects.txt`) не определены нигде, кроме устаревшего комментария-заголовка — похоже, их вырезали. `IRGC` не вырезан, но и отдельного эффекта у него нет: он слит с `iranian_quds_force` в одну переменную мнения и один динамик-модификатор (`apply_irgc_iranian_quds_force_dynamic_effect_DYNMOD`) — отдельно менять IRGC нельзя, только через `change_iranian_quds_force_opinion`.
:::
