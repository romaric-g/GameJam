import vuex from 'vuex'
import Player from "./objects/Player.js"
import Role from "./objects/Role.js"
import RoundManager from './objects/RoundManager.js'
import EnvironmentManager from './objects/EnvironmentManager.js'

var players = []
var roundManager = new RoundManager(players);
var environmentManager = new EnvironmentManager()

export default new vuex.Store({
  state: {
    players,
    isStart: false,
    roundManager,
    environmentManager
  },
  mutations: {
    REGISTER_PLAYER: (state, value) => {
      if(!state.isStart && value) {
        let p = new Player(value, null)
        state.players.push(p)
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
    }
  },
  getters: {},
  actions: {},
})
