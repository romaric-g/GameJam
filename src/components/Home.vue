<template>
  <div class="home-page">
    <div class="add-player">
      <p class="titlegame">Nuit et <strike>Jours</strike> </p>
      <p class="title">Ajouter un<br>joueur</p>
      <form name="addplayerform">
        <div class="addPlayerBox">
          <input v-model="playerName" class="writeBox" type="text" placeholder="Nom du joueur" name="player" value="" @submit.prevent="addPlayer"/>
          <button class="submitBox" type="submit" @click.prevent="addPlayer()">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve"><g><g id="add"><path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"/></g></g></svg>
          </button>
        </div>
      </form>
      <div class="player-list">
        <ul>
          <li v-for="(item, index) in players" :key="index">
            <div class="player-item">
              <p>{{ item.name }}</p><button @click.prevent="del(item)" type="submit" class="submit-Box">-</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="start">
      <button @click.prevent="launch()" type="submit" class="start-bouton">Commencer la partie</button>
    </div>
  </div>
</template>

<script>
import store from "../TodosStore.js"
import { mapState } from 'vuex'

let played = false;

var audio = new Audio('src/sounds/main.mp3');
audio.loop = 1;
audio.volume = 1;
var playPromise = audio.play();
if (playPromise !== undefined) {
  playPromise.then(_ => {
    audio.pause();
    // Automatic playback started!
    // Show playing UI.
  })
  .catch(error => {
    console.log(error)
    // Auto-play was prevented
    // Show paused UI.
  });
}

export default {
  data() {
    return {
      playerName: ""
    }
  },
  store,
  methods: {
    addPlayer (event) {
      // Lancer bruit de clic
      store.commit('REGISTER_PLAYER', this.playerName);
      this.playerName = ""
    },
    launch: function(event) {
      // Lancer bruit de clic
      if(!played){
        audio.play();
        played = true;
      } else {
        audio.pause();
        played = false
      }
      store.commit('START_GAME');
      this.$router.push('/play');
    },
    del: function(item){
      // Lancer bruit de clci de retour
      store.commit('DELETE_PLAYER', item)
    },
  },
  computed: {
    ...mapState(["isStart","players"])
  }
}
</script>

<style lang="scss">

.home-page {
  padding: 80px 40px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .add-player {
    flex: 1;
    .title {
      position: relative;
      font-size: 2.7em;
      line-height: 1em;
      color: white;
      margin: 60px 0;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 1px;
        background-color: #EF476F;
        width: 80px;
      }
    }

    .addPlayerBox {
      display: flex;
      flex-direction: row;
      height: 50px;

      .writeBox {
        flex: 1;
        margin-right: 8px;
        height: 100%;
        border: none;
        padding: 0 20px;
        box-sizing: border-box;
        font-size: 1em;
        color: black;


      }
      .submitBox {
        flex-shrink: 0;
        display: block;
        width: 60px;
        height: 100%;
        background-color: #EF476F;
        color: white;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          height: 20px;
          width: 20px;
          path {
            fill: white;
          }
        }
      }
    }


    ul {
      list-style: none;
      padding: 0;

      .player-item {
        width: 100%;
        display: flex;
        border-bottom: solid 1px #fff;
        margin: 8px 0;
        position: relative;

        p {
          flex: 1;
          font-size: 1.3em;
          color: white;
        }
        button {
          flex-shrink: 0;
          height: 25px;
          width: 25px;
          border: none;
          position: absolute;
          bottom: 0px;
          right: 0px;
        }
      }
    }
  }

  .start {
    padding: 20px 0;
    flex-shrink: 0;

    button {
      width: 100%;
      height: 55px;
      background-color: #EF476F;
      color: white;
      border: none;
      font-size: 1.1em;
    }
  }
}

.titlegame{
  color: black;
  text-align: center;
  font-size: 80px;
}

strike{

  color: white;
}

</style>
