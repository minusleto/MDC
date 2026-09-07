---
title: Уникальные фотографии terrain
description: "Добавление уникальных фотографий городов и провинций"
---

## Гайд по уникальным фотографиям terrain

<a id="step-one-create-a-suitable-image-size-put-it-in-a-folder"></a>
### Шаг первый: подготовьте изображение нужного размера и поместите его в папку

Фотографии terrain должны быть размером 413x70px. Подобрав и подогнав изображение по размеру, сохраните его в формате DDS. Затем поместите фотографии в \mod\Millennium_Dawn\gfx\interface\terrain.

<a id="step-two-edit-md_terrain_citiesgfx-code"></a>
### Шаг второй: отредактируйте код MD_terrain_cities.gfx

Путь к файлу: `Millennium_Dawn\gfx\interface\terrain`
Далее нужно указать игре загрузить ваш новый .dds файл. Соответствующий код находится в файле MD_terrain_cities.gfx, в папке Millennium_Dawn\interface\MD_terrain_cities.gfx. Запись выглядит так:

```
spriteType = {
    name = "GFX_terrain_brussels"
    textureFile = "gfx/interface/terrain/BAN_chittagong.dds"
}

```

<a id="step-three-edit-countrystateviewgui-code"></a>
### Шаг третий: отредактируйте код countrystateview.gui

Путь к файлу: `countrystateview.gui`
Далее нужно создать запись в той же папке, в файле countrystateview.gui. Запись выглядит так:

```
iconType = {
    name = "terrain_brussels_icon"
    spriteType = "GFX_terrain_brussels"
    alwaystransparent = yes
}
```

<a id="step-four-edit-01_province_modifiers-code"></a>
### Шаг четвёртый: отредактируйте код 01_province_modifiers

Путь к файлу: Millennium_Dawn\common\modifiers, файл 01_province_modifiers.txt
После этого нужны ещё две вещи: 1. Добавить пустой модификатор (то, что будет «прикреплено» к вашей провинции). 2. Указать игре прикрепить этот модификатор к провинции при старте игры. Пустые модификаторы можно найти здесь:

```
terrain_brussels = { }
```

<a id="step-five-edit-00_startup_effectstxt-code"></a>
### Шаг пятый: отредактируйте код 00_startup_effects.txt

Этот этап самый трудоёмкий с точки зрения кода, поскольку он определяет, на каких точках карты появятся добавляемые вами фотографии terrain. Рекомендуется держать открытыми одновременно игру и редактор кода (например, Visual Studio Code) — на одном экране код, на другом запущена игра. Все ID регионов можно узнать через debug-режим или введя в консоли команду `Tdebug`.

Путь к файлу: `Millennium_Dawn\common\scripted_effects\00_startup_effects.txt`
И наконец, чтобы это появлялось при старте игры, перейдите сюда: Millennium_Dawn\common\scripted_effects, файл 00_startup_effects.txt
Вот запись для Брюсселя:

```
50 = {
    add_province_modifier = {
        static_modifiers = { terrain_brussels }
        province = { id = 516 }
    }
    add_province_modifier = {
        static_modifiers = { terrain_antwerp }
        province = { id = 6598 }
    }
}
```

50 — это ID региона (state), того уровня, на котором вы размещаете авиабазы и подобное; 516 — это точный ID провинции внутри этого региона.

По всем дополнительным вопросам пишите в личные сообщения [@AngriestBird](https://gitlab.com/AngriestBird) в Discord.
