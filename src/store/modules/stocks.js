import apiRoutes from "@/apiRoutes";

export default {
	state: {
		innerStocks: [],
	},
	getters: {
		stocks: (state) => {
			return state.innerStocks;
		},
	},
	mutations: {
		updateStocks: (state, stocks) => {
			state.innerStocks = stocks;
		},
	},
	actions: {
		fetchStocks(ctx) {
			fetch(apiRoutes.stocks)
				.then((res) => res.json())
				.then((json) => {
					const innerStocks = json.data;

					setTimeout(() => {
						ctx.commit("updateStocks", innerStocks);
					}, 2000);
				});
		},
	},
};
