---
title: Военные законы
description: "Эффекты для смены военных законов: оружие, призыв, призыв женщин, интервенционизм, подготовка офицеров"
---

## Военные законы

Страница группирует военные законы, реализованные отдельными скриптовыми эффектами в исходном файле. Военные расходы намеренно остаются в экономических законах — в исходнике это эффект бюджета.

### Закон об оружии

| Эффект | Уровень |
|---|---|
| `set_ban_weapons = yes` | Запрет оружия |
| `set_allow_weapons = yes` | Разрешить частное владение |
| `set_regulate_weapons = yes` | Регулировать оружие |

### Закон о призыве

| Эффект | Уровень |
|---|---|
| `set_no_military_effect` | Без армии |
| `set_volunteer_army_effect` | Добровольческая армия |
| `set_partial_draft_effect` | Частичный призыв |
| `set_draft_army_effect` | Призывная армия |
| `increase_conscription_effect` | Повысить закон на один уровень |
| `decrease_conscription_effect` | Понизить закон на один уровень |

### Женщины в армии

| Эффект | Уровень |
|---|---|
| `set_no_women_effect` | Без женщин в армии |
| `set_volunteer_women_effect` | Женщины-добровольцы |
| `set_drafted_women_effect` | Призыв женщин |

### Интервенционизм

| Эффект | Действие |
|---|---|
| `increase_intervention_law_effect` | Повысить интервенционизм на один уровень |
| `decrease_intervention_law_effect` | Понизить интервенционизм на один уровень |
| `set_intervention_limited_interventionism_effect` | Установить ограниченный интервенционизм |
| `set_intervention_neo_imperialism_effect` | Установить неоимпериализм |

Полная шкала идей источника: `intervention_isolation` → `intervention_local_security` → `intervention_limited_interventionism` → `intervention_regional_interventionism` → `intervention_global_interventionism` → `intervention_neo_imperialism`.

### Подготовка офицеров

| Эффект | Действие |
|---|---|
| `increase_officer_training_level` | Повысить уровень подготовки офицеров |
| `decrease_officer_training_level` | Понизить уровень подготовки офицеров |

Шкала: `officer_baptism_by_fire` → `officer_basic_training` → `officer_advanced_training` → `officer_military_school` → `officer_military_academy` → `officer_international_education`.

При повышении до международного образования переход доступен, если страна состоит во фракции или имеет идею `NATO_member`.
