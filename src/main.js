import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import { routes } from "./routes";

import PrimeVue from "primevue/config";
import AppmaxTheme from "./themes/appmax";
// import "primevue/resources/themes/lara-light-green/theme.css";
import "./style.css";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { unstyled: true, pt: AppmaxTheme });

app.mount("#app");
