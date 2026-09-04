---
title: Гайды / How-To
description: "Субидеологии, исторические события (ETD), переменные, уникальные terrain-фото"
---
:::caution[Translation in progress]
This page is still in Russian — the English translation hasn't been done yet.
:::


<a id="guideshow-to"></a>
## Guides/How-To

<a id="mdc-how-to-add-subideology-parties"></a>
### MDC How-To-Add Subideology Parties

Adding political parties is a great way to add new flavor to nations without a lot of work!

There are several files you need to edit to get the parties to show up in Millennium Dawn.

- `common/scripted_lozalition/subideology_scripted_localization.txt`
- `localisation/english/MD_subideology_parties_l_english.yml`
- `interface/MD_parties_icons.gfx`
- Party icons are stored in `gfx/texticons/parties_icons/nation_name`
- Custom Leaders are stored in `common/scripted_effects/[TAG]_political_leaders.txt`

It is fairly straightforward, but you will need to follow the tags exactly as they are written.

List of Subideology Slots:

_THESE CANNOT BE USED FOR CONSOLE COMMANDS_

<a id="western"></a>
#### Western

- Western_Autocracy - Pro-Western Autocrats
- conservatism - Conservatives
- liberalism - Liberals
- socialism - Social Democrats

<a id="emerging"></a>
#### Emerging

- Communist-State - Emerging Communists
- anarchist_communism - Left-Wing Radicalism
- Conservative - Reactionaries
- Autocracy - Emerging Autocrats
- Mod_Vilayat_e_Faqih - Moderate Shiite Revolutionaries
- Vilayat_e_Faqih - Hardline Shiite Revolutionaries

<a id="salafism"></a>
#### Salafism

- Kingdom - Wahhabi Monarchist
- Caliphate - Saafi Jihadism

<a id="non-aligned"></a>
#### Non-Aligned

- Neutral_Muslim_Brotherhood - Moderate Islamist
- Neutral_Autocracy - Non-Aligned Autocrats
- Neutral_conservatism - Conservatives
- oligarchism - Oligarchs
- Neutral_Libertarian - Libertarians
- Neutral_green - Greens
- neutral_Social - Socialist Democrats
- Neutral_Communism - Communists

<a id="nationalist"></a>
#### Nationalist

- Nat_Populism - Right Wing Popluists
- Nat_Fascism - Fascists
- Nat_Autocracy - Military Junta
- Monarchist - Absolutist Monarchist

_**THE HOW TO**_

To start you need to define the political party in the MD_subideology_parties_l_english.yml. Here we are using Armenia as our example. Please keep the same stylization here, where you only replace conservatism with the given ideologies.

The next place is to implement the icons in `interface/MD_parties_icons.gfx`. You must first save your party icons in .dds format in `gfx/texticons/parties_icons/{tag}`. This is where the image of the icon is stored. You then move onto `interface/MD_parties_icons.gfx` and implement them following the thousands of other spriteType examples.

Once you have completed that portion it is now time to move on to the implementation of the localization keys. From here, we move to the file `common/scripted_localisation/subideology_scripted_localisation.txt`. There are three places you need to add for the individual localization keys. The first is {subideology}_L which is the party's title with its icon. The second is {subideology}_L_desc where the description is stored, and finally, {subideology}_L_icon where the icon is stored.

If you have done these steps correctly your parties should now be correctly displayed in the game. You can give these any kind of conditional if you want dynamics. ARM, SPR, and FRA all have examples of doing this dynamically using other triggers.

New political leaders are a bit more complicated and require some more details to ensure they are correctly configured in-game. To begin, you must have stored your portraits in `gfx/leaders/{tag}` in .dds format or .tga format. Once that is complete we then move on to `common/scripted_effects/{tag}_political_leaders.txt`.

There are some notes to keep track of. Depending on the ideology of the leader, you need to set it by replacing the set_Nat_Autocracy with set_{subideology}. This classifies it to the proper sub ideology that a specific character belongs to. The only thing that needs to be added if a leader shouldn't be available after a certain condition or date is
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
### Historical Events/Exact Date Trigger (ETD) Events

File Path: `common/scripted_effects/00_yearly_efffects`

Historical events for MD should be triggered using the new system in common/scripted_effects/00_yearly_effects.txt

These are "container" effects triggered once a year by one country to trigger all historical scripted content for each country. You can put an event in two places, either in a "year" effect or in the on_startup effect at the top of the file. If you wish to have the event fire in 2000 (or 2017 if you still want content support for that start date). Add the event in the on-startup with the days until it should fire in the game's first year. Outside of that, if you wish to fire an event in a specific year, find the event and then add the day counters as you otherwise would for a normal event.

```
MD_event_on_startup_events = {
	if = { # The 2000 start date
		limit = { has_start_date < 2000.1.2 }
		# Events with known dates that should fire with the 2000 start date.
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
### Variable Guide/Explanation

There are a ton interesting and fun things you can accomplish using simple variables and other forms of variables that arent entirely possible using only in-game values. Variables open up a whole new world in terms of gameplay and design that is normally undervalued in a game that its primary focus is the military aspect.

<a id="basic-commands-for-variables"></a>
#### Basic Commands for Variables

#set_variable = { var = example value = 1 } - Sets the Variable (can be used anywhere executing a script) to a value and also sets a variable with a name. Creates the variable if it doesnt exist before, OR sets it to a new value if already present somewhere.
#add_to_variable { var = example value = 1 } - this is the long way of adding to a variable but it just adds one so now the variable is valued at 2.
#subtract_from_variable { var = example value = 2 } - subtracts yields 0 from the current running script.

You can also multiple, divide, round, and a few other functions depending on the situation you are using the variables.

<a id="basic-setting-example"></a>
#### Basic Setting Example:

Example:

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

The variables here are set in the United States history file and used for the American Economy decisions and effects that occur with every one of the American economy focuses, events or decisions. There are two new topics here in the set_variable which is min and max. They simply set the max possible value and the minimum possible value for the given variable.

This is a basic rundown of variables and the simplest way to begin and use them. There are many ways of using this flexible effects in both systems and in general effects.

<a id="unique-terrain-photos-guide"></a>
### Unique Terrain Photos Guide

<a id="step-one-create-a-suitable-image-size-put-it-in-a-folder"></a>
#### Step One: Create a Suitable Image Size & Put it in a Folder

Terrain photos need to be 413x70px in size. After selecting your image and sizing it, save the image as DDS. Then drop your photos in \mod\Millennium_Dawn\gfx\interface\terrain.

<a id="step-two-edit-md_terrain_citiesgfx-code"></a>
#### Step Two: Edit MD_terrain_cities.gfx Code

File Path: `Millennium_Dawn\gfx\interface\terrain`
Then you need to tell the game to load your new .dds file. The code can be found in this file MD_terrain_cities.gfx found in this folder Millennium_Dawn\interface\MD_terrain_cities.gfx. The entry looks like this:

```
spriteType = {
    name = "GFX_terrain_brussels"
    textureFile = "gfx/interface/terrain/BAN_chittagong.dds"
}

```

<a id="step-three-edit-countrystateviewgui-code"></a>
#### Step Three: Edit countrystateview.gui Code

File Path: `countrystateview.gui`
From there, you need to create an entry in the same folder in this file: countrystateview.gui. The entry looks like this

```
iconType = {
    name = "terrain_brussels_icon"
    spriteType = "GFX_terrain_brussels"
    alwaystransparent = yes
}
```

<a id="step-four-edit-01_province_modifiers-code"></a>
#### Step Four: Edit 01_province_modifiers Code

File Path: Millennium_Dawn\common\modifiers in this file: 01_province_modifiers.txt
With all that done, you need two more things. 1. Add an empty modifier (the thing that will stick to your province) 2. Tell the game to attach your modifier to the province at game start. Empty modifiers can be found here:

```
terrain_brussels = { }
```

<a id="step-five-edit-00_startup_effectstxt-code"></a>
#### Step Five: Edit 00_startup_effects.txt Code

This phase is the most code intensive, because it adjusts which map points will have the terrain photos that you will add, it is advised to have the game and an editing tool (like Visual Studio Code) open, where one screen contains the code and the other runs the game. You can find all state ID's through debug mode, or typing `Tdebug` in the console command.

File Path: `Millennium_Dawn\common\scripted_effects\00_startup_effects.txt`
And finally to make it spawn at game start, go here: Millennium_Dawn\common\scripted_effects in this file: 00_startup_effects.txt
You'll find this entry for Brussels:

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

50 is the state ID, the level at which you place airbases and stuff like that, 516 is the accurate province within that state.

Any additional questions please DM [@AngriestBird](https://gitlab.com/AngriestBird) on Discord.
