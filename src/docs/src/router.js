import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/api',
      name: 'api',
      component: () => import(/* webpackChunkName: "api" */ './views/Api.vue'),
    },
    {
      path: '/extras',
      name: 'extras',
      component: () =>
        import(/* webpackChunkName: "extras" */ './views/Extras.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
