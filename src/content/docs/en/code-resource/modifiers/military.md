---
title: Military Modifiers
description: "Reference for vanilla HOI4 military modifiers: land combat, navy, air force, equipment and licenses, supply, experience, and command."
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
| `army_attack_against_major_factor` | Attack bonus against major powers |
| `army_attack_against_minor_factor` | Attack bonus against non-major countries |
| `army_claim_attack_factor` | Attack on claimed territory |
| `army_non_core_attack_factor` | Attack on non-core territory |
| `army_strength_factor` | Overall land army strength |
| `army_experience_from_volunteers` | Army experience gained from volunteers |
| `air_superiority_bonus_in_combat` | Effect of air superiority on land combat |
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
| `naval_damage_factor` | Damage dealt by the navy |
| `naval_defense_factor` | Reduces damage received by ships |
| `naval_accidents_chance` | Chance of naval accidents and accidental ship losses |
| `naval_critical_score_chance_factor` | Chance to inflict a critical hit |
| `naval_critical_effect_factor` | Effect of critical hits received by ships |
| `critical_receive_chance` | Chance to receive a critical hit |
| `naval_enemy_fleet_size_ratio_penalty_factor` | Reduces the penalty from an enemy fleet size advantage |
| `naval_night_attack` | Fleet damage at night |
| `naval_defense_factor` | Ship defence |
| `naval_detection` | Ship detection |
| `naval_enemy_retreat_chance` | Chance to force an enemy fleet to retreat |
| `naval_retreat_chance` / `naval_retreat_speed` | Fleet retreat chance / speed |
| `naval_ship_recovery_chance_factor` | Chance of ship recovery after combat |
| `naval_torpedo_damage_reduction_factor` / `naval_torpedo_enemy_critical_chance_factor` | Reduces torpedo damage / enemy torpedo critical-hit chance |
| `naval_torpedo_reveal_chance_factor` | Modifier to torpedo attack reveal chance |
| `naval_light_gun_hit_chance_factor` / `naval_heavy_gun_hit_chance_factor` | Light / heavy gun hit chance |
| `naval_hit_chance` | Chance to hit in combat |
| `naval_coordination` | Fleet coordination |
| `convoy_escort_efficiency` | Convoy escort mission efficiency |
| `convoy_retreat_speed` | Convoy retreat speed |
| `naval_retreat_chance_after_initial_combat` | Fleet retreat chance after initial combat |
| `naval_mines_effect_reduction` | Reduces damage from enemy naval mines |
| `mines_planting_by_fleets_factor` / `mines_sweeping_by_fleets_factor` | Fleet mine-laying / mine-sweeping efficiency |
| `experience_gain_navy_unit` | Flat experience gain for naval units |
| `naval_has_potf_in_combat_attack` / `naval_has_potf_in_combat_defense` | Fleet attack / defence when the pride of the fleet is present |
| `strike_force_movement_org_loss` | Organization loss while moving on strike-force mission |
| `sub_retreat_speed` / `submarine_attack` | Submarine retreat speed / attack |
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
| `air_cas_efficiency` | Close air support efficiency |
| `air_escort_efficiency` | Efficiency of aircraft escort missions |
| `air_wing_xp_loss_when_killed_factor` | Air wing experience lost when aircraft are shot down |
| `ground_attack_factor` | Aircraft damage against land divisions |
| `mines_planting_by_air_factor` / `mines_sweeping_by_air_factor` | Air mine-laying / mine-sweeping efficiency |
| `strategic_bomb_visibility` | Strategic bomber visibility to the enemy |
| `rocket_attack_factor` | Rocket attack |
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


<a id="equipment-licensing"></a>
### Equipment Capture, Conversion & Upgrades

| Modifier | Description |
|---|---|
| `equipment_capture` | Flat bonus to the share of equipment captured from the enemy |
| `equipment_capture_factor` | Percentage modifier to the share of captured equipment |
| `equipment_conversion_speed` | Speed of converting one equipment type into another |
| `equipment_upgrade_xp_cost` | General modifier to XP cost for equipment upgrades |
| `land_equipment_upgrade_xp_cost` | Army XP cost for upgrading land equipment |
| `naval_equipment_upgrade_xp_cost` | Navy XP cost for upgrading ships |
| `air_equipment_upgrade_xp_cost` | Air XP cost for upgrading aircraft |
| `refit_ic_cost` | Industrial cost of refitting ships |
| `refit_speed` | Ship refit speed |

<a id="license-modifiers"></a>
### Production Licenses

| Modifier | Description |
|---|---|
| `license_purchase_cost` | Cost of purchasing a production license |
| `license_production_speed` | Production speed for licensed equipment |
| `license_tech_difference_speed` | Production penalty caused by technology differences |
| `license_anti_tank_eq_cost_factor` | License cost for anti-tank equipment |
| `license_anti_tank_eq_production_speed_factor` | Production speed for licensed anti-tank equipment |
| `license_anti_tank_eq_tech_difference_speed_factor` | Technology-difference penalty for licensed anti-tank equipment |
| `license_artillery_eq_cost_factor` | License cost for artillery |
| `license_artillery_eq_production_speed_factor` | Production speed for licensed artillery |
| `license_artillery_eq_tech_difference_speed_factor` | Technology-difference penalty for licensed artillery |
| `license_infantry_eq_cost_factor` | License cost for infantry equipment |
| `license_infantry_eq_production_speed_factor` | Production speed for licensed infantry equipment |
| `license_infantry_eq_tech_difference_speed_factor` | Technology-difference penalty for licensed infantry equipment |
| `license_light_tank_eq_cost_factor` | License cost for light tanks |
| `license_light_tank_eq_production_speed_factor` | Production speed for licensed light tanks |
| `license_light_tank_eq_tech_difference_speed_factor` | Technology-difference penalty for licensed light tanks |
| `license_armor_purchase_cost` / `license_air_purchase_cost` / `license_naval_purchase_cost` | License cost for armor / aircraft / naval equipment |

<a id="production-efficiency"></a>
### Military Production Efficiency

| Modifier | Description |
|---|---|
| `production_factory_efficiency_gain_factor` | Rate at which military production efficiency grows |
| `production_factory_max_efficiency_factor` | Maximum military production efficiency |
| `production_factory_start_efficiency_factor` | Starting efficiency of a production line |
| `line_change_production_efficiency_factor` | Efficiency retained when switching a production line to another item |
| `production_cost_max_ship_hull_light` / `production_cost_max_ship_hull_heavy` / `production_cost_max_ship_hull_cruiser` / `production_cost_max_ship_hull_carrier` / `production_cost_max_ship_hull_submarine` | Maximum cost modifiers for the corresponding ship types |

<a id="supply-logistics"></a>
### Supply, Fuel & Attrition

| Modifier | Description |
|---|---|
| `supply_consumption_factor` | Modifies supply consumed by troops |
| `out_of_supply_factor` | Modifies penalties for troops without supply |
| `army_fuel_capacity_factor` | Modifier to land forces' fuel capacity |
| `fuel_gain` / `fuel_gain_factor` | Flat / percentage fuel gain |
| `supply_node_range` | Supply range from supply hubs |
| `army_fuel_consumption_factor` | Fuel consumption of land forces |
| `air_fuel_consumption_factor` | Fuel consumption of aircraft |
| `navy_fuel_consumption_factor` | Fuel consumption of the navy |
| `attrition` | Modifies losses from attrition |
| `winter_attrition_factor` | Modifies attrition in winter |
| `heat_attrition_factor` | Modifies attrition in hot climates |

<a id="experience-training"></a>
### Experience & Training

| Modifier | Description |
|---|---|
| `experience_gain_army` | Flat bonus to army experience gain |
| `experience_gain_army_factor` | Percentage bonus to army experience gain |
| `experience_gain_navy` | Flat bonus to navy experience gain |
| `experience_gain_navy_factor` | Percentage bonus to navy experience gain |
| `experience_gain_navy_unit_factor` | Bonus to experience gained by naval units |
| `experience_gain_army_unit` / `experience_gain_army_unit_factor` | Flat / percentage experience gain for land units |
| `land_reinforce_rate` | Rate at which reinforcements enter land combat |
| `max_dig_in` | Maximum entrenchment level |

<a id="command-power"></a>
### Command, Conscription & Manpower

| Modifier | Description |
|---|---|
| `command_power_gain` | Daily flat command power gain |
| `command_power_gain_mult` | Percentage modifier to command power gain |
| `max_command_power` | Maximum command power |
| `max_command_power_mult` | Percentage modifier to maximum command power |
| `conscription` | Flat change to the share of population available for conscription |
| `conscription_factor` | Percentage modifier to the recruitable population share |
| `weekly_manpower` | Additional weekly manpower |

<a id="unit-type-bonuses"></a>
### Unit-Type Bonuses

| Modifier | Description |
|---|---|
| `special_forces_attack_factor` | Attack of special forces divisions |
| `special_forces_defence_factor` | Defence of special forces divisions |
| `motorized_attack_factor` | Attack of motorized forces |
| `motorized_defence_factor` | Defence of motorized forces |
| `army_core_attack_factor` | Attack on core territory |
| `army_core_defence_factor` | Defence on core territory |
| `army_infantry_attack_factor` / `army_infantry_defence_factor` | Infantry attack / defence |
| `army_armor_attack_factor` / `army_armor_defence_factor` / `army_armor_speed_factor` | Armor attack / defence / speed |
| `army_artillery_attack_factor` / `army_artillery_defence_factor` | Artillery attack / defence |
| `motorized_attack_factor` / `motorized_defence_factor` | Motorized attack / defence |
| `mechanized_attack_factor` / `mechanized_defence_factor` | Mechanized attack / defence |
| `cavalry_attack_factor` / `cavalry_defence_factor` | Cavalry attack / defence |

<a id="air-general"></a>
### General Aircraft Stats

| Modifier | Description |
|---|---|
| `air_attack_factor` | General aircraft attack modifier |
| `air_defence_factor` | General aircraft defence modifier |
| `air_agility_factor` | General aircraft agility modifier |
| `ace_effectiveness_factor` | Effectiveness of ace bonuses |
| `air_ace_bonuses_factor` | Modifier to bonuses provided by aces |

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

### Military Bases

| Modifier | Description | Note |
|---|---|---|
| `military_bases_leader_modifier` | Buff a specific leader gets from military bases | + or − percentage |
| `military_bases_country_modifier` | Buff all of the country's leaders get from military bases | + or − percentage |
