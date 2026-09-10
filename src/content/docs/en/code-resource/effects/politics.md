---
title: Politics
description: "Political effects and party management"
---

<a id="vanilla-political-effects"></a>
## Vanilla Effects

Standard base-game effects, applied directly without a `set_temp_variable` wrapper.

```
add_political_power = 100
```
Add political power (negative value subtracts).

```
add_stability = 0.05
```
Add stability (decimal, 0.05 = +5%; negative value subtracts).

```
add_war_support = 0.05
```
Add war support (decimal, 0.05 = +5%; negative value subtracts).

<a id="ideology-popularity"></a>
### Ideology Popularity

```
add_popularity = {
    ideology = democratic
    popularity = 0.05
}
```

Changes the popularity of the specified ideology by the given amount (decimal, 0.05 = +5%; negative value decreases popularity). `ideology` takes the ideology tag. MDC reflavors the 5 groups as follows:

| Tag | MDC Ideology |
|---|---|
| `democratic` | Westernizers |
| `communism` | Reactionaries |
| `neutrality` | Neutrals |
| `nationalist` | Nationalists |
| `fascism` | Salafists |

To change the popularity of a specific party/subideology within a group (rather than the whole ideology), use [`add_relative_party_popularity`](#party-popularity) below.

<a id="mdc-political-effects"></a>
## MDC Effects

<a id="party-popularity"></a>
### Changing Party Popularity

Purpose: increases the popularity of a specific party (subideology) by the given amount.

Parameters:
- `party_index` — index of the party to change, 0-23. Instead of a number, you can set `set_party_index_to_ruling_party = yes` to automatically take the ruling party's index.
- `party_popularity_increase` — how much party popularity changes, decimal (2% is 0.02)
- `temp_outlook_increase` — optional, decimal (2% is 0.02)

```
set_temp_variable = { party_index = 2 }
set_temp_variable = { party_popularity_increase = 0.10 }
set_temp_variable = { temp_outlook_increase = 0.10 }
add_relative_party_popularity = yes
```

📋 [List of all parties](../../systems/politics/#subideologies) — full table of `party_index` values (0–23) with all subideologies.

_**Modify Ruling Outlook Popularity:**_

Purpose: Modifies the ruling outlook only by `arg_popularity`

```
set_temp_variable = { arg_popularity = +- }
add_ruling_outlook_popularity = yes
```

_**Add a Party to Coalition**_

Purpose: Lightweight script to dynamically localize the addition of members into coalition.

```
set_temp_variable = { add_col_one = 0-23 }
add_coalition_members_effect = yes
```

_**Remove a Party from Coalition**_

Purpose: Lightweight script to dynamically localize the removal of members into coalition.

```
set_temp_variable = { remove_col_one = 0-23 }
remove_coalition_members_effect = yes
```

_**Set the Ruling Party Via Effect**_

Purpose: set the ruling party to some subideology via scripted effect. You still need to write `set_politics` separately, since that parameter cannot be set via a variable.

Parameters:
- `rul_party_temp` — index of the new ruling party, 0-23
- `col_one`, `col_two`, `col_three` — optional, set the first/second/third coalition member, 0-23
- `change_leader_temp = 1` — optional, set this if you do NOT want to change the ruling leader

Important: `set_politics` must come second — otherwise `set_party_name` won't update correctly.

```
set_temp_variable = { rul_party_temp = 20 }
change_ruling_party_effect = yes
set_politics = {
    ruling_party = nationalist
    elections_allowed = no
}
```

_**Modifying Election Threshold:**_

Purpose: Modifies the Election Threshold (minimum value a party needs to be considered for coalitions).

```
set_temp_variable = { threshold_change = 0.03 }
modify_election_threshold = yes
```

_**Allow/Ban Parties**_

Bans the provided party index for elections

```
set_temp_variable = { party_index = 1-24 }
ban_party_scripted_call = yes
```

Allows the provided party index for elections

```
set_temp_variable = { party_index = 1-24 }
unban_party_scripted_call = yes
```

```
set_country_flag = free_allow_parties # Set this if you don't want a PP cost
set_partyall_allowed = yes # Allows all the parties
```

```
set_country_flag = free_ban_parties # Set this if you don't want a PP cost
set_partyall_banned = yes # Bans all the parties
```

<a id="protests"></a>
## Protests

### Protest Strength

Changes protest strength. The maximum value of the variable is 100.

```
set_temp_variable = { protest_strength_change = 10 }
modify_protest_effect = yes
```

### Protest Radicalisation

Changes protest radicalisation. The maximum value of the variable is 10. Values above 10 have no meaningful effect.

```
set_temp_variable = { protest_radicalisation_change = -10 }
modify_protest_radicalisation_effect = yes
```

<a id="britain-parliament-support"></a>
## Britain — Parliament Support

Britain-only (ENG) effects, changing its unique parliament support modifiers — see [Unique Modifiers → Britain](../../modifiers/unique/#britain).

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

The variable value is the change (+/-), not the final number. When the effect fires, the game automatically shows a tooltip with the change, using these loc keys (icons omitted here):

```yaml
lords_support_change_tt: "Peers Support: [?eng_house_of_lords_sup_change|+2]"
lords_house_of_commons_change_tt: "Opposition Support: [?eng_house_of_commons_sup_change|+2]"
backbenchers_support_change_tt: "Backbenchers Support: [?eng_backbenchers_sup_change|+2]"
```
