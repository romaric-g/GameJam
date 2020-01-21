import RoundAction from './RoundAction.js'
import store from "../TodosStore.js"

const stats = {
  NONE: 'none',
  EVENT: 'event',
  INDIVIDUAL: 'individual',
  MOVE: 'move'
}

export default class RoundManager {
  constructor(players) {
    this.players = players
    this.round = 0;
    this.stats = stats.NONE
    this.individualRoundPlayer = null;
    this.player
    this.roundActions = null;
  }

  nextRound() {
    this.round++;
    if(this.round > 1){
      store.commit('ADD_VALUE_BAR_POW', -store.state.players.length)
    }
    this.individualStats = stats.EVENT

    //todo gerer le systeme d'evenement puis, executer en calback 'startIndividualStats'
    this.startIndividualStats()
  }

  startIndividualStats() {
    this.individualStats = stats.INDIVIDUAL
    this.roundActions = [];
    this.players.forEach(player => {
      this.roundActions.push(new RoundAction(player));
    });

    this.nextPlayer()
  }

  nextPlayer() {
    console.log("next player")
    if ( (this.individualRoundPlayer = this.roundActions.shift()) === undefined ) {
      this.startMoveStats();
    }
  }

  startMoveStats() {
    //todo gerer le systeme de mouvement puis, executer en calback 'nextRound'
    this.nextRound()
  }
}
