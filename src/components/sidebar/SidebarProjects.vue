<template>
  <ul id="sidenavProjectsList"
      class="
          [&[data-te-dropdown-show]]:block
          bg-zinc-500
          shadow-xl
          min-w-full
          lg:max-w-xs
          absolute
          hidden
          max-h-80
          overflow-auto
          text-gray-100
          z-10"
      aria-labelledby="sidenavProjectsButton" data-te-dropdown-menu-ref>
    <li
      v-for="(project, projectIndex) in stateProjects"
      class="dropdown-item">
      <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 text-ellipsis overflow-hidden whitespace-nowrap" to="/">
        {{projectIndex+1}}. {{project.name}}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SidebarProjects",
  computed: {
    stateProjects() {
      return this.$store.getters['projects/stateProjects']
    }
  },
}
</script>

<style scoped>

</style>