<script setup>
import Loader from './components/others/Loader.vue'
</script>

<template>
  <router-view></router-view>
  <loader></loader>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
</style>
