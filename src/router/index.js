import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Inscribe',  
      name: 'Inscribe',
      component: () => import('../views/Inscribe.vue')
    },
    {
      path: '/Market',
      name: 'Market',
      component: () => import('../views/Market.vue')
    }
    ,
    {
      path: '/Trade',
      name: 'Trade',
      component: () => import('../views/Trade.vue')
    }
    ,{
      path: '/tick',
      name: 'tick',
      component: () => import('../views/tick.vue')
    }
  ]
})

export default router
