import axios from "axios";
import apiRoutes from "@/apiRoutes";

export default {
	state: {
		homeSliders: [],
	},
	getters: {
		getHomeSliders: (state) => {
			return state.homeSliders;
		},
	},
	mutations: {
		setHomeSliders: (state, data) => {
			state.homeSliders = data;
		},
	},
	actions: {
		fetchHomeSliders(ctx) {
			return sleep(1).then(function (doneStr) {
				return axios.get(apiRoutes.homeSlider).then((res) => {
					ctx.commit("setHomeSliders", res.data);
				});
			});
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
