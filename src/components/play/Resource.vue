<template>
  <div class="resource-card">
    <div class="info">
      <div class="header">
        <div class="rectangle">
          <div class="rond">
            <div class="title">
              <p>Lorem lorem</p>
            </div>
            <div class="carre">
              <h2>1</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#264653" viewBox="0 0 50 50" width="170px" height="170px"><path d="M 22.5 5 C 16.710938 5 12 9.710938 12 15.5 C 12 15.664063 11.988281 15.832031 12 16 C 7.589844 16 4 19.589844 4 24 C 4 28.410156 7.589844 32 12 32 L 36 32 C 41.515625 32 46 27.515625 46 22 C 46 16.484375 41.515625 12 36 12 C 34.820313 12 33.6875 12.195313 32.59375 12.59375 C 31.328125 8.121094 27.261719 5 22.5 5 Z M 25 34 C 24.746094 34 24.476563 34.085938 24.28125 34.28125 L 22.28125 36.28125 C 21.890625 36.671875 21.890625 37.328125 22.28125 37.71875 C 22.476563 37.914063 22.742188 38 23 38 C 23.257813 38 23.523438 37.914063 23.71875 37.71875 L 25.71875 35.71875 C 26.109375 35.328125 26.109375 34.671875 25.71875 34.28125 C 25.523438 34.085938 25.253906 34 25 34 Z M 14 35 C 13.746094 35 13.476563 35.085938 13.28125 35.28125 L 11.28125 37.28125 C 10.890625 37.671875 10.890625 38.328125 11.28125 38.71875 C 11.476563 38.914063 11.742188 39 12 39 C 12.257813 39 12.523438 38.914063 12.71875 38.71875 L 14.71875 36.71875 C 15.109375 36.328125 15.109375 35.671875 14.71875 35.28125 C 14.523438 35.085938 14.253906 35 14 35 Z M 34 35 C 33.746094 35 33.476563 35.085938 33.28125 35.28125 L 31.28125 37.28125 C 30.890625 37.671875 30.890625 38.328125 31.28125 38.71875 C 31.476563 38.914063 31.742188 39 32 39 C 32.257813 39 32.523438 38.914063 32.71875 38.71875 L 34.71875 36.71875 C 35.109375 36.328125 35.109375 35.671875 34.71875 35.28125 C 34.523438 35.085938 34.253906 35 34 35 Z M 20 39 C 19.746094 39 19.476563 39.085938 19.28125 39.28125 L 17.28125 41.28125 C 16.890625 41.671875 16.890625 42.328125 17.28125 42.71875 C 17.476563 42.914063 17.742188 43 18 43 C 18.257813 43 18.523438 42.914063 18.71875 42.71875 L 20.71875 40.71875 C 21.109375 40.328125 21.109375 39.671875 20.71875 39.28125 C 20.523438 39.085938 20.253906 39 20 39 Z M 9 40 C 8.746094 40 8.476563 40.085938 8.28125 40.28125 L 6.28125 42.28125 C 5.890625 42.671875 5.890625 43.328125 6.28125 43.71875 C 6.476563 43.914063 6.742188 44 7 44 C 7.257813 44 7.523438 43.914063 7.71875 43.71875 L 9.71875 41.71875 C 10.109375 41.328125 10.109375 40.671875 9.71875 40.28125 C 9.523438 40.085938 9.253906 40 9 40 Z M 29 40 C 28.746094 40 28.476563 40.085938 28.28125 40.28125 L 26.28125 42.28125 C 25.890625 42.671875 25.890625 43.328125 26.28125 43.71875 C 26.476563 43.914063 26.742188 44 27 44 C 27.257813 44 27.523438 43.914063 27.71875 43.71875 L 29.71875 41.71875 C 30.109375 41.328125 30.109375 40.671875 29.71875 40.28125 C 29.523438 40.085938 29.253906 40 29 40 Z"/></svg>
          <h4>Vous avez gagné 3 points d'energie</h4>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button @click.prevent="back" class="conserver">Retour</button>
    </div>
  </div>
</template>

<script>
import store from "../../TodosStore.js"
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
  store,
  methods: {
    back() {
      // Lancer bruit de retour
      store.commit('ADD_VALUE_BAR_POW', 3);
      this.$router.push('/play');
    }
  },
  computed: {
    ...mapState(["isStart","players","roundManager"])
  }
}

</script>

<style lang="scss">

.resource-card {
  margin: 20px auto;
  width: 90%;

  .info {
    background-color: white;
  }

  .header {
    width: 100%;
    position: relative;
    height: 60px;

    .rectangle {
      height: 6px;
      background-color: #ef476f;
    }

    .rond {
      display: flex;
      flex-direction: row;

      .title {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3em;
        color: #000;
      }
      .carre {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        height: 60px;
        width: 60px;
        background-color: #ef476f;
        font-size: 1.7em;
        color: white;
      }
    }
  }

  .content {
    text-align: center;
    padding: 40px 20px;
  }


  .buttons {
    height: 40px;
    margin-top: 5px;

    button {
      background-color: white;
      width: 100%;
      text-align: center;
      padding: 10px 0;
      border: 0;
      cursor: pointer;
    }
  }
}

</style>
