---
title: Законы о гражданских свободах
description: "Сводная страница: смена законов, демография, политика рождаемости и закон об оружия"
---

## Смена законов

Эта страница описывает эффекты, которые меняют законы в стране. Раздел содержит таблицы с `set_*` эффектами — только ключи эффектов и их краткие названия.

### Содержание

- [Смена законов](#change-laws)
- [Демография](#demographics)
- [Политика рождаемости](#birth-policy)
- [Закон об оружия](#weapons-law)

<hr/>

<a id="change-laws"></a>
## Смена законов (эффекты)

Каждая категория — это idea group из нескольких уровней. Соответствующий `set_*` эффект переключает страну на нужный уровень и, если она уже на этом уровне, даёт одноразовый бонус (PP/стабильность/популярность).

### Цензура

| Эффект | Уровень |
|---|---|
| `set_freedom_of_speech = yes` | Freedom of speech |
| `set_ban_on_extremism = yes` | Ban on extremism |
| `set_censorship = yes` | Government censorship |
| `set_minitrue = yes` | Ministry of Truth |

### Свобода собраний

| Эффект | Уровень |
|---|---|
| `set_free_assembly = yes` | Free assembly |
| `set_notification_regime = yes` | Notification regime |
| `set_curfew = yes` | Curfew |

### Интернет

| Эффект | Уровень |
|---|---|
| `set_internet_freedom = yes` | Free internet |
| `set_internet_censorship = yes` | Internet censorship |
| `set_white_lists = yes` | White lists |
| `set_national_internet = yes` | National internet |
| `set_no_internet = yes` | No internet |

### Религия

| Эффект | Уровень |
|---|---|
| `set_gov_atheism = yes` | State atheism |
| `set_secularism = yes` | Secular state |
| `set_state_religion = yes` | State religion |
| `set_hierocracy = yes` | Hierocracy |

### ЛГБТ

| Эффект | Уровень |
|---|---|
| `set_nato_gay_world = yes` | Full inclusivity |
| `set_civil_partnerships = yes` | Civil partnerships |
| `set_traditional_values = yes` | Traditional values |
| `set_ban_lgbt = yes` | Criminalisation of LGBT |

### Профсоюзы

| Эффект | Уровень |
|---|---|
| `set_ghent_system = yes` | Ghent system |
| `set_free_unions = yes` | Free unions |
| `set_gov_unions = yes` | Government unions |
| `set_ban_unions = yes` | Ban unions |


### Расходы и бюджеты

| Эффект | Применение |
|---|---|
| `increase_education_budget = yes` | Increase education spending |
| `increase_education_budget_2 = yes` | Increase education spending (level 2) |
| `increase_education_budget_3 = yes` | Increase education spending (level 3) |
| `increase_education_budget_4 = yes` | Increase education spending (max) |
| `decrease_education_budget = yes` | Decrease education spending |
| `decrease_education_budget_2 = yes` | Decrease education spending (level 2) |
| `max_education_budget = yes` | Maximise education spending |

| `increase_healthcare_budget = yes` | Increase healthcare spending |
| `increase_healthcare_budget_2 = yes` | Increase healthcare spending (level 2) |
| `increase_healthcare_budget_3 = yes` | Increase healthcare spending (level 3) |
| `increase_healthcare_budget_4 = yes` | Increase healthcare spending (max) |
| `decrease_healthcare_budget = yes` | Decrease healthcare spending |
| `decrease_healthcare_budget_2 = yes` | Decrease healthcare spending (level 2) |
| `max_healthcare_budget = yes` | Maximise healthcare spending |

| `increase_social_spending = yes` | Increase social spending |
| `increase_social_spending_2 = yes` | Increase social spending (level 2) |
| `increase_social_spending_3 = yes` | Increase social spending (level 3) |
| `increase_social_spending_4 = yes` | Increase social spending (max) |
| `decrease_social_spending = yes` | Decrease social spending |
| `decrease_social_spending_2 = yes` | Decrease social spending (level 2) |
| `max_social_spending = yes` | Maximise social spending |

| `increase_policing_budget = yes` | Increase policing spending |
| `increase_policing_budget_2 = yes` | Increase policing spending (level 2) |
| `increase_policing_budget_3 = yes` | Increase policing spending (level 3) |
| `increase_policing_budget_4 = yes` | Increase policing spending (max) |
| `decrease_policing_budget = yes` | Decrease policing spending |
| `decrease_policing_budget_2 = yes` | Decrease policing spending (level 2) |

#### Trade law

| Эффект | Применение |
|---|---|
| `increase_exports = yes` | Increase exports / trade law |
| `decrease_exports = yes` | Decrease exports / trade law |
| `set_exports_to_min = yes` | Set exports to minimum |
| `set_exports_to_max = yes` | Set exports to maximum |

#### Military spending

| Эффект | Применение |
|---|---|
| `increase_military_spending = yes` | Increase military spending |
| `decrease_military_spending = yes` | Decrease military spending |
| `decrease_military_spending_2 = yes` | Decrease military spending (level 2) |
| `sizeable_military_spending = yes` | Set sizeable military spending |

#### Migration law

| Эффект | Применение |
|---|---|
| `increase_migration_law = yes` | Loosen migration law |
| `decrease_migration_law = yes` | Tighten migration law |

#### Bureaucracy / Centralisation

| Эффект | Применение |
|---|---|
| `decrease_centralization = yes` | Decrease centralisation |
| `decrease_centralization_2 = yes` | Decrease centralisation (level 2) |
| `decrease_centralization_3 = yes` | Decrease centralisation (level 3) |
| `increase_centralization = yes` | Increase centralisation |
| `increase_centralization_2 = yes` | Increase centralisation (level 2) |
| `increase_centralization_3 = yes` | Increase centralisation (level 3) |
| `increase_centralization_4 = yes` | Increase centralisation (max) |

<hr/>

<a id="demographics"></a>
## Демография

### Половозрастная пирамида

| Эффект | Уровень |
|---|---|
| `set_population_pyramid_1 = yes` | Growing population pyramid |
| `set_population_pyramid_2 = yes` | Stable population pyramid |
| `set_population_pyramid_3 = yes` | Shrinking population pyramid |

<hr/>

<a id="birth-policy"></a>
## Политика рождаемости

| Эффект | Уровень |
|---|---|
| `set_encourage_birth = yes` | Encourage birth |
| `set_no_birth_control = yes` | No birth control |
| `set_discourage_birth = yes` | Discourage birth |
| `set_ban_abortion = yes` | Ban abortion |
| `set_no_abortion_control = yes` | No abortion restrictions |
| `set_encourage_abortion = yes` | Encourage abortion access |

<hr/>

<a id="weapons-law"></a>
## Закон об оружия

| Эффект | Уровень |
|---|---|
| `set_ban_weapons = yes` | Ban weapons |
| `set_allow_weapons = yes` | Allow private ownership |
| `set_regulate_weapons = yes` | Regulate weapons |
