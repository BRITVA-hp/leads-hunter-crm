<template>
  <router-view></router-view>
  <loader></loader>
</template>

<script>
import Loader from './components/others/Loader.vue'

export default {
  name: 'App',
  components: {
    Loader
  }
}
</script>

<style scoped>
</style>
