export default {
  state: {
    innerPromoCodes: [],
  },
  getters: {
    promoCodes: (state) => {
      return state.innerPromoCodes;
    },
  },
  mutations: {
    updatePromoCodes: (state, PromoCodes) => {
      state.innerPromoCodes = PromoCodes;
    },
  },
  actions: {
    fetchPromoCodes(ctx) {
      fetch("promocodes.json")
        .then((res) => res.json())
        .then((json) => {
          const innerPromoCodes = json.data;

          setTimeout(() => {
            ctx.commit("updatePromoCodes", innerPromoCodes);
          }, 2000);
        });
    },
  },
};
