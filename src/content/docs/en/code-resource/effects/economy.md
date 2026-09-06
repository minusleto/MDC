---
title: Economy
description: "Economic scripted effects"
---

## MDC Economic Effects

All scripted effects provided _automatically_ create tooltips for you. Do **NOT** localize additional tooltips.

<a id="how-to-modify-treasury"></a>
### How to Modify Treasury

Reduces the treasury by a custom amount:

```
set_temp_variable = { treasury_change = -10.00 }
modify_treasury_effect = yes
```

Preset expenditures, each a single flat effect sized as % of GDP:

**Small Expenditure** — 0.2% of GDP
```
small_expenditure = yes
```

**Medium Expenditure** — 0.4% of GDP
```
medium_expenditure = yes
```

**Large Expenditure** — 0.6% of GDP
```
large_expenditure = yes
```

<a id="other-economic-effects"></a>
### Other Economic Effects

```
set_temp_variable = { debt_change = 0.1 }
modify_debt_effect = yes
```

```
set_temp_variable = { int_investment_change = 0.1 }
modify_international_investment_effect = yes
```

```
set_temp_variable = { corp_change = 2 }
modify_corporate_tax_rate_effect = yes
```

```
set_temp_variable = { pop_change = 2 }
modify_population_tax_rate_effect = yes
```

```
# - Adjusting the productivity of a number as a flat value
set_temp_variable = { temp_productivity_change = 0.025 }
flat_productivity_change_effect = yes
```

<a id="guide-on-how-to-do-additional-incomeadditional-expenses"></a>
### Guide on How To-Do Additional Income/Additional Expenses

```
Step One: go to common/scripted_effects/00_money_system.txt
Step Two: look for calculate_additional_income_rate
Step Three: In that section there should be a noted one that says Country Specific. Throw it in there.
if = {
  limit = { original_tag = TAG  }
  if = {
    limit = { has_idea = whatever }
    set_variable = { whatever_gain = 0.05 }
    add_to_variable = { additional_income_rate = whatever_gain }
  }
}
Step Four: go to common/scripted_localization/money_scripted_localization.txt. It doesn't really matter where you put it in here.
defined_text = {
    name = additional_income_summary_whatever
    text = {
        trigger = { has_idea = whatever }
        localization_key = "whatever_TT" #define this summary "$$[?whatever_gain|+3] from §Y$whatever$§!\n"
    }
    text = {
        trigger = { NOT = { has_idea = whatever } }
        localization_key = ""
    }
}
Step Five: go to MD_money_l_english.yml (localisation/english). Look up ADDITIONAL_INCOME_REVENUES_TOOLTIP
Then at the end or somewhere in it just put [additional_income_summary_whatever]
Step Six: Go back to your original idea file this should show you the amount in the spirits modifiers

**NOTE** Variable displays will not work in this section. You will need to create seperate tooltip that states expclitly what you want or added the localization into the _desc of the idea.

Do this in the modifiers:

modifiers = {
  custom_modifier_tooltip = whatever_TT
}

```

<a id="setremove-trade-agreement"></a>
### Set/Remove Trade Agreement

Creates or removes a trade agreement

- sender_nation --- The nation sending the agreement
- receiver_nation --- Nation retrieving the agreement
- remove_agreement --- Optional (Set to 1)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_improved_trade_agreement = yes

```

<a id="setremove-permanent-investment-targets"></a>
### Set/Remove Permanent Investment Targets

Creates or removes adding_nation to another AI's investment pool

- target_nation --- The nation sending the agreement
- adding_nation --- Nation retrieving the agreement
- remove_nation --- Optional (Set to 1)

```
set_temp_variable = { target_nation = RAJ.id }
set_temp_variable = { adding_nation = SIN.id }
change_permanent_investment_target = yes

```

<a id="increasedecrease-economic-growth"></a>
### Increase/Decrease Economic Growth

Increases or decreases the nation's current economic cycle

```
increase_economic_growth = yes
decrease_economic_growth = yes
increase_two_level_economic_growth = yes
decrease_two_level_economic_growth = yes
depression = yes
recession = yes
stagnation = yes
stable_growth = yes
fast_growth = yes
economic_boom = yes
```

```

<a id="mdc-internal-faction-effects"></a>
