<template>
  <div id="sidenavProjectsMenu" class="sidebar__projects__menu hidden bg-zinc-600 shadow-xl min-w-full text-gray-100 z-10">
    <div v-if="filteredProjects">
      <div class="p-1.5">
        <label for="input-group-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input
              v-model="filter"
              @input="searchProject"
              type="text" id="input-group-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Поиск проектов">
        </div>
      </div>

      <div class="overflow-auto max-h-80 sidebar__projects__list">
        <ul>
          <li
              v-for="(project, projectIndex) in projectsActive"
              class="dropdown-item">
            <router-link class="flex items-center gap-x-1 w-full text-sm leading-none hover:bg-zinc-700 p-1.5 py-2 duration-300 text-ellipsis overflow-hidden whitespace-nowrap" to="/">
              <span class="w-1.5 h-1.5 rounded-full inline-block bg-green-500 sidebar__projects__li__marker"></span>
              <span class="text-ellipsis overflow-hidden whitespace-nowrap">
                {{projectIndex+1}}.&nbsp; {{project.name}} ывафыва ыфваывфа ываы
              </span>
            </router-link>
          </li>
        </ul>

        <div class="w-full bg-zinc-700 dark:bg-slate-700 py-2 px-1.5">
          <div class="block min-h-[1.5rem] pl-[1.5rem]">
            <input
                v-model="showInactive"
                class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                type="checkbox"
                id="sidenavShowInactive"
            />
            <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="sidenavShowInactive">
              Показать неактивные
            </label>
          </div>
        </div>

        <ul v-if="showInactive" class="opacity-50">
          <li
              v-for="(project, projectIndex) in projectsInactive"
              class="dropdown-item">
            <router-link class="flex items-center gap-x-1 w-full text-sm leading-none hover:bg-zinc-700 p-1.5 py-2 duration-300" to="/">
              <span class="w-1.5 h-1.5 rounded-full inline-block bg-red-500 sidebar__projects__li__marker"></span>
              <span class="text-ellipsis overflow-hidden whitespace-nowrap">
                {{projectIndex+1}}.&nbsp; {{project.name}} ывафыва ыфваывфа ываы
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="p-1.5 text-red-500 whitespace-nowrap" v-else>Нет ни одного проета</div>

  </div>
</template>

<script>
export default {
  name: "SidebarProjects",
  props: {
    projects: {
      required: true,
    }
  },
  data() {
    return {
      filter: '',
      filteredProjects: null,
      showInactive: true
    }
  },
  watch: {
    projects(projects) {
      if (projects) this.filteredProjects = this.projects
    }
  },
  computed: {
    projectsActive() {
      const projects = this.filteredProjects.filter(el => {
        return el.settings.enabled
      })
      return projects
    },
    projectsInactive() {
      const projects = this.filteredProjects.filter(el => {
        return !el.settings.enabled
      })
      return projects
    },
  },
  methods: {
    searchProject() {
      this.filteredProjects = this.projects.filter(project => project.name.toLowerCase().includes(this.filter.toLowerCase()))
    }
  }
}
</script>

<style scoped>

</style>