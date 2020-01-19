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
    path: '/credit',
    name: 'Credit',
    component: require('./components/Credit.vue').default
  },
  {
    path: '/play',
    component: require('./components/Play.vue').default,
    children: [
      { path: '/', component: require('./components/play/Index.vue').default},
      { path: 'ressource', component: require('./components/play/Resource.vue').default},
      { path: 'science', component: require('./components/play/Science.vue').default}
    ]
  },
  {
    path: '*',
    redirect: '/'
  }]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(require('./App.vue').default)
})
