<script setup>
import Loader from './components/others/Loader.vue'
import SidebarApp from "./components/Sidebar.vue";
</script>

<template>
  <div
      :class="{ 'relative pt-16 lg:p-0 lg:flex lg:flex-row gap-y-4 lg:gap-x-4 lg:h-screen' :  $route.name !== 'login' && $route.name !== 'registration'}"
  >
    <sidebar-app v-if="$route.name !== 'login'"></sidebar-app>
    <router-view></router-view>
  </div>
  <loader></loader>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
</style>
