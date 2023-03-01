<script setup>
import SidebarApp from "../components/sidebar/Sidebar.vue";
import JournalList from "../components/journal/JournalList.vue";
</script>

<template>
  <div class="relative pt-16 lg:p-0 lg:flex lg:flex-row gap-y-4 lg:gap-x-4 lg:h-screen">
    <sidebar-app :projects="projects"></sidebar-app>
    <journal-list :leads="leads" :meta="meta"></journal-list>
  </div>
</template>

<script>
import API from "@/services/auth/api";

export default {
  name: "Journal",
  data() {
    return {
      projects: null,
      leads: null,
      meta: null
    }
  },
  async created() {
    const projectID = this.$route.params.projectID
    if (projectID.match(/\D/)) {
      this.$router.push('notFound')
      return
    }
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
    await API.get(`v2/project/${projectID}/journal`)
        .then(response => {
          this.leads = response.data.data.leads.data
          this.meta = response.data.data.leads.meta
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    this.$store.commit('loader/LOADER_FALSE')
  }
}
</script>

<style scoped>

</style>