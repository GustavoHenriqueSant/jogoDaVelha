<template>
    <main>
        <div class="gameContainer">
            <table class="tabuleiro">
                <tr class="with_border">
                    <td @click="play(0, 0)">
                        <img  v-if="this.table_state[0][0] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img  v-if="this.table_state[0][0] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                    <td class="th_center" @click="play(0, 1)">
                        <img v-if="this.table_state[0][1] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[0][1] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                    <td @click="play(0, 2)">
                        <img v-if="this.table_state[0][2] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[0][2] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                </tr>
                <tr class="with_border">
                    <td @click="play(1, 0)">
                        <img v-if="this.table_state[1][0] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[1][0] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                    <td class="th_center" @click="play(1, 1)">
                        <img v-if="this.table_state[1][1] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[1][1] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                    <td @click="play(1, 2)">
                        <img v-if="this.table_state[1][2] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[1][2] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                </tr>
                <tr>
                    <td @click="play(2, 0)">
                        <img v-if="this.table_state[2][0] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[2][0] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                    <td class="th_center" @click="play(2, 1)">
                        <img v-if="this.table_state[2][1] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[2][1] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                    <td @click="play(2, 2)">
                        <img v-if="this.table_state[2][2] === 'X'" src="./../assets/Modelo_X.png" alt="símbolo X" class="input_tabuleiro">
                        <img v-if="this.table_state[2][2] === 'O'" src="./../assets/Modelo_O.png" alt="símbolo O" class="input_tabuleiro">
                    </td>
                </tr>
            </table>

            <div class="currentSimbol_container">
                <img v-if="this.current_simbol === 'X'" src="../assets/Modelo_X.png" alt="X é o símbolo atual para jogar no tabuleiro" class="currentSimbol_image">
                <img v-if="this.current_simbol === 'O'" src="../assets/Modelo_O.png" alt="Círculo é o símbolo atual para jogar no tabuleiro" class="currentSimbol_image">
            </div>
        </div>

    </main>
</template>

<script>
import store from '@/store/store'

export default {
    name: 'Jogo-da-Velha',
    data() {
        return {
            current_simbol : "X",
            table_state: [[false, false, false], [false, false, false], [false, false, false]]
        }
    },
    methods: {
        play: function (x, y) {
            if(this.table_state[x][y] === false){
                if(this.current_simbol === "X"){
                    this.table_state[x][y] = this.current_simbol
                    this.current_simbol = "O"
                }else {
                    this.table_state[x][y] = this.current_simbol
                    this.current_simbol = "X"
                }
            }

            this.isChampion(x, y)

            store.state.currentPlayer = store.state.currentPlayer === 1 ? 2 : 1
        },

        isChampion: function (x, y) {
            var simbol = this.table_state[x][y]
            if(this.table_state[0][0] === this.table_state[1][1] && this.table_state[0][0] == this.table_state[2][2] & this.table_state[0][0] === simbol){
                this.cleanTable()
                store.state.winnerPlayer = store.state.currentPlayer
            } else if(this.table_state[0][2] === this.table_state[1][1] && this.table_state[0][2] === this.table_state[2][0] && this.table_state[0][2] === simbol){
                this.cleanTable()
                store.state.winnerPlayer = store.state.currentPlayer
            } else {
                for(var i = 0; i < 3; i++){
                    if(this.table_state[i][0] === this.table_state[i][1] && this.table_state[i][0] === this.table_state[i][2] && this.table_state[i][0] === simbol){
                        store.state.winnerPlayer = store.state.currentPlayer
                        return this.cleanTable()
                    }
                }

                for(var j = 0; j < 3; j++){
                    if(this.table_state[0][j] === this.table_state[1][j] && this.table_state[0][j] === this.table_state[2][j] && this.table_state[0][j] === simbol){
                        store.state.winnerPlayer = store.state.currentPlayer
                        return this.cleanTable()
                    }
                }
            }

            if(!this.table_state.flat().includes(false)){
                store.state.winnerPlayer = -1
                this.cleanTable()
            }
        },

        cleanTable: function () {
            for(var i = 0; i < this.table_state.length; i++)
                for(var j = 0 ; j < this.table_state[i].length; j++)
                    this.table_state[i][j] = false
        }
    }
}
</script>

<style>
main {
    height: calc(100% - 20vh);
}

.gameContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
}

.tabuleiro {
    height: 30vh;
    width: 50%;
    margin-bottom: 15px;
}

td {
    border: 3px solid white;
    padding: 0;
    table-layout: fixed;
    width: 33%;
    height: 33%;
    overflow: hidden;
}

.with_border td {
    border-bottom: 3px solid #34495e;
}

.th_center {
    border-left: 3px solid #34495e;
    border-right: 3px solid #34495e;
}

.input_tabuleiro {
    width: 50%;
}

.currentSimbol_container {
    box-shadow: 3px 3px 5px #00000041;
    border-radius: 5px;
    width: 40%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.currentSimbol_image {
    width: 80%;
    height: 80%;
}

@media only screen and (min-width: 768px) {
    .tabuleiro {
        width: 30%;
        margin-bottom: 25px;
    }

    .currentSimbol_container{
        width: 20%;
        height: 25%;
    }

}
</style>