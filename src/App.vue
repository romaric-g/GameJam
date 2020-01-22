<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/Home.vue"

export default {
  components: { Home },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ibarra+Real+Nova:200,400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,400,700,900&display=swap');

body {
  font-family: 'Ibarra Real Nova', serif;
  background-color: black;
  height: 100vh;
  width: 100vw;
  margin: 0;
}
p, h1,h2,h3,h4,h5,h6 {
  margin: 0;
}
#app {
  max-width: 55vh;
  margin: 0 auto;
  background-color: #264653;
  height: 100%;
  overflow: auto;
}

.play-button-outer {
  margin: 0% 0%;
  width: 2em;
  height: 2em;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.play-button {
  margin: 0 auto;
  top: 25%;
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.5em 0 0.5em 1em;
  border-color: transparent transparent transparent #EF476F;
  opacity: .75;

}

.play-button-outer:hover {
  background-color: rgba(0, 0, 0, .5);
}

.play-button-outer:hover .play-button {
  opacity: 1;
}
</style>
