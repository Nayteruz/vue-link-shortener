import { createApp } from "vue";
import { createPinia } from "pinia";
import router from './router'
import App from "./App.vue";
import "./assets/main.css";
import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App);
app.use(router)
app.use(createPinia());

app.provide('emitter', emitter);
app.mount("#app");
