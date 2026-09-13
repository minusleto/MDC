---
title: NATO
description: "National spirits, accession, partner statuses and NATO mechanics in MDC."
---

# NATO

This guide describes the NATO mechanics used by the provided MDC scripts: full membership, Major Non-NATO Ally status, Partnership for Peace (PfP), IPAP, Accelerated Dialogue, the Membership Action Plan, ratification, joint operations and military exercises.

> The script IDs and conditions below follow the source scripts. Localization names may differ from the IDs.

## National spirits and statuses

### `NATO_member` — NATO member

The main full-membership status. Adding the idea also adds the country to `global.nato_members` and updates `global.NATO_dirty_update_var`.

Idea modifiers:

| Modifier | Value |
|---|---:|
| `democratic_drift` | +0.02 |
| `defensive_war_stability_factor` | +0.03 |
| `war_support_factor` | +0.02 |

Membership is automatically cancelled if the country is no longer in a faction or becomes a subject (`is_in_faction = no` / `is_subject = yes`).

On full accession, `NATO_join` also:

- adds `NATO_member`;
- adds the country to `NATO_Tech_Share`;
- joins the NATO faction;
- grants mutual opinion improvements with members;
- establishes mutual military access;
- removes `Major_Non_NATO_Ally` if present.

### `Major_Non_NATO_Ally` — Major Non-NATO Ally

A separate status, not NATO membership. It gives:

- `democratic_acceptance = 20`;
- access to `Major_Non_NATO_Ally_Share` technology sharing;
- mutual opinion improvements with NATO members;
- military cooperation in several NATO mechanics.

It does not add the country to `global.nato_members` or to the NATO faction.

### Other related ideas

The scripts also use these NATO-related ideas/statuses:

| ID | Purpose |
|---|---|
| `GENERIC_nato_pfp_idea` | Partnership for Peace status |
| `GENERIC_nato_ipap_idea` | IPAP status |
| `NATO_stanag_ratified_idea` | STANAG ratified |
| `NATO_corps_north_idea` / `NATO_corps_south_idea` | Assigned to NATO's northern/southern corps |
| `NATO_nrf_idea` | NRF participation after completing the decision |
| `NATO_arf_idea` | ARF participation after completing the decision |
| `NATO_ukraine_help` | Aid to Ukraine from a NATO member |
| `NATO_intervention_active` | Active participation in a joint operation/intervention |
| `NATO_operation_active` | Operation marker for the country initiating a joint operation |

These ideas do not replace `NATO_member`: for example, PfP and IPAP are pre-membership statuses.

#### `NATO_ukraine_help`

Requires `has_idea = NATO_member`. Grants `industrial_capacity_factory = -0.2` — not a bonus, but a "cost" paid by membership itself (representing the industrial load of supporting Ukraine militarily).

#### `NATO_stanag_ratified_idea`

Granted on completing the `NATO_ratify_stanag` decision (see below) and auto-removed (`cancel`) once the country stops being a `NATO_member`. Full modifier list:

| Modifier | Value |
|---|---:|
| `personnel_cost_multiplier_modifier` | +0.25 |
| `production_factory_start_efficiency_factor` | −0.12 |
| `production_factory_efficiency_gain_factor` | −0.02 |
| `license_production_speed` | +0.12 |
| `army_org_factor` | +0.05 |
| `coordination_bonus` | +0.05 |
| `land_night_attack` | +0.12 |
| `max_planning_factor` | +0.09 |
| `recon_factor` | +0.07 |
| `planning_speed` | +0.07 |
| `naval_coordination` | +0.04 |
| `naval_detection` | +0.05 |
| `naval_night_attack` | +0.12 |
| `navy_org_factor` | +0.05 |
| `navy_max_range` | +0.3 |
| `night_spotting_chance` | +0.09 |
| `air_interception_detect_factor` | +0.05 |
| `air_escort_efficiency` | +0.05 |
| `air_night_penalty` | −0.12 |
| `air_accidents_factor` | −0.07 |

A notable trade-off: a serious boost to coordination/planning/night combat on land, sea and air, at the cost of factory efficiency when switching production (`production_factory_*`) and higher air accident rates.

#### `NATO_corps_north_idea` / `NATO_corps_south_idea`

Both require `has_idea = NATO_member` and are removed if membership is lost. Modifiers are identical for both (only the assigned region differs):

| Modifier | Value |
|---|---:|
| `army_org_factor` | +0.08 |
| `coordination_bonus` | +0.05 |
| `max_planning_factor` | +0.03 |
| `recon_factor` | +0.05 |
| `planning_speed` | +0.03 |

#### `NATO_nrf_idea` (NATO Response Force)

Requires `NATO_member`, and is removed (`cancel`) if membership is lost **or** the country isn't at war — this is a purely wartime idea.

On adding (`on_add`), a "NATO Response Force" division template is created (10 line battalions + artillery, with a recon company and engineer company in support), and **2 such divisions** are immediately spawned in random controlled states (`start_experience_factor = 0.4`).

On removal (`on_remove`), the template and units are deleted (`disband = no` — units aren't fully disbanded, just handed off/left as-is), and the USA's `NATO_nrf_mobilize` flag is cleared.

The modifiers themselves are small (this is mostly about the ready-made divisions, not stat buffs):

| Modifier | Value |
|---|---:|
| `army_org_factor` | +0.01 |
| `coordination_bonus` | +0.01 |
| `max_planning_factor` | +0.01 |
| `recon_factor` | +0.01 |
| `planning_speed` | +0.01 |

#### `NATO_arf_idea` (Allied Reaction Force)

Structured the same way as NRF, but smaller in scale: a "Allied Reaction Force" division template (4 line battalions + artillery, with recon and engineers in support), spawning **1 division** instead of two. Modifiers are the same as NRF's (see table above). On removal, the USA's `NATO_arf_mobilize` flag is cleared.

#### Hidden operation ideas

`NATO_intervention_active` and `NATO_operation_active` are internal markers (not shown to the player as ordinary idea bonuses). Both are removed as soon as the country stops being at war (`cancel = { has_war = no }`), and both apply the same effect:

```
surrender_limit = 0.25
```

In other words, while an intervention/operation is active, the enemy's surrender threshold is lowered — making it easier to bring the war to a conclusive victory.

## How to join NATO

Accession is implemented as a sequence of decisions. For a normal candidate in Europe, the Caucasus, Canada, the USA or Turkey, the path is:

**Accelerated Dialogue → Membership Action Plan → ratification by all members → Join NATO**.

### 1. Accelerated Dialogue

Decision: `GENERIC_nato_accelerated_dialogue_decision`.

The candidate must:

- be a European country, a Caucasus country, or have original tag `CAN`, `USA` or `TUR`;
- not have `NATO_member`;
- already have `nato_ipap`;
- for Belarus (`BLR`), not have `BLR_neutrality_politic`;
- not have `the_military`;
- not have any of `defence_00`, `defence_01`, `defence_02`;
- not be above the eastern-influence threshold 10 from SOV, CHI or PER.

Completing the decision sets `nato_accelerated_dialogue` and sends `generic_nato.12` to the NATO leader.

### 2. Membership Action Plan

Decision: `finish_NATO_membership_action_plan`.

Main requirements:

- not at war;
- eligible NATO geography/exceptions;
- not in a faction;
- less than 10 added world tension;
- no `the_military`;
- no `defence_00`, `defence_01`, `defence_02`;
- no `police_01`;
- no severe corruption ideas: `paralyzing_corruption`, `crippling_corruption`, `rampant_corruption`, `unrestrained_corruption`, `systematic_corruption`.

For `BLR`, `BLR_neutrality_politic` must also be absent.

The decision sets `NATO_Accession_Voting` and adds the country to `global.NATO_Accession_Candidates`.

### 3. Ratification by NATO members

NATO member decision: `ratify_country_accession`.

Every living member of `global.nato_members` must ratify the candidate. Each ratification costs **20 political power** and creates a flag of the form `NATO_Ratified_@FROM`.

AI is more likely to ratify when:

- SOV-added tension is rising;
- the candidate and member are both in the EU;
- a NATO member is among the first entries of the candidate's `influence_array`;
- the member's opinion of the candidate is above 199.

The AI strongly disfavors ratification with high positive opinion of SOV or low opinion of the candidate. A candidate at war receives a `-9999` AI modifier.

Historical AI bonuses are explicitly listed for LAT, LIT, EST, ROM, SLO, SLV, BUL, ALB, CRO, MNT, FYR, UKR, SWE and FIN.

### 4. Final accession

Decision: `join_NATO`.

It becomes available when **all existing members of `global.nato_members` have ratified the candidate**.

It then runs `NATO_join`, which:

1. establishes mutual relations and military access;
2. adds `NATO_member`;
3. adds `NATO_Tech_Share`;
4. joins the NATO faction;
5. removes `Major_Non_NATO_Ally`, if present.

If `can_join_NATO = no`, `NATO_join` instead routes the country to Major Non-NATO Ally status if it does not already have it.

## Invitation to NATO (event-driven shortcut)

Besides the long decision chain above, there's a parallel, faster path — a direct invitation. It skips PfP, IPAP, Accelerated Dialogue, and unanimous ratification entirely: the USA alone makes the call.

**Candidate request → USA decides (event NATO.14) → candidate decides (event NATO.9) → USA is notified (NATO.10 / NATO.11)**

1. **Candidate's request.** How the country actually signals interest isn't in the provided files — going by the localisation strings, it looks like a separate decision (`become_NATO_aspirant`) handles this step.
2. **NATO.14 — the USA decides whether to invite.** The event fires for the USA, with `FROM` = the applicant.
   - **Accept** (`NATO.14.a`): `+25 political power`, and 6 hours later the applicant receives an invitation, `NATO.9`. The AI is more willing to accept (`+25`) if Ukraine is strongly Western-aligned (`UKR_west_strengthened`/`UKR_west_dominant`).
   - **Refuse** (`NATO.14.b`): `-25 political power`, and the applicant gets a rejection news event, `NATO.15`. The base AI chance to refuse is just `1` — the USA almost always agrees to consider the request.
3. **NATO.9 — the invitation itself.** Text: "The United States and its allies ask us to join NATO."
   - **Accept** (`NATO.9.a`): immediately `NATO_join = yes` (bypassing the entire ratification chain!), sets the `has_joined_NATO_by_event` flag, and hidden-fires `NATO.10` to the USA. The AI is more willing to accept during elections (`+70`) or if it's Vietnam with China existing (`+70`); the chance drops to zero if the country is a Chinese subject or communist.
   - **Refuse** (`NATO.9.b`): `+50 political power`, and the USA gets `NATO.11`. The AI is more willing to refuse without elections (`+70`); the chance is forced to zero for specific Baltic/Balkan countries (EST, LAT, LIT, SLO, SLV, ROM, BUL, ALB, CRO) — by design they never refuse an invitation.
4. **NATO.10 / NATO.11 — the USA's reaction.** Plain notifications: on acceptance, a mutual `add_opinion_modifier = NATO_member_modifier`; on refusal, `recent_actions_negative`.

:::note
This path completely bypasses the geography, corruption, militarization, etc. checks required for the "long" decision-based path — once the USA decides to invite and the country accepts, membership happens instantly.
:::

## Partnership for Peace (PfP)

Decision: `become_NATO_pfp_member`.

It is available to the same geographic group used by the main NATO path: Europe, the Caucasus, Canada, the USA or Turkey, provided the country has neither `NATO_member` nor `nato_pfp` / `GENERIC_nato_pfp_idea`, and neither `nato_ipap` nor `GENERIC_nato_ipap_idea`.

Cost: **100 political power**. Re-enable time: **90 days**.

The decision sends `generic_nato.1` to the NATO leader. AI has a base chance of 1, with a large bonus for democratic countries.

## IPAP

### Application

Decision: `GENERIC_nato_ipap_application_decision`.

Requirements:

- eligible geography;
- no `NATO_member`;
- already has `nato_pfp`;
- not in a faction;
- less than 15 added world tension;
- no `the_military`;
- no `defence_00`, `defence_01`, `defence_02`;
- SOV, CHI and PER must not have influence above 10;
- `nato_pfp_accept_tt` must pass.

The country receives `NATO_ipap_Voting` and is added to `global.NATO_ipap_Candidates`.

### IPAP ratification

NATO member decision: `ratify_country_ipap`.

Each member spends **20 political power** and sets `ipap_ratified_@FROM`.

AI considers opinion of the candidate, SOV-added tension, shared EU membership and whether a NATO member appears among the candidate's first `influence_array` entries.

### Receiving IPAP

Candidate decision: `GENERIC_nato_ipap_decision`.

All members of `global.nato_members` must set `ipap_ratified_@ROOT`.

The candidate then receives `GENERIC_nato_ipap_idea`, the `nato_ipap` flag, military access with NATO members and mutual `ipap_status` opinion modifiers. PfP is removed.

## Major Non-NATO Ally

There are two main ways to receive the status.

### Automatic fallback

`NATO_join` and `NATO_join_via_event` can call `NATO_major_non_nato_ally_join` when `can_join_NATO = no`.

The scripted effect grants:

- `Major_Non_NATO_Ally`;
- `Major_Non_NATO_Ally` country flag;
- `Major_Non_NATO_Ally_Share`;
- mutual relations with NATO members.

### Independent application

Decision: `NATO_apply_to_become_major_non_nato_ally`.

Requirements:

- democratic government;
- `gdp_total > 350` through `350_total_gdp_tt`;
- no existing `Major_Non_NATO_Ally`;
- if there is a democratic NATO faction leader, that leader's opinion of the country must be **> 100**;
- otherwise the same check is made against another NATO faction leader.

Cost: **100 political power**.

On acceptance, the country also receives a guarantee from the NATO leader and military access with NATO members.

## NATO military mechanics

### Joint operation

Decision: `NATO_joint_operation`.

Cost: **125 political power**.

Available to a NATO member in an offensive war if no operation is active and the global cooldown is not active.

When started, non-war NATO members (including eligible subjects of members) receive `NATO_rework.8`. A 365-day `NATO_intervention_cooldown` is set.

**What happens in `NATO_rework.8`** (received by every invited member):

- **Accept** (`.8.a`): the country gains `NATO_intervention_active`, declares war (`puppet_wargoal_focus`) on every enemy of the initiator, and receives `NATO_rework.9` (a simple confirmation notice). The AI **defaults to refusing** (`base = 0`), but the odds jump sharply for historical ties — e.g. `+500` if the country is Poland/England/USA at war with Iraq, or France/England/Norway/Canada/USA at war with Libya; also `+25` for oil interests in the initiator's enemy (the `fossil_fuel_industry` faction plus an enemy that extracts oil), `+5` for the maritime industry faction, `+15` for the defense industry faction, `+20` for the military faction.
- **Refuse** (`.8.b`): no war consequences. The AI is more likely to refuse (`+50`) if it already has a good opinion of the initiator's enemy; `+25` with isolationist ideas (`intervention_isolation`, `intervention_local_security`); `+25` if `has_war_support < 0.5`; `+25` at low defense-spending levels (`defence_00/01/02`).

### Demand alliance intervention

Decision: `demand_alliance_intervention`.

Available to a `Major_Non_NATO_Ally` at war with surrender progress > 0.7.

Cost: **125 political power**. Every NATO member receives `NATO_rework.7`, and the initiator gets `NATO_intervention_active`.

**What happens in `NATO_rework.7`:** the same war-declaration logic as `.8`'s accept option, but with simpler AI odds: a base chance of `25`, sharply higher (`factor = 100`) for the USA — meaning in this scenario the USA is by far the most likely to respond first.

### Military exercises

Decision: `start_military_exercises_with_NATO`.

Available to countries with:

- `Major_Non_NATO_Ally`;
- `NATO_member`;
- `GENERIC_nato_ipap_idea`.

The initiator needs more than 49 command power. The target is an ally that is either the USA or a neighbor of the initiator; the target must not be at war.

The decision fires `NATO_rework.1`.

**The exercise event chain:**

1. **`NATO_rework.1`** — the initiator picks an exercise type (three player-chosen options, not AI-weighted):
   - **Army** → fires `NATO_rework.2` at the target.
   - **Air** → fires `NATO_rework.3`.
   - **Navy** (option `.c`, only available if both sides have a coastal state) → fires `NATO_rework.4`.

   All three events are sent not to the target itself but to the **target's own ally** (`FROM.FROM`) — an extra hop is baked into the chain.

2. **`NATO_rework.2` / `.3` / `.4`** — the target accepts or refuses:
   - **Accept**: both sides gain `+15` to the matching experience type (`army_experience`/`air_experience`/`navy_experience`), a `recent_nato_exercises` flag for 360 days, and a timed idea (`recent_nato_army_exercises` — 180 days; `recent_nato_air_exercises`/`recent_nato_navy_exercises` — 240 days). The initiator receives a confirmation, `NATO_rework.5`.
   - **Refuse**: the initiator receives `NATO_rework.6`.

The "recent exercises" flag/idea blocks re-triggering — the decision checks for its absence on both the initiator and the target.

## STANAG

Decision: `NATO_ratify_stanag`.

Available to a NATO member without any of `defence_00`, `defence_01`, `defence_02`.

Cost: **250 political power**; duration: **1280 days**.

On completion it adds `NATO_stanag_ratified_idea` and applies `personnel_cost_multiplier_modifier = 0.25`.

## NRF and ARF

### NRF

`NATO_nrf_start` is launched by a NATO member while at war.

It cannot be used by USA, GER, FRA, ENG or SOV. It also checks that `NATO_nrf_idea` is absent and the USA does not have `NATO_nrf_mobilize`.

Cost: **100 political power**. Completion adds `NATO_nrf_idea`.

### ARF

`NATO_arf_start` works similarly, but costs **50 political power** and has a shorter decision duration.

Completion adds `NATO_arf_idea`.

## Leaving NATO

Decision: `leave_NATO`.

Cost: **100 political power**.

Available with `NATO_member`; it calls `NATO_leave`.

On departure:

- `NATO_member` is removed;
- the country leaves `NATO_Tech_Share`;
- the country leaves the faction;
- if it was the leader, leadership is transferred to another member;
- mutual NATO opinion modifiers are removed;
- military access is removed;
- NATO members receive the `left_nato` opinion modifier.

The AI generally tends to remove non-democratic countries from NATO, with special rules for individual countries. TUR, EST, LAT, LIT, HUN, NOR, GER, GRE, ITA, DEN, CAN and SPR have explicit exceptions or conditions.

## Status-change news events

Beyond the decisions themselves, joining/leaving is accompanied by notification events for other countries (mostly purely informational, with no gameplay-affecting choice):

| Event | Fires when | Sent to |
|---|---|---|
| `NATO.7` | A country applies for/seeks membership | NATO member countries |
| `NATO.8` | A country successfully joins | General news event |
| `NATO.13` (`major = yes`) | The official accession ceremony, after `join_NATO` | General major news |
| `NATO.6` | A country leaves NATO | General news event |
| `NATO.16` (`major = yes`) | A country leaves NATO — two option variants depending on whether the recipient is the leaving country itself (`original_tag = FROM`) or an observer | General major news |
| `NATO.17` | Automatic auto-exit due to a political shift (see below) | The country itself |

### Automatic exit on a policy shift

Separate from the `leave_NATO` decision: `NATO.17` fires on its own (`is_triggered_only`) if a NATO member simultaneously has:

```
has_idea = NATO_member
has_elections = no
NOT = { has_government = fascism }
```

In other words, the country has suspended elections but hasn't gone fascist (fascist governments presumably fall under separate, harsher expulsion logic not shown in this file). `NATO.17` firing immediately triggers `NATO_leave = yes` and hidden-broadcasts the `NATO.16` news to everyone else.

## NATO and CSTO: military limits

`NATO_CSTO_calculate_number_of_batallions` counts infantry and tank battalions for European NATO/CSTO countries.

Each side has these thresholds:

- **more than 1000** counted infantry battalions;
- **more than 400** tank battalions.

When exceeded, European countries receive `NATO_CSTO_agreement_breach_warning`, and the corresponding organization's leader receives `NATO_CSTO_breach_mission`.

## Important geographic limitation

Full membership and its related procedures use this geography:

- Europe;
- the Caucasus;
- exceptions `CAN`, `USA`, `TUR`.

`NATO_join` also explicitly states that only Europe, North America and the Caucasus (plus scripted exceptions) receive full membership; other eligible applicants are routed to Major Non-NATO Ally.

Therefore, having the right ideology or good relations with NATO **does not by itself make a country eligible for full membership**.
