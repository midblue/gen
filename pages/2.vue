<template>
  <svg :viewBox="`0 0 ${width} ${height}`">
    <rect
      :width="`${width}`"
      :height="`${height}`"
      :fill="baseColor"
    />
    <defs>
      <TwoRectDef
        v-for="index in baseElements"
        :key="'bel' + index"
        :id="'c' + index"
        :color1="randomFromArray(usableColors)"
        :color2="randomFromArray(usableColors)"
      />
    </defs>
    <g v-for="index in items" :key="index + 'el'">
      <TwoZone
        :elid="'#c' + randomBetween(1, baseElements)"
        :x="
          width * (randomBetween(0, columns - 1) / columns)
        "
        :y="
          width * (randomBetween(0, columns - 1) / columns)
        "
        :size="
          (width / (columns * scales[scales.length - 1])) *
            randomFromArray(scales)
        "
        :budget="(width / columns) * 30 * Math.random()"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/c'

export default Vue.extend({
  data() {
    return {
      counter: 0,
      width: 0,
      height: 0,
      maxElWidth: 0,
      seed: Math.random(),
      scales: [1, 0.5, 0.25, 0.125],
    }
  },
  computed: {
    columns(): number {
      return Math.round(this.seed * 100) + 1
    },
    baseElements(): number {
      return Math.ceil(
        this.colors.length * 2 * Math.random(),
      )
    },
    items(): number {
      return (
        Math.round(
          (this.seed * 50) %
            Math.round(Math.random() * 2000),
        ) + 30
      )
    },
    colors(): string[] {
      return c.getColors(this.seed)
    },
    baseColor(): string {
      return this.colors[0]
    },
    usableColors(): string[] {
      return this.colors //.slice(1)
    },
  },
  mounted(): void {
    this.width = document.body.offsetWidth
    this.height = document.body.offsetHeight
    this.maxElWidth = this.width / 40
    document.addEventListener('click', () => {
      this.seed = Math.random()
    })
  },
  methods: {
    randomFromArray(array: any[]) {
      return array[Math.floor(Math.random() * array.length)]
    },
    randomBetween,
  },
})

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>

<style lang="scss" scoped>
.svg {
  width: 100vw;
  height: 100vh;
}
</style>
