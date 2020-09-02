import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import VueResource from 'vue-resource';

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})


Vue.use(VueResource);

Vue.http.options.root = 'https://last-for-today.firebaseio.com/'

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
