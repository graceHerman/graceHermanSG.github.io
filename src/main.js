// Jim Whitehead
// Created: 4/25/2024
// Phaser: 3.70.0
//
// Bullet Time
//
// Multiple examples of how to implement bullet firing logic using Phaser
// 
// Art assets from Kenny Assets:
// https://kenney.nl/assets/

// debug with extreme prejudice
"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    fps: { forceSetTimeOut: true, target: 60 },   // ensure consistent timing across machines

    width: 900,     // 800
    height: 700,    // 600
    //scene: [SingleBullet, ArrayBullet, FixedArrayBullet, GroupBullet, ClassBullet, ArrayBoom]
    scene: [Start, Level1, Level2, End, GameOver, Controls, LevelComplete, Credits]
}


let game = new Phaser.Game(config);