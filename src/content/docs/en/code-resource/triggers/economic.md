---
title: Economy
description: "Scripted triggers for the MDC economic system: treasury, taxes, deficit/surplus, debt-to-GDP, economic organizations."
---

Most triggers on this page start with `ai_`/`AI_` — these are triggers the AI uses to evaluate its own economic health (does it need debt, should it raise taxes, etc.). Technically they're ordinary triggers you can use anywhere (focuses, decisions, effects) — the `ai_` prefix carries no restriction, it's just a naming convention from the source files.

## Treasury

```
has_available_treasury = yes
```

Checks whether the country has spare money: if GDP (`gdp_total`) is above 100, it requires `treasury > 10`; otherwise it's enough that `treasury > debt` (treasury exceeds debt).

### Low / high treasury relative to living standards

`ai_has_low_treasury` and `ai_has_high_treasury` compare `treasury` against a threshold that scales with `gdp_per_capita` (the richer the country per capita, the higher the bar):

| `gdp_per_capita` | Low treasury (`treasury <`) | High treasury (`treasury >`) |
|---|---|---|
| > 200 | 175.0 | 800.0 |
| 140–200 | 124.6 | 560.0 |
| 90–140 | 78.75 | 360.0 |
| 50–90 | 58.1 | 200.0 |
| 20–30 | 35.0 | 80.0 |
| 15–20 | 26.25 | 60.0 |
| 10–15 | 17.5 | 40.0 |
| 7–10 | 24.5 | 28.0 |
| 4–7 | 14.0 | 16.0 |
| 2–4 | 7.0 | 8.0 |
| < 2 | 3.5 | 4.0 |

:::caution
The source has one bracket (`gdp_per_capita` 20–30) duplicated twice with identical conditions (`< 30` and `> 29.999`, then again `< 30` and `> 19.999`) — that's not a doc error, it's how the source file is written; the table above shows the working result.
:::

## Central bank rate

```
ai_has_high_interest = yes
ai_has_low_interest = yes
```

`interest_rate > 3.50` / `interest_rate < 2.00`. Marked *deprecated* in the source ("IR high should be the same regardless of government") — kept for backward compatibility; for new checks prefer `ai_has_minor/moderate/major_economic_problems` below, where the threshold is already adapted to the actual situation.

## Taxes (depend on the ruling ideology)

Thresholds depend on which of the 4 ideological blocs [from Politics](./political/#ideological-blocs-by-political-stance) is in power (nationalism/salafism aren't covered — there are no thresholds for them in the source).

### Income tax (`population_tax_rate`)

| Trigger | Communists | Socialists | Liberals | Conservatives |
|---|---|---|---|---|
| `AI_has_high_population_taxes` | > 44 | > 39 | > 29 | > 24 |
| `AI_has_moderate_population_taxes` | 35–44 | 29–39 | 15–29 | 10–24 |
| `AI_has_low_population_taxes` | < 35 | < 30 | < 16 | < 11 |

### Corporate tax (`corporate_tax_rate`)

| Trigger | Communists | Socialists | Liberals | Conservatives |
|---|---|---|---|---|
| `ai_has_high_corporate_taxes` | > 35 | > 25 | > 20 | > 15 |
| `ai_has_medium_corporate_taxes` | 19–36 | > 25¹ | > 20¹ | > 15¹ |
| `ai_has_low_corporate_taxes` | < 20 | < 15 | < 10 | < 5 |

¹ For socialists/liberals/conservatives, the "medium" condition in the source is literally identical to the "high" condition (a copy-paste bug) — don't look for hidden meaning, that's just how the file reads.

## Budget balance

`treasury_rate` — the rate of change of the treasury (roughly "% of GDP per week/month").

### General thresholds

| Trigger | Condition |
|---|---|
| `ai_has_deficit` | `treasury_rate < -0.05` |
| `ai_has_high_deficit` | `treasury_rate < -3.00` |
| `ai_has_surplus` | `treasury_rate > 0.05` |
| `ai_has_high_surplus` | `treasury_rate > 10.00` |

### "Acceptable" deficit/surplus by ideology

| Trigger | Communists | Socialists | Liberals | Conservatives |
|---|---|---|---|---|
| `ai_has_acceptable_deficit` | > −7.50 | > −6.75 | > −5.50 | > −3.00 |
| `ai_has_acceptable_surplus` | > 1.00 | > 2.00 | > 2.75 | > 3.50 |

### "Acceptable" deficit/surplus by factory count

The larger `num_of_factories`, the wider the acceptable `treasury_rate` range:

| Factories | Deficit acceptable (`treasury_rate >`, and `< 0`) | Surplus is normal (`treasury_rate >`) |
|---|---|---|
| < 15 | −0.35 | 0.35 |
| 15–29 | −1.00 | 0.60 |
| 30–44 | −1.50 | 1.25 |
| 45–59 | −1.75 | 2.25 |
| 60–99 | −2.00 | 3.00 |
| 100–149 | −2.50 | 3.50 |
| 150–199 | −3.00 | 5.00 |
| ≥ 200 | −3.50 | 6.50 |

## Combined "country in trouble" indicators

`ai_has_minor_economic_problems` / `ai_has_moderate_economic_problems` / `ai_has_major_economic_problems` combine a high central bank rate with a deficit. The US and China get a separate, lower rate threshold since their currencies are reserve currencies:

| Trigger | `interest_rate` (US/China) | `interest_rate` (everyone else) | and also `treasury_rate <` |
|---|---|---|---|
| `ai_has_minor_economic_problems` | > 0.6 | > 6.00 | −2.50 |
| `ai_has_moderate_economic_problems` | > 1.2 | > 8.999 | −5.00 |
| `ai_has_major_economic_problems` | > 1.999 | > 11.999 | −9.00 |

```
ai_economic_urgent_action = yes
```
`interest_rate < 18.00` **AND** (`budget_array^6 > 40.00` **OR** `interest_rate > 10.00`) — "weekly interest payments are eating too much of the budget, but the situation isn't fully hopeless yet".

## Debt to GDP

`gdp_debt_ratio_lower_N` and `gdp_debt_ratio_higher_N` — a set of thresholds in steps of 5 from **5 to 200**: `gdp_debt_ratio_lower_5`, `gdp_debt_ratio_higher_5`, `gdp_debt_ratio_lower_10`, `gdp_debt_ratio_higher_10`, … up to `_195`/`_200`. 80 ready-made triggers in total.

```
gdp_debt_ratio_higher_60 = yes
```

## Economic organizations and blocs

Two different triggers, both comparing **two scopes** (not just the current country on its own), so they're written from `FROM`/`PREV`/`ROOT`:

```
ai_has_same_organization = yes       # FROM and THIS — compares against the country that fired the effect/trigger
in_same_economic_faction = yes       # PREV and THIS — compares against a previously saved scope
```

`ai_has_same_organization` (from `00_economic_triggers.txt`) checks membership in the same organization: NATO, EU, African Union, ECOWAS, GCC, SCO, Commonwealth of Nations.

:::caution
In the source, the "ASEAN" block inside `ai_has_same_organization` is literally copy-pasted from the NATO block (`has_idea = NATO_member` instead of `ASEAN_member`) — meaning there's **no actual ASEAN check** there. That's a mod bug, not a doc error.
:::

`in_same_economic_faction` (separate `MDDC_economic_faction_triggers.txt` file) covers a much longer list of blocs: EU, GUAM, ASEAN, League of Arab States, OAU, African Union, ECOWAS, Commonwealth of Nations, CIS, EAEU, MERCOSUR, GCC, BRICS, ALBA, USAID (US only), SCO, Visegrád Group, Three Seas Initiative.

## Miscellaneous

| Trigger | Condition |
|---|---|
| `ai_need_debt` | `has_war = yes` OR `has_civil_war = yes` |
| `bankruptcy_default_intervention_trigger` | A complex scope-specific check (a neighbor with an interventionist policy, or same group with regional interventionism, or global interventionism/neo-imperialism) **AND NOT** already granted political concessions to ROOT, **AND NOT** already in the same faction as ROOT, **AND NOT** both are EU members |
