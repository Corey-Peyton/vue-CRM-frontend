<template>
    <div >
      <h1 class="block w-full text-2xl text-gray-800 font-light text-left pl-5 pt-5">Clientes</h1>
    
      <router-link to="/nuevoCliente" class="bg-blue-800 py-2 px-5 mt-5 ml-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold ">Nuevo Cliente</router-link>
      <customer-list :customerList="customers"></customer-list>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CustomerList from '../components/CustomerList'

export default {
  name: 'DashboardView',
  components: {
    CustomerList
  },
  mounted() {
    this.getUserCustomers({apolloClient:this.$apollo});
  },
  computed: {
    ...mapState('user', ['customers'])
  },
  methods: {
    ...mapActions('user', ['getUserCustomers']),
  }
}
</script>

<style>

</style>