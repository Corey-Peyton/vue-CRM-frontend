<template>
    <section>
        <h1 class="section-title">Nuevo Cliente</h1>

        <customer-form @add-customer="newCustomer"></customer-form>
    </section>
</template>

<script>
import CustomerForm from '../components/CustomerForm';
import { mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
    components: { CustomerForm, Swal },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        ...mapActions('customers', ['addCustomer']),
        async newCustomer(customer) {
            this.isLoading = true;
            await this.addCustomer({customer, apolloClient: this.$apollo})
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cliente agregado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    this.isLoading = false;
                    this.$router.push({name: 'dashboard'});
                }, 1500)
            })
            .catch(error => {
                console.error(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                });
                this.isLoading = false;
            });
        }
    }
}
</script>
