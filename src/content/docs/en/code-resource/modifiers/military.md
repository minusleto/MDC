---
title: Military Modifiers
description: "Military modifiers: combat (speed, attack/defence, recon, planning), intelligence and decryption, general (war support, stability), military bases"
---

## Military Modifiers

<a id="combat"></a>
### Combat (land)

Vanilla HOI4 modifiers, apply to the country's divisions.

| Modifier | Description |
|---|---|
| `army_speed_factor` | Division movement speed |
| `army_attack_speed_factor` | The speed at which the land army attacks |
| `army_org_factor` | Maximum troop organization (%) |
| `army_org` | Maximum troop organization (flat) |
| `army_org_regain` | Organization recovery speed |
| `army_morale_factor` | Division organization recovery speed after combat |
| `army_defence_factor` | Division defence |
| `army_defence_against_major_factor` | Defence against major powers |
| `army_defence_against_minor_factor` | Defence against non-major countries |
| `army_core_defence_factor` | Defence on own core territory |
| `army_claim_defence_factor` | Defence on claimed territory |
| `army_attack_factor` | Division attack |
| `breakthrough_factor` | Breakthrough strength |
| `army_breakthrough_against_major_factor` | Breakthrough against major powers |
| `army_breakthrough_against_minor_factor` | Breakthrough against non-major countries |
| `recon_factor` | Division reconnaissance |
| `recon_factor_while_entrenched` | Reconnaissance while entrenched |
| `coordination_bonus` | Troop coordination bonus |
| `combat_width_factor` | Division combat width |
| `max_planning_factor` | Maximum planning level |
| `planning_speed` | Planning speed gain |
| `dig_in_speed` / `dig_in_speed_factor` | Entrenchment speed (flat / %) |
| `terrain_penalty_reduction` | Reduces terrain penalties |
| `pocket_penalty` | Penalty for encircled troops |
| `cas_damage_reduction` | Reduces damage from close air support (CAS) |
| `special_forces_cap` | Maximum share of special forces in the army |
| `special_forces_min` | Minimum number of special forces excluded from the cap |
| `training_time_army_factor` / `training_time_factor` | Time to train new divisions (the first is army-only, the second is general) |
| `non_core_manpower` | Share of manpower available on non-core territory |

<a id="intelligence"></a>
### Intelligence and decryption

| Modifier | Description |
|---|---|
| `decryption_power` | Decryption power (flat) |
| `decryption_power_factor` | Decryption power (%) |
| `defense_impact_on_blueprint_stealing` | Defence against equipment blueprint theft |
| `intel_from_combat_factor` | Intel gain from combat |
| `intel_from_operatives_factor` | Intel gain from operatives |
| `intel_network_gain` | Intel network gain in a region |

<a id="vanilla"></a>
### General

| Modifier | Description | Note |
|---|---|---|
| `war_support_factor` | Modifies war support | N/A |
| `war_support_weekly` | Weekly war support gain | N/A |
| `war_support_weekly_factor` | Weekly war support gain (%) | N/A |
| `war_stability_factor` | Stability penalty from being at war | N/A |
| `offensive_war_stability_factor` | Stability penalty from participating in an offensive war | N/A |
| `defensive_war_stability_factor` | Stability penalty from participating in a defensive war | N/A |
| `weekly_casualties_war_support` | War support from weekly casualties | N/A |
| `weekly_convoys_war_support` | War support from sunk convoys | N/A |
| `weekly_bombing_war_support` | War support from enemy bombing of our states | N/A |
| `surrender_limit` | Modifies the % of capitals/VPs that must be lost to force surrender | N/A |
| `ammo_consumption_modifier` | Modifies ammo consumption of troops | N/A |

<a id="military-bases"></a>
### Military Bases

| Modifier | Description | Note |
|---|---|---|
| `military_bases_leader_modifier` | Buff a specific leader gets from military bases | + or − percentage |
| `military_bases_country_modifier` | Buff all of the country's leaders get from military bases | + or − percentage |
