import { createWebHistory, createRouter } from "vue-router";
import HomeComp from "./HomeComp.vue";
import AddToCart from "./AddToCart.vue";
import BuyNow from "./BuyNow.vue";
import Profile from "./RashidProfile.vue";
import PageNotFound from "./PageNotFound.vue";

const routes = [
  {
    name: "HomeComp",
    path: "/",
    component: HomeComp,
  },
  {
    name: "AddToCart",
    path: "/cart",
    component: AddToCart,
  },
  {
    name: "BuyNow",
    path: "/buynow",
    component: BuyNow,
  },
  {
    name: "RashidProfile",
    path: "/profile/:name",
    component: Profile,
  },
  {
    name: "PageNotFound",
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
