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
      name: 'ProductsIndex',
      component: () => import('../views/Products/Index.vue')
    },
    {
      path: '/products/create',
      name: 'ProductsCreate',
      component: () => import('../views/Products/Create.vue')
    },
    {
      path: '/products/:id/edit',
      name: 'ProductsEdit',
      component: () => import('../views/Products/Edit.vue')
    }
  ]
})

export default router
