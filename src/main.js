import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/index.css';
import { apolloProvider } from './graphql/apollo';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
