import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/Index.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products/Index.vue')
    },
    {
      path: '/products/create',
      name: 'createproducts',
      component: () => import('../views/Products/Create.vue')
    }
  ]
})

export default router
