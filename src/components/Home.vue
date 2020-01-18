<template>
  <div class="">
    <div class="add">
      <div class="text">
        <label>Ajouter un </br>joueur
          <hr width="60%" size="1" color="#ef476f" align="left">
        </label>
      </div>
      <div class="adding">
        <form name="form">
          <input type="text" placeholder="Ex: EMMI" class="barre" name="player" value=""/>
          <input type="submit" value="+" class="bouton" @click.prevent="addPlayer()" />
        </form>
      </div>
    </div>
    <div class="start">
      <input @click.prevent="launch()" type="submit" value="Commencer la partie" class="start-bouton"/>
    </div>
  </div>
</template>

<script>
import store from "../TodosStore.js"

var c = document

export default {
  data() {
    return {
      Players: {
        tab_player: [],
        nbplayer: 0
      }
    };
  },
  methods: {
    addPlayer: function(event) {
      store.commit('REGISTER_PLAYER', c.form.player.value);
    },
    launch: function(event) {
      console.log(store.state.nbPlayers)
      router.push('/Play');
    }
  }
}
</script>

<style lang="scss">

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
}
</style>
