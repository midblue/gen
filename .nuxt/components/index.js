import { wrapFunctional } from './utils'

export { default as TwoRectDef } from '../../components/Two/RectDef.vue'
export { default as TwoZone } from '../../components/Two/Zone.vue'

export const LazyTwoRectDef = import('../../components/Two/RectDef.vue' /* webpackChunkName: "components/two-rect-def" */).then(c => wrapFunctional(c.default || c))
export const LazyTwoZone = import('../../components/Two/Zone.vue' /* webpackChunkName: "components/two-zone" */).then(c => wrapFunctional(c.default || c))
