import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

import router from "./router";

app.use(router);
app.use(pinia);
app.mount("#app");
