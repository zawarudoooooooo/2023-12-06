import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Exchange',
      name: 'Exchange',
      component: () => import('../views/Exchange.vue')
    },
    {
      path: '/ShareHouse',
      name: 'ShareHouse',
      component: () => import('../views/ShareHouse.vue')
    },
    {
      path: '/Intern',
      name: 'Intern',
      component: () => import('../views/Intern.vue')
    },
  ]
})

export default router
