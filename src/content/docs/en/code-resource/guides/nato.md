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
| `NATO_nrf_idea` | NRF participation after completing the decision |
| `NATO_arf_idea` | ARF participation after completing the decision |
| `NATO_intervention_active` | Active participation in a joint operation/intervention |
| `NATO_operation_active` | Operation marker for the country initiating a joint operation |

These ideas do not replace `NATO_member`: for example, PfP and IPAP are pre-membership statuses.

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

### Demand alliance intervention

Decision: `demand_alliance_intervention`.

Available to a `Major_Non_NATO_Ally` at war with surrender progress > 0.7.

Cost: **125 political power**. Every NATO member receives `NATO_rework.7`, and the initiator gets `NATO_intervention_active`.

### Military exercises

Decision: `start_military_exercises_with_NATO`.

Available to countries with:

- `Major_Non_NATO_Ally`;
- `NATO_member`;
- `GENERIC_nato_ipap_idea`.

The initiator needs more than 49 command power. The target is an ally that is either the USA or a neighbor of the initiator; the target must not be at war.

The decision fires `NATO_rework.1`.

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
