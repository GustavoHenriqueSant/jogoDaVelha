<template>
    <header>
        <p v-if="namePlayerTwo !== ''">Your turn, <span class="playerName">{{ currentplayer }}</span> !</p>
    </header>
</template>

<script>
import store from '@/store/store'

export default {
    name: 'Nav-Cabecalho',
    computed: {
        namePlayerOne() {
            return store.state.namePlayerOne
        },
        namePlayerTwo() {
            return store.state.namePlayerTwo
        },
        currentplayer() {
            return store.state.currentPlayer === 1 ? this.namePlayerOne : this.namePlayerTwo
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #41b783;
    height: 20vh;
    width: 100%;
    font-family: 'Bebas Neue', cursive;
    font-size: xx-large;
}

.playerName {
    color: rgb(179, 19, 19);
}

.logo {
    height: 60%;
}

.logo_img {
    height: 100%;
}
</style>