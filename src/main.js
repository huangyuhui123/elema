// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import sellings from 'components/sellings/sellings'

import Http from './request/axios.js'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.prototype.Http = Http

const routes = [
  { path: '/', component: goods },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/selling', component: sellings }
]

Vue.config.productionTip = false

const router = new VueRouter({
  routes, // short for `routes: routes`
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
