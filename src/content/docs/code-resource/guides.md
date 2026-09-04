---
title: Гайды / How-To
description: "Субидеологии, исторические события (ETD), переменные, уникальные terrain-фото"
---

<a id="guideshow-to"></a>
## Гайды / инструкции

<a id="mdc-how-to-add-subideology-parties"></a>
### MDC: как добавить партии субидеологий

Добавление политических партий — отличный способ придать странам больше уникальности без большого объёма работы!

Чтобы партии появились в Millennium Dawn, необходимо изменить несколько файлов.

- `common/scripted_lozalition/subideology_scripted_localization.txt`
- `localisation/english/MD_subideology_parties_l_english.yml`
- `interface/MD_parties_icons.gfx`
- Иконки партий хранятся в `gfx/texticons/parties_icons/nation_name`
- Пользовательские лидеры хранятся в `common/scripted_effects/[TAG]_political_leaders.txt`

Всё достаточно просто, но необходимо точно соблюдать теги в том виде, в котором они указаны.

Список слотов субидеологий:

_ЭТИ СЛОТЫ НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ В КОНСОЛЬНЫХ КОМАНДАХ_

<a id="western"></a>
#### Западные

- Западные_Autocracy - Прозападные автократы
- conservatism - Консерваторы
- liberalism - Либералы
- socialism - Социал-демократы

<a id="emerging"></a>
#### Развивающиеся

- Communist-State - Развивающиеся коммунисты
- anarchist_communism - Леворадикалы
- Conservative - Реакционеры
- Autocracy - Развивающиеся автократы
- Mod_Vilayat_e_Faqih - Умеренные шиитские революционеры
- Vilayat_e_Faqih - Радикальные шиитские революционеры

<a id="salafism"></a>
#### Салафизм

- Kingdom - Ваххабитские монархисты
- Caliphate - Салафитский джихадизм

<a id="non-aligned"></a>
#### Неприсоединившиеся

- Neutral_Muslim_Brotherhood - Умеренные исламисты
- Neutral_Autocracy - Неприсоединившиеся автократы
- Neutral_conservatism - Консерваторы
- oligarchism - Олигархи
- Neutral_Libertarian - Либертарианцы
- Neutral_green - Зелёные
- neutral_Social - Социалистические демократы
- Neutral_Communism - Коммунисты

<a id="nationalist"></a>
#### Националисты

- Nat_Populism - Правые популисты
- Nat_Fascism - Фашисты
- Nat_Autocracy - Военная хунта
- Monarchist - Абсолютистские монархисты

_**КАК ЭТО СДЕЛАТЬ**_

Для начала необходимо определить политическую партию в `MD_subideology_parties_l_english.yml`. В качестве примера используется Армения. Сохраняйте здесь тот же формат, заменяя только conservatism на соответствующую идеологию.

Затем нужно добавить иконки в `interface/MD_parties_icons.gfx`. Сначала сохраните иконки партий в формате .dds в `gfx/texticons/parties_icons/{tag}` — именно там хранится изображение иконки. После этого перейдите к `interface/MD_parties_icons.gfx` и добавьте их по аналогии с многочисленными примерами spriteType.

После этого нужно добавить ключи локализации. Перейдите к файлу `common/scripted_localisation/subideology_scripted_localisation.txt`. Для каждой локализации необходимо добавить три элемента. Первый — `{subideology}_L`, название партии вместе с её иконкой. Второй — `{subideology}_L_desc`, где хранится описание. И наконец, `{subideology}_L_icon`, где хранится иконка.

Если вы выполнили эти шаги правильно, партии должны корректно отображаться в игре. При необходимости можно добавить любые условные проверки для динамического поведения. Примеры такой реализации с другими триггерами есть у ARM, SPR и FRA.

Новые политические лидеры немного сложнее и требуют дополнительных настроек, чтобы корректно работать в игре. Для начала сохраните их портреты в `gfx/leaders/{tag}` в формате .dds или .tga. После этого перейдите к `common/scripted_effects/{tag}_political_leaders.txt`.

Есть несколько важных моментов. В зависимости от идеологии лидера нужно заменить `set_Nat_Autocracy` на `set_{subideology}`. Это определяет правильную субидеологию, к которой относится персонаж. Если лидер не должен быть доступен после определённого условия или даты, необходимо добавить:
`if = { limit = { date < 2016.1.2 } set_temp_variable = { b = 1 } } #skip if 2017`. This line determines whether the leader is skipped the next time the leader comes to power.

```
if = { limit = { has_country_flag = set_Nat_Autocracy }
		if = { limit = { check_variable = { Nat_Autocracy_leader = 0 } }
			add_to_variable = { Nat_Autocracy_leader = 1 }
			hidden_effect = { kill_country_leader = yes }

			create_country_leader = {
				name = "Clifford Husbands"
				picture = "generic.dds"
				ideology = Nat_Autocracy
				traits = {
					nationalist_Nat_Autocracy
				}
			}

			if = { limit = { has_country_flag = do_not_retire } subtract_from_variable = { Nat_Autocracy_leader = 1 } }
			if = { limit = { date < 2016.1.2 } set_temp_variable = { b = 1 } } #skip if 2017
		}
		if = { limit = { check_variable = { Nat_Autocracy_leader = 1 } NOT = { check_variable = { b = 1 } } }
			add_to_variable = { Nat_Autocracy_leader = 1 }
			hidden_effect = { kill_country_leader = yes }

			create_country_leader = {
				name = "Sandra Mason"
				picture = "sandra_mason.dds"
				ideology = Nat_Autocracy
				traits = {
					nationalist_Nat_Autocracy
				}
			}

			if = { limit = { has_country_flag = do_not_retire } subtract_from_variable = { Nat_Autocracy_leader = 1 } }
			set_temp_variable = { b = 1 }
		}
	}
```

<a id="historical-eventsexact-date-trigger-etd-events"></a>
### Исторические события / события с точной датой (ETD)

Путь к файлу: `common/scripted_effects/00_yearly_efffects`

Исторические события MD следует запускать через новую систему в `common/scripted_effects/00_yearly_effects.txt`.

Это «контейнерные» эффекты, которые запускаются раз в год одной страной и вызывают весь исторический скриптовый контент для каждой страны. Событие можно разместить в двух местах: в эффекте `year` или в `on_startup` в начале файла. Если событие должно произойти в 2000 году (или в 2017 году, если вы всё ещё поддерживаете эту дату старта), добавьте его в `on_startup`, указав количество дней до его срабатывания в первый игровой год. Если событие должно произойти в конкретном году, найдите его и добавьте счётчики дней так же, как для обычного события.

```
MD_event_on_startup_events = {
	if = { # Дата начала 2000 год
		limit = { has_start_date < 2000.1.2 }
		# События с известными датами, которые должны сработать при старте 2000 года.
		CAM = {
			country_event = { id = Cameroon.1 days = 50 random_days = 50 }
		}
	}
	else = {
		USA = {
			country_event = { id = donald_trump.1000 days = 1 }
		}
	}
}
```

```
trigger_year_2067_events = {
	USA = {
		country_event = { id = collapse_event.1 days = 30 random_days = 336 }
	}
}
```

<a id="variable-guideexplanation"></a>
### Руководство / объяснение переменных

С помощью простых переменных и других их разновидностей можно реализовать множество интересных механик, которые невозможно или сложно сделать только средствами игровых значений. Переменные открывают огромные возможности для геймплея и дизайна, которые часто недооцениваются в игре, основной акцент которой сделан на военной составляющей.

<a id="basic-commands-for-variables"></a>
#### Основные команды для переменных

#set_variable = { var = example value = 1 } - Sets the Variable (can be used anywhere executing a script) to a value and also sets a variable with a name. Creates the variable if it doesnt exist before, OR sets it to a new value if already present somewhere.
#add_to_variable { var = example value = 1 } - this is the long way of adding to a variable but it just adds one so now the variable is valued at 2.
#subtract_from_variable { var = example value = 2 } - subtracts yields 0 from the current running script.

В зависимости от ситуации переменные также можно умножать, делить, округлять и обрабатывать с помощью ряда других функций.

<a id="basic-setting-example"></a>
#### Пример базовой настройки:

Пример:

```
	####American Economic Variables Pre-Set###
	###Regulatory Variable 
	set_variable = { var = USA_economic_regulation_var value = 45 }
	set_variable = { var = USA_economic_regulation_var max = 100 }
	set_variable = { var = USA_economic_regulation_var min = 0 }
	###Strength of Wall Street 
	set_variable = { var = USA_strength_of_wall_street_var value = 17 }
	set_variable = { var = USA_strength_of_wall_street_var max = 50 }
	set_variable = { var = USA_strength_of_wall_street_var min = 0 }
```

Переменные здесь задаются в историческом файле США и используются решениями и эффектами американской экономики, связанными с каждым фокусом, событием или решением этой экономической ветки. В `set_variable` здесь используются два новых параметра — `min` и `max`. Они задают соответственно минимально и максимально допустимые значения переменной.

Это базовый обзор переменных и самый простой способ начать ими пользоваться. Эти гибкие эффекты можно применять множеством способов как в отдельных системах, так и в обычных эффектах.

<a id="unique-terrain-photos-guide"></a>
### Руководство по уникальным фотографиям ландшафта

<a id="step-one-create-a-suitable-image-size-put-it-in-a-folder"></a>
#### Шаг 1: подготовьте изображение нужного размера и поместите его в папку

Фотографии ландшафта должны иметь размер 413x70 пикселей. Выберите и измените размер изображения, сохраните его в формате DDS, а затем поместите фотографии в `\mod\Millennium_Dawn\gfx\interface\terrain`.

<a id="step-two-edit-md_terrain_citiesgfx-code"></a>
#### Шаг 2: измените код MD_terrain_cities.gfx

Путь к файлу: `Millennium_Dawn\gfx\interface\terrain`
Затем нужно указать игре загрузить новый файл .dds. Код находится в `MD_terrain_cities.gfx` по пути `Millennium_Dawn\interface\MD_terrain_cities.gfx`. Запись выглядит так:

```
spriteType = {
    name = "GFX_terrain_brussels"
    textureFile = "gfx/interface/terrain/BAN_chittagong.dds"
}

```

<a id="step-three-edit-countrystateviewgui-code"></a>
#### Шаг 3: измените код countrystateview.gui

Путь к файлу: `countrystateview.gui`
Затем в этом файле нужно создать запись: `countrystateview.gui`. Запись выглядит так:

```
iconType = {
    name = "terrain_brussels_icon"
    spriteType = "GFX_terrain_brussels"
    alwaystransparent = yes
}
```

<a id="step-four-edit-01_province_modifiers-code"></a>
#### Шаг 4: измените код 01_province_modifiers

Путь к файлу: Millennium_Dawn\common\modifiers in this file: 01_province_modifiers.txt
После этого нужно сделать ещё две вещи: 1. добавить пустой модификатор (тот, который будет прикреплён к провинции); 2. указать игре прикрепить модификатор к провинции при старте. Пустые модификаторы находятся здесь:

```
terrain_brussels = { }
```

<a id="step-five-edit-00_startup_effectstxt-code"></a>
#### Шаг 5: измените код 00_startup_effects.txt

Это самый насыщенный кодом этап, поскольку здесь настраивается, в каких точках карты будут отображаться добавленные фотографии ландшафта. Рекомендуется открыть игру и редактор (например, Visual Studio Code): на одном экране держать код, а на другом — игру. Все ID регионов можно найти в режиме отладки или введя `Tdebug` в консоли.

Путь к файлу: `Millennium_Dawn\common\scripted_effects\00_startup_effects.txt`
И наконец, чтобы объект появился при старте игры, перейдите в `Millennium_Dawn\common\scripted_effects`, в файл `00_startup_effects.txt`.
Там вы найдёте эту запись для Брюсселя:

```
50 = {
    add_province_modifier = {
        static_modifiers = { terrain_brussels }
        province = { id = 516 }
    }
    add_province_modifier = {
        static_modifiers = { terrain_antwerp }
        province = { id = 6598 }
    }
}
```

50 — это ID региона, уровень определяет размещение авиабаз и подобных объектов, а 516 — точная провинция внутри этого региона.

Если у вас есть дополнительные вопросы, напишите [@AngriestBird](https://gitlab.com/AngriestBird) в Discord.
