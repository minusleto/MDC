---
title: Уникальные фотографии terrain
description: "Добавление уникальных фотографий городов и провинций"
---

## Unique Terrain Photos Guide

<a id="step-one-create-a-suitable-image-size-put-it-in-a-folder"></a>
### Step One: Create a Suitable Image Size & Put it in a Folder

Terrain photos need to be 413x70px in size. After selecting your image and sizing it, save the image as DDS. Then drop your photos in \mod\Millennium_Dawn\gfx\interface\terrain.

<a id="step-two-edit-md_terrain_citiesgfx-code"></a>
### Step Two: Edit MD_terrain_cities.gfx Code

File Path: `Millennium_Dawn\gfx\interface\terrain`
Then you need to tell the game to load your new .dds file. The code can be found in this file MD_terrain_cities.gfx found in this folder Millennium_Dawn\interface\MD_terrain_cities.gfx. The entry looks like this:

```
spriteType = {
    name = "GFX_terrain_brussels"
    textureFile = "gfx/interface/terrain/BAN_chittagong.dds"
}

```

<a id="step-three-edit-countrystateviewgui-code"></a>
### Step Three: Edit countrystateview.gui Code

File Path: `countrystateview.gui`
From there, you need to create an entry in the same folder in this file: countrystateview.gui. The entry looks like this

```
iconType = {
    name = "terrain_brussels_icon"
    spriteType = "GFX_terrain_brussels"
    alwaystransparent = yes
}
```

<a id="step-four-edit-01_province_modifiers-code"></a>
### Step Four: Edit 01_province_modifiers Code

File Path: Millennium_Dawn\common\modifiers in this file: 01_province_modifiers.txt
With all that done, you need two more things. 1. Add an empty modifier (the thing that will stick to your province) 2. Tell the game to attach your modifier to the province at game start. Empty modifiers can be found here:

```
terrain_brussels = { }
```

<a id="step-five-edit-00_startup_effectstxt-code"></a>
### Step Five: Edit 00_startup_effects.txt Code

This phase is the most code intensive, because it adjusts which map points will have the terrain photos that you will add, it is advised to have the game and an editing tool (like Visual Studio Code) open, where one screen contains the code and the other runs the game. You can find all state ID's through debug mode, or typing `Tdebug` in the console command.

File Path: `Millennium_Dawn\common\scripted_effects\00_startup_effects.txt`
And finally to make it spawn at game start, go here: Millennium_Dawn\common\scripted_effects in this file: 00_startup_effects.txt
You'll find this entry for Brussels:

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

50 is the state ID, the level at which you place airbases and stuff like that, 516 is the accurate province within that state.

Any additional questions please DM [@AngriestBird](https://gitlab.com/AngriestBird) on Discord.
