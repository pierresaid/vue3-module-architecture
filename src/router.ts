import { createRouter, createWebHistory } from 'vue-router'
import todosRoutes from './modules/todos/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...todosRoutes]
})

export default router
