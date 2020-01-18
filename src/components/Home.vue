<template>
  <div class="home-page">
    <div class="add-player">
      <p class="title">Ajouter un<br>joueur</p>
      <form name="addplayerform">
        <div class="addPlayerBox">
            <input class="writeBox" type="text" placeholder="Nom du joueur"  name="player" value=""/>
            <button class="submitBox" type="submit" @click.prevent="addPlayer()">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve"><g><g id="add"><path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"/></g></g></svg>
            </button>
        </div>
      </form>
      <div class="player-list">
        <ul>
          <li></li>
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
import app from "../App.vue"

export default {
  methods: {
    addPlayer: function(event) {
      store.commit('REGISTER_PLAYER', document.form.player.value);
    },
    launch: function(event) {
      this.$router.push('/play');
    }
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

/*
.add{
  padding-top: 40%;
  display:flex;
  flex-direction: column;
}

.text{
  display:flex;
  align-items: left;
}

.adding{
  display:flex;
  flex-direction: line;
  align-items: center;
  margin-left: 3%
}

.start{
  display:flex;
  align-items: center;
  margin-top: 75%;
  margin-left: 3%
}

.barre{
  font-size: 350%;
  width: 90%;
  margin: 1em 0;
}

label {
  font-size: 80px;
  color: white;
}

hr {
  color: #ef476f;
  margin: -0.1em 0;
}

.bouton {
  background-color: #ef476f;
  Color: white;
  font-size: 400%;
  border: none;
}

.start-bouton {
  background-color: #ef476f;
  Color: white;
  font-size: 400%;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  text-decoration: none;
}*/
</style>
