import Vue from 'vue';
import Vuex from 'vuex';
import  createPersistedState  from  'vuex-persistedstate'
import auth from './auth';
import user from './user';

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
    user
  },
  plugins: [createPersistedState()]
})
