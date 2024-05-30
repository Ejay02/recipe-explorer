import "./style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { createApp } from "vue";

createApp(App).use(router).use(store).mount("#app");
