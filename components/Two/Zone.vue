<template>
  <g>
    <g
      v-for="e in elementCount"
      :key="Math.random()"
      v-if="Math.random() > 0.05"
    >
      <use
        :xlink:href="elid"
        class="zoneel"
        :x="x + size * ((e - 1) % zoneWidth)"
        :y="y + size * Math.floor((e - 1) / zoneWidth)"
        :style="{
          'font-size': sizeToUse + 'px',
        }"
      />
    </g>
  </g>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    elid: { type: String },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    size: { type: Number, required: true },
    budget: { type: Number, required: true },
  },
  data() {
    return {}
  },
  computed: {
    sizeToUse(): number {
      return this.size * 1.001
    },
    elementCount(): number {
      return Math.ceil(this.budget / this.size)
    },
    zoneWidth(): number {
      return Math.ceil(this.elementCount * Math.random())
    },
  },
  mounted(): void {},
  methods: {},
})
</script>

<style lang="scss" scoped>
.zoneel {
  position: absolute;
  transform-origin: top left;
}
</style>
