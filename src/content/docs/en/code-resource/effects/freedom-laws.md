---
title: Law Changes
description: "Effects for changing laws: civil freedoms (censorship, assembly, internet, religion, LGBT, trade unions), demographics and birth policy, weapons, economic laws (spending, trade, migration, bureaucracy)"
---

## Law Changes

Each category below is an idea group with several tiers. The matching `set_*` effect switches the country to that tier and, if it's already there, grants a one-time bonus (PP/stability/popularity). The `increase_*` / `decrease_*` effects shift the law one tier up or down the scale.

### Contents

- [Civil Freedom Laws](#civil-freedom-laws)
- [Demographics and Birth Policy](#demographics-and-birth)
- [Weapons](#weapons)
- [Economic Laws](#economic-laws)

<hr/>

<a id="civil-freedom-laws"></a>
## Civil Freedom Laws

<a id="censorship-laws"></a>
### Censorship (censorship_laws)

| Effect | Tier |
|---|---|
| `set_freedom_of_speech = yes` | Freedom of Speech |
| `set_ban_on_extremism = yes` | Ban on Extremism |
| `set_censorship = yes` | State Censorship |
| `set_minitrue = yes` | Minitrue |

<a id="right-assembly"></a>
### Freedom of Assembly (right_assembly)

| Effect | Tier |
|---|---|
| `set_free_assembly = yes` | Free Assembly |
| `set_notification_regime = yes` | Notification Regime |
| `set_curfew = yes` | Curfew |

<a id="internet-law"></a>
### Internet (internet_law)

| Effect | Tier |
|---|---|
| `set_internet_freedom = yes` | Free Internet |
| `set_internet_censorship = yes` | Internet Censorship |
| `set_white_lists = yes` | White Lists |
| `set_national_internet = yes` | National Internet |
| `set_no_internet = yes` | Well, let's cut the power |

<a id="freedom-religion"></a>
### Religion (freedom_religion)

| Effect | Tier |
|---|---|
| `set_gov_atheism = yes` | State Atheism |
| `set_secularism = yes` | Secular State |
| `set_state_religion = yes` | State Religion |
| `set_hierocracy = yes` | Hierocracy |

<a id="lgbt-laws"></a>
### LGBT (lgbt_laws)

| Effect | Tier |
|---|---|
| `set_nato_gay_world = yes` | Full inclusion, actively promoted |
| `set_civil_partnerships = yes` | Not promoted, but actively supported |
| `set_traditional_values = yes` | Not promoted and not supported |
| `set_ban_lgbt = yes` | Criminalized |

<a id="freedom-trade-unions"></a>
### Trade Unions (freedom_trade_unions)

| Effect | Tier |
|---|---|
| `set_ghent_system = yes` | The Ghent System |
| `set_free_unions = yes` | Free Trade Unions |
| `set_gov_unions = yes` | State Unions |
| `set_ban_unions = yes` | Trade Unions Banned |

<hr/>

<a id="demographics-and-birth"></a>
## Demographics and Birth Policy

<a id="demographics"></a>
### Population Pyramid

| Effect | Tier |
|---|---|
| `set_population_pyramid_1 = yes` | Growing Population Pyramid |
| `set_population_pyramid_2 = yes` | Stable Population Pyramid |
| `set_population_pyramid_3 = yes` | Shrinking Population Pyramid |

<a id="birth-policy"></a>
### Birth Policy

| Effect | Tier |
|---|---|
| `set_encourage_birth = yes` | Encourage Birth |
| `set_no_birth_control = yes` | No Birth Control |
| `set_discourage_birth = yes` | Discourage Birth |
| `set_ban_abortion = yes` | Ban Abortion |
| `set_no_abortion_control = yes` | No Abortion Restrictions |
| `set_encourage_abortion = yes` | Encourage Abortion Access |

<hr/>

<a id="weapons"></a>
## Weapons

<a id="weapons-law"></a>
### Weapons Law

| Effect | Tier |
|---|---|
| `set_ban_weapons = yes` | Ban Weapons |
| `set_allow_weapons = yes` | Allow Private Ownership |
| `set_regulate_weapons = yes` | Regulate Weapons |

<hr/>

<a id="economic-laws"></a>
## Economic Laws

These effects used to live on the "Economy" page — moved here since they are laws (idea groups with tiers), not general economic effects.

<a id="increasedecrease-bureaucracy-law"></a>
### Increase/Decrease Bureaucracy Law

Increases or decreases the nation's current Bureaucracy Spending Law

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
### Increase/Decrease Social Spending

Increase or decreases the nation's current Social Spending Law

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
### Increase/Decrease Education Spending

Increase or decreases the nation's current Education Spending Law

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
### Increase/Decrease Health Spending

Increase or decreases the nation's current Healthcare Spending Law

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
### Increase/Decrease Police Spending

Increase or decreases the nation's current Police Spending Law

```
increase_policing_budget = yes
increase_policing_budget_2 = yes
increase_policing_budget_2 = yes
increase_policing_budget_4 = yes
decrease_policing_budget = yes
decrease_policing_budget_2 = yes
```

<a id="increasedecrease-trade-law"></a>
### Increase/Decrease Trade Law

The following are for increasing and decreasing the "Trade Law" of your nation:

```
increase_exports = yes
decrease_exports = yes
set_exports_to_min = yes
set_exports_to_max = yes
```

<a id="increasedecrease-military-spending-law"></a>
### Increase/Decrease Military Spending Law

The following are for increasing your military spending law.

```
increase_military_spending = yes
decrease_military_spending = yes
decrease_military_spending_2 = yes
sizeable_military_spending = yes # Sets your military spending to sizeable
```

<a id="increasedecrease-migration-law"></a>
### Increase/Decrease Migration Law

The following are for increasing and decreasing your Migration and Border Regulations laws

```
increase_migration_law = yes
decrease_migration_law = yes
```
