<template>
  <div class="mb-2">
    <input
      @input="searchProject"
      v-model="filter"
      type="text" placeholder="Поиск пректов" class="form-input border-slate-300 text-sm rounded">
  </div>
</template>

<script>
export default {
  name: "ProjectsSearch",
  data() {
    return {
      filter: ''
    }
  },
  methods: {
    searchProject() {
      this.$store.commit('projects/SET_SEARCH_PROJECTS', this.filter)
      this.$store.dispatch('projects/filterProjects')
    }
  }
}
</script>

<style scoped>

</style>