<template>
  <table class="custom-table">
      <customer-table-header />
      
      <tbody class="flex-1 sm:flex-none">
        <Customer 
            v-for="(customer, index) in customerList" 
            :key="index"
            :customer="customer"
        />
      </tbody>
  </table>
</template>

<script>
import Customer from '../components/Customer';
import CustomerTableHeader from '../components/CustomerTableHeader';

export default {
    name: 'CustomerTable',
    components: {
        Customer,
        CustomerTableHeader
    },
    props: {
        customerList: {
            type: Array,
            required: true
        }
    }
}
</script>
