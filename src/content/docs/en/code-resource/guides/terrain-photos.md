---
title: Unique Terrain Photos
description: "Adding unique city and province terrain photos"
---

## Unique Terrain Photos Guide

<a id="step-one-create-a-suitable-image-size-put-it-in-a-folder"></a>
### Step One: Create a Suitable Image Size & Put it in a Folder

Terrain photos need to be 413x70px in size. After selecting your image and sizing it, save the image as DDS. Then drop your photos in the mod's `gfx/interface/terrain` folder.

<a id="step-two-edit-terrain-code"></a>
### Step Two: Add Terrain to the Interface

Then you need to tell the game to load your new .dds file. The relevant code is in the terrain interface file. The entry looks like this:

```
spriteType = {
    name = "GFX_terrain_brussels"
    textureFile = "gfx/interface/terrain/BAN_chittagong.dds"
}
```

<a id="step-three-edit-countrystateviewgui-code"></a>
### Step Three: Edit countrystateview.gui Code

File Path: `countrystateview.gui`
From there, you need to create an entry in the same folder in this file: countrystateview.gui. The entry looks like this:

```
iconType = {
    name = "terrain_brussels_icon"
    spriteType = "GFX_terrain_brussels"
    alwaystransparent = yes
}
```

<a id="step-four-edit-province-modifiers-code"></a>
### Step Four: Edit Province Modifiers

In `common/modifiers`, add an empty modifier (the thing that will stick to your province). Empty modifiers can be defined like this:

```
terrain_brussels = { }
```

<a id="step-five-edit-startup-effects-code"></a>
### Step Five: Edit Startup Effects

This phase is the most code intensive, because it adjusts which map points will have the terrain photos that you will add. It is advised to have the game and an editing tool (like Visual Studio Code) open, where one screen contains the code and the other runs the game. You can find all state IDs through debug mode, or by typing `Tdebug` in the console.

File Path: `common/scripted_effects/00_startup_effects.txt`
And finally, to make it spawn at game start, add the required entry there. You'll find this entry for Brussels:

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

50 is the state ID, the level at which you place airbases and similar buildings; 516 is the exact province within that state.

Any additional questions please DM [@AngriestBird](https://gitlab.com/AngriestBird) on Discord.
