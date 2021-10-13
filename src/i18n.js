// import { createI18n } from "vue-i18n";
//
// /**
//  * Load locale messages
//  *
//  * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into
//  * `vue-cli-plugin-i18n`. See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
//  */
//
// // При изменении языка переключаем файл /locals/_language_.json
// function loadLocaleMessages() {
// 	const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
// 	const messages = {};
// 	locales.keys().forEach((key) => {
// 		const matched = key.match(/([A-Za-z0-9-_]+)\./i);
// 		if (matched && matched.length > 1) {
// 			const locale = matched[1];
// 			messages[locale] = locales(key);
// 		}
// 	});
// 	return messages;
// }
//
// // Определяем предустановленный язык браузера и устанавливаем его при запуске
// function detectLanguage() {
// 	const lng = window.navigator.userLanguage || window.navigator.language;
// 	const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
// 	const lang = locales.keys().find((key) => lng.includes(key.replace("./", "").replace(".json", "")));
// 	return lang ? lang.replace("./", "").replace(".json", "") : null;
// }
//
// export default createI18n({
// 	legacy: false,
// 	locale: localStorage.getItem("lang") || detectLanguage() || process.env.VUE_APP_I18N_LOCALE,
// 	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
// 	messages: loadLocaleMessages(),
// });
