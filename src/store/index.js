import Vue from 'vue';
import Vuex from 'vuex';
import  createPersistedState  from  'vuex-persistedstate'
import auth from './auth';
import customers from './customers';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    customers
  },
  plugins: [createPersistedState()]
})
