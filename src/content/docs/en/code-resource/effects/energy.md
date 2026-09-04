---
title: Energy
description: "Energy scripted effects"
---

## Energy Effects

Constructs enrichment facilities for the nation. It costs 25.00 per. The scripted effect handles the cost. Just input a number.

```
set_temp_variable = { temp_change = 2 }
build_enrichment_facilities_effect = yes
```

Constructs a battery park as part of an effect. It costs 100.00 per unless you have
modifiers to reduce or increase it.

```
set_temp_variable = { temp_change = 2 }
build_battery_park_effect = yes
```
