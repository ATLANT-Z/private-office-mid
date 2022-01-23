import { createApp } from "vue";
import store from "./store";
import starRating from "./components/productPage/starRating.vue";
import buttonBuy from "./components/productPage/UI/btnBuy.vue";
import delivery from "./components/productPage/delivery.vue";
import slider from "./components/productPage/slider.vue";
import specifications from "./components/productPage/specifications.vue";
import description from "./components/productPage/description.vue";
import floatingCard from "./components/productPage/floatingCard.vue";
import ratingReview from "./components/productPage/ratingReviews.vue";
import starReview from "./components/productPage/starReviews.vue";
import ratingTotalreviews from "./components/productPage/ratingTotalreviews.vue";

import axios from "axios";
import VueAxios from "vue-axios";
window.axios = axios;

//Андрей
import productSlider from "@component/Slider";
import globalFunc from "@/tools/globalFunc";

const sliders = document.querySelectorAll(".app-product-slider");
for (const slider of sliders) {
	createApp(productSlider).use(VueAxios, axios).use(store).use(globalFunc).mount(slider);
}
//end Андрей

createApp(starRating).use(VueAxios, axios).mount("#starRating");
createApp(delivery).use(delivery).mount("#delivery");
createApp(slider).use(slider).use(store).use(globalFunc).mount("#slider");

const reviewsT = document.querySelectorAll(".vue-reviews-rating-total");
for (const reviewT of reviewsT) {
	createApp(ratingTotalreviews).use(store).mount(reviewT);
}

const starReviews = document.querySelectorAll(".vue-reviews-stars");
for (const starR of starReviews) {
	createApp(starReview).use(store).use(globalFunc).mount(starR);
}

const ratingReviews = document.querySelectorAll(".vue-rating-review");
for (const raring of ratingReviews) {
	createApp(ratingReview).use(store).use(globalFunc).mount(raring);
}

const floatingCards = document.querySelectorAll(".vue-floating-сard");
for (const floating of floatingCards) {
	createApp(floatingCard).use(store).mount(floating);
}

const descripNavs = document.querySelectorAll(".vue-descripNav");
for (const descripNav of descripNavs) {
	createApp(description).use(store).mount(descripNav);
}

const btnBuys = document.querySelectorAll(".vue-btnBuy");
for (const btnBuy of btnBuys) {
	createApp(buttonBuy).use(store).mount(btnBuy);
}

const specificationsCards = document.querySelectorAll(".specificationsCard");
for (const specificationsCard of specificationsCards) {
	createApp(specifications).use(store).mount(specificationsCard);
}
