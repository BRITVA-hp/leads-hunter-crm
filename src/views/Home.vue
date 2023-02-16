<template>
  <div class="flex gap-x-8 min-h-screen">
    <sidebar-app></sidebar-app>

    <section class="w-full">
      <p>bla bla</p>

<!--      <div class="accordion" id="accordionExample">-->
<!--        <div class="accordion-item bg-white border border-gray-200">-->
<!--          <h2 class="accordion-header mb-0" id="headingOne">-->
<!--            <button class=" accordion-button w-full"-->
<!--                    type="button"-->
<!--                    data-bs-toggle="collapse"-->
<!--                    data-bs-target="#collapseOne"-->
<!--                    aria-expanded="true"-->
<!--                    aria-controls="collapseOne">-->
<!--              Accordion Item #1-->
<!--            </button>-->
<!--          </h2>-->
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

      <div class="accordion" id="accordionExample">
        <button class=" accordion-button w-full"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
          Accordion Item #1
        </button>
        <div id="collapseOne" class="accordion-collapse collapse show"
             data-bs-parent="#accordionExample">
          <strong>This is the first item's accordion body.</strong> It is shown by default,
          until the collapse plugin adds the appropriate classes that we use to style each
          element. These classes control the overall appearance, as well as the showing and
          hiding via CSS transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import SidebarApp from "../components/Sidebar.vue";

export default {
  name: "Home",
  components: {SidebarApp}
}
</script>

<style scoped>

</style>