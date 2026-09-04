---
title: Европейский союз
description: "Эффекты Евросоюза и евроскептицизма"
---

## MDC European Union Effects

<a id="euroscepticism-effects"></a>
### Euroscepticism Effects

To add/remove Euroscepticism all you need to do is:

```
set_temp_variable = { modify_eurosceptic = 0.05 }
set_temp_variable = { modify_eurosceptic_target = THIS }
eurosceptic_change = yes
```

"THIS" can use any of the following:

- THIS
- ROOT
- PREV
- FROM
- Any country tag (such as GER)

For this effect to occur in _all_ current EU states:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_eurosceptic_change = yes
```

And finally, for this effect to occur in _current_ and _potential_ EU member states:

```
set_temp_variable = { modify_eurosceptic = -0.05 }
EU_potential_eurosceptic_change = yes
```

<a id="energy-effects"></a>
