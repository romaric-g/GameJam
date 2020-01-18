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

    DELETE_PLAYER: (s, value) => {
      if(value < state.nbPlayers){
        s.players.splice(value, 1);
      } else {
        console.log("Impossible de supprimer le joueur");
      }
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
