---
title: Politics
description: "Scripted triggers for the MDC political system: parties, coalitions, ideological blocs, popularity thresholds."
---

## Base country ideology

The vanilla `has_government = <tag>` trigger works as usual, with any of the 5 MDC ideology tags:

```
has_government = democratic   # Westernizers
has_government = communism    # Reactionaries (also called "emerging" in the files)
has_government = neutrality   # Neutrals
has_government = nationalist  # Nationalists
has_government = fascism      # Salafists (also called "totalitarian/caliphate" in the files)
```

For the tag-to-group mapping and the full list of subideologies (0–23), see [Systems → Politics](../systems/politics/#subideologies).

## Party in power / in coalition

Besides the raw `is_in_array = { ruling_party = N }` index check, every one of the 24 subideologies has a named trigger with a tooltip — use these in scripts instead of raw indices.

```
western_liberals_are_in_power = yes
```

To check the **opposite** ("party is not in power"), the mod has a dedicated named trigger for that — no need to wrap it in `NOT` manually:

```
western_liberals_are_not_in_power = yes
```

The full table of these is right below the main one, in the [Party not in power / not in coalition](#party-not-in-power--not-in-coalition) section further down. The only case with no ready-made trigger, requiring a `NOT` wrapper, is "not in coalition" on its own (regardless of ruling status) — see the footnote on that table.

⚠️ **Bug in the mod's source**: for party 12 (Moderate Islamist), the "in power or coalition" trigger in `00_political_triggers.txt` is named `salafist_caliphate_in_power_or_coalition_TT` — clearly copy-pasted from the neighboring party 11 (Salafi Jihadism) trigger and never renamed. There is no correctly-named trigger (e.g. `neutrality_neutral_muslim_brotherhood_in_power_or_coalition`) for this party in the mod — use `salafist_caliphate_in_power_or_coalition_TT`, misleading as the name is.

<div style="overflow:auto; max-height:70vh; border:1px solid #444">
<table style="width:100%; border-collapse:collapse; font-size:0.82em; line-height:1.25">
<thead>
<tr style="background:#2d2d2d; color:#fff; position:sticky; top:0"><th style="padding:3px 8px; text-align:left; width:2.5em">#</th><th style="padding:3px 8px; text-align:left">Party</th><th style="padding:3px 8px; text-align:left">In power</th><th style="padding:3px 8px; text-align:left">In coalition</th><th style="padding:3px 8px; text-align:left">In power or coalition</th></tr>
</thead>
<tbody>
<tr><td colspan="5" style="padding:3px 8px; background:#5B9BD5; color:#000; font-weight:600">Western (0–3)</td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">0</td><td style="padding:2px 8px">Pro-Western Autocrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_autocrats_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_autocrats_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_autocrats_are_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">1</td><td style="padding:2px 8px">Conservatives</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_conservatism_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_conservatism_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_conservatism_are_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">2</td><td style="padding:2px 8px">Liberals</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_liberals_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_liberals_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_liberal_are_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">3</td><td style="padding:2px 8px">Social Democrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_social_democrats_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_social_democrats_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_socialism_are_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#70AD47; color:#000; font-weight:600">Reactionaries (4–9)</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">4</td><td style="padding:2px 8px">Emerging Communists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_communist_state_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_communist_state_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_communist_state_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">5</td><td style="padding:2px 8px">Left-Wing Radicalism</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_anarchist_communism_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_anarchist_communism_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_anarchist_communism_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">6</td><td style="padding:2px 8px">Reactionaries</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_reactionaries_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_reactionaries_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_conservative_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">7</td><td style="padding:2px 8px">Emerging Autocrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_autocracy_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_autocracy_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_autocracy_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">8</td><td style="padding:2px 8px">Moderate Shiites</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_moderate_shiite_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_moderate_shiite_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_mod_vilyat_e_faqih_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">9</td><td style="padding:2px 8px">Hardline Shiites</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_hardline_shiite_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_hardline_shiite_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_vilayat_e_faqih_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#757171; color:#000; font-weight:600">Salafism (10–11)</td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 8px">10</td><td style="padding:2px 8px">Wahhabi Monarchist</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_kingdom_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_kingdom_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_kingdom_in_power_or_coalition</code></td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 8px">11</td><td style="padding:2px 8px">Saafi Jihadism</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_caliphate_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_caliphate_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_caliphate_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#A6A6A6; color:#000; font-weight:600">Non-Aligned (12–19)</td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">12</td><td style="padding:2px 8px">Moderate Islamist</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_muslim_brotherhood_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_muslim_brotherhood_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_caliphate_in_power_or_coalition_TT</code> ⚠️</td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">13</td><td style="padding:2px 8px">Non-Aligned Autocrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_autocracy_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_autocracy_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_autocracy_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">14</td><td style="padding:2px 8px">Conservatives</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_conservatism_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_conservatism_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_conservatism_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">15</td><td style="padding:2px 8px">Oligarchs</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_oligarch_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_oligarch_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_oligarchism_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">16</td><td style="padding:2px 8px">Libertarians</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_libertarians_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_libertarians_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_libertarian_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">17</td><td style="padding:2px 8px">Greens</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_green_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_green_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_green_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">18</td><td style="padding:2px 8px">Socialist Democrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_social_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_social_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_social_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">19</td><td style="padding:2px 8px">Communists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_communism_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_communism_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_communism_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#C65911; color:#000; font-weight:600">Nationalist (20–23)</td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">20</td><td style="padding:2px 8px">Right Wing Populists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_right_wing_populists_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_right_wing_populists_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_right_wing_populists_are_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">21</td><td style="padding:2px 8px">Fascists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_fascist_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_fascist_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_fascists_are_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">22</td><td style="padding:2px 8px">Military Junta</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_military_junta_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_military_junta_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_military_junta_are_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">23</td><td style="padding:2px 8px">Absolutist Monarchist</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_monarchists_are_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_monarchists_are_in_coalition</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_monarchists_are_in_power_or_coalition</code></td></tr>
</tbody>
</table>
</div>

### Party not in power / not in coalition

Unlike the positive triggers, the mod has dedicated named triggers for "not in power" and "neither in power nor coalition" — use those. There is no dedicated trigger for "not in coalition" alone, so that column uses a `NOT` wrapper (see footnote).

<div style="overflow:auto; max-height:70vh; border:1px solid #444">
<table style="width:100%; border-collapse:collapse; font-size:0.82em; line-height:1.25">
<thead>
<tr style="background:#2d2d2d; color:#fff; position:sticky; top:0"><th style="padding:3px 8px; text-align:left; width:2.5em">#</th><th style="padding:3px 8px; text-align:left">Party</th><th style="padding:3px 8px; text-align:left">Not in power</th><th style="padding:3px 8px; text-align:left">Not in coalition¹</th><th style="padding:3px 8px; text-align:left">Neither in power nor coalition</th></tr>
</thead>
<tbody>
<tr><td colspan="5" style="padding:3px 8px; background:#5B9BD5; color:#000; font-weight:600">Western (0–3)</td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">0</td><td style="padding:2px 8px">Pro-Western Autocrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_autocrats_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { western_autocrats_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_autocrats_are_not_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">1</td><td style="padding:2px 8px">Conservatives</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_conservatism_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { western_conservatism_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_conservative_are_not_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">2</td><td style="padding:2px 8px">Liberals</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_liberals_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { western_liberals_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_liberal_are_not_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 8px">3</td><td style="padding:2px 8px">Social Democrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_social_democrats_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { western_social_democrats_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">western_socialism_are_not_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#70AD47; color:#000; font-weight:600">Reactionaries (4–9)</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">4</td><td style="padding:2px 8px">Emerging Communists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_communist_state_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { emerging_communist_state_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_communist_state_not_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">5</td><td style="padding:2px 8px">Left-Wing Radicalism</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_anarchist_communism_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { emerging_anarchist_communism_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_anarchist_communism_not_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">6</td><td style="padding:2px 8px">Reactionaries</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_reactionaries_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { emerging_reactionaries_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_conservative_not_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">7</td><td style="padding:2px 8px">Emerging Autocrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_autocracy_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { emerging_autocracy_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_autocracy_not_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">8</td><td style="padding:2px 8px">Moderate Shiites</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_moderate_shiite_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { emerging_moderate_shiite_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_mod_vilyat_e_faqih_not_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 8px">9</td><td style="padding:2px 8px">Hardline Shiites</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_hardline_shiite_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { emerging_hardline_shiite_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">emerging_vilayat_e_faqih_not_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#757171; color:#000; font-weight:600">Salafism (10–11)</td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 8px">10</td><td style="padding:2px 8px">Wahhabi Monarchist</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_kingdom_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { salafist_kingdom_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_kingdom_not_in_power_or_coalition</code></td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 8px">11</td><td style="padding:2px 8px">Saafi Jihadism</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_caliphate_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { salafist_caliphate_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">salafist_caliphate_not_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#A6A6A6; color:#000; font-weight:600">Non-Aligned (12–19)</td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">12</td><td style="padding:2px 8px">Moderate Islamist</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_muslim_brotherhood_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_muslim_brotherhood_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_muslim_brotherhood_not_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">13</td><td style="padding:2px 8px">Non-Aligned Autocrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_autocracy_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_autocracy_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_autocracy_not_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">14</td><td style="padding:2px 8px">Conservatives</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_conservatism_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_conservatism_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutral_conservative_are_not_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">15</td><td style="padding:2px 8px">Oligarchs</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_oligarch_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_oligarch_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_oligarchism_not_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">16</td><td style="padding:2px 8px">Libertarians</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_libertarians_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_libertarians_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_libertarian_not_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">17</td><td style="padding:2px 8px">Greens</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_green_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_green_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_green_not_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">18</td><td style="padding:2px 8px">Socialist Democrats</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_social_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_social_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_social_not_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 8px">19</td><td style="padding:2px 8px">Communists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_communism_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { neutrality_neutral_communism_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">neutrality_neutral_communism_not_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 8px; background:#C65911; color:#000; font-weight:600">Nationalist (20–23)</td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">20</td><td style="padding:2px 8px">Right Wing Populists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_right_wing_populists_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { nationalist_right_wing_populists_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_right_wing_populists_are_not_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">21</td><td style="padding:2px 8px">Fascists</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_fascist_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { nationalist_fascist_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_fascists_are_not_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">22</td><td style="padding:2px 8px">Military Junta</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_military_junta_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { nationalist_military_junta_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_military_junta_are_not_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 8px">23</td><td style="padding:2px 8px">Absolutist Monarchist</td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_monarchists_are_not_in_power</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">NOT = { nationalist_monarchists_are_in_coalition = yes }</code></td><td style="padding:2px 8px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 5px; border-radius:4px">nationalist_monarchists_are_not_in_power_or_coalition</code></td></tr>
</tbody>
</table>
</div>

¹ There is no standalone trigger for "not in coalition" alone (regardless of ruling status) in the source — it uses `NOT = { <party>_are_in_coalition = yes }`.

:::caution
The source has inconsistent endings (`western_liberal_are_in_power_or_coalition` instead of `_liberals_`, `emerging_conservative_...` instead of `_reactionaries_`, `nationalist_fascist_...` instead of `_fascists_`) — that's not a doc typo, that's literally how the triggers are named in the mod. Copy the names from the table rather than guessing by pattern from a neighboring row.
:::

## Ideological blocs (by political stance)

Groups several parties by shared political stance — what you'd actually want to check in decisions/focuses instead of enumerating individual `is_in_array` checks.

| Stance | In power | In coalition | In power or coalition | Parties (indices) |
|---|---|---|---|---|
| Socialists | `has_socialist_government` | `has_socialist_in_coalition` | `has_socialist_government_or_in_coalition` | 3, 4, 5, 18, 19 |
| Communists | `has_communist_government` | `has_communist_in_coalition` | `has_communist_government_or_in_coalition` | 4, 5, 19 |
| Environmentalists | `has_environmentalist_government` | `has_environmentalist_in_coalition` | `has_environmentalist_government_or_in_coalition` | 17 (coalition variant also includes 5) |
| Liberals | `has_liberal_government` | `has_liberal_in_coalition` | `has_liberal_government_or_in_coalition` | 2, 16, 17 |
| Conservatives | `has_conservative_government` | `has_conservative_in_coalition` | `has_conservative_government_or_in_coalition` | 0, 1, 6, 7, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23 |
| Reactionaries | `has_reactionary_government` | `has_reactionary_in_coalition`¹ | `has_reactionary_government_or_in_coalition` | 0, 7, 10, 11, 13, 15, 20, 21, 22, 23 |
| Autocrats | `has_autocratic_government` | `has_autocratic_in_coalition` | `has_autocratic_government_or_in_coalition` | 0, 4, 7, 9, 10, 11, 13, 15, 19, 20, 21, 22, 23 |
| Totalitarians | `has_totalitarian_government` | `has_totalitarian_in_coalition` | `has_totalitarian_government_or_in_coalition` | 4, 11, 21 |
| Economically liberal | `has_economically_liberal_government` | `has_economically_liberal_in_coalition` | `has_economically_liberal_government_or_in_coalition`² | 1, 2, 14, 16 |

¹ For index 0 (Pro-Western Autocrats), the "in coalition" variant additionally requires `NOT = { has_country_leader_with_trait = western_technocrat }` — a technocrat leader disqualifies the party from being counted as reactionary even formally.
² `has_economically_liberal_government_or_in_coalition` is an `OR` of the two preceding triggers, not a separate index list.

Separately: `has_not_environmentalist_government_or_in_coalition` — a ready-made inversion of `has_environmentalist_government_or_in_coalition` (not a bare `NOT` wrapper).

## Whole ideological bloc (5 groups)

Matches the index boundaries of the groups from [Systems → Politics](../systems/politics/#subideologies):

| Trigger | Indices | Inversion |
|---|---|---|
| `has_western_aligned_government` | 0–3 | `not_has_western_aligned_government` |
| `has_emerging_aligned_government` | 4–9 | `not_has_emerging_aligned_government` |
| `has_salafist_government` | 10–11 | — |
| `has_neutral_government` | 12–19 | — |
| `has_nationalist_government` | 20–23 | — |

## Public mood by group (outlook)

Checks the overall support level of an ideological bloc (`party_popularity@<tag>`) rather than the ruling party — works even if a different party is currently in power:

```
democratic_outlook_larger_than_0 = yes
```

| Trigger | Ideology tag |
|---|---|
| `democratic_outlook_larger_than_0` | `democratic` |
| `emerging_outlook_larger_than_0` | `communism` |
| `fascism_outlook_larger_than_0` | `fascism` |
| `neutrality_outlook_larger_than_0` | `neutrality` |
| `nationalist_outlook_larger_than_0` | `nationalist` |

## Influence factions

```
has_economic_faction = yes
```

| Trigger | Checks for idea |
|---|---|
| `has_economic_faction` | `small_medium_business_owners`, `international_bankers`, `fossil_fuel_industry`, `industrial_conglomerates`, `oligarchs`, `landowners`, `maritime_industry`, `defense_industry`, plus nation-specific `wall_street`, `chaebols`, `the_donju` |
| `has_religious_faction` | `the_priesthood`, `the_ulema`, `the_clergy`, `wahabi_ulema` |

## Popularity thresholds

### Ruling coalition strength

`government_coalition_strength` — combined popularity of the ruling party plus its coalition partners. Ready-made thresholds:

`10_percent_government_popularity`, `20_percent_government_popularity`, `30_percent_government_popularity`, `35_percent_government_popularity`, `40_percent_government_popularity`, `50_percent_government_popularity`, `60_percent_government_popularity`, `66_percent_government_popularity`, `70_percent_government_popularity`, `80_percent_government_popularity`, `90_percent_government_popularity`

(the number in the name is the actual threshold minus 0.001, i.e. `check_variable = { government_coalition_strength > 0.099 }` and so on)

### Individual party thresholds

| Trigger | Party (index) | Threshold |
|---|---|---|
| `35_percent_emerging_communist_state_popularity` | Emerging Communists (4) | > 35% |
| `35_percent_neutral_communist_popularity` | Communists (19) | > 35% |
| `35_percent_nationalist_right_wing_populists_popularity` | Right Wing Populists (20) | > 35% |
| `35_percent_nationalist_nat_autocracy_popularity` | Military Junta (22) | > 35% |
| `35_percent_nationalist_absolutist_monarchist_popularity` | Absolutist Monarchist (23) | > 35% |
| `45_percent_nationalist_nat_autocracy_popularity` | Military Junta (22) | > 45% |

### Election-threshold pass, per party

`party_0_has_more_than_threshold` … `party_23_has_more_than_threshold` — checks `party_pop_array^N > election_threshold` for the matching index N (0–23, see the subideologies table). Used to determine whether a party has cleared the election threshold to count toward elections/coalitions, regardless of whether it currently holds power.

## Whether a party still has room to grow

`party_N_is_not_maxed` (N = 0–23) — checks that a specific party's popularity is **not equal** to the total popularity of its whole ideological bloc, i.e. other parties within the bloc still hold some non-zero support (this party hasn't "eaten" the entire bloc):

```
party_2_is_not_maxed = yes
```

Index N is the same party_index (0–23); the ideology tag in the check is swapped automatically for the matching bloc (democratic/communism/neutrality/nationalist/fascism) based on N.

## Utility (parameterized) triggers/effects

These blocks aren't meant to be copied directly into mod content — they take input via `party_index` or `ruling_party` and are used internally by other election-system scripts:

- **`is_party_banned_trigger`** — takes `party_index` (temp variable), returns `yes` if the matching party (flag `partyN_banned`) is banned.
- **`outlook_larger_than_0_by_index`** — a parameterized version of the "Public mood by group" block: determines the ideological bloc itself from the `party_index` range (0–3 / 4–9 / 10–11 / 12–19 / 20–23) and calls the matching `*_outlook_larger_than_0`.
- **`bigger_than_ruling_elect_zero` … `bigger_than_ruling_elect_twenty_three`** (24 blocks) — compares a specific party N's `party_pop_elect_array^N` against the current ruling party's array value; internal election-result tallying logic.
- **`calculate_pp_cost_banned_amount`** — actually an **effect**, not a trigger (despite living in this file): calculates the PP cost of unbanning every non-ruling party that isn't already banned.
