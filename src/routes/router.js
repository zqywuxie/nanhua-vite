import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// configure routes
const router = createRouter({
  routes, // short for routes: routes
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
