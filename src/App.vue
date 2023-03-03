<template>
  
  <WellcomeSection v-if="namePlayerTwo === ''"/>
  <congratulations v-if="winnerPlayer !== 0"/>

  <NavCabecalho/>

  <JogoVelha class="jogo_da_velha"/>
</template>

<script>
import NavCabecalho from './components/Nav-Cabecalho.vue'
import JogoVelha from './components/Jogo-da-Velha.vue'
import WellcomeSection from './components/WellcomeSection.vue'
import Congratulations from './components/CongratulationsSection.vue'
import store from '@/store/store'

export default {
  name: 'App',
  components: {
    NavCabecalho,
    JogoVelha,
    WellcomeSection,
    Congratulations
  },
  computed: {
    namePlayerTwo () {
      return store.state.namePlayerTwo
    },
    winnerPlayer() {
      return store.state.winnerPlayer !== 0 ? (store.state.winnerPlayer === 1 ? store.state.namePlayerOne : store.state.namePlayerTwo) : 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

body {
  margin: 0;
  height: 100vh;
}
</style>
