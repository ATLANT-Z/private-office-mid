import { createApp } from "vue";

import store from "./store";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";

createApp(App).use(router).use(store).use(VueAxios, axios).mount("#app");

// import { createApp } from "vue";
//
// import store from "./store";
// import axios from "axios";
// import VueAxios from "vue-axios";
//
// import ProductGallery from "./components/Products/ProductGallery";
//
// const app = createApp(ProductGallery);
//
// app.use(store).use(VueAxios, axios).mount("#app");
