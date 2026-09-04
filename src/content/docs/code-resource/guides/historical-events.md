---
title: Исторические события (ETD)
description: "Триггеры событий на точную историческую дату"
---

## Historical Events/Exact Date Trigger (ETD) Events

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
