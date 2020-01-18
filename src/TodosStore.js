import vuex from 'vuex'

var players = []
var nbPlayers = 0
// const game =

export default new vuex.Store({
  state: {
    players,
    nbPlayers
  },
  mutations: {
    REGISTER_PLAYER: (state, value) => {
      state.players.push(value)
      nbPlayers++;  
    },

    DELETE_PLAYER: (state, value) => {
      if(value < state.nbPlayers){
        state.players.splice(value, 1);
      } else {
        console.log("Impossible de supprimer le joueur");
      }
    }
  },
  getters: {},
  actions: {},
})
