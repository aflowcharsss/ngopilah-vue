import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Products from "../views/Dashboard/Products.vue";
import Items from "../views/Dashboard/Items.vue";

/**
 * Router
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/register", name: "Register", component: Register },
    { path: "/login", name: "Login", component: Login },
    { path: "/products", name: "Products", component: Products },
    { path: "/items", name: "Items", component: Items },
  ],
});

export default router;
