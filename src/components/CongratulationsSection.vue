<template>
    <div class="container_mainCongratulations">
        <div class="container_congratulations">
            <p v-if="winnerPlayer !== 0 && winnerPlayer !== -1" class="frase_winner">Congratulations {{ nameWinnerPlayer }}, you are amazing</p>
            <p v-if="winnerPlayer === -1"> Hmmm looks like you guys evened out </p>

            <div class="conatiner_button_congratulation">
                <button @click="playAgain">Play again</button>
                <button>Bye Bye !</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import store from '@/store/store'

export default {
    name: 'congratulationsSection',
    computed: {
        winnerPlayer() {
            return store.state.winnerPlayer
        },
        nameWinnerPlayer() {
            return store.state.winnerPlayer === 1 ? store.state.namePlayerOne : store.state.namePlayerTwo
        }
    },
    methods: {
        playAgain: function () {
            store.state.winnerPlayer = 0
        }
    }
}
</script>

<style>
.container_mainCongratulations {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.459);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_congratulations {
    border-radius: 5px;
    padding: 20px 10px;
    background-color: #34495e;
    color: white;
}

</style>
