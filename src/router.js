import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Products from "./views/Products.vue";
import ProductDetails from "./views/ProductDetails.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { requiresGuest: true }
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    meta: { requiresAuth: true },
    children: [
      {
        path: ":id",
        name: "ProductDetails",
        component: ProductDetails
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        name: "Login"
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters.isAuthenticated) {
      next({
        name: "Products"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
