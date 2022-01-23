import axios from "axios";
import { HeaderData } from "@model/headerData";
import apiRoutes from "@/apiRoutes";

export default {
	state: {
		innerHeaderData: {},
	},
	getters: {
		headerData: (state) => {
			return state.innerHeaderData;
		},
	},
	mutations: {
		updateHeaderData: (state, data) => {
			state.innerHeaderData = data;
		},
		updateCompareCount: (state, data) => {
			state.innerHeaderData.compare.count = +data;
		},
		plusCompare: (state, data) => {
			state.innerHeaderData.cart.count = +state.innerHeaderData.compare.count + 1;
		},
		minusCompare: (state, data) => {
			state.innerHeaderData.cart.count = +state.innerHeaderData.compare.count - 1;
		},
		updateCartCount: (state, data) => {
			state.innerHeaderData.cart.count = +data;
		},
		plusCart: (state, data) => {
			state.innerHeaderData.cart.count = +state.innerHeaderData.cart.count + 1;
		},
		minusCart: (state, data) => {
			state.innerHeaderData.cart.count = +state.innerHeaderData.cart.count - 1;
		},
	},
	actions: {
		fetchHeaderData(ctx) {
			return axios.get(apiRoutes.headerData).then((res) => {
				ctx.commit("updateHeaderData", new HeaderData(res.data));
			});

			// return sleep(0.5).then(function () {
			// 	return axios.get("/headerData.json").then((res) => {
			// 		ctx.commit("updateHeaderData", new HeaderData(res.data));
			// 	});
			// });
		},
	},
};

function sleep(sec) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("done!");
		}, sec * 1000);
	});
}
