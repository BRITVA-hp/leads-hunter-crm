<template>
  <div v-if="leads" class="w-full p-3 overflow-auto">

    <div class="overflow-x-auto">
      <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">#</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Дата</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Клиент</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Статус</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Лидов всего</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Лидов сегодня</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Дата создания</th>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Действия</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="(lead, index) in leads" :key="lead.id">
          <td class="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
            {{(index + 1) + (meta.per_page * (meta.current_page - 1))}}
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
            <span v-html="dateFormat(lead.created_at)"></span>
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
            <span>{{lead.name}}</span>
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">...</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">...</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">...</td>
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
  name: "JournalList",
  props: {
    leads: {
      required: true
    },
    meta: {
      required: true
    }
  },
  methods: {
    dateFormat(date) {
      const arrStr = date.split(' ')
      const dateFormat = arrStr[0] + '<br>' + arrStr[1]
      return dateFormat
    }
  }

}
</script>

<style scoped>

</style>