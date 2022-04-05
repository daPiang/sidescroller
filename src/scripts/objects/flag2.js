class Flag2 {
    constructor(scene) {
        this.scene = scene;
        const flagObject = scene.map.getObjectLayer('flag').objects[0];
        const flagCoordinates = scene.tileset.texCoordinates[962]; 
        const flagRoot = scene.platform.getTileAt(97, 22);

        const getObjectCoordinates = object => scene.tileset.texCoordinates[object[object]];

        getObjectCoordinates('flag');

        this.sprite = scene.add.tileSprite(flagObject.x, flagObject.y, 16, 16, 'tiles')
            .setOrigin(0, 1)
            .setTilePosition(flagCoordinates.x, flagCoordinates.y);
        
            flagRoot.setCollisionCallback(() => {
                flagRoot.collisionCallback = null;

                const particles = scene.add.particles('atlas', 'mario-atlas_13');
                const emitter = particles.createEmitter({
                    x: flagObject.x,
                    y: flagObject.y - flagObject.height,
                    scale:  { start: 1, end: 0 },
                    speed:  { min: 50, max: 100 },
                    angle:  { min: 0, max: -180 },
                    rotate: { min: 0, max: 360 },
                    alpha: .5
                });
                scene.tweens.add({
                    targets: this.sprite,
                    ease: 'Linear',
                    y: '+=82',
                    duration: 800,
                    onComplete: () => emitter.stop()
                });
                
                this.scene.input.keyboard.shutdown();

                setTimeout(() => {
                    this.scene.scene.stop('level_2').start('GameOver');
                }, 1500);
            });
    }
}

export default Flag2;