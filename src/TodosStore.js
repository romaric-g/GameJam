import vuex from 'vuex'

const players = []
const game = 

export default new vuex.Store({
    state: {
        players
    },
    mutations: {
        REGISTER_PLAYER: (state, value) => {
            state.players.add(players)
        }
    },
    getters: {},
    actions: {},
})