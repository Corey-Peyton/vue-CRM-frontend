import { AUTHENTICATE_USER } from '../graphql/mutations/userMutations';
import router from '../router';

const state = {
    token: null,
    user: null
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    LOGIN_USER(state, user) {
        state.user = user;
    },
    LOGOUT_USER(state) {
        state.token = null; 
        state.user = null;
    }
}

const actions = {
    async login({ commit, dispatch }, { email, password, apolloClient }) {
        try {
            const { data } = await apolloClient.mutate({
                mutation: AUTHENTICATE_USER,
                variables: {
                  input: {
                    email,
                    password
                  }
                }
            });
            const { token } = data.autenticarUsuario;
            //const token = JSON.stringify(data.autenticarUsuario.token);
            commit('SET_TOKEN', token);
            commit('LOGIN_USER', {email, password});

            router.push({name: 'dashboard'});
        } catch (error) {
            console.error(error);
        }  
    }, 

    logout({ commit }) {
        commit('LOGOUT_USER');
    }
}

const getters = {
    isAuthenticated: state => !!state.token
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};