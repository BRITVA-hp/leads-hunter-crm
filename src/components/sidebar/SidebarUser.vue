<script setup>

</script>

<template>

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
</template>

<style scoped>

</style>