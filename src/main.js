import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})

import App from './App.vue'
import Home from './components/Home.vue'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
