export default {
	// eslint-disable-next-line no-unused-vars
	install(app, options) {
		app.config.globalProperties.$getCoords = function (elem) {
			let box = elem.getBoundingClientRect();

			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset,
			};
		};

		app.config.globalProperties.$getIco = function (name) {
			return "url(" + require(`@/assets/icons/${name}`) + ")";
		};

		app.config.globalProperties.$hideShowable = function (e) {
			e.target.closest("[data-showable]").classList.remove("show");
		};

		app.config.globalProperties.$showId = function (id, hasListener = true) {
			if (hasListener) {
				this.$store.commit("SET_SHOW_POPS", { key: id, value: true });
			} else {
				document.getElementById(id).classList.add("show");
			}
		};
	},
};
