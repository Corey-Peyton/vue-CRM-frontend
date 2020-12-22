import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/index.css';
import { apolloProvider } from './graphql/apollo';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.use(VueToast, {
  position: 'bottom'
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
