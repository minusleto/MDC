---
title: Unique
description: "Effects that only actually work for specific countries — tied to a unique mechanic that only exists there"
---

## Unique Effects

Effects that can technically be written anywhere, but only actually fire for specific countries — because they're tied to a mechanic that exists only there. The general list of corresponding modifiers is in [Unique Modifiers](../../modifiers/unique/).

<a id="britain"></a>
## Britain

Change Britain's (ENG) unique parliament support modifiers — see [Unique Modifiers → Britain](../../modifiers/unique/#britain). The variable value is the change (+/-), not the final number.

Change backbenchers support:

```
set_temp_variable = { eng_backbenchers_sup_change = -15 }
ENG_backbenchers_support_change = yes
```

Change opposition (House of Commons) support:

```
set_temp_variable = { eng_house_of_commons_sup_change = -15 }
ENG_house_of_commons_support_change = yes
```

Change House of Lords support:

```
set_temp_variable = { eng_house_of_lords_sup_change = -15 }
ENG_lords_support_change = yes
```

<a id="russia"></a>
## Russia

Change Russia's (SOV) economic recovery. The variable value is the change (+/-), not the final number.

```
set_temp_variable = { modify_economic = 1 }
modify_economic_support = yes
```

<a id="cartels"></a>
## Cartels

An effect from the cartel system used to change cartel strength and political influence.

Before calling the effect, set temporary variables:

- `cart_strength_change` — change to cartel strength.
- `cart_influence_change` — change to cartel political influence.

Values can be positive or negative.

```text
set_temp_variable = { cart_strength_change = 2 }
set_temp_variable = { cart_influence_change = 2 }
modify_cartel_variables_effect = yes
```

`modify_cartel_variables_effect` applies the changes stored in these variables.
