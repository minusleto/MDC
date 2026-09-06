---
title: Economy
description: "Economic scripted effects"
head:
  - tag: style
    content: |
      .sl-markdown-content > h2:first-child {
        margin-top: 1.5rem;
      }
---

<a id="basic-effects"></a>
## Basic Effects

<a id="treasury"></a>
### Treasury

Change the treasury by a custom amount:

```
set_temp_variable = { treasury_change = 10.00 }
modify_treasury_effect = yes
```

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

<a id="debt"></a>
### Debt

```
set_temp_variable = { debt_change = 1.0 }
modify_debt_effect = yes
```

<a id="investments"></a>
### Investments

```
set_temp_variable = { int_investment_change = 1.0 }
modify_international_investment_effect = yes
```

<a id="taxes"></a>
### Taxes

**Corporate Tax**
```
set_temp_variable = { corp_change = 2 }
modify_corporate_tax_rate_effect = yes
```

**Population Tax**
```
set_temp_variable = { pop_change = 2 }
modify_population_tax_rate_effect = yes
```

<a id="productivity"></a>
### Productivity

```
set_temp_variable = { temp_productivity_change = 25.0 }
flat_productivity_change_effect = yes
```

<a id="capitalization"></a>
### Capitalization

Changes the country's capitalization:

```
set_temp_variable = { modify_capitalization = 0.010 }
modify_capitalization_support = yes
```


<a id="base-inflation"></a>
### Base Inflation

Changes the country's base inflation:

```
set_temp_variable = { base_inflation_percent_change = 1.0 }
modify_base_inflation_effect = yes
```


<a id="increasedecrease-economic-growth"></a>
### Economic Growth

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

<a id="economic-agreements"></a>
## Economic Agreements

<a id="setremove-trade-agreement"></a>
### Trade Agreement

Creates or removes a trade agreement

- sender_nation --- The nation sending the agreement
- receiver_nation --- Nation retrieving the agreement
- remove_agreement --- Optional (Set to 1)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_improved_trade_agreement = yes

```

<a id="setremove-mutual-investment-treaty"></a>
### Mutual Investment Treaty

Creates or removes a mutual investment treaty.

- `sender_nation` — nation sending the agreement
- `receiver_nation` — nation receiving the agreement
- `remove_treaty` — optional parameter (set to 1 to cancel)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_mutual_investment_treaty = yes
```

To cancel it:

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_temp_variable = { remove_treaty = 1 }
set_mutual_investment_treaty = yes
```

The improved trade agreement and mutual investment treaty can be used at the same time.

```
set_temp_variable = { receiver_nation = BRA.id }
set_temp_variable = { sender_nation = POR.id }
set_improved_trade_agreement = yes
set_mutual_investment_treaty = yes
```

<a id="setremove-permanent-investment-targets"></a>
### Permanent Investment Targets

Creates or removes adding_nation to another AI's investment pool

- target_nation --- The nation sending the agreement
- adding_nation --- Nation retrieving the agreement
- remove_nation --- Optional (Set to 1)

```
set_temp_variable = { target_nation = RAJ.id }
set_temp_variable = { adding_nation = SIN.id }
change_permanent_investment_target = yes

```

<a id="other"></a>
## Other

<a id="guide-on-how-to-do-additional-incomeadditional-expenses"></a>
### Additional Income/Expenses

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
