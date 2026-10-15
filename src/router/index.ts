import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const splitPanes = window.matchMedia('(min-width: 1101px)').matches
    if (!splitPanes && savedPosition) return savedPosition
    if (to.path === from.path && to.hash === from.hash && to.fullPath !== from.fullPath) return false
    if (splitPanes) {
      if (to.hash) {
        const target = document.getElementById(to.hash.slice(1))
        const pane = target?.closest<HTMLElement>('.main-content, .sidebar')
        if (target && pane) {
          const top = target === pane ? 0 : pane.scrollTop + target.getBoundingClientRect().top - pane.getBoundingClientRect().top - 12
          pane.scrollTo({ top, behavior: 'smooth' })
          return false
        }
      } else {
        document.querySelectorAll<HTMLElement>('.main-content, .sidebar').forEach(pane => pane.scrollTo({ top: 0 }))
        return false
      }
    }
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 80 }
    return { top: 0 }
  },
})

export default router
