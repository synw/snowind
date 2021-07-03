import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/install',
    name: 'Install',
    component: () => import('../views/InstallView.vue')
  },
  {
    path: '/colors',
    name: 'Colors',
    component: () => import('../views/ColorsView.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/ButtonView.vue')
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: () => import('../views/CollapseView.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/InputView.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('../views/SwitchView.vue')
  },/*
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: () => import('../views/SidebarView.vue')
  },*/
  {
    path: '/examples/form',
    name: 'Form example',
    component: () => import('../views/FormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document?.getElementById('app')?.scrollIntoView();
  }
})

export default router
