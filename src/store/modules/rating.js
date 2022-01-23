import axios from "axios";
import apiRoutes from "@/apiRoutes";

export default {
	state: {
		rating: [],
	},
	getters: {
		rating(state) {
			return state.rating;
		},
	},
	mutations: {
		setRating(state, val) {
			state.rating = val;
		},
	},
	actions: {
		getData(ctx) {
			return axios.get(apiRoutes.rating).then((res) => {
				console.log(res.data);
				ctx.commit("setRating", res.data.rating);
			});
		},
	},
};
