<template>
  <tr class="flex flex-col flex-nowrap rounded-lg border-2 mb-2 border-white sm:border-0 sm:flex-row sm:mb-0 sm:rounded-none bg-gray-300">
      <td class="sm:w-1/5 border px-4 py-2 text-center">{{customer.nombre}}  {{customer.apellido}}</td>
      <td class="sm:w-1/5 border px-4 py-2 text-center">{{customer.empresa}}</td>
      <td class="sm:w-2/5 border px-4 py-2 text-center">{{customer.email}}</td>
      <td class="sm:w-1/5 border px-4 py-2 text-center">
            <button
                type="button" 
                class="flex justify-center items-center bg-red-500 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
            >
                Eliminar
                <delete-icon />
            </button>
      </td>
      <td class="sm:w-1/5 border px-4 py-2 text-center">
            <button
                type="button"
                class="flex justify-center items-center bg-blue-500 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
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
