import vuex from 'vuex'
import Player from "./objects/Player.js"
import RoundManager from './objects/RoundManager.js'
import EnvironmentManager from './objects/EnvironmentManager.js'
import Inventory from './objects/Inventory.js'
import ScienceCardManager from './objects/ScienceCardManager.js'

var players = []
var roundManager = new RoundManager(players);
var environmentManager = new EnvironmentManager()
var inventory = new Inventory()
var scienceCardManager = new ScienceCardManager();

export default new vuex.Store({
  state: {
    players,
    isStart: false,
    roundManager,
    environmentManager,
    scienceCardManager,
    inventory
  },
  mutations: {
    REGISTER_PLAYER: (state, value) => {
      if(!state.isStart && value) {
        let p = new Player(value, null)
        state.players.push(p)
      }
    },
    ADD_VALUE_BAR: (state, bar, value) => {
      if(bar == 1) {
        state.environmentManager.environmentLimite+= value;
      }else if(bar == 2) {
        state.environmentManager.environmentvalue+= value;
      }
    },
    DELETE_PLAYER: (state, item) => {
      const index = state.players.indexOf(item);
      if (index !== -1) {
        state.players.splice(index, 1);
      }
    },
    START_GAME: (state) => {
      if(!state.isStart && state.players.length > 0) {
        state.isStart = true;
        state.roundManager.nextRound();
      }
    },
    RUN_INDIVIDUAL_ACTION: (state, actionID) => {
      if(state.roundManager.individualStats == 'individual') {
        state.roundManager.individualRoundPlayer.runAction(actionID);
        state.scienceCardManager.reavealCard()
      }
    },
    SCIENCE_CARD_CHOISE: (state, keep) => {
      if(keep) {
        state.inventory.addCard(state.scienceCardManager.availableCard)
        state.scienceCardManager.removeFromCardList()
      }else{
        state.scienceCardManager.returnToCardList()
      }
    },
    NEXT_PLAYER: (state) => {
      state.roundManager.nextPlayer()
    }
  },
  getters: {},
  actions: {},
})
