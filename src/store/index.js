import { createStore } from "vuex";
import popups from "@/store/modules/popups";
import canBeShown from "@/store/modules/canBeShown";
import viewedProducts from "@/store/modules/viewedProducts";
import stocks from "@/store/modules/stocks";
import promocodes from "@/store/modules/promocodes";
import header from "@/store/modules/header";
import rating from "@/store/modules/rating";

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},

	modules: {
		popups,
		canBeShown,
		viewedProducts,
		stocks,
		promocodes,
		header,
		rating,
	},
});
