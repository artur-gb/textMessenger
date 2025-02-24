import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import MessengerPage from "../pages/MessengerPage.vue";
import AuthPage from "../pages/AuthPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SignIn",
    component: AuthPage,
  },
  {
    path: "/messenger",
    name: "Messenger",
    component: MessengerPage,
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
