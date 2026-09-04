---
title: Политика
description: "Политические эффекты и работа с партиями"
---

## MDC Political Effects

<a id="code-snippet-to-add-party-popularity-to-subideologies"></a>
### Code Snippet to Add Party Popularity to Subideologies

- set_temp_variable = { party_index = X } #Index of party to be changed 0-23
- set_party_index_to_ruling_party = yes -- automatically sets index to ruling party
- set_temp_variable = { party_popularity_increase = Y } #How much party popularity is changed, must be in decimals so 2% is 0.02
- set_temp_variable = { temp_outlook_increase = Z } #OPTIONAL PARAMETER -- Must be in decimals so 2% is 0.02
- add_relative_party_popularity = yes

```
set_temp_variable = { party_index = 2 }
set_temp_variable = { party_popularity_increase = 0.10 }
set_temp_variable = { temp_outlook_increase = 0.10 } -- OPTIONAL
add_relative_party_popularity = yes
```

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

Purpose: Set the ruling party via scripted effect to some subideology. You need to still do the set_politics as I cannot parameterize it.

```
# set_temp_variable = { rul_party_temp = 0-23 }
# set_temp_variable = { col_one = 0 - 23 }  -- Optional: This sets the first coalition member
# set_temp_variable = { col_two = 0 - 23 }  -- Optional: This sets the second coalition member
# set_temp_variable = { col_three = 0 - 23 }  -- Optional: This sets the third coalition member
# set_temp_variable = { change_leader_temp = 0-1 } -- Optional: If you do not want to change the ruling leader then set this value to 1
# It's imperative you put the set_politics second! Else it doesn't properly update the set_party_name

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

<a id="counter-terror-effects"></a>
