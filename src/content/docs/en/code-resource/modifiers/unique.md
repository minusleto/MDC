---
title: Unique Modifiers
description: "Modifiers written as a fixed, unique value for a specific country or continent, rather than a regular stacking percentage buff"
---

## Unique Modifiers

Unlike most modifiers in the other sections (which stack/multiply from anywhere — ideas, laws, events), these are written as a **fixed unique value** directly in the country or continent file (`common/countries/...`, `common/continents/...`) and describe a baseline characteristic of that specific country/continent, rather than a temporary buff.

| Modifier | Description | Note |
|---|---|---|
| `literacy_rate_education_modifier` | Baseline literacy rate growth from education | Written in the country/continent file, not a regular stacking percentage buff |
