import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fontawesome/css/fontawesome-all.css'

import './styles.sass'

import Buefy from '../../lib/index'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
