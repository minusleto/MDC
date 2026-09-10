---
title: Уникальные
description: "Эффекты, которые реально работают только для конкретных стран — завязаны на уникальную механику, существующую только там"
---

## Уникальные эффекты

Эффекты, которые технически можно прописать где угодно, но реально они срабатывают только для конкретных стран — потому что завязаны на механику, которая существует только там. Общий список соответствующих модификаторов — в [Уникальные модификаторы](../../modifiers/unique/).

<a id="britain"></a>
## Британия

Меняют уникальные модификаторы поддержки парламента Британии (ENG) — см. [Уникальные модификаторы → Британия](../../modifiers/unique/#britain).

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

Значение переменной — это изменение (+/-), а не итоговая цифра. При срабатывании эффекта игра сама показывает тултип с изменением, используя эти лок-ключи (иконки в оригинале опущены):

```yaml
lords_support_change_tt: "Поддержка лордов: [?eng_house_of_lords_sup_change|+2]"
lords_house_of_commons_change_tt: "Поддержка оппозиции: [?eng_house_of_commons_sup_change|+2]"
backbenchers_support_change_tt: "Поддержка заднескамеечников: [?eng_backbenchers_sup_change|+2]"
```

<a id="russia"></a>
## Россия

Меняет экономическое восстановление РФ (SOV).

```
set_temp_variable = { modify_economic = 1 }
modify_economic_support = yes
```

Значение переменной — это изменение (+/-), а не итоговая цифра. Тултип при срабатывании эффекта показывает изменение и текущее значение:

```yaml
SOV_economic_tt: "Экономическое восстановление увеличится на [?modify_economic] (Текущее значение Экономического восстановления: [?SOV.economic])"
```
