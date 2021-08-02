<template>
  <g>
    <!-- <clipPath :id="'cp' + id">
      <rect width="1em" height="1em" />
    </clipPath> -->
    <!-- box -->
    <template v-if="type === 0">
      <rect :fill="color1" width="1em" height="1em" />
    </template>

    <!-- box in box -->
    <template v-if="type === 1">
      <rect :fill="color1" width="1em" height="1em" />
      <rect
        x=".25em"
        y=".25em"
        width=".5em"
        height=".5em"
        :fill="color2"
      />
    </template>

    <!-- vert bar -->
    <template v-if="type === 2">
      <rect :fill="color1" width="1em" height="1em" />
      <rect width=".5em" height="1em" :fill="color2" />
    </template>

    <!-- horiz bar -->
    <template v-if="type === 3">
      <rect :fill="color1" width="1em" height="1em" />
      <rect width="1em" height=".5em" :fill="color2" />
    </template>

    <!-- dot -->
    <template v-if="type === 4">
      <circle cx=".5em" cy=".5em" r=".5em" :fill="color1" />
    </template>

    <!-- dot with bg -->
    <template v-if="type === 5">
      <rect :fill="color1" width="1em" height="1em" />
      <circle cx=".5em" cy=".5em" r=".3em" :fill="color2" />
    </template>

    <!-- diamond -->
    <template v-if="type === 6">
      <rect
        :fill="color1"
        width=".707em"
        height=".707em"
        :style="{
          transform: `rotate(45deg)`,
        }"
      />
    </template>

    <!-- 1/4th box in box -->
    <template v-if="type === 7">
      <rect :fill="color1" width="1em" height="1em" />
      <rect
        :x="(Math.random() > 0.5 ? 0 : 0.5) + 'em'"
        :y="(Math.random() > 0.5 ? 0 : 0.5) + 'em'"
        width=".5em"
        height=".5em"
        :fill="color2"
      />
    </template>

    <!-- diag zones
    <template v-if="type === 6">
      <rect fill="red" width="1em" height="1em" />
      <path d="M0,0 L0,100% L100%,0 Z" fill="white" />
    </template> -->
  </g>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color1: { type: String },
    color2: { type: String },
  },
  data() {
    return {
      id: Math.random(),
      type: Math.floor(Math.random() * 8),
    }
  },
  mounted(): void {},
  methods: {},
})
</script>

<style lang="scss" scoped></style>
