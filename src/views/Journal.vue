<script setup>
import SidebarApp from "../components/sidebar/Sidebar.vue";
</script>

<template>
  <div class="relative pt-16 lg:p-0 lg:flex lg:flex-row gap-y-4 lg:gap-x-4 lg:h-screen">
    <sidebar-app :projects="projects"></sidebar-app>
  </div>
</template>

<script>
import API from "@/services/auth/api";

export default {
  name: "Journal",
  data() {
    return {
      projects: null
    }
  },
  async created() {
    this.$store.commit('loader/LOADER_TRUE')
    await API.get('v2/dashboard')
      .then(
        response => {
          this.projects = response.data.data
          console.log(response)
        }
      )
      .catch(error => {
        console.log(error)
      })
    this.$store.commit('loader/LOADER_FALSE')
  }
}
</script>

<style scoped>

</style>