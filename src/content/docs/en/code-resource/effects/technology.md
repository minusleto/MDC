---
title: Technology
description: "Technology research effects."
---

<a id="add-tech-bonus"></a>
## `add_tech_bonus`

Grants the country a **limited-use research bonus**. The bonus can be tied either to specific technologies with `technology` or to a technology category with `category`.

### Parameters

| Parameter | What it does |
|---|---|
| `name` | Name of the bonus shown in the research interface. Optional. |
| `bonus` | Research speed bonus. `0.5` = +50% research speed when the bonus is used, `1.0` = +100%. |
| `uses` | Number of times the bonus can be used. If `uses` is not specified, the bonus gets **1 use**. |
| `ahead_reduction` | Number of **years** by which the ahead-of-time research penalty is reduced. `1` = reduce the ahead-of-time penalty by 1 year, `2` = by 2 years. |
| `category` | Technology category the bonus applies to. Multiple categories can be specified. |
| `technology` | Specific technology the bonus applies to. Multiple technologies can be specified. |

### Bonus for specific technologies

With `technology`, the bonus is available only for the listed technologies:

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

The country receives **2 uses of a +50% bonus**, which can be spent on any two of the listed technologies.

### Bonus for a category

Instead of listing individual technologies, use `category`:

```text
add_tech_bonus = {
    name = electronics_bonus
    bonus = 0.5
    category = electronics
}
```

Because `uses` is not specified, this bonus gets **1 use**. It can be spent once on an applicable technology in the specified category.

### `ahead_reduction`

`ahead_reduction` is not an additional research-speed percentage. It reduces the **penalty for researching a technology before its historical date** by the specified number of years.

For example:

```text
add_tech_bonus = {
    name = early_electronics_bonus
    ahead_reduction = 2
    uses = 1
    category = electronics
}
```

This bonus can be used once to reduce the ahead-of-time penalty of an applicable technology by **2 years**.

If both `bonus` and `ahead_reduction` are specified, they belong to the same limited-use research bonus. The single use can be spent either for the research-speed bonus or for the ahead-of-time reduction.

<a id="category-and-technology"></a>
## `category` and `technology`

`category` selects a technology group, while `technology` selects specific technologies. Both parameters can be used to limit where the bonus may be spent.

The categories below follow the hierarchy from `technology_Categories`: parent categories are shown first, with their more specific subcategories indented underneath. Repeated category IDs are listed only once.

## Civilian technology

- `CAT_Civilian` — all civilian technologies
  - `CAT_ai` — artificial intelligence
  - `CAT_nfibers` — specialized fiber technologies
  - `CAT_3d` — 3D technologies
  - `CAT_genes` — genetic technologies
  - `CAT_nuclear` — nuclear technologies
    - `CAT_nuclear_reactors` — nuclear reactors
    - `CAT_naval_reactors` — naval nuclear reactors
    - `CAT_nuclear_weapons` — nuclear weapons
  - `CAT_industry` — industry
  - `CAT_construction_tech` — construction
  - `CAT_excavation_tech` — resource extraction
  - `CAT_infrastructure` — infrastructure
  - `CAT_agriculture_tech` — agriculture
  - `CAT_rubber` — rubber
  - `CAT_fuel_oil` — fuel
  - `CAT_renewable` — renewable energy
  - `CAT_computing_tech` — computing technologies
    - `CAT_computer_systems` — computer systems
  - `CAT_internet_tech` — internet technologies
  - `CAT_encryption_tech` — encryption
  - `CAT_decryption_tech` — decryption

## Military technology

- `CAT_Military` — all military technologies without doctrines
  - `CAT_armor` — armor technology
    - `CAT_tanks` — all tanks
      - `CAT_mbt` — main battle tanks
      - `CAT_rec_tank` — reconnaissance tanks
    - `CAT_afv` — all armored fighting vehicles
      - `CAT_ifv` — infantry fighting vehicles
      - `CAT_apc` — armored personnel carriers
      - `CAT_util` — utility vehicles
    - `CAT_armour` — armor
    - `CAT_armor_engines` — armor engines
    - `CAT_armor_weapons` — armor weapons
    - `CAT_afv_weapons` — light AFV weapons
  - `CAT_artillery` — artillery, anti-air and anti-tank technologies
    - `CAT_arty` — towed artillery
    - `CAT_sp_arty` — self-propelled artillery
    - `CAT_sp_r_arty` — self-propelled rocket artillery
    - `CAT_art_ammo` — artillery ammunition
    - `CAT_aa` — all anti-air
      - `CAT_l_aa` — hand-held/man-portable anti-air
      - `CAT_sp_aa` — self-propelled anti-air
    - `CAT_at` — all anti-tank
      - `CAT_l_at` — light anti-tank
      - `CAT_h_at` — heavy anti-tank
  - `CAT_inf` — all infantry technologies
    - `CAT_inf_wep` — infantry weapons
    - `CAT_l_drone` — land drones
    - `CAT_cnc` — command and control equipment
    - `CAT_nvg` — night vision
    - `CAT_support_weapons` — support weapons
    - `CAT_special_forces` — special forces
      - `CAT_airmobile` — airmobile forces
      - `CAT_airborne` — airborne forces
      - `CAT_marine` — marines
  - `CAT_air_eqp` — all aircraft equipment
    - `CAT_naval_air` — naval aviation
    - `CAT_fixed_wing` — fixed-wing aircraft
      - `CAT_h_air` — heavy aircraft
      - `CAT_str_bomber` — strategic bombers
      - `CAT_naval_plane` — maritime patrol aircraft
      - `CAT_cas` — close air support
      - `CAT_trans_plane` — transport aircraft
      - `CAT_large_plane` — large aircraft
      - `CAT_fighter` — all fighters
        - `CAT_mr_fighter` — multi-role fighters
        - `CAT_cv_mr_fighter` — carrier multi-role fighters
        - `CAT_s_fighter` — strike fighters
        - `CAT_l_fighter` — light fighters/trainers
        - `CAT_l_s_fighter` — light strike fighters
        - `CAT_cv_l_s_fighter` — carrier light strike fighters
        - `CAT_as_fighter` — air-superiority fighters
      - `CAT_medium_plane` — medium aircraft
      - `CAT_small_plane` — small aircraft
    - `CAT_a_uav` — unmanned combat aerial vehicles
    - `CAT_heli` — all helicopters
      - `CAT_trans_heli` — transport helicopters
      - `CAT_atk_heli` — attack helicopters
    - `CAT_air_wpn` — aircraft weapons
    - `CAT_air_spc` — special aircraft modules
    - `CAT_awacs` — AWACS
    - `CAT_avionics` — avionics
    - `CAT_drones` — drones
    - `CAT_wings` — wing configurations
    - `CAT_air_stealth` — stealth technology
    - `CAT_air_naval_weapons` — naval weapons and MAD
    - `CAT_air_ground_weapons` — air-to-ground weapons and TGPs
    - `CAT_air_to_air_weapons` — air-to-air weapons
    - `CAT_air_countermeasures` — countermeasures
    - `CAT_air_engine` — aircraft engines
    - `CAT_air_camera` — targeting pods
  - `CAT_naval_all` — all naval ships
    - `CAT_naval_modules` — all naval modules
      - `CAT_naval_engine` — naval engines
      - `CAT_naval_electronics` — fire control and electronic warfare
      - `CAT_naval_armament` — naval armament
      - `CAT_naval_cannons` — ship-based cannons
      - `CAT_pds` — point-defense systems
      - `CAT_as_missiles` — anti-ship missiles
      - `CAT_aa_missiles` — anti-air missiles
      - `CAT_vls_systems` — vertical launch systems
        - `CAT_vls_air_systems` — air VLS systems
        - `CAT_vls_land_systems` — land VLS systems
      - `CAT_torpedoes` — torpedoes
    - `CAT_landing_craft` — landing craft
    - `CAT_sub` — all submarines
      - `CAT_nuke_sub` — nuclear submarines
        - `CAT_atk_sub` — nuclear attack submarines
        - `CAT_m_sub` — nuclear missile submarines
      - `CAT_d_sub` — diesel submarines
    - `CAT_surface_ship` — surface ships
      - `CAT_cruiser` — cruisers
      - `CAT_destroyer` — destroyers
      - `CAT_frigate` — frigates
      - `CAT_corvette` — corvettes
      - `CAT_carrier` — all carriers
        - `CAT_n_cv` — nuclear carriers
        - `CAT_cv` — aircraft carriers
      - `CAT_lha` — landing helicopter assault ships (LHA)
      - `CAT_lpd` — amphibious transport docks (LPD)
  - `CAT_missile` — all missile technologies
    - `CAT_bm` — ballistic missiles
      - `CAT_icbm` — ICBMs
      - `CAT_irbm` — intermediate-range ballistic missiles
      - `CAT_slbm` — submarine-launched ballistic missiles
    - `CAT_cm` — cruise missiles
      - `CAT_alcm` — air-launched cruise missiles
      - `CAT_glcm` — ground-launched cruise missiles
      - `CAT_slcm` — sea-launched cruise missiles
      - `CAT_hscm` — hypersonic cruise missiles
    - `CAT_asm` — anti-ship/strike missiles
    - `CAT_sam` — surface-to-air missiles
    - `CAT_abm` — anti-ballistic missile defense
    - `CAT_space` — space technologies
      - `CAT_satellite` — satellites
        - `CAT_gnss` — GNSS satellite navigation
    - `CAT_conventional_warhead` — conventional warheads
  - `CAT_fortifications` — bunkers and fortifications

## Doctrines

- `CAT_land_doctrine` — all land doctrines
  - `CAT_legacy_doctrines` — legacy doctrines
  - `CAT_western` — western branch
  - `CAT_eastern` — eastern branch
  - `CAT_offensive_doctrine` — offensive doctrines
  - `CAT_defensive_doctrine` — defensive doctrines
  - `CAT_unconventional` — unconventional doctrines
  - `CAT_equipment_doctrines` — equipment doctrines
  - `CAT_training` — training
  - `CAT_tech_doctrines` — technology doctrines
- `CAT_air_doctrine` — air doctrines
- `CAT_naval_doctrine` — naval doctrines
- `CAT_battlefield_support_tree` — Battlefield Support tree
- `CAT_operational_integrity_tree` — Operational Integrity tree
- `CAT_battlefield_support` — Battlefield Support
- `CAT_operational_integrity` — Operational Integrity
- `CAT_green_water_navy` — Green Water Navy
- `CAT_blue_water_navy` — Blue Water Navy
- `CAT_jeune_ecole_two` — Jeune École doctrine
- `special_forces_doctrine` — special forces doctrine
