import { createApp } from "vue";

import i18n from "./i18n";
import store from "./store";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import GlobalFunctions from "@/tools/globalFunc";

import PrivateOffice from "./PrivateOffice.vue";
// import PersonalData from "./components/PersonalData";

// eslint-disable-next-line no-unused-vars
//.use(i18in)
createApp(PrivateOffice).use(router).use(store).use(VueAxios, axios).use(GlobalFunctions).mount("#app");

// const vueBtns = document.querySelectorAll(".app");
// for (const vueBtn of vueBtns) {
// 	createApp(PersonalData).use(store).use(GlobalFunctions).mount(vueBtn);
// }

// import { createApp } from "vue";
//
// import store from "./store";
// import axios from "axios";
// import VueAxios from "vue-axios";
// import GlobalFunctions from "@/tools/globalFunc";
//
// import ProductGallery from "./components/Products/ProductGallery";
//
// const app = createApp(ProductGallery);
//
// app.use(store).use(VueAxios, axios).use(GlobalFunctions).mount("#app");

// import { createApp } from "vue";
//
// import store from "./store";
// import axios from "axios";
// import VueAxios from "vue-axios";
//
// import TabGallery from "./components/TabGallery";
//
// const app = createApp(TabGallery);
//
// app.use(store).use(VueAxios, axios).mount("#app");
