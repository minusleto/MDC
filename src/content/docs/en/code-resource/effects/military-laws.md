---
title: Military Laws
description: "Effects for changing military laws: weapons, conscription, women in the military, interventionism, and officer training"
---

## Military Laws

This page groups military laws implemented by dedicated scripted effects in the source file. Military spending intentionally remains under economic laws because the source treats it as a budget effect.

### Weapons Law

| Effect | Tier |
|---|---|
| `set_ban_weapons = yes` | Ban Weapons |
| `set_allow_weapons = yes` | Allow Private Ownership |
| `set_regulate_weapons = yes` | Regulate Weapons |

### Conscription Law

| Effect | Tier |
|---|---|
| `set_no_military_effect` | No Military |
| `set_volunteer_army_effect` | Volunteer Army |
| `set_partial_draft_effect` | Partial Draft |
| `set_draft_army_effect` | Draft Army |
| `increase_conscription_effect` | Increase the law by one tier |
| `decrease_conscription_effect` | Decrease the law by one tier |

### Women in the Military

| Effect | Tier |
|---|---|
| `set_no_women_effect` | No Women in Military |
| `set_volunteer_women_effect` | Volunteer Women |
| `set_drafted_women_effect` | Drafted Women |

### Interventionism

| Effect | Action |
|---|---|
| `increase_intervention_law_effect` | Increase interventionism by one tier |
| `decrease_intervention_law_effect` | Decrease interventionism by one tier |
| `set_intervention_limited_interventionism_effect` | Set Limited Interventionism |
| `set_intervention_neo_imperialism_effect` | Set Neo-Imperialism |

Full source-idea scale: `intervention_isolation` → `intervention_local_security` → `intervention_limited_interventionism` → `intervention_regional_interventionism` → `intervention_global_interventionism` → `intervention_neo_imperialism`.

### Officer Training

| Effect | Action |
|---|---|
| `increase_officer_training_level` | Increase officer training level |
| `decrease_officer_training_level` | Decrease officer training level |

Scale: `officer_baptism_by_fire` → `officer_basic_training` → `officer_advanced_training` → `officer_military_school` → `officer_military_academy` → `officer_international_education`.

When increasing to international education, the transition is available if the country is in a faction or has the `NATO_member` idea.
