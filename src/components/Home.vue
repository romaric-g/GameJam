<template>
    <div class="home">
      <label for="pseudo">Ajouter un joueur :</label><br>
      <input type="text" placeholder="Ex: EMMI"/>
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
</style>
