import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import MyFirstPlugin from "./MyFirstPlugin";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(MyFirstPlugin, {
  fontSize: {
    small: 12,
    medium: 24,
    large: 36,
  },
});

app.mount("#app");
