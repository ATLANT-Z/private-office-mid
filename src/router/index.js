import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
import PersonalData from "@component/PersonalData.vue";
import WishList from "@component/WishList.vue";
import ViewedProducts from "@component/ViewedProducts.vue";
import SubscrbManage from "@component/SubscrbManage.vue";
import Review from "@component/Review.vue";
import Orders from "@component/Orders.vue";
import Promocodes from "@component/Promocodes/Promocodes.vue";
import TabGallery from "@component/TabGallery";
import Slider from "@component/Slider";

// eslint-disable-next-line no-unused-vars
const routesWithPrefix = (prefix, routes) => {
	return routes.map((route) => {
		route.path = `${prefix}${route.path}`;

		return route;
	});
};

const routes = [
	{
		path: "/",
		name: "person",
		component: PersonalData,
	},
	{
		path: "/wish",
		name: "wish",
		component: WishList,
	},
	{
		path: "/viewed",
		name: "viewed",
		component: ViewedProducts,
	},
	{
		path: "/subscrb",
		name: "subscrb",
		component: SubscrbManage,
	},
	{
		path: "/review",
		name: "review",
		component: Review,
	},
	{
		path: "/orders",
		name: "orders",
		component: Orders,
	},
	{
		path: "/promocodes",
		name: "promocodes",
		component: Promocodes,
	},
	{
		path: "/tabs",
		name: "tabs",
		component: TabGallery,
	},
	{
		path: "/slider",
		name: "slider",
		component: Slider,
	},
	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
