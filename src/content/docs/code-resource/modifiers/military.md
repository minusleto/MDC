---
title: Военные модификаторы
description: "Военные модификаторы: боевые (скорость, атака/защита, разведка, планирование), разведка и шифрование, общие (военная поддержка, стабильность), военные базы"
---

## Военные модификаторы

<a id="combat"></a>
### Боевые (сухопутные)

Ванильные модификаторы HOI4, применяются к дивизиям страны.

| Модификатор | Описание |
|---|---|
| `army_speed_factor` | Скорость движения дивизий |
| `army_attack_speed_factor` | Скорость, с которой сухопутная армия атакует |
| `army_org_factor` | Максимальная организация войск (%) |
| `army_org` | Максимальная организация войск (плоский бонус) |
| `army_org_regain` | Скорость восстановления организации |
| `army_morale_factor` | Скорость восстановления организации после боя |
| `army_defence_factor` | Защита дивизий |
| `army_defence_against_major_factor` | Защита против великих держав |
| `army_defence_against_minor_factor` | Защита против стран, не являющихся великими державами |
| `army_core_defence_factor` | Защита на своих кор-территориях |
| `army_claim_defence_factor` | Защита на территориях с претензией |
| `army_attack_factor` | Атака дивизий |
| `breakthrough_factor` | Пробивная способность (breakthrough) |
| `army_breakthrough_against_major_factor` | Пробивная способность против великих держав |
| `army_breakthrough_against_minor_factor` | Пробивная способность против стран, не являющихся великими державами |
| `recon_factor` | Разведка (recon) дивизий |
| `recon_factor_while_entrenched` | Разведка в окопавшемся состоянии |
| `coordination_bonus` | Бонус координации войск |
| `combat_width_factor` | Ширина боевого построения дивизии |
| `max_planning_factor` | Максимальный уровень планирования |
| `planning_speed` | Скорость набора планирования |
| `dig_in_speed` / `dig_in_speed_factor` | Скорость окапывания (плоский / %) |
| `terrain_penalty_reduction` | Снижение штрафов от местности |
| `pocket_penalty` | Штраф войскам в окружении |
| `cas_damage_reduction` | Снижение урона от штурмовой авиации (CAS) |
| `special_forces_cap` | Максимальная доля спецназа в армии |
| `special_forces_min` | Минимальное число спецназа, не учитываемое в лимите |
| `training_time_army_factor` / `training_time_factor` | Время обучения новых дивизий (первое — только сухопутные, второе — общее) |
| `non_core_manpower` | Доля доступного мобрезерва на не-кор территориях |

<a id="naval-combat"></a>
### Боевые (морские)

| Модификатор | Описание |
|---|---|
| `naval_speed_factor` | Скорость кораблей |
| `naval_hit_chance` | Шанс попадания в бою |
| `naval_coordination` | Координация флота |
| `naval_morale` / `naval_morale_factor` | Мораль флота (плоский / %) |
| `naval_retreat_chance` / `naval_retreat_speed` | Шанс и скорость отступления флота |
| `ships_at_battle_start` | Число кораблей, вступающих в бой в первом контакте |
| `spotting_chance` | Шанс обнаружить вражеские корабли |
| `navy_anti_air_attack` / `navy_anti_air_attack_factor` | Зенитная атака флота (плоский / %) |
| `navy_capital_ship_attack_factor` / `navy_capital_ship_defence_factor` | Атака/защита капитальных кораблей |
| `navy_screen_attack_factor` / `navy_screen_defence_factor` | Атака/защита кораблей охранения (screen) |
| `navy_submarine_attack_factor` / `navy_submarine_defence_factor` | Атака/защита подлодок |
| `navy_submarine_detection_factor` | Шанс обнаружения вражеских подлодок |
| `convoy_raiding_efficiency_factor` | Эффективность рейдерства против конвоев |
| `naval_torpedo_hit_chance_factor` | Шанс попадания торпед |
| `naval_torpedo_cooldown_factor` | Перезарядка торпед |
| `naval_mine_hit_chance` / `naval_mines_damage_factor` | Шанс попадания и урон от мин |
| `naval_invasion_capacity` / `naval_invasion_penalty` | Вместимость и штраф морского десанта |
| `amphibious_invasion` | Скорость исполнения морского десанта |
| `invasion_preparation` | Время подготовки морского десанта |

<a id="carriers"></a>
### Авианосцы

| Модификатор | Описание |
|---|---|
| `navy_carrier_air_attack_factor` | Атака самолётов с авианосцев |
| `navy_carrier_air_agility_factor` | Манёвренность самолётов с авианосцев |
| `navy_carrier_air_targetting_factor` | Точность самолётов с авианосцев |
| `air_carrier_night_penalty_reduction_factor` | Снижение ночного штрафа для авиации с авианосцев |
| `carrier_capacity_penalty_reduction` | Снижение штрафа за перегрузку авианосца самолётами |
| `carrier_traffic` / `carrier_night_traffic` | Пропускная способность авианосца (общая / ночью) |
| `sortie_efficiency` / `fighter_sortie_efficiency` | Скорость дозаправки/перевооружения самолётов на авианосце (общая / для истребителей) |

<a id="air-combat"></a>
### Боевые (воздушные)

| Модификатор | Описание |
|---|---|
| `air_accidents_factor` | Шанс авиакатастроф |
| `air_night_penalty` | Штраф за ночные вылеты |
| `air_weather_penalty` | Штраф за плохую погоду |
| `army_bonus_air_superiority_factor` | Бонус наземным войскам от превосходства в воздухе |
| `enemy_army_bonus_air_superiority_factor` | То же самое, но противнику |
| `air_interception_attack_factor` / `_defence_factor` / `_agility_factor` | Атака/защита/манёвренность при перехвате |
| `air_air_superiority_attack_factor` / `_defence_factor` / `_agility_factor` | То же самое для миссий на превосходство в воздухе |
| `air_close_air_support_attack_factor` / `_defence_factor` / `_agility_factor` | То же самое для непосредственной поддержки войск (CAS) |
| `air_strategic_bomber_attack_factor` / `_defence_factor` / `_agility_factor` / `_bombing_factor` | То же самое для стратегических бомбардировщиков (включая эффективность бомбардировки) |
| `air_cas_present_factor` | Эффективность тактических бомбардировок |
| `naval_strike_attack_factor` / `_targetting_factor` / `_agility_factor` | Атака/точность/манёвренность при ударах по кораблям с воздуха |
| `air_paradrop_attack_factor` / `_defence_factor` / `_agility_factor` | То же самое для десантированных парашютом войск |
| `air_ace_generation_chance_factor` | Шанс появления асов |
| `experience_gain_air` / `experience_gain_air_factor` | Прирост опыта авиации (плоский / %) |

<a id="intelligence"></a>
### Разведка и шифрование

| Модификатор | Описание |
|---|---|
| `decryption_power` | Мощность дешифрования (плоский бонус) |
| `decryption_power_factor` | Мощность дешифрования (%) |
| `defense_impact_on_blueprint_stealing` | Защита от кражи чертежей техники |
| `intel_from_combat_factor` | Прирост разведданных от боевых действий |
| `intel_from_operatives_factor` | Прирост разведданных от агентов |
| `intel_network_gain` | Прирост сети разведки в регионе |

<a id="vanilla"></a>
### Общие

| Модификатор | Описание | Примечание |
|---|---|---|
| `war_support_factor` | Меняет военную поддержку | Н/Д |
| `war_support_weekly` | Еженедельный прирост военной поддержки | Н/Д |
| `war_support_weekly_factor` | Еженедельный прирост военной поддержки (%) | Н/Д |
| `war_stability_factor` | Штраф стабильности от нахождения в состоянии войны | Н/Д |
| `offensive_war_stability_factor` | Штраф стабильности за участие в наступательной войне | Н/Д |
| `defensive_war_stability_factor` | Штраф стабильности за участие в оборонительной войне | Н/Д |
| `weekly_casualties_war_support` | Военная поддержка от еженедельных потерь | Н/Д |
| `weekly_convoys_war_support` | Военная поддержка от потопленных конвоев | Н/Д |
| `weekly_bombing_war_support` | Военная поддержка от бомбёжек наших регионов | Н/Д |
| `surrender_limit` | Меняет % столиц/ВП, которые нужно потерять для капитуляции | Н/Д |
| `ammo_consumption_modifier` | Меняет расход боеприпасов войсками | Н/Д |

<a id="military-bases"></a>
### Военные базы

| Модификатор | Описание | Примечание |
|---|---|---|
| `military_bases_leader_modifier` | Бафф конкретному лидеру от военных баз | + или − в процентах |
| `military_bases_country_modifier` | Бафф всем лидерам страны от военных баз | + или − в процентах |
