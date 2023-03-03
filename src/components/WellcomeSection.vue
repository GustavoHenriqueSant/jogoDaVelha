<template>
    <div class="wellcomeMainContainer">
        <div class="wellcomeContainer">
            <h1 class="title">Wellcome !</h1>
            <p v-if="namePlayerOne === ''" class="questionName" >What's the name of player 1 ?</p>
            <p v-if="namePlayerOne !== ''" class="questionName" >What's the name of player 2 ?</p>
            <input name="playerNames" id="playerNames" class="nameInput" type="text"><button @:click="setPlayerName()">Confirm</button>
        </div>
    </div>
</template>

<script>
import store from '@/store/store'

export default {
    name: 'WellcomeSection',
    computed: {
        namePlayerOne() {
            return store.state.namePlayerOne
        },
        namePlayerTwo() {
            return store.state.namePlayerTwo
        }
    },
    methods: {
        setPlayerName: function () {
            var inputEnt = document.querySelector("#playerNames")

            if(inputEnt.value !== '')
                if(this.namePlayerOne === '')
                    store.state.namePlayerOne = inputEnt.value
                else
                    store.state.namePlayerTwo = inputEnt.value
            

            inputEnt.value = ''
        }
    }
}
</script>

<style>
    .wellcomeMainContainer {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.459);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wellcomeContainer {
        background-color: #34495e;
        border-radius: 5px;
        color: white;
        padding: 0 15px 20px 15px
    }
</style>