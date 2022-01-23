import Product from "../../models/Product";
import axios from "axios";
import apiRoutes from "@/apiRoutes";

export default {
	state: {
		innerViewedProducts: [],
	},
	getters: {
		viewedProducts: (state) => {
			return state.innerViewedProducts;
		},
		getViewedById: (state, id) => {
			return state.innerViewedProducts.find((el) => el.id === id);
		},
		wishProducts: (state) => {
			return state.innerViewedProducts.filter((el) => el.wished);
		},
	},
	mutations: {
		updateViewedProducts: (state, productList) => {
			state.innerViewedProducts = productList;
		},
		removeByIdViewed: (state, id) => {
			const index = state.innerViewedProducts.findIndex((el) => el.id === id);
			state.innerViewedProducts.splice(index, 1);
		},
		removeAllViewed: (state) => {
			state.innerViewedProducts = [];
		},
		addViewed: (state, product) => {
			state.innerViewedProducts.unshift(product);
		},
	},
	actions: {
		fetchViewedProducts(ctx) {
			if (ctx.state.innerViewedProducts.length === 0) {
				return sleep(1).then(function (done) {
					return axios.get(apiRoutes.products).then((res) => {
						const productList = res.data.map((el) => {
							return new Product(el);
						});
						ctx.commit("updateViewedProducts", productList);
					});
				});
			}
		},
	},
};

function sleep(sec) {
	var promise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("done!");
		}, sec * 1000);
	});
	return promise;
}
