---
title: Politics
description: "MDC ideologies, coalitions, elections and subideologies"
---

## MDC Ideologies

The base game's 5 ideology groups are reflavored for the MDC setting:

| Tag | MDC Ideology |
|---|---|
| `democratic` | Westernizers |
| `communism` | Reactionaries |
| `neutrality` | Neutrals |
| `nationalist` | Nationalists |
| `fascism` | Salafists |

Each group contains several subideologies (parties) — these are the actual political forces shown in-game for a country. See [Subideologies](#subideologies) below.

## Coalitions and Elections

A country's ruling party is its current subideology. Alongside it, up to two more allied parties (`col_one`, `col_two`, `col_three`) can join the governing coalition, determining coalition makeup during elections and power transitions.

The election threshold is the minimum popularity a party needs to be counted toward coalitions and elections. It can be changed via script.

Parties can be individually allowed or banned for a given country — for example, if a subideology shouldn't be able to participate in a nation's political life for narrative reasons.

:::note
This page covers the system's own logic. The scripted effects that drive it (changing the ruling party, coalitions, popularity, banning parties, etc.) are documented in [Effects → Politics](../../effects/politics/).
:::

<a id="subideologies"></a>
## Subideologies

List of subideology slots (`party_index`, 0–23), grouped by ideology. The index is the value used in `party_index`, `rul_party_temp`, `col_one`/`col_two`/`col_three`, and similar variables.

:::caution
These slots cannot be used directly in console commands.
:::

### Western (0–3)

| Index | Tag | Party |
|---|---|---|
| 0 | `Western_Autocracy` | Pro-Western Autocrats |
| 1 | `conservatism` | Conservatives |
| 2 | `liberalism` | Liberals |
| 3 | `socialism` | Social Democrats |

### Emerging (4–9)

| Index | Tag | Party |
|---|---|---|
| 4 | `Communist-State` | Emerging Communists |
| 5 | `anarchist_communism` | Left-Wing Radicalism |
| 6 | `Conservative` | Reactionaries |
| 7 | `Autocracy` | Emerging Autocrats |
| 8 | `Mod_Vilayat_e_Faqih` | Moderate Shiite Revolutionaries |
| 9 | `Vilayat_e_Faqih` | Hardline Shiite Revolutionaries |

### Salafism (10–11)

| Index | Tag | Party |
|---|---|---|
| 10 | `Kingdom` | Wahhabi Monarchist |
| 11 | `Caliphate` | Saafi Jihadism |

### Non-Aligned (12–19)

| Index | Tag | Party |
|---|---|---|
| 12 | `Neutral_Muslim_Brotherhood` | Moderate Islamist |
| 13 | `Neutral_Autocracy` | Non-Aligned Autocrats |
| 14 | `Neutral_conservatism` | Conservatives |
| 15 | `oligarchism` | Oligarchs |
| 16 | `Neutral_Libertarian` | Libertarians |
| 17 | `Neutral_green` | Greens |
| 18 | `neutral_Social` | Socialist Democrats |
| 19 | `Neutral_Communism` | Communists |

### Nationalist (20–23)

| Index | Tag | Party |
|---|---|---|
| 20 | `Nat_Populism` | Right Wing Populists |
| 21 | `Nat_Fascism` | Fascists |
| 22 | `Nat_Autocracy` | Military Junta |
| 23 | `Monarchist` | Absolutist Monarchist |

For adding a new party/leader to the game (editing files, icons, localization), see the [Subideologies & Parties](../../guides/subideologies/) guide.
