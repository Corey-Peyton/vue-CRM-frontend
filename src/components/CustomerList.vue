<template>
  <table class="custom-table">
      <thead class="custom-table-head">
          <tr class="w-full bg-gray-800 sm:flex rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="custom-table-header-item">Nombre</th>
              <th class="custom-table-header-item">Empresa</th>
              <th class="custom-table-header-item">Email</th>
              <th class="custom-table-header-item">Eliminar</th>
              <th class="custom-table-header-item">Editar</th>
          </tr>
      </thead>
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

export default {
    name: 'CustomerList',
    components: {
        Customer
    },
    props: {
        customerList: {
            type: Array,
            required: true
        }
    }
}
</script>
