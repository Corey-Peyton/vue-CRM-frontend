import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/index.css';
import { apolloProvider } from './graphql/apollo';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false

Vue.use(VueToast, {
  position: 'bottom'
});

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
