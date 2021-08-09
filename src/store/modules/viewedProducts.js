import Product from "../../models/Product";

export default {
  state: {
    innerViewedProducts: [],
  },
  getters: {
    viewedProducts: (state) => {
      return state.innerViewedProducts;
    },
  },
  mutations: {
    updateViewedProducts: (state, productList) => {
      state.innerViewedProducts = productList;
    },
  },
  actions: {
    fetchViewedProducts(ctx) {
      fetch("/products.json")
        .then((res) => res.json())
        .then((json) => {
          const productList = json.data.map((el) => {
            return new Product(el);
          });

          setTimeout(() => {
            ctx.commit("updateViewedProducts", productList);
          }, 3000);
        });
    },
  },
};
