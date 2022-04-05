class Pit {
    constructor(scene) {
        this.scene = scene;
        this.pits = this.scene.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        const pitObj = this.scene.map.getObjectLayer('pit').objects;
        
        for(const pit of pitObj) {
            this.pits.create(pit.x, pit.y - pit.height, 'atlas')
                .setScale(0.2);
        }
    }

    collidePit(pit) {
        this.scene.player.die();
        this.scene.input.keyboard.shutdown();

        this.scene.physics.world.removeCollider(this.scene.player.collider);
        this.scene.physics.world.removeCollider(this.collider);

        setTimeout(() => {
            this.scene.scene.start('GameOver');
        }, 1500);
        
        pit.destroy();
        pit.collider.destroy()
    }

    update() {
        for(const pit of this.pits.children.entries) {
            pit.play('pit', true);
            pit.collider = this.scene.physics.add.overlap(pit, this.scene.player.sprite, this.collidePit, null, this);
        }
    }
}

export default Pit;