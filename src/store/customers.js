import { GET_USER_CUSTOMERS } from "../graphql/queries/userQueries";
import { GET_CUSTOMER } from "../graphql/queries/customerQueries";
import { NEW_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from "../graphql/mutations/customerMutations";
import Vue from 'vue';

const state = {
    currentCustomer: null,
    customers: []
}

const mutations = {
    SET_CUSTOMERS(state, customers) {
        state.customers = customers;
    },
    SET_CURRENT_CUSTOMER(state, customer) {
        state.currentCustomer = customer;
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
            const { data } = await apolloClient.query({ 
                    query: GET_USER_CUSTOMERS,
                    fetchPolicy: 'no-cache'
             });

            commit('SET_CUSTOMERS', data.obtenerClientesVendedor);
        } catch (error) {
            console.error(error);
        }
    },

    async getCustomer({commit}, { id, apolloClient}) {
        try {
            const { data } = await apolloClient.query({
                query: GET_CUSTOMER,
                fetchPolicy: 'no-cache',
                variables: {
                    id
                }
            });

            const { nombre, apellido, empresa, email, telefono } = data.obtenerCliente;
            const customer = {
                id,
                name: nombre,
                lastName: apellido,
                company: empresa,
                email,
                phone: telefono
            }
            commit('SET_CURRENT_CUSTOMER', customer);
        } catch (error) {
            commit('SET_CURRENT_CUSTOMER', null);
        }
    },

    async addCustomer(context, {customer, apolloClient}) {
        try {
            await apolloClient.mutate({
                mutation: NEW_CUSTOMER,
                variables: {
                    input: { 
                        nombre: customer.name,
                        apellido: customer.lastName,
                        empresa: customer.company,
                        email: customer.email,
                        telefono: customer.phone
                    }
                },
                /* update: (cache, { data: { nuevoCliente } }) => {
                    const { obtenerClientesVendedor } = cache.readQuery({ query: GET_USER_CUSTOMERS});

                    cache.writeQuery({
                        query: GET_USER_CUSTOMERS,
                        data: {
                            obtenerClientesVendedor: [ ...obtenerClientesVendedor, nuevoCliente]
                        }
                    })
                } */ 
            });

        } catch (error) {
            throw Error(error);
        }
    },

    async updateCustomer(context , {customer, apolloClient}) {
        await apolloClient.mutate({
            mutation: UPDATE_CUSTOMER,
            variables: {
                id: customer.id,
                input: {
                    nombre: customer.name,
                    apellido: customer.lastName,
                    telefono: customer.phone,
                    email: customer.email,
                    empresa: customer.company
                }
            }
        });
    },

    async deleteCustomer({ commit }, { id, apolloClient }) {
        try {
            const { data } = await apolloClient.mutate({
                mutation: DELETE_CUSTOMER,
                variables: {
                    id
                },
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