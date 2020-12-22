import { GET_USER_CUSTOMERS } from "../graphql/queries/userQueries";
import { DELETE_CUSTOMER } from "../graphql/mutations/customerMutations";

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
    },

    async deleteCustomer({commit, state}, { id, apolloClient }) {
        try {
            const { data } = await apolloClient.mutate({
                mutation: DELETE_CUSTOMER,
                variables: {
                    id
                },
                update: (cache) => {
                    const {obtenerClientesVendedor} = cache.readQuery({ query: GET_USER_CUSTOMERS});

                    cache.writeQuery({
                        query: GET_USER_CUSTOMERS,
                        data: {
                            obtenerClientesVendedor: obtenerClientesVendedor.filter(cliente => cliente.id !== id)
                        }
                    })
                }
            });
            commit('SET_CUSTOMERS', state.customers.filter(customer => customer.id !== id));
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