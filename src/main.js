import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css';

import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // data () {
  //   return {
  //     info: null
  //   }
  // },
  // mounted () {
  //   axios
  //     .get('https://api.publicapis.org/entries?category=animals&https=true')
  //     .then(response => (this.info = response))
  //     .catch(error => console.log(error))

  // }
}).$mount('#app')


