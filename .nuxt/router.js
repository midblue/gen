import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4bdfe018 = () => interopDefault(import('../pages/1.vue' /* webpackChunkName: "pages/1" */))
const _4bc3b116 = () => interopDefault(import('../pages/2.vue' /* webpackChunkName: "pages/2" */))
const _c1fcad90 = () => interopDefault(import('../pages/colorschemes.vue' /* webpackChunkName: "pages/colorschemes" */))
const _70719ad6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/1",
    component: _4bdfe018,
    name: "1"
  }, {
    path: "/2",
    component: _4bc3b116,
    name: "2"
  }, {
    path: "/colorschemes",
    component: _c1fcad90,
    name: "colorschemes"
  }, {
    path: "/",
    component: _70719ad6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
