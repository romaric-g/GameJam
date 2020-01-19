export default class RoundAction {
    constructor(player) {
        this.player = player;
        this.actionChoise = 0;
        this.roundFinish = false;
        
    }

    startAction(callback) {
        this.callback = callback
    }

    finish() {
        this.roundFinish = true;
        callback();
    }
}