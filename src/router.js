import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router, Axios)
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/asdasd',
      name: 'company',
      component: '',
    },
  ],
})

export default router
