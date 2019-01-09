import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/products.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/cart.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('./views/success.vue'),
    },
    {
      path: '/check',
      name: '',
      component: () => import('./views/check.vue'),
      children: [
        {
          path: '',
          name: 'check-form1',
          component: () => import('./components/check-form-1.vue'),
        },
        {
          path: 'form2',
          name: 'check-form2',
          component: () => import('./components/check-form-2.vue'),
        },
        {
          path: 'form3',
          name: 'check-form3',
          component: () => import('./components/check-form-3.vue'),
        },
      ],
    },
  ],
});
