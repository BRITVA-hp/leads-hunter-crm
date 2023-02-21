<template>
  <div class="w-full p-3">
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
        <tr>
          <td class="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-x-2">
              <div class="project__initials bg-blue-900 w-9 h-9 rounded-full text-white flex items-center justify-center">
                {{ initials('hello world') }}
              </div>
              <span>'hello world'</span>
            </div>
          </td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Indianapolis</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Indianapolis</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Indianapolis</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Indianapolis</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">

            <div class="relative" data-te-dropdown-ref>

              <div id="projectActionsButton" class="cursor-pointer text-center" data-bs-toggle="dropdown" aria-expanded="false" data-te-dropdown-toggle-ref>
                <span class="material-icons-outlined">
                more_vert
                </span>
              </div>

              <ul class="[&[data-te-dropdown-show]]:block absolute hidden border border-slate-300 bg-slate-200 left-0 min-w-full rounded text-slate-800 font-semibold overflow-hidden" aria-labelledby="projectActionsButton" data-te-dropdown-menu-ref>
                <li class="border-b border-slate-300 cursor-pointer p-2 hover:bg-slate-300 duration-300">Журнал</li>
                <li class="cursor-pointer p-2 hover:bg-slate-300 duration-300">Удалить</li>
              </ul>

            </div>

          </td>
        </tr>
        </tbody>
      </table>
    </div>

      <button
          class="group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3]"
          type="button"
          data-te-collapse-init
          data-te-collapse-collapsed
          data-te-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree">
        Accordion Item #3
        <span
            class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div
          id="collapseThree"
          class="!visible hidden"
          data-te-collapse-item>
        <div class="py-4 px-5">
          <strong>This is the third item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control
          the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </div>
      </div>

  </div>
</template>

<script>
import productsService from "../../services/getProjects";

export default {
  name: "Projects",
  methods: {
    initials(str) {
      const arr = str ? str.split(' ') : []
      const initials = (arr[0] ? arr[0][0] : '')+(arr[1] ? arr[1][0] : '')
      return initials.toUpperCase()
    }
  },
  async created() {
    // await productsService.getProjects()
    //     .then(response => {
    //       console.log(response)
    //     })
  }
}
</script>

<style scoped>

</style>