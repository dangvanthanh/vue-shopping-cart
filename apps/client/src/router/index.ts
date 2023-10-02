import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import ProductById from "@/views/ProductById.vue";
import ProductByCategory from "@/views/ProductByCategory.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/product/:id", component: ProductById },
  { path: "/category/:category", component: ProductByCategory },
  { path: "/not-found", component: NotFound },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to) {
      return { selector: to.hash };
    }

    return { left: 0, top: 0 };
  },
});

export default router;
