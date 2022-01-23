export default {
	state: {
		showPops: {},
	},
	getters: {
		SHOW_POPS: (state) => {
			return state.showPops;
		},
	},
	mutations: {
		SET_SHOW_POPS: (state, { key, value }) => {
			state.showPops[key] = value;
		},
	},
	actions: {},
};
