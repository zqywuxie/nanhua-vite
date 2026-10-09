import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
import "./styles/content-links.css";
import "./styles/page-headers.css";
import router from "./routes/router";


const app = createApp(App);
app.use(router);
app.mount("#app");
