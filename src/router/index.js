import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/concernLoveVersions',
    name: 'ConcernLoveVersions',
    component: () =>
      import(
        /* webpackChunkName: "concernLoveVersions" */ '../views/concernLoveVersions/index.vue'
      ),
    meta: {
      keepAlive: true,
      showTabBar: true
    }
  },
  {
    path: '/phoneBind',
    name: 'PhoneBind',
    component: () => import('../views/phoneBind/phone-bind.vue'),
    meta: {
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
