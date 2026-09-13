---
title: Subideologies & Parties
description: "Adding parties and subideologies"
---

## MDC How-To-Add Subideology Parties

Adding political parties is a great way to add new flavor to nations without a lot of work!

There are several files you need to edit to get the parties to show up in the game.

- `common/scripted_lozalition/subideology_scripted_localization.txt`
- the party localization file
- the party interface file
- Party icons are stored in `gfx/texticons/parties_icons/nation_name`
- Custom Leaders are stored in `common/scripted_effects/[TAG]_political_leaders.txt`

It is fairly straightforward, but you will need to follow the tags exactly as they are written.

:::tip
The full list of subideology slots (`party_index` 0–23, tags, names) has moved to the reference — see [Systems → Politics → Subideologies](../systems/politics/#subideologies).
:::

_**THE HOW TO**_

To start you need to define the political party in the party localization file. Here we are using Armenia as our example. Please keep the same stylization here, where you only replace conservatism with the given ideologies.

The next place is to implement the icons in the party interface file. You must first save your party icons in .dds format in `gfx/texticons/parties_icons/{tag}`. This is where the image of the icon is stored. You then move onto the interface file and implement them following the other spriteType examples.

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

## How to rename an existing party

This is actually two different questions — "rename the party permanently, for everyone" and "rename it just for one country, or only during a specific focus/event, while playing".

### Permanently (for every country)

Just edit the localisation itself. In this mod, the party's display name (shown in the UI with its icon) comes from the `{subideology}_L` key in `common/scripted_localisation/subideology_scripted_localisation.txt` — change the text of that key and the party is renamed everywhere that `party_index` is used.

### For a single country only

The base HOI4 engine supports country-specific localisation overrides via a tag prefix — e.g. `TAG_conservatism_desc` will show its own description only for the country tagged `TAG`, while everyone else keeps the shared `conservatism_desc`. It hasn't been verified whether this mod's custom `{subideology}_L` system supports the same prefix pattern for the name itself (as opposed to just the description) — if not, you'll have to add the tag to the key by hand, following one of the existing examples: ARM, SPR, and FRA already have dynamic party-localisation implementations via triggers (see above) — use one of those as a template.

### Dynamically, mid-playthrough (via an effect in a focus/event/decision)

If the party needs to change name **during gameplay itself** (a party split, a rebrand after a coup, etc.) — there's a native HOI4 engine effect for that, `set_party_name` (available since 1.9, works in any mod including MDC):

```
set_party_name = {
	ideology = conservatism
	name = MY_NEW_PARTY_NAME_SHORT
	long_name = MY_NEW_PARTY_NAME_LONG
}
```

- `ideology` — the subideology tag (the same string used in `party_index`/`ruling_party`, e.g. `conservatism`, `liberalism`, `Nat_Autocracy`)
- `name` / `long_name` — localisation keys (short and full name); define them as plain text in any `.yml` localisation file
- Persists through save games, and works for any player in multiplayer
- For the new name to show up in the UI, close and reopen the Politics tab
- No vanilla or mod files get overwritten — the effect just temporarily overrides the name on top of whatever the localisation defines
