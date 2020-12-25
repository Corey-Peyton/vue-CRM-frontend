<template>
  <tr class="flex flex-col flex-nowrap rounded-lg border border-gray-200 shadow mb-3 border-white sm:border-0 sm:flex-row sm:mb-0 sm:rounded-none bg-gray-100">
        <td class="custom-table-row-item sm:w-1/6 flex justify-between">
            <div class="sm:hidden w-24 h-full bg-gray-400 text-white my-0 py-4 px-0 border rounded">Nombre</div>
            <div class="my-auto w-3/4 text-left ml-3">{{customer.nombre}}  {{customer.apellido}}</div>
        </td>
        <td class="custom-table-row-item sm:w-1/6 flex justify-between">
            <div class="sm:hidden w-24 h-full bg-gray-400 text-white my-0 py-4 px-0 border rounded">Empresa</div>
            <div class="my-auto w-3/4 text-left ml-3">{{customer.empresa}}</div>
        </td>
        <td class="custom-table-row-item sm:w-2/6 flex justify-between">
            <div class="sm:hidden w-24 h-full bg-gray-400 text-white my-0 py-4 px-0 border rounded">Email</div>
            <div class="my-auto w-3/4 text-left ml-3">{{customer.email}}</div>
        </td>


        <td class="border sm:px-4 sm:py-2 text-center sm:w-1/6 ">
            <div class="h-full sm:flex sm:flex-col sm:justify-center">
                <button
                    type="button" 
                    @click="remove(customer.id)"
                    class="custom-table-button bg-red-500"
                >
                    Eliminar
                    <delete-icon />
                </button>
            </div>   
        </td>
        <td class="border sm:px-4 sm:py-2 text-center sm:w-1/6">
                <div class="h-full sm:flex sm:flex-col sm:justify-center">
                    <button
                            type="button"
                            class="custom-table-button bg-azul"
                        >
                            Editar
                            <edit-icon />
                    </button>
                </div>
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
