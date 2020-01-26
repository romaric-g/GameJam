<template>
  <div class="index-play">
    <div class="actions-grid">
      <button @click.prevent="clickScience" class="science-box" :class="{unusable: !availbableAction}">

        <p class="entitled">Science</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-n</title><path d="M469.11,382.76,325,153.92V74h32V32H155V74h32v79.92L42.89,382.76c-13,20.64-14.78,43.73-3,65.1S71.59,480,96,480H416c24.41,0,44.32-10.76,56.1-32.14S482.14,403.4,469.11,382.76ZM224.39,173.39a29.76,29.76,0,0,0,4.62-16V74h54v84.59a25.85,25.85,0,0,0,4,13.82L356.82,283H155.18Z"/></svg>
        <div class="number-info">
          <p class="number">1</p>
          <p class="info">niveau</p>
        </div>
      </button>
      <button @click.prevent="clickResource" class="resource-box" :class="{unusable: !availbableAction}">
        <p class="entitled">Ressource</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"/></svg>
      </button>
      <button @click.prevent="clickCapacity" class="capacity-box unusable">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.328,20.8027c-11.60759,38.70264-34.30724,111.70173-61.30311,187.70077,6.99893,2.09372,13.4042,4,18.60653,5.59368a16.06158,16.06158,0,0,1,9.49854,22.906c-22.106,42.29635-82.69047,152.795-142.47819,214.40356-.99984,1.09373-1.99969,2.5-2.99954,3.49995A194.83046,194.83046,0,1,1,57.085,179.41009c.99985-1,2.40588-2,3.49947-3,61.59994-59.90549,171.97367-120.40473,214.37343-142.4982a16.058,16.058,0,0,1,22.90274,9.49988c1.59351,5.09368,3.49947,11.5936,5.5929,18.59351C379.34818,35.00565,452.43074,12.30281,491.12794.70921A16.18325,16.18325,0,0,1,511.328,20.8027ZM319.951,320.00207A127.98041,127.98041,0,1,0,191.97061,448.00046,127.97573,127.97573,0,0,0,319.951,320.00207Zm-127.98041-31.9996a31.9951,31.9951,0,1,1-31.9951-31.9996A31.959,31.959,0,0,1,191.97061,288.00247Zm31.9951,79.999a15.99755,15.99755,0,1,1-15.99755-15.9998A16.04975,16.04975,0,0,1,223.96571,368.00147Z"/></svg>
        <p class="entitled">Utilisation competence</p>
        <div class="number-info">
          <p class="number">-20</p>
          <p class="info">energies</p>
        </div>
      </button>
      <button @click.prevent="clickDone" class="next-player" :class="{unusable: availbableAction}"><p class="entitled">Finir le tour</p></button>
    </div>
  </div>
</template>

<script>

import store from "../../TodosStore.js"
import { mapState } from 'vuex'

var audio1 = new Audio('src/sounds/clic.mp3');
audio1.loop = 0;
audio1.volume = 1;
var playPromise = audio1.play();
if (playPromise !== undefined) {
  playPromise.then(_ => {
    audio1.pause();
    // Automatic playback started!
    // Show playing UI.
  })
  .catch(error => {
    console.log(error)
    // Auto-play was prevented
    // Show paused UI.
  });
}

var audio2 = new Audio('src/sounds/game over.mp3');
audio2.loop = 0;
audio2.volume = 1;
var playPromise = audio2.play();
if (playPromise !== undefined) {
  playPromise.then(_ => {
    audio2.pause();
    // Automatic playback started!
    // Show playing UI.
  })
  .catch(error => {
    console.log(error)
    // Auto-play was prevented
    // Show paused UI.
  });
}

var audio3 = new Audio('src/sounds/main.mp3');

export default {
  data() {
    return {}
  },
  store,
  methods: {
    clickScience(event) {
      audio1.play();
      if(this.availbableAction) {
        store.commit('RUN_INDIVIDUAL_ACTION', 1);
        this.$router.push('/play/science');
        console.log(store.state.powerManager.powervalue)
      }
    },
    clickResource(event) {
      audio1.play();
      if(this.availbableAction) {
        store.commit('RUN_INDIVIDUAL_ACTION', 2);
        this.$router.push('/play/ressource');
      }
    },
    clickCapacity(event) {
      audio1.play();
    },
    clickDone(event) {
      audio1.play();
      store.commit('NEXT_PLAYER')
      if(store.state.powerManager.powervalue == 0){
        audio2.play();
        store.commit('STOP')
        this.$router.push('/gameOver');
      }
    }
  },
  computed: {
    availbableAction() {
      return this.roundManager.individualRoundPlayer.actionChoise == 0
    },
    ...mapState(["isStart","players","roundManager", "powerManager"])
  }
}
</script>


<style lang="scss">
.index-play {

  .actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: .5em;
    padding: 10px 30px;

    & > button {

      border: none;
      position: relative;
      height: 150px;
      background-color: white;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition-duration: 0.3s;

      &:hover {
        transform: scale(1.05);
      }

      &.unusable {
        opacity: 0.5;

        &:hover {
          transform: none;
          cursor: not-allowed;
        }
      }
    }

    .science-box {
      grid-column: 1;
    }
    .resource-box {
      grid-column: 2;
    }
    .capacity-box {
      grid-row: 2;
      grid-column: 1 / span 2
    }

    svg {
      height: 40px;
      width: 40px;
      path {
        fill: #264653;
      }
    }
  }

  p.entitled {
    position: absolute;
    text-transform: uppercase;
    color: #264653;
    text-align: center;
    font-size: 1em;
    bottom: 8px;
    left: 0;
    right: 0;
  }

  .number-info {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 42px;
    width: 42px;
    border: 1px solid #ef476f;
    font-family: 'Titillium Web', sans-serif;
    transition-duration: 0.3s;
    &:hover {
      background-color: #ef476f;
    }

    &:hover .number, &:hover .info {
      color: white;
    }
    .number {
      color: #ef476f;
      font-weight: 900;
      font-size: 1.9em;
      line-height: 1em;
      margin-top: 3px;
    }
    .info {
      text-align: center;
      font-size: .8em;
      line-height: 1em;
      color: #ef476f;
      text-align: center;
    }
  }

  .next-player {
    grid-row: 3;
    grid-column: 1 / span 2;
    height: 60px!important;

    p.entitled {
      position: relative;
      bottom: unset;left: unset;right: unset;
    }
  }

}
</style>
