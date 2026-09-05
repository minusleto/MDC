---
title: Субидеологии и партии
description: "Добавление партий и субидеологий"
---

## MDC: как добавить партии субидеологий

Добавление политических партий — отличный способ добавить нового колорита странам без больших затрат труда!

Чтобы партии отображались в Millennium Dawn, нужно отредактировать несколько файлов.

- `common/scripted_lozalition/subideology_scripted_localization.txt`
- `localisation/english/MD_subideology_parties_l_english.yml`
- `interface/MD_parties_icons.gfx`
- Иконки партий хранятся в `gfx/texticons/parties_icons/nation_name`
- Кастомные лидеры хранятся в `common/scripted_effects/[TAG]_political_leaders.txt`

Всё довольно просто, но нужно точно следовать тегам, как они написаны.

Список слотов субидеологий:

_ЭТИ СЛОТЫ НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ В КОНСОЛЬНЫХ КОМАНДАХ_

<a id="western"></a>
### Западные

- Western_Autocracy - Прозападные автократы
- conservatism - Консерваторы
- liberalism - Либералы
- socialism - Социал-демократы

<a id="emerging"></a>
### Формирующиеся

- Communist-State - Формирующиеся коммунисты
- anarchist_communism - Левый радикализм
- Conservative - Реакционеры
- Autocracy - Формирующиеся автократы
- Mod_Vilayat_e_Faqih - Умеренные шиитские революционеры
- Vilayat_e_Faqih - Радикальные шиитские революционеры

<a id="salafism"></a>
### Салафизм

- Kingdom - Ваххабитские монархисты
- Caliphate - Салафитский джихадизм

<a id="non-aligned"></a>
### Неприсоединившиеся

- Neutral_Muslim_Brotherhood - Умеренные исламисты
- Neutral_Autocracy - Неприсоединившиеся автократы
- Neutral_conservatism - Консерваторы
- oligarchism - Олигархи
- Neutral_Libertarian - Либертарианцы
- Neutral_green - Зелёные
- neutral_Social - Социал-демократы
- Neutral_Communism - Коммунисты

<a id="nationalist"></a>
### Националисты

- Nat_Populism - Правые популисты
- Nat_Fascism - Фашисты
- Nat_Autocracy - Военная хунта
- Monarchist - Абсолютные монархисты

_**КАК ЭТО СДЕЛАТЬ**_

Для начала нужно определить политическую партию в MD_subideology_parties_l_english.yml. Здесь в качестве примера используется Армения. Пожалуйста, сохраняйте тот же стиль оформления, меняя только conservatism на нужную идеологию.

Следующий шаг — реализовать иконки в `interface/MD_parties_icons.gfx`. Сначала нужно сохранить иконки партий в формате .dds в `gfx/texticons/parties_icons/{tag}` — именно там хранится изображение иконки. Затем переходите к `interface/MD_parties_icons.gfx` и реализуйте их по аналогии с тысячами других примеров spriteType.

Когда эта часть готова, переходим к реализации ключей локализации. Отсюда мы переходим к файлу `common/scripted_localisation/subideology_scripted_localisation.txt`. Нужно добавить три отдельных ключа локализации. Первый — {subideology}_L, это название партии вместе с её иконкой. Второй — {subideology}_L_desc, где хранится описание, и наконец {subideology}_L_icon, где хранится иконка.

Если вы правильно выполнили эти шаги, ваши партии теперь должны корректно отображаться в игре. Вы можете добавить к ним любые условия, если хотите динамики. Примеры такой динамической реализации через другие триггеры есть у ARM, SPR и FRA.

Новые политические лидеры немного сложнее и требуют больше деталей для корректной настройки в игре. Для начала нужно сохранить портреты в `gfx/leaders/{tag}` в формате .dds или .tga. После этого переходим к `common/scripted_effects/{tag}_political_leaders.txt`.

Есть несколько моментов, которые нужно учитывать. В зависимости от идеологии лидера, нужно задать её, заменив set_Nat_Autocracy на set_{subideology}. Это относит лидера к нужной субидеологии, к которой принадлежит конкретный персонаж. Единственное, что нужно добавить, если лидер не должен быть доступен после определённого условия или даты — это
`if = { limit = { date < 2016.1.2 } set_temp_variable = { b = 1 } } #пропустить, если 2017`. Эта строка определяет, будет ли лидер пропущен в следующий раз, когда он должен прийти к власти.

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
			if = { limit = { date < 2016.1.2 } set_temp_variable = { b = 1 } } #пропустить, если 2017
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
