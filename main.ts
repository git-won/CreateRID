// src/main.ts

import { createApp } from "vue";
import App from "./App.vue";
import "swiper/swiper-bundle.css";
import router from "./router";
import store from "./store"; // Vuex 스토어를 import

const app = createApp(App);
app.use(router);
app.use(store); // Vuex 스토어를 사용
app.mount("#app");
