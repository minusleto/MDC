---
title: Subideologies & Parties
description: "Adding parties and subideologies"
---

## MDC How-To-Add Subideology Parties

Adding political parties is a great way to add new flavor to nations without a lot of work!

There are several files you need to edit to get the parties to show up in the game.

- `common/scripted_localisation/subideology_scripted_localisation.txt`
- `localisation/english/[name]_parties_l_english.yml` (and `..._l_russian.yml` for the Russian version)
- `interface/parties_icons.gfx`
- Party icons are stored in `gfx/texticons/parties_icons/nation_name`
- Custom Leaders are stored in `common/scripted_effects/[TAG]_political_leaders.txt`

It is fairly straightforward, but you will need to follow the tags exactly as they are written.

:::tip
The full list of subideology slots (`party_index` 0–23, tags, names) has moved to the reference — see [Systems → Politics → Subideologies](../../systems/politics/#subideologies).
:::

_**THE HOW TO**_

:::caution
The description below has been corrected after checking it against the real `subideology_scripted_localisation.txt`. It used to say you "add three separate localisation keys" — that's **inaccurate** and could mislead. In reality, each subideology (`conservatism`, `Nat_Autocracy`, etc.) already has **one shared** `defined_text` block covering all ~190 countries in the game — you don't create a new block, you **add one line** to it for your tag.
:::

For each subideology, `subideology_scripted_localisation.txt` has **three** such shared blocks: `{subideology}_L` (name + icon in one UI line), `{subideology}_L_desc` (description), and `{subideology}_L_icon` (icon alone). Each contains a list of `text = { trigger = {...} localization_key = ... }` lines — one (or several) per country — ending with a generic default (`generic.<subideology>`) used when nothing else matches. The block is read **top to bottom, and the first matching condition wins** — so add your country's line anywhere **before** the generic default (conventionally, alphabetically by tag next to its neighbors).

**Example: USSR/Russia (tag `SOV`, subideology `conservatism`):**

```
# inside defined_text { name = conservatism_L ... }
text = { trigger = { original_tag = SOV } localization_key = SOV.conservatism }

# inside defined_text { name = conservatism_L_desc ... }
text = { trigger = { original_tag = SOV } localization_key = SOV.conservatism_desc }

# inside defined_text { name = conservatism_L_icon ... }
text = { trigger = { original_tag = SOV } localization_key = SOV.conservatism_icon }
```

The actual text (`SOV.conservatism`, `SOV.conservatism_desc`, `SOV.conservatism_icon`) is then defined as a normal string in the `.yml` localisation:

```yaml
SOV.conservatism: "£SOV_western_conservative (СПС) Union of Right Forces"
SOV.conservatism_icon: "£SOV_western_conservative"
SOV.conservatism_desc: "(Free-market liberalism) Union of Right Forces...\n\nParty description."
```

`£SOV_western_conservative` isn't the icon file itself — it's the name of the `spriteType` registered in `interface/parties_icons.gfx` (that's where you add a new `spriteType` pointing at the `.dds` file under `gfx/texticons/parties_icons/{tag}`). The `£` marker embeds that icon directly inside the text string.

### Multiple name variants for one country (by date/flag/cosmetic tag)

A single country can have **several** `text` lines for the same subideology in the shared block — the `trigger` decides which one fires. A real example from Armenia (three mutually exclusive `conservatism` variants):

```
text = { trigger = { original_tag = ARM has_country_flag = ARM_cons_first } localization_key = ARM.conservatism_alt }
text = { trigger = { original_tag = ARM has_country_flag = ARM_cons_second } localization_key = ARM.conservatism_alty }
text = { trigger = { original_tag = ARM NOT = { OR = { has_country_flag = ARM_cons_first has_country_flag = ARM_cons_second } } } localization_key = ARM.conservatism }
```

Besides `has_country_flag` and `date <`/`date >` (the most common), you'll also see **`has_cosmetic_tag`** — for example, the USSR's `socialism` party changes name when the country's "USSR restoration" cosmetic tag is active:

```
text = { trigger = { original_tag = SOV has_cosmetic_tag = SOV_USSR_AUTH_S } localization_key = SOV.socialism_dem }
text = { trigger = { original_tag = SOV NOT = { has_cosmetic_tag = SOV_USSR_AUTH_S } } localization_key = SOV.socialism }
```

In other words, whatever focus/effect sets `set_cosmetic_tag = SOV_USSR_AUTH_S` will typically also call `update_party_name = yes` right after — this forces the currently displayed party name in the UI to refresh immediately, instead of waiting for the game to naturally re-read `defined_text` (e.g. at the next election).

This same principle (several lines + a condition) is the **main, most common** way this mod handles "the party changes name over the course of the game". The built-in `set_party_name` (see below) also works, but is used less often — it doesn't require pre-written variants in the localisation, but it also can't be neatly tied to scenario conditions without manually firing the effect at the right moment.

Next, implement the icons in the party interface file. You must first save your party icons in .dds format in `gfx/texticons/parties_icons/{tag}`. Then move to `interface/parties_icons.gfx` and add a new `spriteType` following the other examples — its name (without the `GFX_` prefix) is exactly what the `£` marker above refers to.

If you have done these steps correctly your parties should now be correctly displayed in the game.

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

### Permanently (for every country that doesn't have its own variant)

Inside the shared `defined_text { name = {subideology}_L ... }` block (see above), the very last line has no `trigger` — it looks like `text = { localization_key = generic.{subideology} }`. That's the one shown to any country without its own tag-specific line. Change the text at the `generic.{subideology}` key in the `.yml` localisation, and the shared name changes everywhere no country override exists.

To permanently rename one specific country's existing party instead, edit its own `.yml` string (`SOV.conservatism`, etc.) — that's what's already being pulled in via `text = { trigger = { original_tag = SOV } ... }` in the shared block.

### For a single country only

This is exactly the mechanism shown in the Armenia example above — your own `text = { trigger = { original_tag = TAG ... } localization_key = TAG.{subideology} }` line in the shared block, plus your own entry in the `.yml`. If the country doesn't have such a line yet (it's just showing `generic.{subideology}`), add a new line for its tag, following neighboring examples (ARM, SOV, SPR, FRA, and others).

:::note
How the chosen text actually reaches the UI: the `update_party_name` effect (in `00_subideology_scripted_effects.txt`) calls the native `set_party_name` effect, where `name`/`long_name` come from the `[show_ruling_party]` scripted localisation — meaning the `defined_text` blocks described above (`{subideology}_L`, etc.) aren't shown directly, they're first resolved through `show_ruling_party` and only then assigned to the party via `set_party_name`. This doesn't change anything about how you edit the party's text — you still edit the `{subideology}_L`/`.yml` strings as described above, just be aware there's this intermediate step between your localisation line and what the player actually sees.
:::

### Dynamically, mid-playthrough (by condition or via an effect)

Two approaches, both used in practice:

**1. Pre-written variants + a condition** (see the USSR/`has_cosmetic_tag` and Armenia/`has_country_flag` section above) — this is the mod's main approach. You pre-write every name variant in the `.yml`, and switching happens automatically as `date`/a flag/a cosmetic tag changes. If the switch needs to happen immediately (rather than waiting for the next election), call `update_party_name = yes` right after setting the condition (flag, cosmetic tag, etc.).

**2. The native `set_party_name` effect** (available since HOI4 1.9, works in any mod including MDC) — doesn't need pre-written variants in the shared `defined_text` block; the name is set on the spot:

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
- No vanilla or mod files get overwritten — the effect just temporarily overrides the name on top of whatever `defined_text` provides
