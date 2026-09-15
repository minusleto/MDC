---
title: Военные законы
description: "Эффекты смены военных законов: оружие, призыв, призыв женщин, интервенционизм и подготовка офицеров"
---

## Военные законы

Здесь собраны военные законы, которые в исходном файле реализованы отдельными scripted effects. Военные расходы намеренно остаются в разделе экономических законов: в исходнике они относятся к бюджетным эффектам.

### Закон об оружии

| Эффект | Уровень |
|---|---|
| `set_ban_weapons = yes` | Запрет оружия |
| `set_allow_weapons = yes` | Свободное ношение оружия |
| `set_regulate_weapons = yes` | Регулирование оборота оружия |

### Закон о призыве

| Эффект | Уровень |
|---|---|
| `set_no_military_effect` | Армия отсутствует |
| `set_volunteer_army_effect` | Добровольческая армия |
| `set_partial_draft_effect` | Частичный призыв |
| `set_draft_army_effect` | Призывная армия |
| `increase_conscription_effect` | Повысить закон на один уровень |
| `decrease_conscription_effect` | Понизить закон на один уровень |

### Призыв женщин

| Эффект | Уровень |
|---|---|
| `set_no_women_effect` | Женщины не служат |
| `set_volunteer_women_effect` | Добровольная служба женщин |
| `set_drafted_women_effect` | Призыв женщин |

### Интервенционизм

| Эффект | Действие |
|---|---|
| `increase_intervention_law_effect` | Повысить интервенционизм на один уровень |
| `decrease_intervention_law_effect` | Понизить интервенционизм на один уровень |
| `set_intervention_limited_interventionism_effect` | Установить ограниченный интервенционизм |
| `set_intervention_neo_imperialism_effect` | Установить неоимпериализм |

Полная шкала исходных идей: `intervention_isolation` → `intervention_local_security` → `intervention_limited_interventionism` → `intervention_regional_interventionism` → `intervention_global_interventionism` → `intervention_neo_imperialism`.

### Подготовка офицеров

| Эффект | Действие |
|---|---|
| `increase_officer_training_level` | Повысить уровень подготовки офицеров |
| `decrease_officer_training_level` | Понизить уровень подготовки офицеров |

Шкала: `officer_baptism_by_fire` → `officer_basic_training` → `officer_advanced_training` → `officer_military_school` → `officer_military_academy` → `officer_international_education`.

При повышении до международного образования переход доступен, если страна состоит во фракции или имеет идею `NATO_member`.
