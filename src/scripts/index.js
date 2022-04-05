import level_1 from './scenes/level_1.js';
import level_2 from './scenes/level_2.js';
import GameOver from './ui elements/gameover.js';

const config = {
    width: 640,
    height: 480,
    parent: 'mario',
    backgroundColor: '#FFFFAC',
    title: 'Tilemap',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
            gravity: {
                y: 900
            }
        }
    },
    scene: [
        level_1,
        level_2,
        GameOver
    ]
};

new Phaser.Game(config);