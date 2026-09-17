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
