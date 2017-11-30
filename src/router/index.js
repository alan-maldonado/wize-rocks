import Vue from 'vue'
import Router from 'vue-router'

import { requireAuth } from '../services/auth'

import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      meta: {
        requireAuth: true
      },
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach(requireAuth)

export default router
