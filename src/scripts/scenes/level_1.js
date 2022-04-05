import Player from "../objects/player.js";
import Coin from "../objects/coin.js";
import Goomba from "../objects/goomba.js";
import Flag1 from "../objects/flag1.js";
import Pit from "../objects/pit.js";

import generateAnimations from "../animation/anims.js";

class level_1 extends Phaser.Scene {

    constructor () {
        super('level_1');
    }

    preload() {
        this.load.image('tiles', '../assets/tileset/tiles.png');
        this.load.tilemapTiledJSON('map', './scripts/scenes/level_1.json');
        this.load.atlas('atlas', '../assets/atlas/mario-atlas.png', '../assets/atlas/mario-atlas.json');
        
        this.load.on('complete', () => {
            generateAnimations(this);
        });
    }

    create() {
        const tiles = {
            EMPTY: -1,
            FLAG_LEFT: 450
        };

        const noCollisionTiles = [
            tiles.EMPTY,
            tiles.FLAG_LEFT
        ];

        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');
        this.platform = this.map.createLayer('platform', this.tileset, 0, 0);
    
        this.map.createLayer('background', this.tileset, 0, 0);
        this.platform.setCollisionByExclusion(noCollisionTiles, true);

        this.player = new Player(this, 25, 300)
        this.coins = new Coin(this);
        this.goombas = new Goomba(this);
        this.flag = new Flag1(this);
        this.pits = new Pit(this);

        this.inputs = this.input.keyboard.createCursorKeys();
    }
    
    update() {
        this.player.update(this.inputs);
        this.coins.update();
        this.goombas.update();
        this.pits.update();
    }
}

export default level_1;