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
            console.log(players)
        }
    },
    getters: {},
    actions: {},
})
