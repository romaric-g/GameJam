import vuex from 'vuex'

// export class Player {
//   constructor(name, role) {
//     this.name = name;
//     this.role = role;
//   }
// }

import Player from "./objects/Player.js"

var players = []

export default new vuex.Store({
  state: {
    players
  },
  mutations: {
    REGISTER_PLAYER: (state, value) => {
      console.log(value)
      let p = new Player(value, null)
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
