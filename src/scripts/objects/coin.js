import increasedScore from "../ui elements/score.js";
import increaseCount from "../ui elements/coin_count.js";

class Coin {
    constructor(scene) {
        this.scene = scene;
        this.coins = this.scene.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        const coinObj = this.scene.map.getObjectLayer('coin').objects;

        for(const coin of coinObj) {
            this.coins.create(coin.x, coin.y, 'atlas')
                .setOrigin(0)
                .setDepth(1);
        }
    }

    collect(coin) {
        this.scene.tweens.add({
            targets: coin,
            ease: 'Power1',
            scaleX: 0,
            scaleY: 0,
            duration: 200,
            onComplete: () => coin.collider.destroy()
        });

        increasedScore(100);
        increaseCount(1);

        coin.destroy();
    }

    update() {
        for(const coin of this.coins.children.entries) {
            coin.play('rotate', true);
            coin.collider = this.scene.physics.add.overlap(coin, this.scene.player.sprite, this.collect, null, this);
        }
    }
}

export default Coin;