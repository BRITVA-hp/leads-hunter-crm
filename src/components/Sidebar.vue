<template>
  <div
    :class="{ 'sidebar--active' : sidebarActive}"
    class="sidebar bg-gradient-to-b from-zinc-700 to-zinc-900 text-white">

    <div class="sidebar--active__item flex justify-between items-center p-2.5 border-b border-gray-500">
      <router-link class="sidebar--active__hide" to="/"><img class="w-20" src="../assets/img/logo.svg" alt="leads hunter"></router-link>
      <div
        @click.prevent="sidebarActive = !sidebarActive"
        class="sidebar__burger">
        <div class="sidebar__burger__elem sidebar__burger__elem--1"></div>
        <div class="sidebar__burger__elem sidebar__burger__elem--2"></div>
        <div class="sidebar__burger__elem sidebar__burger__elem--3"></div>
      </div>
    </div>

    <div
      :class="{'hover:bg-zinc-600 duration-300' : sidebarActive}"
      class="sidebar--active__item accordion" id="sidenavUser">

      <router-link to="/" class="sidebar--active__show w-10 h-10 overflow-hidden flex justify-center items-center hover:bg-zinc-600 duration-300">
        <img src="../assets/img/avatar-default.png" alt="avatar">
      </router-link>

      <button class="
        accordion-button
        collapsed
        sidebar__user__button
        sidebar--active__hide
        w-full
        flex
        items-center
        gap-x-2.5
        p-2.5
        border-b
        border-gray-500
        hover:bg-zinc-600
        duration-300"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidenavUserMenu"
        aria-expanded="false"
        aria-controls="sidenavUserMenu">

        <div class="w-10 h-10 overflow-hidden flex justify-center items-center">
          <img src="../assets/img/avatar-default.png" alt="avatar">
        </div>

        <p class="text-ellipsis overflow-hidden whitespace-nowrap">Тестовый пользователь</p>
      </button>
      <div id="sidenavUserMenu" class="sidebar--active__hide accordion-collapse collapse max-h-80 overflow-auto border-b border-gray-500"
           data-bs-parent="#sidenavUser">
        <ul class="p-2.5 text-gray-100">
          <li>
              <router-link class="flex items-center gap-1.5 w-full text-sm leading-none hover:bg-zinc-600 p-1.5 duration-300 rounded" to="/">
              <span class="material-icons-outlined">
              account_circle
              </span>
              <span>Профиль</span>
            </router-link>
          </li>
          <li>
            <router-link class="flex items-center gap-1.5 w-full text-sm leading-none hover:bg-zinc-600 p-1.5 duration-300 rounded" to="/">
              <span class="material-icons-outlined">
              manage_accounts
              </span>
              <span>Настройки аккаунта</span>
            </router-link>
          </li>
          <li>
            <router-link class="flex items-center gap-1.5 w-full text-sm leading-none hover:bg-zinc-600 p-1.5 duration-300 rounded" to="/">
              <span class="material-icons-outlined">
              logout
              </span>
              <span>Выйти</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div
      :class="{ 'hover:bg-zinc-600 duration-300' : sidebarActive }"
      class="sidebar--active__item dropdown relative">

      <button
        class="
        sidebar--active__show
        dropdown-toggle
        w-full
        flex
        items-center
        gap-x-2.5
        border-gray-500 hover:bg-zinc-600
        duration-300
        justify-center"
        type="button"
        id="sidenavProjectsButton"
        data-bs-toggle="dropdown"
        aria-expanded="false">

        <span class="material-icons-outlined">
        format_list_bulleted
        </span>
      </button>

      <button
        class="
        dropdown-toggle
        w-full
        flex
        items-center
        gap-x-2.5
        border-gray-500 hover:bg-zinc-600
        duration-300
        p-2.5
        pr-8
        border-b
        sidebar--active__hide"
        type="button"
        id="sidenavProjectsButton"
        data-bs-toggle="dropdown"
        aria-expanded="false">

        <span class="material-icons-outlined">
        format_list_bulleted
        </span>

        <p class="text-ellipsis overflow-hidden whitespace-nowrap sidebar--active__hide">Тестовый проект dsfg dfs</p>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2 absolute right-4 bottom-1/2 translate-y-2/4 sidebar--active__hide"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul id="sidenavProjectsList"
          class="
          dropdown-menu
          bg-zinc-500
          shadow-xl
          max-w-xs
          absolute
          hidden
          max-h-80
          overflow-auto
          border
          border-gray-500
          p-2
          text-gray-100"
           aria-labelledby="sidenavProjectsButton">
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            1. Ещё проект
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            2. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            3. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            4. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            5. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            6. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            7. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            8. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            9. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            10. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            11. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            12. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            13. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            14. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
        <li class="dropdown-item">
          <router-link class="block w-full text-sm leading-none hover:bg-zinc-700 p-1.5 duration-300 rounded text-ellipsis overflow-hidden whitespace-nowrap" to="/">
            15. И ещё проект вапрапр вапвап вапва вапвап вапеукеукеуке упвап
          </router-link>
        </li>
      </ul>
    </div>

    <div class="hover:bg-zinc-600 duration-300">
      <router-link to="/"
        class="
        sidebar--active__hide
        p-2.5
        border-b
        border-gray-500
        w-full
        flex
        items-center
        gap-x-2.5
        border-gray-500">
        <span class="material-icons-outlined">list_alt</span>
        <span>ЕЖЛ</span>
      </router-link>
      <router-link to="/"
        class="
        sidebar--active__show
        p-2.5
        border-gray-500
        w-full
        flex
        items-center
        justify-center">
        <span class="material-icons-outlined">list_alt</span>
      </router-link>
    </div>

    <div class="hover:bg-zinc-600 duration-300">
      <router-link to="/"
                   class="
        sidebar--active__hide
        p-2.5
        border-b
        border-gray-500
        w-full
        flex
        items-center
        gap-x-2.5
        border-gray-500">
        <span class="material-icons-outlined">sort</span>
        <span>Лог</span>
      </router-link>
      <router-link to="/"
                   class="
        sidebar--active__show
        p-2.5
        border-gray-500
        w-full
        flex
        items-center
        justify-center">
        <span class="material-icons-outlined">sort</span>
      </router-link>
    </div>

    <div
      :class="{'hover:bg-zinc-600 duration-300' : sidebarActive}"
      class="sidebar--active__item accordion" id="sidenavProjectSettings">

      <router-link to="/" class="sidebar--active__show w-10 h-10 overflow-hidden flex justify-center items-center hover:bg-zinc-600 duration-300">
        <img src="../assets/img/avatar-default.png" alt="avatar">
      </router-link>

      <button class="
        accordion-button
        collapsed
        sidebar__user__button
        sidebar--active__hide
        w-full
        flex
        items-center
        gap-x-2.5
        p-2.5
        border-b
        border-gray-500
        hover:bg-zinc-600
        duration-300"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidenavProjectSettingsMenu"
              aria-expanded="false"
              aria-controls="sidenavProjectSettingsMenu">

        <span class="material-icons-outlined">
        settings
        </span>

        <p>Настройки</p>
      </button>
      <div id="sidenavProjectSettingsMenu" class="sidebar--active__hide accordion-collapse collapse max-h-80 overflow-auto border-b border-gray-500"
           data-bs-parent="#sidenavProjectSettings">
        <ul class="p-2.5 text-gray-100">
          <li>
            <router-link class="flex items-center gap-1.5 w-full text-sm leading-none hover:bg-zinc-600 p-1.5 duration-300 rounded" to="/">
              Основное
            </router-link>
          </li>
          <li>
            <router-link class="flex items-center gap-1.5 w-full text-sm leading-none hover:bg-zinc-600 p-1.5 duration-300 rounded" to="/">
              Синхронизации
            </router-link>
          </li>
          <li>
            <router-link class="flex items-center gap-1.5 w-full text-sm leading-none hover:bg-zinc-600 p-1.5 duration-300 rounded" to="/">
              Интеграция
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sidebarActive: false
    }
  }
}
</script>

<style scoped>

</style>