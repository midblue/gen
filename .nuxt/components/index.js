import { wrapFunctional } from './utils'

export { default as RectDef } from '../../components/RectDef.vue'
export { default as Zone } from '../../components/Zone.vue'

export const LazyRectDef = import('../../components/RectDef.vue' /* webpackChunkName: "components/rect-def" */).then(c => wrapFunctional(c.default || c))
export const LazyZone = import('../../components/Zone.vue' /* webpackChunkName: "components/zone" */).then(c => wrapFunctional(c.default || c))
