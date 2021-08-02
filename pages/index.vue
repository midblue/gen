<template>
  <svg :viewBox="`0 0 ${width} ${height}`">
    <rect
      :width="`${width}`"
      :height="`${height}`"
      :fill="baseColor"
    />
    <defs>
      <RectDef
        v-for="index in baseElements"
        :key="'bel' + index"
        :id="'c' + index"
        :color1="randomFromArray(usableColors)"
        :color2="randomFromArray(usableColors)"
      />
    </defs>
    <g v-for="index in items" :key="index + 'el'">
      <Zone
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
        :budget="(width / columns) * 20 * Math.random()"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

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
      return Math.round(this.seed * 100) + 2
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
      let colors: number[][] = []

      const startingPoint =
          ((360 * Math.random()) / this.seed) % 360,
        count = Math.ceil(Math.random() * 7 + 2),
        diff = 360 / (Math.random() * 10 + count)
      for (let i = 0; i < count; i++) {
        let hue = (i * diff + startingPoint) % 360
        colors.push([
          hue,
          Math.round(randomBetween(30, 100)),
          Math.round(randomBetween(4, 100)),
          1,
        ])
      }
      colors.push([0, 0, 100, 0])
      colors = colors.sort((a, b) => a[2] - b[2])

      const colorStrings = colors.map(
        (c) => `hsla(${c[0]}, ${c[1]}%, ${c[2]}%, ${c[3]})`,
      )

      return colorStrings
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
