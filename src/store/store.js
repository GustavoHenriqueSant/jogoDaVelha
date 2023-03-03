import { createStore } from 'vuex'

export default createStore({
    state: {
        namePlayerOne: '',
        namePlayerTwo: '',
        currentPlayer: 1,
        winnerPlayer: 0
    }
})