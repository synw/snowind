import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "./views/HomeView.vue"

const baseTitle = "Snowind"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/switch",
    component: () => import("./views/SwitchView.vue"),
    meta: {
      title: "Switch"
    }
  },
  {
    path: "/collapse",
    component: () => import("./views/CollapseView.vue"),
    meta: {
      title: "Collapse"
    }
  },
  {
    path: "/settings",
    component: () => import("./views/SettingsView.vue"),
    meta: {
      title: "Settings"
    }
  },
  {
    path: "/page",
    component: () => import("./views/PageView.vue"),
    meta: {
      title: "Page"
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.afterEach((to, from) => { // eslint-disable-line
  document.title = `${baseTitle} - ${to.meta?.title}`
});

export default router
