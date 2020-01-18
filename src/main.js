import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: require('./components/Home.vue').default
  },
  {
    path: '/play',
    name: 'Play',
    component: require('./components/Play.vue').default
  }]
})


new Vue({
  el: '#app',
  router: router,
  render: h => h(require('./App.vue').default)
})
