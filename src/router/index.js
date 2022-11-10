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
      keepAlive: true,
      showTabBar: true
    }
  },
  {
    path: '/concernhome',
    name: 'ConcernHome',
    component: () =>
      import(
        /* webpackChunkName: "concernhome" */ '../views/concernhome/concernhome.vue'
      ),
    meta: {
      keepAlive: true,
      showTabBar: true
    }
  },
  {
    path: '/bind',
    name: 'Binding',
    component: () => import('../views/bind/bind.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/account/account.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/remove',
    name: 'Remove',
    component: () => import('../views/remove/remove.vue'),
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
