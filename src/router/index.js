import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthView from '../views/AuthView.vue';
import DashboardView from '../views/DashboardView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true
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

  console.log('requires auth', requiresAuth);

  next();
})

export default router
