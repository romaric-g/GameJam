<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/Home.vue"

export default {
  components: { Home }
}
</script>


<style lang="scss">
body {
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
}
</style>
