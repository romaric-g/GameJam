<template>
  <div class="mx-auto mt-3" style="width: 300px">
    <div>
      <b-form v-on:submit.prevent="AddPlayer">
        <b-form-group label="Ajouter un joueur :" label-for="Joueurs">
          <b-form-input type="text" id="Joueur" v-model="form.username"></b-form-input>
        </b-form-group>
    </b-form>
    <b-form-group>
      <b-button class="btn-info btn" type="submit">Ajouter un joueur</b-button>
    </b-form-group>
    <b-form-group>
        <b-button class="btn-info btn" type="submit">Commencer la partie</b-button>
    </b-form-group>
    <td>
        <tr v-for="Joueurs in tab_player"> {{Joueurs}} </tr>
    </td>
    </div>
</div>
</template>

<script>
import router from "../router";
import store from "../Store";

export default {
    date() {
        return {
            Players: {
                tab_player: [];
                nbplayer: 0;
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
};
</script>
