---
title: NATO
description: "Step-by-step path to NATO membership: which decisions to take, in what order, to become an alliance member."
---

NATO (the North Atlantic Treaty Organization) is a collective-defense military alliance. Full membership is only available to countries in a specific region (Europe, the Caucasus, plus the explicit exceptions `CAN`/`USA`/`TUR`) — everyone else can only apply for **Major Non-NATO Ally** status (see below).

The focus of this page is **the order the decisions come in** to join the alliance — not what specific national spirits grant (that's a separate topic).

## Path to membership: 4 steps

The standard path is 4 sequential stages. Each next step only unlocks once the previous one is complete.

### 1. PfP — Partnership for Peace

Decision: **`become_NATO_pfp_member`** · cost 100 PP.

Available to countries in the eligible region that don't already have PfP/IPAP status or membership. On completion, a random NATO faction-leader member receives event `generic_nato.1` (decides whether to accept the application).

### 2. IPAP — Individual Partnership Action Plan

Three decisions in sequence:

1. **`GENERIC_nato_ipap_application_decision`** — apply for IPAP. Requirements: not in any faction, total added tension < 15, USSR/China/Peru influence over you no higher than 10%, no military faction (`has_idea = the_military`), at least baseline defense spending (not `defence_00/01/02`).
2. **`ratify_country_ipap`** — **every current NATO member** individually ratifies your specific application (a target-array decision, `target_array = global.NATO_ipap_Candidates`), spending 20 PP per vote.
3. **`GENERIC_nato_ipap_decision`** — available once **every** NATO member has ratified (`array = global.nato_members`, checked per member). Grants the `GENERIC_nato_ipap_idea`, sets up military access with all members.

:::caution
Kazakhstan (`KAZ`) is explicitly included in the eligible-country list for PfP and IPAP, but **not included** in the list for Accelerated Dialogue or the Membership Action Plan (those only list Europe/Caucasus/CAN/USA/TUR) — meaning it gets stuck at the second of four steps and can't progress further. This looks like an oversight in the source rather than an intended restriction.
:::

### 3. Accelerated Dialogue

Decision: **`GENERIC_nato_accelerated_dialogue_decision`**.

Same requirements as IPAP (low USSR/China/Peru influence, no military faction, baseline defense spending), plus IPAP status must already be held. On completion, the NATO faction leader receives event `generic_nato.12`.

### 4. Membership Action Plan → ratification → accession

Three decisions in sequence:

1. **`finish_NATO_membership_action_plan`** · 100 PP — the most demanding step. Besides no war and no faction: added tension < 10, no military faction, defense spending above zero, police funding above the minimum (`NOT police_01`), and **no serious active corruption** (`paralyzing/crippling/rampant/unrestrained/systematic_corruption`).
2. **`ratify_country_accession`** — again, every NATO member ratifies individually (-20 PP per vote).
3. **`join_NATO`** — available once **every** member has ratified. Grants full membership (`NATO_join`).

If the country has `can_join_NATO = no` (fails some condition at the moment of accession), `NATO_join` grants `Major Non-NATO Ally` instead of full membership.

## Shortcut: direct invitation

In parallel with the long decision chain, there's a faster event-driven path — the USA can directly invite a country, skipping all 4 steps:

**Candidate's request → USA decides (`NATO.14`) → candidate decides (`NATO.9`)**

- The USA agrees to consider the request almost always (AI refusal chance is 1 in 100); the candidate gets the `NATO.9` invitation 6 hours later.
- If the candidate accepts, it's immediately `NATO_join = yes`, bypassing ratifications entirely. The AI is more willing to accept during elections, or if it's Vietnam with China existing; it never accepts if the country is communist or a Chinese subject.
- Baltic/Balkan countries (`EST/LAT/LIT/SLO/SLV/ROM/BUL/ALB/CRO`) are scripted to never refuse the invitation.

## Major Non-NATO Ally

An alternative status for countries **outside** the full-membership region (not Europe/Caucasus/CAN/USA/TUR/KAZ).

Decision **`NATO_apply_to_become_major_non_nato_ally`** · 100 PP. Requirements: democracy, GDP > 350, and either a high opinion (>100) from the NATO faction leader, or simply a good opinion (>100) from any member of the `global.nato_members` array. Doesn't work if the country is already in a faction, already has NATO/CSTO status, or is flagged as an unrecognized state/non-state actor.

Reversed with the **`denounce_Status_As_Major_Non_NATO_Ally`** decision.

## After joining

What's available to an already-active member — briefly, without bonus details:

| Decision | Cost | What it does |
|---|---|---|
| `leave_NATO` | 100 PP | Leave NATO |
| `NATO_ratify_stanag` | 250 PP | Ratify the STANAG standard (grants an idea with combat bonuses) |
| `start_military_exercises_with_NATO` | command power > 49 | Starts the joint military-exercise event chain with an ally |
| `NATO_nrf_start` | 100 PP, wartime only | Mobilizes the NATO Response Force |
| `NATO_arf_start` | 50 PP, wartime only | Mobilizes the Allied Reaction Force |
| `NATO_joint_operation` | 125 PP | Asks other members to join your war |
| `demand_alliance_intervention` (for Major Non-NATO Ally) | 125 PP, requires surrender progress > 0.7 | Requests military intervention from the alliance |
| `NATO_ask_to_join_f35_program` | 50 PP | Applies to join the F-35 program (for Major Non-NATO Ally) |

By default, the AI almost never fires `leave_NATO` for democracies; other ideologies and specific countries (Turkey, the Baltics, Greece, Italy, Denmark, Spain, etc.) have their own exceptions hardcoded in the source — for example, Turkey stays in NATO if it's nationalist/communist/fascist, or neutral with the AKP-equivalent party (`ruling_party = 12`) in power.
