---
title: Политика
description: "Идеологии, коалиции, выборы и субидеологии MDC"
---

## Идеологии MDC

Ванильные 5 идеологических групп HOI4 переосмыслены под сеттинг MDC:

| Тег | Идеология в MDC |
|---|---|
| `democratic` | Западники |
| `communism` | Реакционеры |
| `neutrality` | Нейтралы |
| `nationalist` | Националисты |
| `fascism` | Салафиты |

Внутри каждой группы существует несколько субидеологий (партий) — именно они и отображаются в игре как конкретные политические силы страны. Подробнее см. [Субидеологии](#subideologies) ниже.

## Коалиции и выборы

Правящая партия страны — это её текущая субидеология. Помимо неё, в правительственную коалицию могут входить ещё до двух партий-союзников (`col_one`, `col_two`, `col_three`), которые определяют состав коалиции при выборах и смене власти.

Порог выборов (`election threshold`) — минимальная популярность, начиная с которой партия учитывается при формировании коалиций и на выборах. Он может быть изменён скриптово.

Партии можно как разрешать, так и полностью запрещать для конкретной страны — например, если по сюжету какая-то субидеология не может участвовать в политической жизни государства.

:::note
Всё это — логика самой системы. Скриптовые эффекты, которыми она приводится в движение (смена правящей партии, коалиции, популярность, запрет партий и т.д.), задокументированы в разделе [Эффекты → Политика](../../effects/politics/).
:::

<a id="subideologies"></a>
## Субидеологии

Список слотов субидеологий (`party_index`, 0–23), сгруппированных по идеологии. Индекс — это то значение, которое указывается в `party_index`, `rul_party_temp`, `col_one`/`col_two`/`col_three` и подобных переменных.

:::caution
Эти слоты нельзя использовать напрямую в консольных командах.
:::

<div style="overflow-x:auto">
<table style="width:100%; border-collapse:collapse; font-size:0.82em; line-height:1.25">
<thead>
<tr style="background:#2d2d2d; color:#fff">
<th style="padding:3px 8px; text-align:left; width:2.5em">#</th>
<th style="padding:3px 8px; text-align:left">Тег</th>
<th style="padding:3px 8px; text-align:left">Партия</th>
</tr>
</thead>
<tbody>
<tr><td colspan="3" style="padding:3px 8px; background:#4472C4; color:#fff; font-weight:600">Западники (0–3)</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">0</td><td style="padding:2px 8px"><code>Western_Autocracy</code></td><td style="padding:2px 8px">Прозападные автократы</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">1</td><td style="padding:2px 8px"><code>conservatism</code></td><td style="padding:2px 8px">Консерваторы</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">2</td><td style="padding:2px 8px"><code>liberalism</code></td><td style="padding:2px 8px">Либералы</td></tr>
<tr style="background:#DCE6F5; color:#1F3864"><td style="padding:2px 8px">3</td><td style="padding:2px 8px"><code>socialism</code></td><td style="padding:2px 8px">Социал-демократы</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#6AA84F; color:#fff; font-weight:600">Формирующиеся (4–9)</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">4</td><td style="padding:2px 8px"><code>Communist-State</code></td><td style="padding:2px 8px">Формирующиеся коммунисты</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">5</td><td style="padding:2px 8px"><code>anarchist_communism</code></td><td style="padding:2px 8px">Левый радикализм</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">6</td><td style="padding:2px 8px"><code>Conservative</code></td><td style="padding:2px 8px">Реакционеры</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">7</td><td style="padding:2px 8px"><code>Autocracy</code></td><td style="padding:2px 8px">Формирующиеся автократы</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">8</td><td style="padding:2px 8px"><code>Mod_Vilayat_e_Faqih</code></td><td style="padding:2px 8px">Умеренные шиитские революционеры</td></tr>
<tr style="background:#E6F2DF; color:#274E13"><td style="padding:2px 8px">9</td><td style="padding:2px 8px"><code>Vilayat_e_Faqih</code></td><td style="padding:2px 8px">Радикальные шиитские революционеры</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#666666; color:#fff; font-weight:600">Салафизм (10–11)</td></tr>
<tr style="background:#E3E3E3; color:#333"><td style="padding:2px 8px">10</td><td style="padding:2px 8px"><code>Kingdom</code></td><td style="padding:2px 8px">Ваххабитские монархисты</td></tr>
<tr style="background:#E3E3E3; color:#333"><td style="padding:2px 8px">11</td><td style="padding:2px 8px"><code>Caliphate</code></td><td style="padding:2px 8px">Салафитский джихадизм</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#f0f0f0; color:#333; font-weight:600; border-top:1px solid #ccc; border-bottom:1px solid #ccc">Неприсоединившиеся (12–19)</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">12</td><td style="padding:2px 8px"><code>Neutral_Muslim_Brotherhood</code></td><td style="padding:2px 8px">Умеренные исламисты</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">13</td><td style="padding:2px 8px"><code>Neutral_Autocracy</code></td><td style="padding:2px 8px">Неприсоединившиеся автократы</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">14</td><td style="padding:2px 8px"><code>Neutral_conservatism</code></td><td style="padding:2px 8px">Консерваторы</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">15</td><td style="padding:2px 8px"><code>oligarchism</code></td><td style="padding:2px 8px">Олигархи</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">16</td><td style="padding:2px 8px"><code>Neutral_Libertarian</code></td><td style="padding:2px 8px">Либертарианцы</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">17</td><td style="padding:2px 8px"><code>Neutral_green</code></td><td style="padding:2px 8px">Зелёные</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">18</td><td style="padding:2px 8px"><code>neutral_Social</code></td><td style="padding:2px 8px">Социал-демократы</td></tr>
<tr style="background:#FAFAFA; color:#333"><td style="padding:2px 8px">19</td><td style="padding:2px 8px"><code>Neutral_Communism</code></td><td style="padding:2px 8px">Коммунисты</td></tr>

<tr><td colspan="3" style="padding:3px 8px; background:#C0722D; color:#fff; font-weight:600">Националисты (20–23)</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">20</td><td style="padding:2px 8px"><code>Nat_Populism</code></td><td style="padding:2px 8px">Правые популисты</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">21</td><td style="padding:2px 8px"><code>Nat_Fascism</code></td><td style="padding:2px 8px">Фашисты</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">22</td><td style="padding:2px 8px"><code>Nat_Autocracy</code></td><td style="padding:2px 8px">Военная хунта</td></tr>
<tr style="background:#F7DFC4; color:#7A3B0B"><td style="padding:2px 8px">23</td><td style="padding:2px 8px"><code>Monarchist</code></td><td style="padding:2px 8px">Абсолютные монархисты</td></tr>
</tbody>
</table>
</div>

Как добавить новую партию/лидера в игру (редактирование файлов, иконки, локализация) — см. гайд [Субидеологии и партии](../../guides/subideologies/).
