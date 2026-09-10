---
title: Unique
description: "Effects that only actually work for specific countries — tied to a unique mechanic that only exists there"
---

## Unique Effects

Effects that can technically be written anywhere, but only actually fire for specific countries — because they're tied to a mechanic that only exists there. The general list of corresponding modifiers is in [Unique Modifiers](../../modifiers/unique/).

<a id="britain"></a>
## Britain

Change Britain's (ENG) unique parliament support modifiers — see [Unique Modifiers → Britain](../../modifiers/unique/#britain).

```
set_temp_variable = { eng_backbenchers_sup_change = -15 }
ENG_backbenchers_support_change = yes
```

```
set_temp_variable = { eng_house_of_commons_sup_change = -15 }
ENG_house_of_commons_support_change = yes
```

```
set_temp_variable = { eng_house_of_lords_sup_change = -15 }
ENG_lords_support_change = yes
```

The variable value is the change (+/-), not the final number. When the effect fires, the game automatically shows a tooltip with the change, using these loc keys (icons omitted here):

```yaml
lords_support_change_tt: "Peers Support: [?eng_house_of_lords_sup_change|+2]"
lords_house_of_commons_change_tt: "Opposition Support: [?eng_house_of_commons_sup_change|+2]"
backbenchers_support_change_tt: "Backbenchers Support: [?eng_backbenchers_sup_change|+2]"
```

<a id="russia"></a>
## Russia

Changes Russia's (SOV) economic recovery.

```
set_temp_variable = { modify_economic = 1 }
modify_economic_support = yes
```

The variable value is the change (+/-), not the final number. The tooltip on trigger shows the change and the current value:

```yaml
SOV_economic_tt: "Economic Recovery will increase by [?modify_economic] (Current Economic Recovery value: [?SOV.economic])"
```
