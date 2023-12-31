import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path: '/',
     name: 'First',
     component: FirstPage
    },
    {
      path: '/second',
      name:  'second',
      component: SecondPage
    }
  ]
})

export default router
