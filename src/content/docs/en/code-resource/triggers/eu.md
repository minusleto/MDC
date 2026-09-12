---
title: European Union
description: "MDC's EU system triggers: influence, leadership, euroscepticism, voting"
---

## Party voting blocs

Determine which ideological camp a country's ruling party belongs to for EU voting purposes (party numbers match the [subideology table](../../systems/politics/#subideologies)):

| Trigger | Parties (by number) |
|---|---|
| `is_liberal_block` | 2 (Liberals), 16 (Libertarians) |
| `is_conservative_block` | 1 (Conservatives), 6 (Reactionaries), 14 (Non-aligned Conservatives) |
| `is_communist_block` | 4 (Communists), 5 (Left-Wing Radicalism), 19 (Non-aligned Communists) |
| `is_socialist_block` | 3 (Social Democrats), 18 (Socialist Democrats) |
| `is_fascist_block` | 20 (Right Wing Populists), 21 (Fascists), 22 (Military), 23 (Monarchist) |
| `is_autocratic_block` | 0 (Pro-Western Autocrats), 7 (Autocrats), 13 (Non-aligned Autocrats), 15 (Oligarchs) |

<a id="euroscepticism"></a>
## Euroscepticism and Eurexit

`gov_is_eurosceptical` and `gov_is_EUexiteer` check the ruling country's `eurosceptic` variable (0–1), but the threshold depends on the ruling party's ideological bloc — radical left/right and centrist blocs aren't equally tolerant of European integration:

| Bloc (ruling party) | "Eurosceptic" threshold | "Pro-Eurexit" threshold |
|---|---|---|
| Conservatives (1, 6, 14) | ≥ 0.5 | ≥ 0.6 |
| Liberals (2, 16) | ≥ 0.6 | ≥ 0.7 |
| Social democrats/greens (3, 17, 18) | ≥ 0.6 | ≥ 0.7 |
| Communists (4, 5, 19) | ≥ 0.6 | ≥ 0.7 |
| **Nationalists (20–23)** | **no check** — always true | **no check** — always true |
| Everyone else | ≥ 0.5 | ≥ 0.6 |

The nationalist bloc (20–23) is the only one where the `eurosceptic` variable isn't checked at all: it's treated as unconditionally eurosceptic/pro-Eurexit regardless of the variable's actual value.

`slowdown_european_integration` is a general AI trigger (for ai_will_do on focuses): fires if the global `var_europeanism` variable is below 0.85, OR at least one EU member has `eurosceptic` above 0.45.

<a id="influence"></a>
## External and internal influence

**External great-power influence on a country** (typically used to decide whether a country is drifting out of the EU orbit toward China or Russia/USSR):

| Trigger | Condition |
|---|---|
| `THIS_is_top3_influencer` / `FROM_is_top3_influencer` | THIS/FROM is among the top 3 most influential countries for the scope |
| `EU_external_chi_influence_50` / `_15` / `_10` / `_5` | China (CHI) is one of the top two influencers, with influence above 50/15/10/5% |
| `EU_external_sov_influence_50` / `_15` / `_10` / `_5` | Same, for the SOV tag (post-Soviet power) |
| `EU_external_sov_chi_influence_50` / `_15` / `_10` / `_5` | Either China or SOV exceeds the threshold (or the country isn't even an EU member) |

**A country's own influence over the whole EU bloc** — used for foreign/trade policy leadership and ratification:

| Trigger | Condition |
|---|---|
| `influence_on_all_other_EU_members_3_percent` | Influence >2.999% on every other EU member |
| `influence_on_all_other_EU_members_5_percent` | Same, threshold >5% (via the `influence_higher_5` helper) |
| `influence_on_all_other_EU_members_10/20/25/30/50_percent` | Same pattern for the respective thresholds |

<a id="offices"></a>
## EU leadership offices

Office priority forms a chain — if the primary office is vacant, the role falls to the next one:

| Trigger | Logic |
|---|---|
| `is_leader_of_EU_foreign_policy` | Has `EU_foreign_minister` → else `EU_commission_president` (if no one holds foreign minister) → else `EU_parliament_president` (if neither office is held by anyone) |
| `is_leader_of_EU_trade_policy` | Same pattern: `EU_commission_president` → `EU_council_president` → `EU_parliament_president` |
| `any_EU_nation_holds_council_president` | At least one EU member holds the EU Council presidency |
| `any_EU_nation_holds_ECB_president` | At least one EU member holds the ECB presidency |
| `influence_on_leader_of_EU_foreign_policy_25_percent` | Someone (or the country itself) has >25% influence on the EU's foreign policy leader |
| `influence_on_leader_of_EU_trade_policy_25_percent` | Same for the trade policy leader |

**Ratification** (`EU_ratify_international_treaty`, `EU_ratify_trade_agreement`) are composite triggers: a treaty counts as ratified if the country itself has >5% influence over the whole bloc, or it leads EU foreign/trade policy **and** has >5% influence (or the weaker >3% fallback) over the other members.

<a id="membership"></a>
## Membership and institutions

| Trigger | Description |
|---|---|
| `is_EU_potential` | Tag is on the static list of ~60 European candidate tags eligible to be part of the EU system at all (not current members) |
| `has_EU_external_border` | EU member with **no** EU-member neighbors |
| `has_EU_external_home_border` | EU member with a home-area region bordering a non-EU-member |
| `EU_all_player_or_majors_hold_office` | Every player-controlled EU member (or every member with >5% of the bloc's population) holds at least one of the 10 EU offices (Commission, Council, Foreign Ministry, Parliament, ECB, Finance Ministry, Frontex, Euro-navy/Euro-army, UNSC ambassador) |
| `EU_does_not_hold_another_office` | Country holds none of those 10 offices and hasn't recently left one (`recently_retired_from_an_eu_office` flag) |
| `EU_has_over_five_percent_pop` | Country's share of the EU's total population exceeds 5% |
| `is_USoE_member` | Country was annexed into the "United States of Europe" (flag `USoE_member`, tag no longer exists) |
| `USoE_can_ally` | ROOT is either not in any military faction, or leads its own faction |
| `EU_ongoing_budget_draft_trigger` / `EU_ongoing_mff_draft_trigger` | An annual budget draft / Multiannual Financial Framework (MFF) vote is ongoing |
| `EU_european_union_offices_trigger`, `..._euro_parliament_trigger`, `..._euro_info_trigger`, `..._council_voting_trigger`, `..._euro_fiscal_trigger` | UI plumbing triggers for showing the respective EU screen (screen flag + either the just-opened EU menu, or AI) |

<a id="regional-blocs"></a>
## Regional blocs within the EU

Used by the President of the European Federation (POTEF) doctrine triggers. Each geographic bloc has two variants — `EU_member_is_X` (the bloc contains at least one EU member) and `POTEF_is_X` (the president/candidate themself is from that bloc):

| Bloc | Countries |
|---|---|
| Alpine | AUS, SWI |
| Benelux | BEL, HOL, LUX |
| Iberian | CAT, CNR, GAL, NAV, POR, SPA, SPR |
| British | ENG, IRE, SCO, WAS |
| Nordic | DEN, FIN, GRL, ICE, NOR, SWE |
| Mediterranean | CRE, CYP, GRE, ITA, MLT, SCL |
| Balkan, Black Sea, Caucasus, Visegrad, Baltic, Eastern | (same structure; full country lists are in the source) |

Plus standalone `POTEF_is_german` and `POTEF_is_french` (no paired `EU_member_is_` variant — Germany and France are checked directly by tag).

<a id="majority-vote"></a>
## Vote counting (President of the European Federation election)

| Trigger | Logic |
|---|---|
| `absolute_majority_member_states` | The frontrunner has more member-state votes than half the total EU membership |
| `absolute_majority_popular_vote` | The frontrunner has more than half of the total (population-weighted) vote |
| `relative_majority_member_states` / `relative_majority_popular_vote` | Just determine the frontrunner (no 50% check) |
| `EU_european_union_currently_exists` | The `global.EU_member` array has at least one member (EU hasn't been dissolved) |

<a id="focus-votes"></a>
## Focus votes (`focus_EUxxx_accepted` / `_EP_approval`)

Every focus in the EU focus tree gets a matching pair of plumbing triggers:

- `focus_EUxxx_accepted` — the decision for this focus has been made (either the country isn't an EU member so it doesn't apply, or the `focus_EUxxx_yes`/`focus_EUxxx_QMV_yes` flag is set)
- `focus_EUxxx_EP_approval` — the European Parliament approved it (global flag `focus_EUxxx_EP_approval`)

This pair exists for 49 focuses: `focus_EU101`, `focus_EU102`, `focus_EU103`, `focus_EU104`, `focus_EU105`, `focus_EU110`, `focus_EU111`, `focus_EU112`, `focus_EU201`, `focus_EU202`, `focus_EU203`, `focus_EU204`, `focus_EU205`, `focus_EU206`, `focus_EU207`, `focus_EU208`, `focus_EU301`, `focus_EU302`, `focus_EU303`, `focus_EU304`, `focus_EU305`, `focus_EU306`, `focus_EU307`, `focus_EU308`, `focus_EU401`, `focus_EU402`, `focus_EU403`, `focus_EU404`, `focus_EU405`, `focus_EU406`, `focus_EU407`, `focus_EU408`, `focus_EU601`, `focus_EU602`, `focus_EU603`, `focus_EU605`, `focus_EU606`, `focus_EU607`, `focus_EU608`, `focus_EU609`, `focus_EU610`, `focus_EU611`, `focus_EU650`, `focus_EU651`, `focus_EU652`, `focus_EU653`, `focus_EU703`, `focus_EU998`, `focus_EU999`.

Since the meaning depends on the specific focus rather than a shared mechanic, listing each individually here wouldn't add much — look up the ID by its focus number in the tree.
