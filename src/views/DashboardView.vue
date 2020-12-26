<template>
    <div class="px-5">
      <h1 class="section-title">Clientes</h1>
    
      <router-link to="/nuevo-cliente" class="section-links">Nuevo Cliente</router-link>
      <customer-table 
          v-if="customers" 
          :customerList="customers"
      ></customer-table>
      <div v-else><h3>No hay clientes cargados</h3></div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CustomerTable from '../components/CustomerTable';

export default {
  name: 'DashboardView',
  components: {
    CustomerTable
  },
  async mounted() {
    this.$store.commit('customers/SET_CURRENT_CUSTOMER', null);
    await this.getUserCustomers({apolloClient:this.$apollo});
  },
  computed: {
    ...mapState('customers', ['customers'])
  },
  methods: {
    ...mapActions('customers', ['getUserCustomers']),
    
  }
}
</script>