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
- [Spending and Other Economic Laws](#economic-laws)

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
**Population Pyramid**

| Effect | Tier |
|---|---|
| `set_population_pyramid_1 = yes` | Growing Population Pyramid |
| `set_population_pyramid_2 = yes` | Stable Population Pyramid |
| `set_population_pyramid_3 = yes` | Shrinking Population Pyramid |

<a id="birth-policy"></a>
**Birth Policy**

| Effect | Tier |
|---|---|
| `set_encourage_birth = yes` | Encourage Birth |
| `set_no_birth_control = yes` | No Birth Control |
| `set_discourage_birth = yes` | Discourage Birth |

<a id="abortion-policy"></a>
**Abortion Policy**

| Effect | Tier |
|---|---|
| `set_ban_abortion = yes` | Ban Abortion |
| `set_no_abortion_control = yes` | No Abortion Restrictions |
| `set_encourage_abortion = yes` | Encourage Abortion Access |

<hr/>

<a id="weapons"></a>
## Weapons

<a id="weapons-law"></a>
**Weapons Law**

| Effect | Tier |
|---|---|
| `set_ban_weapons = yes` | Ban Weapons |
| `set_allow_weapons = yes` | Allow Private Ownership |
| `set_regulate_weapons = yes` | Regulate Weapons |

<hr/>

<a id="economic-laws"></a>
## Spending and Other Economic Laws

Laws that govern government spending (bureaucracy, social spending, education, healthcare, policing budgets), plus the trade, military spending, and migration laws.

<a id="bureaucracy-law"></a>
**Bureaucracy / Centralisation**

| Effect | Application |
|---|---|
| `decrease_centralization = yes` | Decrease centralisation |
| `decrease_centralization_2 = yes` | Decrease centralisation (level 2) |
| `decrease_centralization_3 = yes` | Decrease centralisation (level 3) |
| `increase_centralization = yes` | Increase centralisation |
| `increase_centralization_2 = yes` | Increase centralisation (level 2) |
| `increase_centralization_3 = yes` | Increase centralisation (level 3) |
| `increase_centralization_4 = yes` | Increase centralisation (max) |

<a id="education-spending"></a>
**Education**

| Effect | Application |
|---|---|
| `increase_education_budget = yes` | Increase education spending |
| `increase_education_budget_2 = yes` | Increase education spending (level 2) |
| `increase_education_budget_3 = yes` | Increase education spending (level 3) |
| `increase_education_budget_4 = yes` | Increase education spending (max) |
| `decrease_education_budget = yes` | Decrease education spending |
| `decrease_education_budget_2 = yes` | Decrease education spending (level 2) |
| `max_education_budget = yes` | Maximise education spending |

<a id="healthcare-spending"></a>
**Healthcare**

| Effect | Application |
|---|---|
| `increase_healthcare_budget = yes` | Increase healthcare spending |
| `increase_healthcare_budget_2 = yes` | Increase healthcare spending (level 2) |
| `increase_healthcare_budget_3 = yes` | Increase healthcare spending (level 3) |
| `increase_healthcare_budget_4 = yes` | Increase healthcare spending (max) |
| `decrease_healthcare_budget = yes` | Decrease healthcare spending |
| `decrease_healthcare_budget_2 = yes` | Decrease healthcare spending (level 2) |
| `max_healthcare_budget = yes` | Maximise healthcare spending |

<a id="social-spending"></a>
**Social Spending**

| Effect | Application |
|---|---|
| `increase_social_spending = yes` | Increase social spending |
| `increase_social_spending_2 = yes` | Increase social spending (level 2) |
| `increase_social_spending_3 = yes` | Increase social spending (level 3) |
| `increase_social_spending_4 = yes` | Increase social spending (max) |
| `decrease_social_spending = yes` | Decrease social spending |
| `decrease_social_spending_2 = yes` | Decrease social spending (level 2) |
| `max_social_spending = yes` | Maximise social spending |

<a id="policing-spending"></a>
**Policing**

| Effect | Application |
|---|---|
| `increase_policing_budget = yes` | Increase policing spending |
| `increase_policing_budget_2 = yes` | Increase policing spending (level 2) |
| `increase_policing_budget_3 = yes` | Increase policing spending (level 3) |
| `increase_policing_budget_4 = yes` | Increase policing spending (max) |
| `decrease_policing_budget = yes` | Decrease policing spending |
| `decrease_policing_budget_2 = yes` | Decrease policing spending (level 2) |

<a id="trade-law"></a>
**Trade Law**

| Effect | Application |
|---|---|
| `increase_exports = yes` | Increase exports / trade law |
| `decrease_exports = yes` | Decrease exports / trade law |
| `set_exports_to_min = yes` | Set exports to minimum |
| `set_exports_to_max = yes` | Set exports to maximum |

<a id="military-spending-law"></a>
**Military Spending**

| Effect | Application |
|---|---|
| `increase_military_spending = yes` | Increase military spending |
| `decrease_military_spending = yes` | Decrease military spending |
| `decrease_military_spending_2 = yes` | Decrease military spending (level 2) |
| `sizeable_military_spending = yes` | Set sizeable military spending |

<a id="migration-law"></a>
**Migration Law**

| Effect | Application |
|---|---|
| `increase_migration_law = yes` | Loosen migration law |
| `decrease_migration_law = yes` | Tighten migration law |
