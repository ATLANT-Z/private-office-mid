export default {
  state: {
    showCanBeShown: {},
  },
  getters: {
    SHOW_CAN_BE_SHOWN: (state) => {
      return state.showCanBeShown;
    },
  },
  mutations: {
    SET_CAN_BE_SHOWN: (state, { key, value }) => {
      state.showCanBeShown[key] = value;
    },
  },
  actions: {},
};
