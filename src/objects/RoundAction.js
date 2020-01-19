export default class RoundAction {
    constructor(player) {
        this.player = player;
        this.actionChoise = 0;
        this.roundFinish = false;
        
    }

    runAction(number) {
        console.log("Action: "  + number)
        this.actionChoise = number;        
    }

    finish() {
        this.roundFinish = true;
    }
}