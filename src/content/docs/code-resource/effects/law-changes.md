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
### Половозрастная пирамида

| Эффект | Уровень |
|---|---|
| `set_population_pyramid_1 = yes` | Растущая половозрастная пирамида |
| `set_population_pyramid_2 = yes` | Стабильная половозрастная пирамида |
| `set_population_pyramid_3 = yes` | Сокращающаяся половозрастная пирамида |

<a id="birth-policy"></a>
### Политика рождаемости

| Эффект | Уровень |
|---|---|
| `set_encourage_birth = yes` | Поощрение рождаемости |
| `set_no_birth_control = yes` | Отсутствие контроля рождаемости |
| `set_discourage_birth = yes` | Сдерживание рождаемости |
| `set_ban_abortion = yes` | Запрет абортов |
| `set_no_abortion_control = yes` | Отсутствие ограничений на аборты |
| `set_encourage_abortion = yes` | Свободный доступ к абортам |

<hr/>

<a id="weapons"></a>
## Оружие

<a id="weapons-law"></a>
### Закон об оружии

| Эффект | Уровень |
|---|---|
| `set_ban_weapons = yes` | Запрет оружия |
| `set_allow_weapons = yes` | Свободное ношение оружия |
| `set_regulate_weapons = yes` | Регулирование оборота оружия |

<hr/>

<a id="economic-laws"></a>
## Расходы и другие экономические законы

Законы, регулирующие государственные расходы (бюджет на бюрократию, соцсферу, образование, здравоохранение, полицию), а также торговый, военный и миграционный законы.

<a id="increasedecrease-bureaucracy-law"></a>
### Увеличить / уменьшить закон о расходах на бюрократию

Увеличивает или уменьшает текущий закон страны о расходах на бюрократию

```
decrease_centralization = yes
decrease_centralization_2 = yes
decrease_centralization_3 = yes
increase_centralization = yes
increase_centralization_2 = yes
increase_centralization_3 = yes
increase_centralization_4 = yes
```

<a id="increasedecrease-social-spending"></a>
### Увеличить / уменьшить социальные расходы

Увеличивает или уменьшает текущий закон страны о социальных расходах

```
increase_social_spending = yes
increase_social_spending_2 = yes
increase_social_spending_3 = yes
increase_social_spending_4 = yes
decrease_social_spending = yes
decrease_social_spending_2 = yes
max_social_spending = yes
```

<a id="increasedecrease-education-spending"></a>
### Увеличить / уменьшить расходы на образование

Увеличивает или уменьшает текущий закон страны о расходах на образование

```
increase_education_budget = yes
increase_education_budget_2 = yes
increase_education_budget_3 = yes
increase_education_budget_4 = yes
decrease_education_budget = yes
decrease_education_budget_2 = yes
max_education_budget = yes
```

<a id="increasedecrease-health-spending"></a>
### Увеличить / уменьшить расходы на здравоохранение

Увеличивает или уменьшает текущий закон страны о расходах на здравоохранение

```
increase_healthcare_budget = yes
increase_healthcare_budget_2 = yes
increase_healthcare_budget_3 = yes
increase_healthcare_budget_4 = yes
decrease_healthcare_budget = yes
decrease_healthcare_budget_2 = yes
max_healthcare_budget = yes
```

<a id="increasedecrease-police-spending"></a>
### Увеличить / уменьшить расходы на полицию

Увеличивает или уменьшает текущий закон страны о расходах на полицию

```
increase_policing_budget = yes
increase_policing_budget_2 = yes
increase_policing_budget_2 = yes
increase_policing_budget_4 = yes
decrease_policing_budget = yes
decrease_policing_budget_2 = yes
```

<a id="increasedecrease-trade-law"></a>
### Увеличить / уменьшить торговый закон

Следующие эффекты используются для увеличения и уменьшения «Торгового закона» вашей страны:

```
increase_exports = yes
decrease_exports = yes
set_exports_to_min = yes
set_exports_to_max = yes
```

<a id="increasedecrease-military-spending-law"></a>
### Увеличить / уменьшить закон о военных расходах

Следующие эффекты используются для увеличения закона о военных расходах.

```
increase_military_spending = yes
decrease_military_spending = yes
decrease_military_spending_2 = yes
sizeable_military_spending = yes # Устанавливает военные расходы на уровень "значительные"
```

<a id="increasedecrease-migration-law"></a>
### Увеличить / уменьшить закон о миграции

Следующие эффекты используются для увеличения и уменьшения законов о миграции и пограничном регулировании.

```
increase_migration_law = yes
decrease_migration_law = yes
```
