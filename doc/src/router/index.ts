import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "main" */ '../views/Home.vue')
  },
  {
    path: '/install',
    name: 'Install',
    component: () => import(/* webpackChunkName: "main" */ '../views/InstallView.vue')
  },
  {
    path: '/colors',
    name: 'Colors',
    component: () => import(/* webpackChunkName: "main" */ '../views/ColorsView.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "main" */ '../views/ButtonView.vue')
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: () => import(/* webpackChunkName: "main" */ '../views/CollapseView.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import(/* webpackChunkName: "main" */ '../views/InputView.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import(/* webpackChunkName: "main" */ '../views/SwitchView.vue')
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: () => import(/* webpackChunkName: "main" */ '../views/SidebarView.vue')
  },
  {
    path: '/examples/form',
    name: 'Form example',
    component: () => import(/* webpackChunkName: "main" */ '../views/FormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document?.getElementById('app')?.scrollIntoView();
  }
})

export default router
