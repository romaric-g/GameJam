import vuex from 'vuex'
import Player from "./objects/Player.js"
import Role from "./objects/Role.js"

var players = []

export default new vuex.Store({
  state: {
    players,
  },
  mutations: {
    REGISTER_PLAYER: (state, value) => {
      var role = new Role()
      let p = new Player(value, role)
      state.players.push(p)
    },
    DELETE_PLAYER: (state, value) => {
      let indice = 0;
      for(let i = 0; i < state.players.size; i++){
        if(state.players[i] == value){
          indice = i;
        }
      }
      state.players.splice(indice, 1);
    }
  },
  getters: {
    nbPlayers: state => {
      return state.players.size();
    },
    getPlayersRegisted: state => {
      return state.players;
    }
  },
  actions: {},
})
