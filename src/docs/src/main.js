import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fontawesome/css/fontawesome-all.css'

import './assets/animations.sass'

// Prism sytax highlighter
import './assets/prism'
import './assets/prism.css'

// vue-fluent import
import '../../lib/index.sass'
import VueFluent from '../../lib/index'

Vue.use(VueFluent, {
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
