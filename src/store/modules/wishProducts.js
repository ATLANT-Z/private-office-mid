import Product from "../../models/Product";

export default {
  state: {
    innerWishProducts: [],
  },
  getters: {
    wishProducts: (state) => {
      return state.innerWishProducts;
    },
  },
  mutations: {
    updateWishProducts: (state, productList) => {
      state.innerWishProducts = productList;
    },
  },
  actions: {
    fetchWishProducts(ctx) {
      return fetch("products.json")
        .then((res) => res.json())
        .then((json) => {
          const productList = json.data.map((el) => {
            return new Product(el);
          });

          setTimeout(() => {
            ctx.commit("updateWishProducts", productList);
          }, 2000);
        });
    },
  },
};
