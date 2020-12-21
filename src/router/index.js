import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthView from '../views/AuthView.vue';
import DashboardView from '../views/DashboardView.vue';
import ProductsView from '../views/ProductsView.vue';
import store from '../store';

Vue.use(VueRouter)

const routes = [
  { 
    path: '*', 
    redirect: '/' },
  {
    path: '/',
    name: 'auth',
    component: AuthView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
      layout: 'principal'
    }
  },
  {
    path: '/productos',
    name: 'products',
    component: ProductsView,
    meta: {
      requiresAuth: true,
      layout: 'principal'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isUserLoggedIn = store.getters['auth/isAuthenticated'];
  
  if (requiresAuth) {
    if (!isUserLoggedIn) {
      next({
        name: 'auth'
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
