<template>
  <div class="relative pt-16 lg:p-0 lg:flex lg:flex-row gap-y-4 lg:gap-x-8 lg:min-h-screen">

    <sidebar-app></sidebar-app>

    <projects-app></projects-app>
  </div>
</template>

<script>
import SidebarApp from "../components/Sidebar.vue";
import ProjectsApp from "../components/projects/Projects.vue";

export default {
  name: "Home",
  components: {
    SidebarApp,
    ProjectsApp
  }
}
</script>

<style scoped>

</style>