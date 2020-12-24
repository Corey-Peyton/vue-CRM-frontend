import { GET_USER_CUSTOMERS } from "../graphql/queries/userQueries";
import { NEW_CUSTOMER, DELETE_CUSTOMER } from "../graphql/mutations/customerMutations";

const state = {
    customers: []
}

const mutations = {
    SET_CUSTOMERS(state, customers) {
        state.customers = customers;
    },
    ADD_CUSTOMER(state, customer) {
        state.customers.push(customer);
    },
    DELETE_CUSTOMER(state, idCustomer) {
        state.customers = state.customers.filter(customer => customer.id !== idCustomer);
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
    },

    async addCustomer({commit}, {customer, apolloClient}) {
        try {
            const { data } = await apolloClient.mutate({
                mutation: NEW_CUSTOMER,
                variables: {
                    input: { 
                        nombre: customer.name,
                        apellido: customer.lastName,
                        empresa: customer.company,
                        email: customer.email,
                        telefono: customer.phone
                    }
                }
            });
            commit('ADD_CUSTOMER', data.nuevoCliente);
            return
        } catch (error) {
            throw Error(error);
        }
    },

    async deleteCustomer({ commit }, { id, apolloClient }) {
        try {
            const { data } = await apolloClient.mutate({
                mutation: DELETE_CUSTOMER,
                variables: {
                    id
                }
            });
            commit('DELETE_CUSTOMER', id);
            return data.eliminarCliente;
        } catch (error) {
            throw Error(error);
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