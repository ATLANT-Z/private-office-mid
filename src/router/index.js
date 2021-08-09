import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
import PersonalData from "../components/PersonalData.vue";
import WishList from "../components/WishList.vue";
import ViewedProducts from "../components/ViewedProducts.vue";
import SubscrbManage from "../components/SubscrbManage.vue";
import Review from "../components/Review.vue";
import Orders from "../components/Orders.vue";
import Promocodes from "../components/Promocodes/Promocodes.vue";

const routes = [
  {
    path: "/",
    name: "PersonalData",
    component: PersonalData,
  },
  {
    path: "/wish",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/viewed",
    name: "ViewedProducts",
    component: ViewedProducts,
  },
  {
    path: "/subscrb",
    name: "SubscrbManage",
    component: SubscrbManage,
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/promocodes",
    name: "Promocodes",
    component: Promocodes,
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
