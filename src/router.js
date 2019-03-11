import Vue from 'vue'
import Router from 'vue-router'
import ContentsPage from './views/ContentsPage.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contents-page',
      component: ContentsPage
    },
    {
      path: '/sensor',
      name: 'sensor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "sensor" */ './views/Sensors.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
