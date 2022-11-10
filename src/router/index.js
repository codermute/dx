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
    path: '/accountChoose',
    name: 'AccountChoose',
    component: () => import('../views/account-choose/account-choose.vue'),
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
  },
  {
    path: '/accountManagement',
    name: 'AccountManagement',
    component: () =>
      import('../views/account-management/account-management.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
