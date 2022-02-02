import { createApp } from "vue";

import i18n from "./i18n";
import store from "./store";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Maska from "maska";
import GlobalFunctions from "@/tools/globalFunc";

import PrivateOffice from "./PrivateOffice.vue";
import Header from "@component/Header/Header";

// eslint-disable-next-line no-unused-vars
//.use(i18in)

createApp(PrivateOffice)
	.use(router)
	.use(store)
	.use(VueAxios, axios)
	.use(GlobalFunctions)
	.use(Maska)
	.mount("#appOffice");

createApp(Header).use(router).use(store).use(VueAxios, axios).use(GlobalFunctions).use(Maska).mount("#appHeader");

window.axios = axios; //BugFix
