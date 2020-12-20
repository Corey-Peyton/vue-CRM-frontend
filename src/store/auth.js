import { AUTHENTICATE_USER } from '../graphql/mutations/userMutations'
import router from '../router';

const state = {
    token: null,
    user: null
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_USER(state, user) {
        state.user = user;
    }
}

const actions = {
    async login({ commit }, { email, password, apolloClient }) {
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
            //const { token } = data.autenticarUsuario;
            const token = JSON.stringify(data.autenticarUsuario.token);
            commit('SET_TOKEN', token);
            localStorage.setItem('apollo-token', token);
            router.push({name: 'dashboard'});
        } catch (error) {
            console.error(error);
        }  
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};