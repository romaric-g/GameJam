<template>
  <div v-if="isStart" class="play-page" @click="update()">
    <div class="play-header">
      <div class="bars" id="bars">
        <ProgressEnvironmentBar name="Ecologie"></ProgressEnvironmentBar>
        <ProgressPowerBar name="Energie"></ProgressPowerBar>
      </div>
      <div class="round-number">
        <p>{{ roundValue }}</p>
      </div>
    </div>
    <div class="play-title">
      <h1>À vous de jouer</h1>
      <p>{{ player }}</p>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="play-footer">
      <div class="biome-box">
        <div class="card-box">
          <div v-for="slot of filledSlot" :key="slot.id" class="card-item" :class="{fill: slot.fill}">
            <p v-if="slot.card">{{ slot.card.id }}</p>
          </div>
        </div>
        <a class="biome-link" href="#" @click.prevent="launch()">Voir la carte</a>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressEnvironmentBar from "./elements/ProgressEnvironmentBar.vue"
import ProgressPowerBar from "./elements/ProgressPowerBar.vue"
import store from "../TodosStore.js"
import { mapState } from 'vuex'

export default {
  components: { ProgressEnvironmentBar, ProgressPowerBar },
  store,
  computed: {
    filledSlot() {
        let fillSlot = [];
        let inv = this.inventory.cards;
        for (let index = 0; index < 5; index++) {
          let fill = inv.length > index;
          let card = undefined;
          if(fill) {
            card = (inv[index]);
          }
          fillSlot[index] = {fill, card, id: index}
        }
        return fillSlot;
    },
    envValue() {
      return this.environmentManager.environmentvalue
    },
    roundValue() {
      return this.roundManager.round
    },
    player() {
      return this.roundManager.individualRoundPlayer.player.name;
    },
    ...mapState(["environmentManager", "powerManager","roundManager","isStart","inventory"])
  },
  methods:{
    update: function(event){      
      if(store.state.powerManager.powervalue != 0){
        document.getElementById("environment").setAttribute('style', ('width: ' + store.state.environmentManager.environmentvalue / (store.state.environmentManager.environmentLimite / 100) + '%'))
        document.getElementById("power").setAttribute('style', ('width: ' + store.state.powerManager.powervalue / (store.state.powerManager.powerLimite / 100) + '%'))
      }
    },
    launch: function(event){
      this.$router.push('/map');
    }
  }
}


</script>


<style lang="scss">

.play-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px 10px;
  box-sizing: border-box;

  .play-header {
    display: flex;
    flex-direction: row;
  }
  .play-header, .play-footer {
    flex-shrink: 0;
    padding: 10px 0;

    .bars {
      flex: 1;
    }

    .round-number {
      flex-shrink: 0;
      font-size: 3em;
      color: white;
      padding: 10px 15px;
    }

  }

  .play-title {
    color: white;
    text-align: center;
    font-size: 1.5em;
    font-weight: 200;
  }


  .content {
    flex: 1;
  }
}

.biome-box {
  .biome-info {
    text-align: center;
    color: white;
  }
  .card-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;

    .card-item {
      height: 48px;
      width: 48px;
      margin: 2px;
      border: 2px solid white;  
      display: flex;
      align-items: center;
      justify-content: center;

      &.fill {
        background-color: white;
      }

      svg {
        height: 70%;
        width: 70%;

      }
    }
  }

  .biome-link {
    position: relative;
    display: block;
    text-align: center;
    color: white;
    font-size: 1.3em;
    text-decoration: none;
    margin: 5px 0;
  }

  .biome-link::after {
    content: '';
    height: 2px;
    width: 80px;
    display: block;
    background-color: #EF476F;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}


</style>
