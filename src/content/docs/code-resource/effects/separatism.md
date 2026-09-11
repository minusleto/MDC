---
title: Сепаратизм
description: "Изменение уровня сепаратизма в отдельных регионах/тегах мира"
---

## Эффекты сепаратизма

<a id="separatism-support"></a>
### Изменение сепаратизма

Работает как переменная `separatism` у конкретного тега (0–100), меняется через `set_temp_variable` + вызов общего эффекта:

```txt
set_temp_variable = { modify_separatism = 1 }
modify_separatism_support = yes
```

Значение переменной — это изменение (+/-), а не итоговая цифра. Ограничено диапазоном `1`–`100`.

Доступно только для тегов сепаратистских/потенциально сепаратистских регионов — их довольно много по всему миру, не только Россия:

`ADJ` `ADY` `ALA` `ALT` `ARA` `ASK` `BAY` `BDA` `BLR` `BRY` `BSH` `CAL` `CAT` `CHE` `CHU` `CKK` `CNR` `CRE` `CRM` `DAG` `DPR` `DRU` `EST` `ETK` `FLN` `GAL` `GDR` `GGZ` `GRL` `HUN` `ING` `KAS` `KBK` `KCC` `KHM` `KHS` `KLM` `KOM` `KRP` `LAT` `LIT` `LOR` `MEL` `MIL` `NAP` `NAV` `NEE` `PIE` `PKK` `RGD` `RHE` `RSK` `SAZ` `SCO` `SIC` `SIL` `SLA` `SLO` `SPA` `TAM` `TAT` `TEX` `TIB` `TLS` `TRC` `TUS` `TUV` `UDM` `VNC` `VOJ` `YAK` `YAM` `ZAP`

:::note
При достижении высоких значений (обычно >75) у тега запускается собственный сценарий сепаратистского восстания/событий — свой для каждого тега. Это отдельная, специфичная для каждого региона логика, не общий эффект.
:::
