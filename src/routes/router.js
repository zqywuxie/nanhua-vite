import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// configure routes
const router = createRouter({
  routes, // short for routes: routes
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior: (to, from, savedPosition) => {
    // 强制重置到顶部，忽略保存的位置
    return new Promise((resolve) => {
      // 立即重置滚动位置
      setTimeout(() => {
        // 重置所有可能的滚动容器
        const containers = [
          ".main-content",
          ".content-area",
          ".reagent-layout",
          ".lifescience-layout",
          ".layout-container"
        ];

        containers.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            element.scrollTop = 0;
            element.scrollLeft = 0;
          }
        });

        // 重置页面滚动
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        resolve({ top: 0, left: 0 });
      }, 0);
    });
  },
});

export default router;
