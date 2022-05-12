import Vue from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(fas, faHeart);

Vue.config.productionTip = false
Vue.component('fa-icon', FontAwesomeIcon)


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './Routes'
const router = new VueRouter({
  mode: 'history',
  routes
})

import store from './store';
new Vue({
  render: h => h(App),
  store,
  router
})
.$mount('#app')