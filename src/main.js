import Vue from 'vue'
import App from './App.vue'

import router from './router'
import { BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import './styles.scss'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
