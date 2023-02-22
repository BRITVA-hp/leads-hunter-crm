<template>
  <div class="w-full p-3 overflow-auto">

    <div v-if="projects">
      <div class="mb-2">
        <input type="text" placeholder="Поиск пректов" class="form-input border-slate-300 text-sm rounded">
      </div>

      <div class="overflow-x-auto pb-16">
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

          <tr v-for="(project, index) in projects">
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

  </div>
</template>

<script>
import API from "../../services/auth/api";

export default {
  name: "Projects",
  data() {
    return {
      projects: null
    }
  },
  methods: {
    initials(str) {
      const arr = str ? str.split(' ') : []
      const initials = (arr[0] ? arr[0][0] : '')+(arr[1] ? arr[1][0] : '')
      return initials.toUpperCase()
    }
  },
  async mounted() {
    this.$store.commit('loader/LOADER_TRUE')

    await API.get('v2/dashboard').then(
        response => {
          this.projects = response.data.data
          console.log(response)
          this.$store.commit('loader/LOADER_FALSE')
        }
    )
  }
}
</script>

<style scoped>

</style>