<script setup>
import ProjectsApp from "../components/projects/Projects.vue";
import SidebarApp from "../components/sidebar/Sidebar.vue";
</script>

<template>
  <div class="relative pt-16 lg:p-0 lg:flex lg:flex-row gap-y-4 lg:gap-x-4 lg:h-screen">
    <sidebar-app></sidebar-app>
    <projects-app></projects-app>
  </div>
</template>

<script>

export default {
  name: "Home",
  async mounted() {
    this.$store.commit('loader/LOADER_TRUE')
    await this.$store.dispatch('projects/getProjects')
    this.$store.commit('loader/LOADER_FALSE')
  }
}
</script>

<style scoped>

</style>