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

<a id="naval-combat"></a>
### Combat (naval)

| Modifier | Description |
|---|---|
| `naval_speed_factor` | Ship speed |
| `naval_hit_chance` | Chance to hit in combat |
| `naval_coordination` | Fleet coordination |
| `naval_morale` / `naval_morale_factor` | Fleet morale (flat / %) |
| `naval_retreat_chance` / `naval_retreat_speed` | Fleet retreat chance and speed |
| `ships_at_battle_start` | Number of ships entering combat on first contact |
| `spotting_chance` | Chance to spot enemy ships |
| `navy_anti_air_attack` / `navy_anti_air_attack_factor` | Fleet anti-air attack (flat / %) |
| `navy_capital_ship_attack_factor` / `navy_capital_ship_defence_factor` | Capital ship attack/defence |
| `navy_screen_attack_factor` / `navy_screen_defence_factor` | Screen ship attack/defence |
| `navy_submarine_attack_factor` / `navy_submarine_defence_factor` | Submarine attack/defence |
| `navy_submarine_detection_factor` | Chance to detect enemy submarines |
| `convoy_raiding_efficiency_factor` | Convoy raiding efficiency |
| `naval_torpedo_hit_chance_factor` | Torpedo hit chance |
| `naval_torpedo_cooldown_factor` | Torpedo reload time |
| `naval_mine_hit_chance` / `naval_mines_damage_factor` | Mine hit chance and damage |
| `naval_invasion_capacity` / `naval_invasion_penalty` | Naval invasion capacity and penalty |
| `amphibious_invasion` | Naval invasion execution speed |
| `invasion_preparation` | Naval invasion preparation time |

<a id="carriers"></a>
### Carriers

| Modifier | Description |
|---|---|
| `navy_carrier_air_attack_factor` | Carrier-based aircraft attack |
| `navy_carrier_air_agility_factor` | Carrier-based aircraft agility |
| `navy_carrier_air_targetting_factor` | Carrier-based aircraft targeting |
| `air_carrier_night_penalty_reduction_factor` | Reduces the night penalty for carrier aircraft |
| `carrier_capacity_penalty_reduction` | Reduces the overcrowding penalty for carrier aircraft |
| `carrier_traffic` / `carrier_night_traffic` | Carrier throughput (general / at night) |
| `sortie_efficiency` / `fighter_sortie_efficiency` | Aircraft refuel/rearm speed on a carrier (general / fighters) |

<a id="air-combat"></a>
### Combat (air)

| Modifier | Description |
|---|---|
| `air_accidents_factor` | Chance of air accidents |
| `air_night_penalty` | Penalty for night sorties |
| `air_weather_penalty` | Penalty for bad weather |
| `army_bonus_air_superiority_factor` | Bonus to land troops from air superiority |
| `enemy_army_bonus_air_superiority_factor` | Same, for the enemy |
| `air_interception_attack_factor` / `_defence_factor` / `_agility_factor` | Attack/defence/agility for interception missions |
| `air_air_superiority_attack_factor` / `_defence_factor` / `_agility_factor` | Same, for air superiority missions |
| `air_close_air_support_attack_factor` / `_defence_factor` / `_agility_factor` | Same, for close air support (CAS) |
| `air_strategic_bomber_attack_factor` / `_defence_factor` / `_agility_factor` / `_bombing_factor` | Same, for strategic bombers (including bombing effectiveness) |
| `air_cas_present_factor` | Tactical bombing effectiveness |
| `naval_strike_attack_factor` / `_targetting_factor` / `_agility_factor` | Attack/targeting/agility for naval strikes from the air |
| `air_paradrop_attack_factor` / `_defence_factor` / `_agility_factor` | Same, for paradropped troops |
| `air_ace_generation_chance_factor` | Chance of aces appearing |
| `experience_gain_air` / `experience_gain_air_factor` | Air experience gain (flat / %) |

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
