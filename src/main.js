import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

app.use(router);
app.use(pinia);
app.mount("#app");
