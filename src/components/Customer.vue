<template>
  <tr class="flex flex-col flex-nowrap rounded-lg border-2 mb-2 border-white sm:border-0 sm:flex-row sm:mb-0 sm:rounded-none bg-gray-300">
      <td class="custom-table-row-item sm:w-1/6">{{customer.nombre}}  {{customer.apellido}}</td>
      <td class="custom-table-row-item sm:w-1/6">{{customer.empresa}}</td>
      <td class="custom-table-row-item sm:w-2/6">{{customer.email}}</td>
      <td class="custom-table-row-item sm:w-1/6">
            <button
                @click="remove(customer.id)"
                type="button" 
                class="custom-table-button bg-red-500"
            >
                Eliminar
                <delete-icon />
            </button>
      </td>
      <td class="custom-table-row-item sm:w-1/6">
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
import { mapActions } from "vuex";
import Swal from 'sweetalert2';
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
    }, 
    methods: {
        ...mapActions('customers', ['deleteCustomer']),
        async remove(id) {

            Swal.fire({
                title: 'Deseas eliminar este cliente?',
                text: "Esta acción no podra ser revertida!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No, Cancelar',
                confirmButtonText: 'Si, Eliminar!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await this.deleteCustomer({
                        id,
                        apolloClient: this.$apollo
                    })
                    .then(message => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Cliente eliminado',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch(error => {
                        console.error(error.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Algo salió mal!',
                        });
                    }); 
                }            
            })            
        }
    }
}
</script>
