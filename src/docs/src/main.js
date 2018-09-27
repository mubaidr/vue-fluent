import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fontawesome/css/fontawesome-all.css'

import './assets/animations.sass'

// vue-fluent import
import '../../lib/index.sass'
import VueFluent from '../../lib/index'
Vue.use(VueFluent)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
