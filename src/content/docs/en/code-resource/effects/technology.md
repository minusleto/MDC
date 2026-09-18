---
title: Technology
description: "Technology research effects."
---

<a id="add-tech-bonus"></a>
## `add_tech_bonus`

Grants the country a **limited-use bonus to technology research**. The bonus can target either specific technologies via `technology`, or a technology category via `category`.

### Parameters

| Parameter | What it does |
|---|---|
| `name` | Name of the bonus, shown in the research UI. Optional. |
| `bonus` | Research speed bonus. `0.5` = +50% research speed while the bonus is used, `1.0` = +100%. |
| `uses` | How many times the bonus can be used. If `uses` is omitted, the bonus gets **1 use**. |
| `ahead_reduction` | How many **years** to reduce the ahead-of-time research penalty by. `1` = reduce the ahead-of-time penalty by 1 year, `2` = by 2 years. |
| `category` | The technology category the bonus applies to. Multiple categories can be listed. |
| `technology` | A specific technology the bonus applies to. Multiple technologies can be listed. |

### Bonus for specific technologies

If `technology` is specified, the bonus only applies to the listed technologies:

```text
add_tech_bonus = {
    name = assembly_bonus
    bonus = 0.5
    uses = 2
    technology = improved_machine_tools
    technology = advanced_machine_tools
    technology = assembly_line_production
}
```

Here the country gets **2 uses of a +50% bonus**, spendable on any two of the listed technologies.

### Bonus for a category

Instead of a list of specific technologies, you can specify `category`:

```text
add_tech_bonus = {
    name = electronics_bonus
    bonus = 0.5
    category = electronics
}
```

Since `uses` is not specified, this bonus gets **1 use**. It can be spent once on any matching technology in the given category.

### `ahead_reduction`

`ahead_reduction` is not an extra percentage of research speed. It reduces the **penalty for researching a technology ahead of its historical date** by the given number of years.

For example:

```text
add_tech_bonus = {
    name = early_electronics_bonus
    ahead_reduction = 2
    uses = 1
    category = electronics
}
```

This bonus lets one use reduce a matching technology's ahead-of-time penalty by **2 years**.

If both `bonus` and `ahead_reduction` are specified, they belong to the same limited research bonus:

```text
add_tech_bonus = {
    name = electronics_bonus
    bonus = 0.5
    ahead_reduction = 1
    uses = 1
    category = electronics
}
```

One use can be spent on either **+50% research speed**, or **reducing the ahead-of-time penalty by 1 year**. These are not permanent country modifiers.

### `bonus` and `ahead_reduction` together

Both parameters can be specified in one `add_tech_bonus`. They describe **two types of benefit for the same research bonus**, not permanent country modifiers.

```text
add_tech_bonus = {
    name = tank_development_bonus
    bonus = 1.0
    ahead_reduction = 1
    uses = 1
    category = armor
}
```

Here one use gives either **+100% research speed**, or **a 1-year reduction of the ahead-of-time penalty** for a matching technology.

<a id="category-and-technology"></a>
## `category` and `technology`

`category` picks a group of technologies, while `technology` picks specific technologies. Both parameters can be used to restrict what the bonus can be spent on.

Categories below are grouped by practical purpose, starting from the most basic and commonly used ones. The list is compiled from `technology_Categories` in the source; categories repeated in the source are shown once.

## Base Categories

| Category |
|---|
| `CAT_Military` — all military technologies excluding doctrines |
| `CAT_Civilian` — all civilian technologies |
| `CAT_armor` — all armored vehicles |
| `CAT_artillery` — artillery, AA, and AT |
| `CAT_inf` — all infantry |
| `CAT_air_eqp` — all aircraft equipment |
| `CAT_naval_all` — all naval ships |

## Economy, Industry & Civilian Technology

| Category |
|---|
| `CAT_construction_tech` — construction |
| `CAT_industry` — industry |
| `CAT_excavation_tech` — resource extraction |
| `CAT_infrastructure` — infrastructure |
| `CAT_agriculture_tech` — agriculture |
| `CAT_rubber` — rubber |
| `CAT_fuel_oil` — fuel |
| `CAT_fortifications` — bunkers and fortifications |

## Energy & Nuclear Technology

| Category |
|---|
| `CAT_nuclear` — nuclear technology |
| `CAT_nuclear_reactors` — nuclear reactors |
| `CAT_naval_reactors` — naval nuclear reactors |
| `CAT_nuclear_weapons` — nuclear weapons |
| `CAT_renewable` — renewable energy |

## Computing, Internet & Special Civilian Technology

| Category |
|---|
| `CAT_computing_tech` — computing technology |
| `CAT_computer_systems` — computer systems |
| `CAT_internet_tech` — internet technology |
| `CAT_ai` — artificial intelligence |
| `CAT_encryption_tech` — encryption |
| `CAT_decryption_tech` — decryption |
| `CAT_genes` — genetic technology |
| `CAT_3d` — 3D technology |
| `CAT_nfibers` — special fiber technology |

## Land Vehicles: Armor

| Category |
|---|
| `CAT_tanks` — all tanks |
| `CAT_mbt` — main battle tanks |
| `CAT_rec_tank` — reconnaissance tanks |
| `CAT_afv` — all armored fighting vehicles |
| `CAT_ifv` — infantry fighting vehicles |
| `CAT_apc` — armored personnel carriers |
| `CAT_util` — multi-purpose/utility vehicles |
| `CAT_armour` — armor |
| `CAT_armor_engines` — armored vehicle engines |
| `CAT_armor_weapons` — armored vehicle armament |
| `CAT_afv_weapons` — AFV light weapons |

## Land Vehicles: Artillery, AA & AT

| Category |
|---|
| `CAT_arty` — towed artillery |
| `CAT_sp_arty` — self-propelled artillery |
| `CAT_sp_r_arty` — self-propelled rocket artillery |
| `CAT_art_ammo` — artillery ammunition |
| `CAT_aa` — all anti-air |
| `CAT_l_aa` — man-portable anti-air |
| `CAT_sp_aa` — self-propelled anti-air |
| `CAT_at` — all anti-tank |
| `CAT_l_at` — light anti-tank |
| `CAT_h_at` — heavy anti-tank |

## Infantry & Special Forces

| Category |
|---|
| `CAT_inf_wep` — infantry small arms |
| `CAT_l_drone` — ground drones |
| `CAT_cnc` — command and control |
| `CAT_nvg` — night vision devices |
| `CAT_special_forces` — special forces |
| `CAT_airmobile` — air mobile forces |
| `CAT_airborne` — airborne forces |
| `CAT_marine` — marines |
| `CAT_support_weapons` — support weapons |

## Aviation: General Technology

| Category |
|---|
| `CAT_naval_air` — naval aviation |
| `CAT_fixed_wing` — fighters and bombers |
| `CAT_air_wpn` — aircraft armament |
| `CAT_air_spc` — special aircraft modules |
| `CAT_awacs` — AWACS |
| `CAT_avionics` — avionics |
| `CAT_drones` — drones |
| `CAT_wings` — wing shapes/configurations |
| `CAT_air_stealth` — stealth technology |
| `CAT_air_naval_weapons` — anti-ship weapons and MAD |
| `CAT_air_ground_weapons` — air-to-ground weapons and TGP |
| `CAT_air_to_air_weapons` — air-to-air weapons |
| `CAT_air_countermeasures` — countermeasures |
| `CAT_air_engine` — aircraft engines |
| `CAT_air_camera` — targeting and cameras |

## Aviation: Planes & Helicopters

| Category |
|---|
| `CAT_h_air` — heavy aircraft |
| `CAT_str_bomber` — strategic bombers |
| `CAT_naval_plane` — maritime patrol aircraft |
| `CAT_cas` — close air support |
| `CAT_trans_plane` — transport planes |
| `CAT_large_plane` — large planes |
| `CAT_fighter` — all fighters |
| `CAT_mr_fighter` — multirole fighters |
| `CAT_cv_mr_fighter` — carrier-based multirole fighters |
| `CAT_s_fighter` — strike fighters |
| `CAT_medium_plane` — medium planes |
| `CAT_small_plane` — small planes |
| `CAT_l_fighter` — light fighters/trainers |
| `CAT_l_s_fighter` — light strike fighters |
| `CAT_cv_l_s_fighter` — carrier-based light strike fighters |
| `CAT_as_fighter` — air superiority fighters |
| `CAT_a_uav` — combat UAVs |
| `CAT_heli` — all helicopters |
| `CAT_trans_heli` — transport helicopters |
| `CAT_atk_heli` — attack helicopters |

## Navy

| Category |
|---|
| `CAT_naval_modules` — all naval modules |
| `CAT_naval_engine` — naval engines |
| `CAT_naval_electronics` — fire control and ECM |
| `CAT_naval_armament` — naval armament |
| `CAT_naval_cannons` — naval guns |
| `CAT_pds` — point defense systems |
| `CAT_as_missiles` — anti-ship missiles |
| `CAT_aa_missiles` — anti-air missiles |
| `CAT_vls_systems` — universal vertical launch systems |
| `CAT_vls_air_systems` — VLS for air-defense systems |
| `CAT_vls_land_systems` — VLS for land-attack systems |
| `CAT_torpedoes` — torpedoes |
| `CAT_landing_craft` — landing craft |
| `CAT_sub` — all submarines |
| `CAT_nuke_sub` — nuclear submarines |
| `CAT_atk_sub` — nuclear attack submarines |
| `CAT_m_sub` — nuclear missile submarines |
| `CAT_d_sub` — diesel submarines |
| `CAT_surface_ship` — surface ships |
| `CAT_cruiser` — cruisers |
| `CAT_destroyer` — destroyers |
| `CAT_frigate` — frigates |
| `CAT_corvette` — corvettes |
| `CAT_carrier` — all carriers |
| `CAT_n_cv` — nuclear carriers |
| `CAT_cv` — carriers |
| `CAT_lha` — LHA amphibious assault ships |
| `CAT_lpd` — LPD amphibious transport docks |

## Doctrines

| Category |
|---|
| `CAT_land_doctrine` — all land doctrines |
| `CAT_legacy_doctrines` — old/legacy doctrines |
| `CAT_western` — Western branch |
| `CAT_eastern` — Eastern branch |
| `CAT_offensive_doctrine` — offensive doctrines |
| `CAT_defensive_doctrine` — defensive doctrines |
| `CAT_unconventional` — unconventional doctrines |
| `CAT_equipment_doctrines` — equipment doctrines |
| `CAT_training` — training |
| `CAT_tech_doctrines` — technology doctrines |
| `CAT_air_doctrine` — air doctrines |
| `CAT_naval_doctrine` — naval doctrines |
| `CAT_battlefield_support_tree` — Battlefield Support tree |
| `CAT_operational_integrity_tree` — Operational Integrity tree |
| `CAT_battlefield_support` — Battlefield Support |
| `CAT_operational_integrity` — Operational Integrity |
| `CAT_green_water_navy` — Green Water Navy |
| `CAT_blue_water_navy` — Blue Water Navy |
| `CAT_jeune_ecole_two` — Jeune École doctrine |
| `special_forces_doctrine` — special forces doctrine |

## Missiles, Space & Satellites

| Category |
|---|
| `CAT_missile` — all missile technology |
| `CAT_bm` — ballistic missiles |
| `CAT_icbm` — ICBMs |
| `CAT_irbm` — medium/intermediate-range missiles |
| `CAT_slbm` — submarine-launched ballistic missiles |
| `CAT_cm` — cruise missiles |
| `CAT_alcm` — air-launched cruise missiles |
| `CAT_asm` — anti-ship/strike missiles |
| `CAT_glcm` — ground-launched cruise missiles |
| `CAT_slcm` — sea-launched cruise missiles |
| `CAT_hscm` — hypersonic cruise missiles |
| `CAT_sam` — SAM/anti-air missiles |
| `CAT_abm` — anti-ballistic missile defense |
| `CAT_space` — space technology |
| `CAT_satellite` — satellites |
| `CAT_gnss` — GNSS satellite navigation |
| `CAT_conventional_warhead` — conventional warheads |
