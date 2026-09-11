---
title: Separatism
description: "Changing the separatism level for specific regions/tags around the world"
---

## Separatism Effects

<a id="separatism-support"></a>
### Change Separatism

Works as a `separatism` variable on a specific tag (0–100), changed via `set_temp_variable` + calling the general effect:

```txt
set_temp_variable = { modify_separatism = 1 }
modify_separatism_support = yes
```

The variable value is the change (+/-), not the final number. Clamped to the `1`–`100` range.

Only available for tags of separatist/potentially separatist regions — there are quite a few around the world, not just Russia:

`ADJ` `ADY` `ALA` `ALT` `ARA` `ASK` `BAY` `BDA` `BLR` `BRY` `BSH` `CAL` `CAT` `CHE` `CHU` `CKK` `CNR` `CRE` `CRM` `DAG` `DPR` `DRU` `EST` `ETK` `FLN` `GAL` `GDR` `GGZ` `GRL` `HUN` `ING` `KAS` `KBK` `KCC` `KHM` `KHS` `KLM` `KOM` `KRP` `LAT` `LIT` `LOR` `MEL` `MIL` `NAP` `NAV` `NEE` `PIE` `PKK` `RGD` `RHE` `RSK` `SAZ` `SCO` `SIC` `SIL` `SLA` `SLO` `SPA` `TAM` `TAT` `TEX` `TIB` `TLS` `TRC` `TUS` `TUV` `UDM` `VNC` `VOJ` `YAK` `YAM` `ZAP`

:::note
At high values (usually >75) a tag triggers its own separatist rebellion event chain — unique logic per tag, not a general effect.
:::
