---
title: Departments & Companies
description: "Effects for showing tooltips when a new department, company, or branch becomes available"
---

## Department, Company & Branch Effects

If you need a focus tooltip to show that a new department or company is being unlocked, use `custom_effect_tooltip` together with `show_ideas_tooltip`, pointing it to the relevant department/company idea.

<a id="new-department"></a>
### New Department

```
custom_effect_tooltip = available_new_departament
show_ideas_tooltip = GDR_shtazi_idea
```

<a id="new-company"></a>
### New Company

```
custom_effect_tooltip = available_new_company
show_ideas_tooltip = GDR_Deutsche_Reichsbahn_idea
```

<a id="new-branch"></a>
### New Branch

Branches use slightly different syntax — instead of a direct value, use `localization_key`, with the branch itself passed via `BRANCH_NAME`.

```
custom_effect_tooltip = {
    localization_key = available_new_branch
    BRANCH_NAME = POR_salvador_caetano_branch
}
```
