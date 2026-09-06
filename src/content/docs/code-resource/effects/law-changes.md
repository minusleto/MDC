---
title: Смена законов
description: "Эффекты смены законов: гражданские свободы (цензура, собрания, интернет, религия, ЛГБТ, профсоюзы), демография и деторождение, оружие, экономические законы (расходы, торговля, миграция, бюрократия)"
---

## Смена законов

Каждая категория ниже — это idea group из нескольких уровней. Соответствующий `set_*` эффект переключает страну на нужный уровень и, если она уже на этом уровне, даёт одноразовый бонус (PP/стабильность/популярность). Эффекты `increase_*` / `decrease_*` сдвигают закон на один уровень вверх или вниз по шкале.

### Содержание

- [Законы о гражданских свободах](#civil-freedom-laws)
- [Демография и деторождение](#demographics-and-birth)
- [Оружие](#weapons)
- [Расходы и другие экономические законы](#economic-laws)

<hr/>

<a id="civil-freedom-laws"></a>
## Законы о гражданских свободах

<a id="censorship-laws"></a>
### Цензура

| Эффект | Уровень |
|---|---|
| `set_freedom_of_speech = yes` | Свобода слова |
| `set_ban_on_extremism = yes` | Запрет экстремизма |
| `set_censorship = yes` | Госцензура |
| `set_minitrue = yes` | Минправ |

<a id="right-assembly"></a>
### Свобода собраний

| Эффект | Уровень |
|---|---|
| `set_free_assembly = yes` | Свобода собраний |
| `set_notification_regime = yes` | Уведомительный режим |
| `set_curfew = yes` | Комендантский час |

<a id="internet-law"></a>
### Интернет

| Эффект | Уровень |
|---|---|
| `set_internet_freedom = yes` | Свободный интернет |
| `set_internet_censorship = yes` | Интернет-цензура |
| `set_white_lists = yes` | Белые списки |
| `set_national_internet = yes` | Чебурнет |
| `set_no_internet = yes` | Ну что, вырубаем свет |

<a id="freedom-religion"></a>
### Религия

| Эффект | Уровень |
|---|---|
| `set_gov_atheism = yes` | Гос. атеизм |
| `set_secularism = yes` | Светское государство |
| `set_state_religion = yes` | Гос. религия |
| `set_hierocracy = yes` | Иерократия |

<a id="lgbt-laws"></a>
### ЛГБТ

| Эффект | Уровень |
|---|---|
| `set_nato_gay_world = yes` | Полная Инклюзивность |
| `set_civil_partnerships = yes` | Гражданское Партнерство |
| `set_traditional_values = yes` | Традиционные ценности |
| `set_ban_lgbt = yes` | Криминализация ЛГБТ |

<a id="freedom-trade-unions"></a>
### Профсоюзы

| Эффект | Уровень |
|---|---|
| `set_ghent_system = yes` | Система Гента |
| `set_free_unions = yes` | Свобода профсоюзов |
| `set_gov_unions = yes` | Госсоюзы |
| `set_ban_unions = yes` | Запрет Профсоюзов |

<hr/>

<a id="demographics-and-birth"></a>
## Демография и деторождение

<a id="demographics"></a>
**Половозрастная пирамида**

| Эффект | Уровень |
|---|---|
| `set_population_pyramid_1 = yes` | Растущая половозрастная пирамида |
| `set_population_pyramid_2 = yes` | Стабильная половозрастная пирамида |
| `set_population_pyramid_3 = yes` | Сокращающаяся половозрастная пирамида |

<a id="birth-policy"></a>
**Политика рождаемости**

| Эффект | Уровень |
|---|---|
| `set_encourage_birth = yes` | Поощрение рождаемости |
| `set_no_birth_control = yes` | Отсутствие контроля рождаемости |
| `set_discourage_birth = yes` | Сдерживание рождаемости |

<a id="abortion-policy"></a>
**Политика абортов**

| Эффект | Уровень |
|---|---|
| `set_ban_abortion = yes` | Запрет абортов |
| `set_no_abortion_control = yes` | Отсутствие ограничений на аборты |
| `set_encourage_abortion = yes` | Свободный доступ к абортам |

<hr/>

<a id="weapons"></a>
## Оружие

<a id="weapons-law"></a>
**Закон об оружии**

| Эффект | Уровень |
|---|---|
| `set_ban_weapons = yes` | Запрет оружия |
| `set_allow_weapons = yes` | Свободное ношение оружия |
| `set_regulate_weapons = yes` | Регулирование оборота оружия |

<hr/>

<a id="economic-laws"></a>
## Расходы и другие экономические законы

Законы, регулирующие государственные расходы (бюджет на бюрократию, соцсферу, образование, здравоохранение, полицию), а также торговый, военный и миграционный законы.

<a id="bureaucracy-law"></a>
**Бюрократия / Централизация**

| Эффект | Применение |
|---|---|
| `decrease_centralization = yes` | Уменьшить централизацию |
| `decrease_centralization_2 = yes` | Уменьшить централизацию (уровень 2) |
| `decrease_centralization_3 = yes` | Уменьшить централизацию (уровень 3) |
| `increase_centralization = yes` | Увеличить централизацию |
| `increase_centralization_2 = yes` | Увеличить централизацию (уровень 2) |
| `increase_centralization_3 = yes` | Увеличить централизацию (уровень 3) |
| `increase_centralization_4 = yes` | Увеличить централизацию (максимум) |

<a id="education-spending"></a>
**Образование**

| Эффект | Применение |
|---|---|
| `increase_education_budget = yes` | Увеличить расходы на образование |
| `increase_education_budget_2 = yes` | Увеличить расходы на образование (уровень 2) |
| `increase_education_budget_3 = yes` | Увеличить расходы на образование (уровень 3) |
| `increase_education_budget_4 = yes` | Увеличить расходы на образование (максимум) |
| `decrease_education_budget = yes` | Уменьшить расходы на образование |
| `decrease_education_budget_2 = yes` | Уменьшить расходы на образование (уровень 2) |
| `max_education_budget = yes` | Установить максимальные расходы на образование |

<a id="healthcare-spending"></a>
**Здравоохранение**

| Эффект | Применение |
|---|---|
| `increase_healthcare_budget = yes` | Увеличить расходы на здравоохранение |
| `increase_healthcare_budget_2 = yes` | Увеличить расходы на здравоохранение (уровень 2) |
| `increase_healthcare_budget_3 = yes` | Увеличить расходы на здравоохранение (уровень 3) |
| `increase_healthcare_budget_4 = yes` | Увеличить расходы на здравоохранение (максимум) |
| `decrease_healthcare_budget = yes` | Уменьшить расходы на здравоохранение |
| `decrease_healthcare_budget_2 = yes` | Уменьшить расходы на здравоохранение (уровень 2) |
| `max_healthcare_budget = yes` | Установить максимальные расходы на здравоохранение |

<a id="social-spending"></a>
**Социальные расходы**

| Эффект | Применение |
|---|---|
| `increase_social_spending = yes` | Увеличить социальные расходы |
| `increase_social_spending_2 = yes` | Увеличить социальные расходы (уровень 2) |
| `increase_social_spending_3 = yes` | Увеличить социальные расходы (уровень 3) |
| `increase_social_spending_4 = yes` | Увеличить социальные расходы (максимум) |
| `decrease_social_spending = yes` | Уменьшить социальные расходы |
| `decrease_social_spending_2 = yes` | Уменьшить социальные расходы (уровень 2) |
| `max_social_spending = yes` | Установить максимальные социальные расходы |

<a id="policing-spending"></a>
**Полиция**

| Эффект | Применение |
|---|---|
| `increase_policing_budget = yes` | Увеличить расходы на полицию |
| `increase_policing_budget_2 = yes` | Увеличить расходы на полицию (уровень 2) |
| `increase_policing_budget_3 = yes` | Увеличить расходы на полицию (уровень 3) |
| `increase_policing_budget_4 = yes` | Увеличить расходы на полицию (максимум) |
| `decrease_policing_budget = yes` | Уменьшить расходы на полицию |
| `decrease_policing_budget_2 = yes` | Уменьшить расходы на полицию (уровень 2) |

<a id="trade-law"></a>
**Торговый закон**

| Эффект | Применение |
|---|---|
| `increase_exports = yes` | Увеличить экспорт / торговый закон |
| `decrease_exports = yes` | Уменьшить экспорт / торговый закон |
| `set_exports_to_min = yes` | Установить экспорт на минимум |
| `set_exports_to_max = yes` | Установить экспорт на максимум |

<a id="military-spending-law"></a>
**Военные расходы**

| Эффект | Применение |
|---|---|
| `increase_military_spending = yes` | Увеличить военные расходы |
| `decrease_military_spending = yes` | Уменьшить военные расходы |
| `decrease_military_spending_2 = yes` | Уменьшить военные расходы (уровень 2) |
| `sizeable_military_spending = yes` | Установить значительные военные расходы |

<a id="migration-law"></a>
**Миграционный закон**

| Эффект | Применение |
|---|---|
| `increase_migration_law = yes` | Смягчить миграционный закон |
| `decrease_migration_law = yes` | Ужесточить миграционный закон |
