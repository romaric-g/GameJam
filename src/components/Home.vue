<template>
  <div class="Ajout">
    <label for="pseudo">Ajouter un joueur :</label><br>
    <tr>
      <td>
        <input type="text" placeholder="Ex: EMMI"/>
      </td>
      <td>
        <input type="submit" value="+">
      </td>
    </tr>
    <span class="partie">
    <input type="submit" value="Commencer la partie" />
  </span>
  </div>
</template>

<script>
export default {
  date() {
    return {
      Players: {
        tab_player: [],
        nbplayer: 0
      }
    };
  },
  methods: {
    AddPlayer: function(event) {
      nbplayer ++;
    },
    Launch: function(event) {
      store.dispatch('',this.form.username);
      router.push('/Game');
    }
  }
}
</script>

<style lang="scss">
label {
  font-size: 100px;
  color: white;
}

input submit {
  background-color: #ef476f
}
.partie {
  text-align: center
}
</style>
