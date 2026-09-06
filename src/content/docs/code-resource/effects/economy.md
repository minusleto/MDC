---
title: Экономика
description: "Экономические скриптовые эффекты (документация сокращена — см. Смена законов)"
---

## Экономические эффекты MDC

Все предоставленные скриптовые эффекты _автоматически_ создают для вас тултипы. **НЕ** локализуйте дополнительные строки вручную — тултипы генерируются из ключей.

<a id="how-to-modify-treasury"></a>
### Как изменить казну

```
# - уменьшает казну
set_temp_variable = { treasury_change = -10.00 }
modify_treasury_effect = yes

small_expenditure = yes
medium_expenditure = yes
large_expenditure = yes
```

<a id="other-economic-effects"></a>
### Другие экономические эффекты

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
# - Изменяет производительность на фиксированную величину
set_temp_variable = { temp_productivity_change = 0.025 }
flat_productivity_change_effect = yes
```

<a id="setremove-trade-agreement"></a>
### Установить / удалить торговое соглашение

Создаёт или удаляет торговое соглашение

- sender_nation --- страна, отправляющая соглашение
- receiver_nation --- страна, получающая соглашение
- remove_agreement --- необязательный параметр (установить в 1)

```
set_temp_variable = { receiver_nation = RAJ.id }
set_temp_variable = { sender_nation = SIN.id }
set_improved_trade_agreement = yes
```

<a id="setremove-permanent-investment-targets"></a>
### Установить / удалить постоянные цели инвестиций

Добавляет или удаляет adding_nation из инвестиционного пула другой страны под управлением ИИ

- target_nation --- страна, отправляющая соглашение
- adding_nation --- страна, получающая соглашение
- remove_nation --- необязательный параметр (установить в 1)

```
set_temp_variable = { target_nation = RAJ.id }
set_temp_variable = { adding_nation = SIN.id }
change_permanent_investment_target = yes
```

<a id="increasedecrease-economic-growth"></a>
### Увеличить / уменьшить экономический рост

Увеличивает или уменьшает текущий экономический цикл страны

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

<a id="increasedecrease-bureaucracy-law"></a>
### Увеличить / уменьшить закон о расходах на бюрократию

Увеличивает или уменьшает текущий закон страны о расходах на бюрократию

```
decrease_centralization = yes
decrease_centralization_2 = yes
decrease_centralization_3 = yes
increase_centralization = yes
increase_centralization_2 = yes
increase_centralization_3 = yes
increase_centralization_4 = yes
```

<a id="spending-moved"></a>
### Расходы и бюджеты — перенесено

Эффекты, изменяющие законы расходов (социальные расходы, образование, здравоохранение, полиция и т.д.) перенесены в единый файл:

- /src/content/docs/code-resource/effects/laws.md

Пожалуйста, см. там полную таблицу set_* эффектов по смене законов и бюджетов.

<hr/>

<a id="mdc-internal-faction-effects"></a>
### Прочие разделы

(Остальная документация сохранена далее.)
