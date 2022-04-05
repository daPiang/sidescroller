class GameOver extends Phaser.Scene {

    constructor () {
        super('GameOver');
    }

    create() {
        this.cameras.main.setBackgroundColor('#000');

        document.getElementById('game-over').style.visibility = 'visible';
    }
}

export default GameOver;