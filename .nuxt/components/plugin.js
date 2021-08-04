import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  TwoRectDef: () => import('../../components/Two/RectDef.vue' /* webpackChunkName: "components/two-rect-def" */).then(c => wrapFunctional(c.default || c)),
  TwoZone: () => import('../../components/Two/Zone.vue' /* webpackChunkName: "components/two-zone" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
