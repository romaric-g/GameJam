import vuex from 'vuex'
import Player from "./objects/Player.js"
import RoundManager from './objects/RoundManager.js'
import EnvironmentManager from './objects/EnvironmentManager.js'
import Inventory from './objects/Inventory.js'
import ScienceCardManager from './objects/ScienceCardManager.js'
import PowerManager from './objects/PowerManager.js'

var players = []
var roundManager = new RoundManager(players);
var environmentManager = new EnvironmentManager()
var inventory = new Inventory()
var scienceCardManager = new ScienceCardManager();
var powerManager = new PowerManager();

export default new vuex.Store({
  state: {
    players,
    isStart: false,
    roundManager,
    powerManager,
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
    ADD_VALUE_BAR_POW: (state, value) => {
      if(state.powerManager.powervalue+value > 100){
        state.powerManager.powervalue = 100;
      } else if (state.powerManager.powervalue + value <= 0){
        state.powerManager.powervalue = 0;
      } else {
        state.powerManager.powervalue+= value;
      }
    },
    ADD_VALUE_BAR_ENV: (state, value) => {
      if(state.environmentManager.environmentvalue+value >= 100){
        state.environmentManager.environmentvalue = 100;
      } else if (state.environmentManager.environmentvalue + value < 0){
        state.environmentManager.environmentvalue = 0;
      } else {
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
