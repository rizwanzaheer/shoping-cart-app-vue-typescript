import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Checkout.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Order.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
