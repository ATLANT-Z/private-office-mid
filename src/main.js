import { createApp } from "vue";

import i18n from "./i18n";
import store from "./store";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import GlobalFunctions from "@/tools/globalFunc";

import PrivateOffice from "./PrivateOffice.vue";

// eslint-disable-next-line no-unused-vars
const app = createApp(PrivateOffice)
	.use(i18n)
	.use(router)
	.use(store)
	.use(VueAxios, axios)
	.use(GlobalFunctions)
	.mount("#app");

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
