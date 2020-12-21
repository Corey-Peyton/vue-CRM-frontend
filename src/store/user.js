import { GET_USER_CUSTOMERS } from "../graphql/queries/userQueries";

const state = {
    customers: []
}

const mutations = {
    SET_CUSTOMERS(state, customers) {
        state.customers = customers;
    }
}

const actions = {
    async getUserCustomers({ commit }, { apolloClient }) {
        try {
            const { data } = await apolloClient.query({ query: GET_USER_CUSTOMERS });
            const customers = data.obtenerClientesVendedor
            commit('SET_CUSTOMERS', customers);
        } catch (error) {
            console.error(error);
        }
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}