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
<tr><td colspan="3" style="padding:3px 8px; background:#4472C4; color:#fff; font-weight:600">Western (0–3)</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">0</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Western_Autocracy</code></td><td style="padding:2px 8px">Pro-Western Autocracy</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">1</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">conservatism</code></td><td style="padding:2px 8px">Conservatism</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">2</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">liberalism</code></td><td style="padding:2px 8px">Liberalism</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">3</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">socialism</code></td><td style="padding:2px 8px">Social Democracy</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#6AA84F; color:#fff; font-weight:600">Reactionaries (4–9)</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">4</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Communist-State</code></td><td style="padding:2px 8px">Communism</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">5</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">anarchist_communism</code></td><td style="padding:2px 8px">Left-Wing Radicals</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">6</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Conservative</code></td><td style="padding:2px 8px">Reactionaries</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">7</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Autocracy</code></td><td style="padding:2px 8px">Autocracy</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">8</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Mod_Vilayat_e_Faqih</code></td><td style="padding:2px 8px">Moderate Shiite Revolutionaries</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">9</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Vilayat_e_Faqih</code></td><td style="padding:2px 8px">Shiite Revolutionaries</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#666666; color:#fff; font-weight:600">Salafism (10–11)</td></tr>
<tr style="background:#E3E3E3; color:#333"><td style="padding:2px 8px">10</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Kingdom</code></td><td style="padding:2px 8px">Kingdom</td></tr>
<tr style="background:#E3E3E3; color:#333"><td style="padding:2px 8px">11</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Caliphate</code></td><td style="padding:2px 8px">Caliphate</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#f0f0f0; color:#333; font-weight:600; border-top:1px solid #ccc; border-bottom:1px solid #ccc">Non-Aligned (12–19)</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">12</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Neutral_Muslim_Brotherhood</code></td><td style="padding:2px 8px">Moderate Islamism</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">13</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Neutral_Autocracy</code></td><td style="padding:2px 8px">Autocracy</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">14</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Neutral_conservatism</code></td><td style="padding:2px 8px">Conservatism</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">15</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">oligarchism</code></td><td style="padding:2px 8px">Oligarchy</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">16</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Neutral_Libertarian</code></td><td style="padding:2px 8px">Libertarians</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">17</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Neutral_green</code></td><td style="padding:2px 8px">Greens</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">18</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">neutral_Social</code></td><td style="padding:2px 8px">Social Democracy</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">19</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Neutral_Communism</code></td><td style="padding:2px 8px">Communism</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#C0722D; color:#fff; font-weight:600">Nationalist (20–23)</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">20</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Nat_Populism</code></td><td style="padding:2px 8px">Populism</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">21</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Nat_Fascism</code></td><td style="padding:2px 8px">Fascism</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">22</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Nat_Autocracy</code></td><td style="padding:2px 8px">Military Junta</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">23</td><td style="padding:2px 8px"><code style="color:inherit; background:rgba(0,0,0,.15); padding:1px 5px; border-radius:4px">Monarchist</code></td><td style="padding:2px 8px">Monarchism</td></tr>
</tbody>
</table>
</div>

For adding a new party/leader to the game (editing files, icons, localization), see the [Subideologies & Parties](../../guides/subideologies/) guide.
