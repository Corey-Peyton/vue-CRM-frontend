<template>
  <table class="table-auto shadow-md mt-10 w-full w-lg">
      <thead class="bg-gray-800">
          <tr class="text-white">
              <th class="w-1/5 py-2">Nombre</th>
              <th class="w-1/5 py-2">Empresa</th>
              <th class="w-1/5 py-2">Email</th>
              <th class="w-1/5 py-2">Eliminar</th>
              <th class="w-1/5 py-2">Editar</th>
          </tr>
      </thead>
      <tbody class="bg-white">
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

<style>

</style>