<template>
  <div>
    <nuxt-link to="/colorschemes"
      >color scheme generator</nuxt-link
    >
    <nuxt-link to="/1"
      >perlin noise squares (slow)</nuxt-link
    >
    <nuxt-link to="/2">svg element repetition</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
  computed: {},
  mounted(): void {},
  methods: {},
})
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
a {
  background: rgba(0, 0, 0, 0.1);
  padding: 1em 2em;
  margin: 0.2em 0;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
