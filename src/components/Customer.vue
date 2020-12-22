<template>
  <tr class="flex flex-col flex-nowrap rounded-lg border-2 mb-2 border-white sm:border-0 sm:flex-row sm:mb-0 sm:rounded-none bg-gray-300">
      <td class="sm:w-1/6 custom-table-row-item">{{customer.nombre}}  {{customer.apellido}}</td>
      <td class="sm:w-1/6 custom-table-row-item">{{customer.empresa}}</td>
      <td class="sm:w-2/6 custom-table-row-item">{{customer.email}}</td>
      <td class="sm:w-1/6 custom-table-row-item">
            <button
                type="button" 
                class="custom-table-button bg-red-500"
            >
                Eliminar
                <delete-icon />
            </button>
      </td>
      <td class="sm:w-1/6 custom-table-row-item">
            <button
                type="button"
                class="custom-table-button bg-azul"
            >
                Editar
                <edit-icon />
        </button>
      </td>
  </tr>
</template>

<script>
import DeleteIcon from '../components/icons/DeleteIcon';
import EditIcon from '../components/icons/EditIcon';
export default {
    components: {
        DeleteIcon,
        EditIcon
    },
    props: {
        customer: {
            type: Object,
            required: true
        }
    }
}
</script>
