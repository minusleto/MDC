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

<div style="overflow-x:auto">
<table style="width:100%; border-collapse:collapse; font-size:0.82em; line-height:1.25">
<thead>
<tr style="background:#2d2d2d; color:#fff">
<th style="padding:3px 8px; text-align:left; width:2.5em">#</th>
<th style="padding:3px 8px; text-align:left">Tag</th>
<th style="padding:3px 8px; text-align:left">Outlook</th>
</tr>
</thead>
<tbody>
<tr><td colspan="3" style="padding:3px 8px; background:#5B9BD5; color:#000; font-weight:600">Western (0–3)</td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">0</td><td style="padding:2px 8px"><code style="color:inherit">Western_Autocracy</code></td><td style="padding:2px 8px">Pro-Western Autocrats</td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">1</td><td style="padding:2px 8px"><code style="color:inherit">conservatism</code></td><td style="padding:2px 8px">Conservatives</td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">2</td><td style="padding:2px 8px"><code style="color:inherit">liberalism</code></td><td style="padding:2px 8px">Liberals</td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">3</td><td style="padding:2px 8px"><code style="color:inherit">socialism</code></td><td style="padding:2px 8px">Social Democrats</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#70AD47; color:#000; font-weight:600">Reactionaries (4–9)</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">4</td><td style="padding:2px 8px"><code style="color:inherit">Communist-State</code></td><td style="padding:2px 8px">Communists</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">5</td><td style="padding:2px 8px"><code style="color:inherit">anarchist_communism</code></td><td style="padding:2px 8px">Left-Wing Radicalism</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">6</td><td style="padding:2px 8px"><code style="color:inherit">Conservative</code></td><td style="padding:2px 8px">Reactionaries</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">7</td><td style="padding:2px 8px"><code style="color:inherit">Autocracy</code></td><td style="padding:2px 8px">Autocrats</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">8</td><td style="padding:2px 8px"><code style="color:inherit">Mod_Vilayat_e_Faqih</code></td><td style="padding:2px 8px">Moderate Shiite Revolutionaries</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">9</td><td style="padding:2px 8px"><code style="color:inherit">Vilayat_e_Faqih</code></td><td style="padding:2px 8px">Hardline Shiite Revolutionaries</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#757171; color:#000; font-weight:600">Salafism (10–11)</td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 8px">10</td><td style="padding:2px 8px"><code style="color:inherit">Kingdom</code></td><td style="padding:2px 8px">Wahhabi Monarchist</td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 8px">11</td><td style="padding:2px 8px"><code style="color:inherit">Caliphate</code></td><td style="padding:2px 8px">Salafi Jihadism</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#E7E6E6; color:#000; font-weight:600; border-top:1px solid #ccc; border-bottom:1px solid #ccc">Non-Aligned (12–19)</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">12</td><td style="padding:2px 8px"><code style="color:inherit">Neutral_Muslim_Brotherhood</code></td><td style="padding:2px 8px">Moderate Islamist</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">13</td><td style="padding:2px 8px"><code style="color:inherit">Neutral_Autocracy</code></td><td style="padding:2px 8px">Non-aligned Autocrats</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">14</td><td style="padding:2px 8px"><code style="color:inherit">Neutral_conservatism</code></td><td style="padding:2px 8px">Conservatives</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">15</td><td style="padding:2px 8px"><code style="color:inherit">oligarchism</code></td><td style="padding:2px 8px">Oligarchs</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">16</td><td style="padding:2px 8px"><code style="color:inherit">Neutral_Libertarian</code></td><td style="padding:2px 8px">Libertarians</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">17</td><td style="padding:2px 8px"><code style="color:inherit">Neutral_green</code></td><td style="padding:2px 8px">Greens</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">18</td><td style="padding:2px 8px"><code style="color:inherit">neutral_Social</code></td><td style="padding:2px 8px">Socialist Democrats</td></tr>
<tr style="background:#E7E6E6; color:#000"><td style="padding:2px 8px">19</td><td style="padding:2px 8px"><code style="color:inherit">Neutral_Communism</code></td><td style="padding:2px 8px">Communists</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#C65911; color:#000; font-weight:600">Nationalist (20–23)</td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">20</td><td style="padding:2px 8px"><code style="color:inherit">Nat_Populism</code></td><td style="padding:2px 8px">Right Wing Populists</td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">21</td><td style="padding:2px 8px"><code style="color:inherit">Nat_Fascism</code></td><td style="padding:2px 8px">Fascists</td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">22</td><td style="padding:2px 8px"><code style="color:inherit">Nat_Autocracy</code></td><td style="padding:2px 8px">Military</td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">23</td><td style="padding:2px 8px"><code style="color:inherit">Monarchist</code></td><td style="padding:2px 8px">Monarchist</td></tr>
</tbody>
</table>
</div>

For adding a new party/leader to the game (editing files, icons, localization), see the [Subideologies & Parties](../../guides/subideologies/) guide.
