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
			//Работает везде кроме внутри тега style =)
			.set("@style", resolve("./src/assets/scss"))
			//Работает внутри тега style
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

	pages: {
		index: {
			// entry for the page
			entry: "src/main.js",
			// the source template
			template: "public/index.html",
			// output as dist/index.html
			filename: "index.html",
			// when using title option,
			// template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
			title: "Index Page",
			// chunks to include on this page, by default includes
			// extracted common chunks and vendor chunks.
			chunks: ["chunk-vendors", "chunk-common", "index"],
		},
		product: {
			// entry for the page
			entry: "src/main-product.js",
			// the source template
			template: "public/product.html",
			// output as dist/product.html
			filename: "product.html",
			// when using title option,
			// template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
			title: "Product Page",
			// chunks to include on this page, by default includes
			// extracted common chunks and vendor chunks.
			chunks: ["chunk-vendors", "chunk-common", "product", "index"],
		},
	},
};
