<script setup>
import ProjectsSearch from "./ProjectsSearch.vue";
</script>

<template>
  <div v-if="stateFilteredProjects" class="w-full p-3 overflow-auto">

    <projects-search></projects-search>

    <div class="overflow-x-auto">
      <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Имя</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Статус</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Лидов всего</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Лидов сегодня</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Дата создания</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Действия</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="(project, index) in projectsActive" :key="project.id">
          <td class="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-x-2">
              <div class="project__initials bg-blue-900 w-9 h-9 rounded-full text-white flex items-center justify-center">
                {{ initials(project.name) }}
              </div>
              <span>{{project.name}}</span>
            </div>
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-x-1">
              <div
                :class="project.settings.enabled ? 'bg-green-600' : 'bg-red-600'"
                class="w-1.5 h-1.5 rounded-full"></div>
              <span>{{project.settings.enabled ? 'Активен' : 'Приостановлен'}}</span>
            </div>
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{project.total_leads}}</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{project.leads_today}}</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">...</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">

            <div class="relative" data-te-dropdown-ref>

              <div id="projectActionsButton" class="cursor-pointer text-center" data-bs-toggle="dropdown" aria-expanded="false" data-te-dropdown-toggle-ref>
            <span class="material-icons-outlined">
            more_vert
            </span>
              </div>

              <ul class="[&[data-te-dropdown-show]]:block absolute hidden border border-slate-300 bg-slate-200 left-0 min-w-full rounded text-slate-800 font-semibold overflow-hidden z-10" aria-labelledby="projectActionsButton" data-te-dropdown-menu-ref>
                <li class="border-b border-slate-300 cursor-pointer p-2 hover:bg-slate-300 duration-300">Журнал</li>
                <li class="cursor-pointer p-2 hover:bg-slate-300 duration-300">Удалить</li>
              </ul>

            </div>

          </td>
        </tr>

        </tbody>
      </table>

    </div>

    <div class="w-full bg-slate-50 dark:bg-slate-700 p-4">
      <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
          v-model="showInactive"
          class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
          type="checkbox"
          value=""
          id="checkboxChecked"
          checked />
        <label
          class="inline-block pl-[0.15rem] hover:cursor-pointer"
          for="checkboxChecked">
          Показать неактивные
        </label>
      </div>
    </div>

    <div class="overflow-x-auto pb-16">
      <table v-if="showInactive" class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Имя</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Статус</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Лидов всего</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Лидов сегодня</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Дата создания</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Действия</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="(project, index) in projectsInactive">
          <td class="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-x-2">
              <div class="project__initials bg-blue-900 w-9 h-9 rounded-full text-white flex items-center justify-center">
                {{ initials(project.name) }}
              </div>
              <span>{{project.name}}</span>
            </div>
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-x-1">
              <div
                :class="project.settings.enabled ? 'bg-green-600' : 'bg-red-600'"
                class="w-1.5 h-1.5 rounded-full"></div>
              <span>{{project.settings.enabled ? 'Активен' : 'Приостановлен'}}</span>
            </div>
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{project.total_leads}}</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{project.leads_today}}</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">...</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">

            <div class="relative" data-te-dropdown-ref>

              <div id="projectActionsButton" class="cursor-pointer text-center" data-bs-toggle="dropdown" aria-expanded="false" data-te-dropdown-toggle-ref>
            <span class="material-icons-outlined">
            more_vert
            </span>
              </div>

              <ul class="[&[data-te-dropdown-show]]:block absolute hidden border border-slate-300 bg-slate-200 left-0 min-w-full rounded text-slate-800 font-semibold overflow-hidden z-10" aria-labelledby="projectActionsButton" data-te-dropdown-menu-ref>
                <li class="border-b border-slate-300 cursor-pointer p-2 hover:bg-slate-300 duration-300">Журнал</li>
                <li class="cursor-pointer p-2 hover:bg-slate-300 duration-300">Удалить</li>
              </ul>

            </div>

          </td>
        </tr>

        </tbody>
      </table>
    </div>
  </div>

  <div v-else>
    <p class="text-center font-semibold ">Нет ни одного проекта</p>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      showInactive: true
    }
  },
  computed: {
    stateFilteredProjects() {
      return this.$store.getters['projects/stateFilteredProjects']
    },
    projectsActive() {
      const projects = this.stateFilteredProjects.filter(el => {
        return el.settings.enabled
      })
      return projects
    },
    projectsInactive() {
      const projects = this.stateFilteredProjects.filter(el => {
        return !el.settings.enabled
      })
      return projects
    },
  },
  methods: {
    initials(str) {
      const arr = str ? str.split(' ') : []
      const initials = (arr[0] ? arr[0][0] : '')+(arr[1] ? arr[1][0] : '')
      return initials.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>