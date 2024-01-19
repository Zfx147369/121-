import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/long',
    name: 'long',
    component: () => import('../views/LongView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [{
      path: 'adinde',
      name: 'adinde',
      component: () => import('../views/adindeView.vue')
    }]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



// 路由鉴权
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (token) {
    if (to.path === "/long") {
      // 去首页
      next("/");
    } else {
      next();
    }
  } else {
    if (to.path === "/long") {
      next();
    } else {
      next("/long");
    }
  }
});

export default router
