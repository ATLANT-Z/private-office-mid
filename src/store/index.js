import { createStore } from "vuex";
import popups from "./modules/popups";
import viewedProducts from "./modules/viewedProducts";
import stocks from "./modules/stocks";
import promocodes from "./modules/promocodes";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    popups,
    viewedProducts,
    stocks,
    promocodes,
  },
});
