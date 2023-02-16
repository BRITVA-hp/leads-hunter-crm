<template>
  <div
    :class="{ 'sidebar--active' : sidebarMini}"
    class="sidebar bg-gradient-to-b from-zinc-700 to-zinc-900 text-white">

    <div class="sidebar--active__item flex justify-between items-center p-2.5 border-b border-gray-500">
      <router-link class="sidebar--active__hide" to="/"><img class="w-20" src="../assets/img/logo.svg" alt="leads hunter"></router-link>
      <div
        @click="sidebarMini = !sidebarMini"
        class="sidebar__burger">
        <div class="sidebar__burger__elem sidebar__burger__elem--1"></div>
        <div class="sidebar__burger__elem sidebar__burger__elem--2"></div>
        <div class="sidebar__burger__elem sidebar__burger__elem--3"></div>
      </div>
    </div>

    <div class="sidebar--active__item accordion" id="sidenavUser">

      <router-link to="/" class="sidebar--active__show w-10 h-10 overflow-hidden flex justify-center items-center">
        <img src="../assets/img/avatar-default.png" alt="avatar">
      </router-link>

      <button class="accordion-button collapsed sidebar__user__button sidebar--active__hide w-full flex justify-between items-center gap-x-2.5 p-2.5 border-b border-gray-500"
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
      <div id="sidenavUserMenu" class="sidebar--active__hide accordion-collapse collapse max-h-80 overflow-auto"
           data-bs-parent="#sidenavUser">
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>

<!--    <div class="flex justify-between items-center gap-x-2.5 p-2.5 border-b border-gray-500">-->
<!--      <div class="w-10 h-10 overflow-hidden flex justify-center items-center">-->
<!--        <img src="../assets/img/avatar-default.png" alt="avatar">-->
<!--      </div>-->

<!--      <div class="accordion" id="accordionExample">-->
<!--        <div class="accordion-item">-->
<!--          <div class="accordion-header" id="headingOne">-->
<!--            <p class="text-ellipsis overflow-hidden whitespace-nowrap accordion-button " data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"-->
<!--               aria-controls="collapseOne">Тестовый пользователь sdfg sdfsd sdfsdf sdfsdf dfsfd sdfsdf</p>-->
<!--          </div>-->

<!--          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"-->
<!--               data-bs-parent="#accordionExample">-->
<!--            <div class="accordion-body py-4 px-5">-->
<!--              <strong>This is the first item's accordion body.</strong> It is shown by default,-->
<!--              until the collapse plugin adds the appropriate classes that we use to style each-->
<!--              element. These classes control the overall appearance, as well as the showing and-->
<!--              hiding via CSS transitions. You can modify any of this with custom CSS or overriding-->
<!--              our default variables. It's also worth noting that just about any HTML can go within-->
<!--              the <code>.accordion-body</code>, though the transition does limit overflow.-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->

  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sidebarMini: false
    }
  }
}
</script>

<style scoped>

</style>