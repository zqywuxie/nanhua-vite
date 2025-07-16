import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "./routes/router";
console.log(
  "Registered routes:",
  router.getRoutes().map((r) => r.path)
);

const app = createApp(App);
app.use(Antd);
app.use(router);
app.mount("#app");
