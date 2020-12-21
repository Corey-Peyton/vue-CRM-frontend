<template>
  <table class="w-full flex flex-col flex-nowrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead class="hidden sm:flex-row sm:flex text-white font-bold text-sm">
          <tr class="w-full bg-gray-800 sm:flex rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="w-1/5 p-3 text-center">Nombre</th>
              <th class="w-1/5 p-3 text-center">Empresa</th>
              <th class="w-1/5 p-3 text-center">Email</th>
              <th class="w-1/5 p-3 text-center">Eliminar</th>
              <th class="w-1/5 p-3 text-center">Editar</th>
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

<style>

</style>