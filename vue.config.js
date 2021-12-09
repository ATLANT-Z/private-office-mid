const path = require("path");

function resolve(dir) {
	return path.resolve(__dirname, dir);
}

// const basePath = "/vue-install-odessa/";
// const basePath = "/vue-tab-gallery/";
const basePath = "/private-office-mid/dist/";

module.exports = {
	filenameHashing: process.env.NODE_ENV === "development",
	publicPath: process.env.NODE_ENV === "production" ? basePath : "/",

	chainWebpack: (config) => {
		config.resolve.alias
			.set("@", resolve("./src"))
			.set("@model", resolve("./src/models"))
			.set("@component", resolve("./src/components"))
			.set("@style", resolve("./src/assets/scss"))
			.set("_style", resolve("./src/assets/scss"));
	},

	css: {
		loaderOptions: {
			sass: {
				prependData: `
	        @import "@style/abstract";
	        $env: ${process.env.NODE_ENV};
        `,
			},
		},
	},

	pluginOptions: {
		i18n: {
			locale: "ru",
			fallbackLocale: "en",
			localeDir: "locales",
			enableLegacy: false,
			runtimeOnly: false,
			compositionOnly: false,
			fullInstall: true,
		},
	},
};
