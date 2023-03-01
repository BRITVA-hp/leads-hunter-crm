import { createRouter, createWebHistory } from 'vue-router'

//components
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Journal from "../views/Journal.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/registration', name: 'registration', component: Registration },
  { path: '/login', name: 'login', component: Login },
  { path: '/project/:projectID/journal', name: 'journal', component: Journal },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes // сокращённая запись для `routes: routes`
})

export default router