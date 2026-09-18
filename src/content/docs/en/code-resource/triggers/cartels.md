---
title: Cartels
description: "Scripted triggers for the MDC drug cartel system."
---

Just 2 triggers — the cartel system itself (strength, influence) is covered in [Effects → Cartels](../effects/unique/#cartels).

```
has_cartels_penalties = yes
```
There's an active `cartel_penalties` dynamic modifier (`has_dynamic_modifier`) **and** the country hasn't defeated the cartels yet (no `CARTEL_defeated_the_cartels` flag).

```
is_cartel_nation = yes
```
The country is on the list of tags eligible for the cartel system at all — two regions:

- **Latin America**: ARG, BLZ, BOL, BRA, CHL, COL, COS, ECU, ELS, GUA, GUY, HON, MEX, NIC, PAN, PAR, PRU, SUR, URG, VEN
- **ASEAN**: BRM, BRU, LAO, MAY, PHI, SIA, VIE, SIN

The check uses `original_tag` — meaning the country's historical tag, not its current one (e.g. if the tag changed through unification or a rename, the cartels remain tied to the original country).
