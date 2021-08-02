import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  RectDef: () => import('../../components/RectDef.vue' /* webpackChunkName: "components/rect-def" */).then(c => wrapFunctional(c.default || c)),
  Zone: () => import('../../components/Zone.vue' /* webpackChunkName: "components/zone" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
