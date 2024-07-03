export const routes = [
  { path: "/", component: () => import("./views/LoginView") },
  { path: "/teste", component: () => import("./views/TestView.vue") },
];
