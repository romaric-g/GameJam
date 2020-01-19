export default class RoundAction {
    constructor(player) {
        this.player = player;
        this.actionChoise = 0;
        this.roundFinish = false;
    }

    startAction(callback) {
        
    }

    finish() {
        this.roundFinish = true;
    }
}