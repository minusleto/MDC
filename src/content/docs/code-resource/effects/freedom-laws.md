---
title: Свобода законов
description: "Эффекты смены уровней в системе гражданских свобод (цензура, собрания, интернет, религия, ЛГБТ, профсоюзы)"
---

<!--
#Freedom Laws
 freedom_laws: "Гражданские Свободы"
 censorship_laws: "Уровень Цензуры"
 censorship_01: "Свобода Слова"
 censorship_02: "Запрет Экстремизма"
 censorship_03: "Государственная Цензура"
 censorship_04: "Минестерство Правды"

 right_assembly: "Право Собраний"
 assembly_01: "Свободный режим"
 assembly_02: "Режим уведомления"
 assembly_03: "Комендантский час"

 internet_law: "Цензура в Интернете"
 internet_01: "Нет цензуры Интернета"
 internet_02: "Ограниченная цензура Интернета"
 internet_03: "Белые Списки"
 internet_04: "Национальный Интернет"
 internet_05: "Без Интернета"
 internet_05_desc: "Он нам и ***** не нужен интернет ваш"

 freedom_religion: "Свобода Вероисповедания"
 freedom_religion_01: "Государственный Атеизм"
 freedom_religion_02: "Секуляризм"
 freedom_religion_03: "Государственная Религия"
 freedom_religion_04: "Иерократия"

 salary_01: "Очень высокий МРОТ"
 salary_02: "Высокий МРОТ"
 salary_03: "Средний МРОТ"
 salary_04: "Ниже среднего МРОТ"
 salary_05: "Низкий МРОТ"
 salary_06: "Отсутствие МРОТ"
 salary_law: "Минимальный Уровень Оплаты Труда (МРОТ)"

 lgbt_laws: "Права ЛГБТ"
 lgbt_laws_01: "Полная Инклюзивность"
 lgbt_laws_01_desc: "\"ЛГБТ движение\" признано экстремистским и запрещено на территории Российской Федерации."
 lgbt_laws_02: "Гражданское Партнерство"
 lgbt_laws_02_desc: "\"ЛГБТ движение\" признано экстремистским и запрещено на территории Российской Федерации."
 lgbt_laws_03: "Традиционные ценности"
 lgbt_laws_03_desc: "\"ЛГБТ движение\" признано экстремистским и запрещено на территории Российской Федерации."
 lgbt_laws_04: "Криминализация ЛГБТ"
 lgbt_laws_04_desc: "\"ЛГБТ движение\" признано экстремистским и запрещено на территории Российской Федерации."

 freedom_trade_unions: "Свобода Профсоюзов"
 freedom_trade_unions_01: "Гентская Система"
 freedom_trade_unions_02: "Независимые Профсоюзы"
 freedom_trade_unions_03: "Государственные Профсоюзы"
 freedom_trade_unions_04: "Запрет Профсоюзов"

 censorship_laws_cost_factor: "Цена изменения уровня Цензуры"
 right_assembly_cost_factor: "Цена изменения закона о Праве Собраний"
 internet_law_cost_factor: "Цена изменения уровня Цензуры Интернета"
 lgbt_laws_cost_factor: "Цена изменения закона о Правах ЛГБТ"
 freedom_trade_unions_cost_factor: "Цена изменения закона о Профсоюзах"
 salary_law_cost_factor: "Цена изменения закона о МРОТ"
-->

## Эффекты системы «Свобода законов"

Каждая категория — это idea group из нескольких уровней. Соответствующий `set_*` эффект переключает страну на нужный уровень и, если она уже на этом уровне, даёт одноразовый бонус (PP/стабильность/популярность).

<a id="censorship-laws"></a>
### Цензура (censorship_laws)

| Эффект | Уровень |
|---|---|
| `set_freedom_of_speech = yes` | Свобода слова |
| `set_ban_on_extremism = yes` | Запрет экстремизма |
| `set_censorship = yes` | Госцензура |
| `set_minitrue = yes` | Минправ |

<a id="right-assembly"></a>
### Свобода собраний (right_assembly)

| Эффект | Уровень |
|---|---|
| `set_free_assembly = yes` | Свобода собраний |
| `set_notification_regime = yes` | Уведомительный режим |
| `set_curfew = yes` | Комендантский час |

<a id="internet-law"></a>
### Интернет (internet_law)

| Эффект | Уровень |
|---|---|
| `set_internet_freedom = yes` | Свободный интернет |
| `set_internet_censorship = yes` | Интернет-цензура |
| `set_white_lists = yes` | Белые списки |
| `set_national_internet = yes` | Чебурнет |
| `set_no_internet = yes` | Ну что, вырубаем свет |

<a id="freedom-religion"></a>
### Религия (freedom_religion)

| Эффект | Уровень |
|---|---|
| `set_gov_atheism = yes` | Гос. атеизм |
| `set_secularism = yes` | Светское государство |
| `set_state_religion = yes` | Гос. религия |
| `set_hierocracy = yes` | Иерократия |

<a id="lgbt-laws"></a>
### ЛГБТ (lgbt_laws)

| Эффект | Уровень |
|---|---|
| `set_nato_gay_world = yes` | Обучаем нацию трахаться в сраку |
| `set_civil_partnerships = yes` | Не обучаем нацию трахаться в сраку, но активно поддерживаем |
| `set_traditional_values = yes` | Не обучаем нацию трахаться в сраку и не поддерживаем |
| `set_ban_lgbt = yes` | Нации нельзя трахаться в сраку |

<a id="freedom-trade-unions"></a>
### Профсоюзы (freedom_trade_unions)

| Эффект | Уровень |
|---|---|
| `set_ghent_system = yes` | Система Гента |
| `set_free_unions = yes` | Свобода профсоюзов |
| `set_gov_unions = yes` | Госсоюзы |
| `set_ban_unions = yes` | Заборонено профсоюзить |
