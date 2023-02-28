<script setup>
import SidebarProjects from "./SidebarProjects.vue";
</script>

<template>
  <div
    :class="{ 'sidebar--active' : sidebarActive}"
    class="sidebar bg-gradient-to-b from-zinc-700 to-zinc-900 text-white absolute left-0 top-0 lg:static">

    <div class="sidebar__item--first sidebar--active__item flex justify-between items-center p-2.5 lg:border-b lg:border-gray-500">
      <router-link class="sidebar--active__hide" to="/"><img class="w-20" src="../../assets/img/logo.svg" alt="leads hunter"></router-link>
      <div
        @click.prevent="sidebar"
        class="sidebar__burger">
        <div class="sidebar__burger__elem sidebar__burger__elem--1"></div>
        <div class="sidebar__burger__elem sidebar__burger__elem--2"></div>
        <div class="sidebar__burger__elem sidebar__burger__elem--3"></div>
      </div>
    </div>

    <div
      :class="{'hover:bg-zinc-600 duration-300' : sidebarActive}"
      class="sidebar--active__item" id="sidenavUser">

      <div class="sidebar--active__show sidebar__hover cursor-pointer relative w-12 h-12 flex justify-center items-center hover:bg-zinc-600 duration-300 p-2">
        <img class="block" src="../../assets/img/avatar-default.png" alt="avatar">

        <div class="sidebar__hover-elem absolute left-full top-0 bg-zinc-700">
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

      <button class="
        group
        relative
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
        data-te-collapse-collapsed
        data-te-collapse-init
        data-te-target="#sidenavUserMenu"
        aria-expanded="false"
        aria-controls="sidenavUserMenu">

        <div class="w-10 h-10 overflow-hidden flex justify-center items-center">
          <img src="../../assets/img/avatar-default.png" alt="avatar">
        </div>

        <p class="text-ellipsis overflow-hidden whitespace-nowrap">Тестовый пользователь</p>

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

      <div id="sidenavUserMenu" data-te-collapse-item class="!visible hidden sidebar--active__hide data-te-collapse-item max-h-80 border-b border-gray-500 bg-zinc-700"
           data-bs-parent="#sidenavUser" aria-labelledby="sidenavUserHeader" data-te-parent="#sidenavUser">
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

<!--    projects-->
    <div
      :class="{ 'hover:bg-zinc-600 duration-300' : sidebarActive }"
      class="sidebar--active__item relative" data-te-dropdown-ref>

      <button
        class="
        sidebar--active__show
        w-full
        flex
        items-center
        gap-x-2.5
        border-gray-500 hover:bg-zinc-600
        duration-300
        justify-center
        p-2"
        type="button"
        id="sidenavProjectsButton"
        data-dropdown-toggle="sidenavProjectsMenu" data-dropdown-placement="bottom">

        <span class="material-icons-outlined">
        format_list_bulleted
        </span>
      </button>

      <button
        class="
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
        data-dropdown-toggle="sidenavProjectsMenu" data-dropdown-placement="bottom">

        <span class="material-icons-outlined">
        format_list_bulleted
        </span>

        <p class="text-ellipsis overflow-hidden whitespace-nowrap sidebar--active__hide">{{ $route.name === 'home' ? 'Все проекты' : '' }}</p>
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
      <sidebar-projects :projects="projects"></sidebar-projects>
    </div>

    <div v-if="$route.name !== 'home'" class="hover:bg-zinc-600 duration-300">
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
        sidebar__hover
        relative
        p-2
        border-gray-500
        w-full
        flex
        items-center
        justify-center
        ">
        <span class="material-icons-outlined">list_alt</span>

        <div class="sidebar__hover-elem absolute left-full top-0 bg-zinc-700 h-full hover:bg-zinc-600">
          <router-link to="#" class="h-full flex items-center px-4">ЕЖЛ</router-link>
        </div>
      </router-link>
    </div>

    <div v-if="$route.name !== 'home'" class="hover:bg-zinc-600 duration-300">
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
        sidebar__hover
        relative
        p-2.5
        border-gray-500
        w-full
        flex
        items-center
        justify-center">
        <span class="material-icons-outlined">sort</span>

        <div class="sidebar__hover-elem absolute left-full top-0 bg-zinc-700 h-full hover:bg-zinc-600">
          <router-link to="#" class="h-full flex items-center px-4">Лог</router-link>
        </div>
      </router-link>
    </div>

    <div v-if="$route.name !== 'home'"
      :class="{'hover:bg-zinc-600 duration-300' : sidebarActive}"
      class="sidebar--active__item accordion" id="sidenavProjectSettings">
      <div class="sidebar--active__show sidebar__hover relative cursor-pointer p-2.5 flex items-center justify-center">
        <span class="material-icons-outlined">
        settings
        </span>

        <div class="sidebar__hover-elem absolute left-full top-0 bg-zinc-700">
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

      <button class="
        sidebar__user__button
        sidebar--active__hide
        group
        relative
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
        data-te-collapse-init
        data-te-collapse-collapsed
        data-te-target="#sidenavProjectSettingsMenu"
        aria-expanded="false"
        aria-controls="sidenavProjectSettingsMenu">

        <span class="material-icons-outlined">
        settings
        </span>

        <p>Настройки</p>

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
      <div id="sidenavProjectSettingsMenu" class="sidebar--active__hide max-h-80 overflow-auto border-b border-gray-500 bg-zinc-700 !visible hidden"
           data-bs-parent="#sidenavProjectSettings" data-te-collapse-item>
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
  props: {
    projects: {
      required: true
    }
  },
  data() {
    return {
      sidebarActive: false
    }
  },
  methods: {
    sidebar() {
      this.sidebarActive = !this.sidebarActive
      this.sidebarActive ? document.body.classList.add('body__sidebar-active') : document.body.classList.remove('body__sidebar-active')
    }
  }
}
</script>

<style scoped>

</style>