<template>
    <div class="px-5">
      <h1 class="section-title">Clientes</h1>
    
      <router-link to="/nuevo-cliente" class="section-links">Nuevo Cliente</router-link>
      <customer-table :customerList="customers"></customer-table>
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
  mounted() {
    this.getUserCustomers({apolloClient:this.$apollo});
  },
  computed: {
    ...mapState('customers', ['customers'])
  },
  methods: {
    ...mapActions('customers', ['getUserCustomers']),
  }
}
</script>