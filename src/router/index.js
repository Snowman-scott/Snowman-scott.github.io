import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: "/repos",
      name: "repos",
      component: () => import("../views/ReposView.vue"),
    },
    {
      path: "/james",
      name: "james",
      component: () => import("../views/JamesView.vue"),
    },
    {
      path: "/bk",
      name: "bk",
      component: () => import("../views/BkView.vue"),
    },
  ],
})

export default router
