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
western_liberals_are_in_power = {
	custom_trigger_tooltip = {
		tooltip = has_liberalism_government_TT
		is_in_array = { ruling_party = 2 }
	}
}
```

To check the **opposite** ("party is not in power"), there is no separate `_not_in_power` trigger — wrap it in `NOT`:

```
NOT = { western_liberals_are_in_power = yes }
```

The same applies to any trigger further down this page.

<div style="overflow-x:auto">
<table style="width:100%; table-layout:fixed; border-collapse:collapse; font-size:0.68em; line-height:1.2">
<colgroup><col style="width:2em"><col style="width:13%"><col style="width:28.3%"><col style="width:28.3%"><col style="width:28.4%"></colgroup>
<thead>
<tr style="background:#2d2d2d; color:#fff"><th style="padding:3px 6px; text-align:left">#</th><th style="padding:3px 6px; text-align:left">Party</th><th style="padding:3px 6px; text-align:left">In power</th><th style="padding:3px 6px; text-align:left">In coalition</th><th style="padding:3px 6px; text-align:left">In power or coalition</th></tr>
</thead>
<tbody>
<tr><td colspan="5" style="padding:3px 6px; background:#5B9BD5; color:#000; font-weight:600">Western (0–3)</td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 6px">0</td><td style="padding:2px 6px">Pro-Western Autocrats</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_autocrats_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_autocrats_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_autocrats_are_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 6px">1</td><td style="padding:2px 6px">Conservatives</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_conservatism_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_conservatism_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_conservatism_are_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 6px">2</td><td style="padding:2px 6px">Liberals</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_liberals_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_liberals_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_liberal_are_in_power_or_coalition</code></td></tr>
<tr style="background:#5B9BD5; color:#000"><td style="padding:2px 6px">3</td><td style="padding:2px 6px">Social Democrats</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_social_democrats_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_social_democrats_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">western_socialism_are_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 6px; background:#70AD47; color:#000; font-weight:600">Emerging (4–9)</td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 6px">4</td><td style="padding:2px 6px">Emerging Communists</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_communist_state_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_communist_state_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_communist_state_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 6px">5</td><td style="padding:2px 6px">Left-Wing Radicalism</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_anarchist_communism_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_anarchist_communism_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_anarchist_communism_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 6px">6</td><td style="padding:2px 6px">Reactionaries</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_reactionaries_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_reactionaries_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_conservative_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 6px">7</td><td style="padding:2px 6px">Emerging Autocrats</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_autocracy_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_autocracy_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_autocracy_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 6px">8</td><td style="padding:2px 6px">Moderate Shiites</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_moderate_shiite_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_moderate_shiite_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_mod_vilyat_e_faqih_in_power_or_coalition</code></td></tr>
<tr style="background:#70AD47; color:#000"><td style="padding:2px 6px">9</td><td style="padding:2px 6px">Hardline Shiites</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_hardline_shiite_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_hardline_shiite_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">emerging_vilayat_e_faqih_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 6px; background:#757171; color:#000; font-weight:600">Salafism (10–11)</td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 6px">10</td><td style="padding:2px 6px">Wahhabi Monarchist</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">salafist_kingdom_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">salafist_kingdom_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">salafist_kingdom_in_power_or_coalition</code></td></tr>
<tr style="background:#757171; color:#000"><td style="padding:2px 6px">11</td><td style="padding:2px 6px">Saafi Jihadism</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">salafist_caliphate_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">salafist_caliphate_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">salafist_caliphate_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 6px; background:#A6A6A6; color:#000; font-weight:600">Non-Aligned (12–19)</td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">12</td><td style="padding:2px 6px">Moderate Islamist</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_muslim_brotherhood_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_muslim_brotherhood_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_muslim_brotherhood_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">13</td><td style="padding:2px 6px">Non-Aligned Autocrats</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_autocracy_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_autocracy_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_autocracy_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">14</td><td style="padding:2px 6px">Conservatives</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_conservatism_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_conservatism_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_conservatism_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">15</td><td style="padding:2px 6px">Oligarchs</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_oligarch_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_oligarch_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_oligarchism_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">16</td><td style="padding:2px 6px">Libertarians</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_libertarians_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_libertarians_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_libertarian_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">17</td><td style="padding:2px 6px">Greens</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_green_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_green_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_green_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">18</td><td style="padding:2px 6px">Socialist Democrats</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_social_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_social_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_social_in_power_or_coalition</code></td></tr>
<tr style="background:#A6A6A6; color:#000"><td style="padding:2px 6px">19</td><td style="padding:2px 6px">Communists</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_communism_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_communism_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">neutrality_neutral_communism_in_power_or_coalition</code></td></tr>
<tr><td colspan="5" style="padding:3px 6px; background:#C65911; color:#000; font-weight:600">Nationalist (20–23)</td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 6px">20</td><td style="padding:2px 6px">Right Wing Populists</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_right_wing_populists_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_right_wing_populists_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_right_wing_populists_are_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 6px">21</td><td style="padding:2px 6px">Fascists</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_fascist_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_fascist_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_fascists_are_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 6px">22</td><td style="padding:2px 6px">Military Junta</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_military_junta_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_military_junta_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_military_junta_are_in_power_or_coalition</code></td></tr>
<tr style="background:#C65911; color:#000"><td style="padding:2px 6px">23</td><td style="padding:2px 6px">Absolutist Monarchist</td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_monarchists_are_in_power</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_monarchists_are_in_coalition</code></td><td style="padding:2px 6px"><code style="background:rgba(255,255,255,.55); color:#000; padding:1px 4px; border-radius:4px; word-break:break-all; white-space:normal; line-height:1.15; display:inline-block">nationalist_monarchists_are_in_power_or_coalition</code></td></tr>
</tbody>
</table>
</div>

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
democratic_outlook_larger_than_0 = {
	custom_trigger_tooltip = {
		tooltip = democratic_outlook_greater_than_0_tt
		check_variable = { party_popularity@democratic > 0 }
	}
}
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
has_economic_faction = {
	custom_trigger_tooltip = {
		tooltip = has_economic_faction_TT
		OR = {
			has_idea = small_medium_business_owners
			has_idea = international_bankers
			has_idea = fossil_fuel_industry
			has_idea = industrial_conglomerates
			has_idea = oligarchs
			has_idea = landowners
			has_idea = maritime_industry
			has_idea = defense_industry
			# Nation Specific
			has_idea = wall_street
			has_idea = chaebols
			has_idea = the_donju
		}
	}
}
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

## Utility (parameterized) triggers/effects

These blocks aren't meant to be copied directly into mod content — they take input via `party_index` or `ruling_party` and are used internally by other election-system scripts:

- **`is_party_banned_trigger`** — takes `party_index` (temp variable), returns `yes` if the matching party (flag `partyN_banned`) is banned.
- **`outlook_larger_than_0_by_index`** — a parameterized version of the "Public mood by group" block: determines the ideological bloc itself from the `party_index` range (0–3 / 4–9 / 10–11 / 12–19 / 20–23) and calls the matching `*_outlook_larger_than_0`.
- **`bigger_than_ruling_elect_zero` … `bigger_than_ruling_elect_twenty_three`** (24 blocks) — compares a specific party N's `party_pop_elect_array^N` against the current ruling party's array value; internal election-result tallying logic.
- **`calculate_pp_cost_banned_amount`** — actually an **effect**, not a trigger (despite living in this file): calculates the PP cost of unbanning every non-ruling party that isn't already banned.

If you need one of these broken down in more detail with a usage example, just ask.
