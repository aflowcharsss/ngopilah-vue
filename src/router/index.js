import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Products from "../views/Dashboard/Products.vue";
import Items from "../views/Dashboard/Items.vue";
import AddItems from "../views/Dashboard/AddItems.vue";
import Customers from "../views/Dashboard/Customers.vue";

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
    { path: "/items/add", name: "AddItems", component: AddItems },
    { path: "/customers", name: "Customers", component: Customers },
  ],
});

export default router;
