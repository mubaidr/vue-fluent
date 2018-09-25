import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fontawesome/css/fontawesome-all.css'

import './assets/prop-doc-style.scss'
import './styles.sass'
import VueFluent from '../../lib/index'

Vue.config.productionTip = false

Vue.use(VueFluent)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
