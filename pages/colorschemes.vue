<template>
  <svg :viewBox="`0 0 ${width} ${height}`">
    <rect
      v-for="(color, index) in colors"
      :width="`${(width / colors.length) * 1.01}`"
      :height="`${height}`"
      :x="(index * width) / colors.length"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/c'

export default Vue.extend({
  data() {
    return {
      width: 0,
      height: 0,
      seed: Math.random(),
    }
  },
  computed: {
    colors(): string[] {
      return c.getColors(this.seed)
    },
  },
  mounted(): void {
    this.width = document.body.offsetWidth
    this.height = document.body.offsetHeight
    document.addEventListener('click', () => {
      this.seed = Math.random()
    })
  },
  methods: {},
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
