<template>
  <div class="flex justify-center mt-5">
        <div class="w-full max-w-sm sm:max-w-lg ">
            <form
                @submit.prevent="registerCustomer" 
                class="bg-gray-200 shadow-md px-8 pt-6 pb-8 mb-4"
            >
                <div class="mb-4">
                    <label 
                        class="label-input-form" for="name">Nombre</label>
                        <input
                            v-model="customer.name" 
                            type="text"
                            id="name"
                            placeholder="Nombre Cliente"
                            class="input-form"
                        />

                        <div v-if="submitted && $v.customer.name.$error" class="my-1 text-red-700 p-2">
                            <span v-if="!$v.customer.name.required">El nombre es obligatorio</span>
                        </div>
                </div>

                <div class="mb-4">
                    <label 
                        class="label-input-form" for="lastName">Apellido</label>
                        <input 
                            v-model="customer.lastName" 
                            type="text"
                            id="lastName"
                            placeholder="Apellido Cliente"
                            class="input-form"
                        />

                        <div v-if="submitted && $v.customer.lastName.$error" class="my-1 text-red-700 p-2">
                            <span v-if="!$v.customer.lastName.required">El apellido es obligatorio</span>
                        </div>
                </div>

                <div class="mb-4">
                    <label 
                        class="label-input-form" for="company">Empresa</label>
                        <input 
                            v-model="customer.company" 
                            type="text"
                            id="company"
                            placeholder="Empresa"
                            class="input-form"
                        />

                        <div v-if="submitted && $v.customer.company.$error" class="my-1 text-red-700 p-2">
                            <span v-if="!$v.customer.company.required">El campo Empresa es obligatorio</span>
                        </div>
                </div>

                <div class="mb-4">
                    <label 
                        class="label-input-form" for="email">Email</label>
                        <input 
                            v-model="customer.email" 
                            type="email"
                            id="email"
                            placeholder="Correo Cliente"
                            class="input-form"
                        />

                        <div v-if="submitted && $v.customer.email.$error" class="my-1 text-red-700 p-2">
                            <span v-if="!$v.customer.email.required">El correo es obligatorio</span>
                            <span v-if="!$v.customer.email.email">El correo ingresado es inválido</span>
                        </div>
                </div>

                <div class="mb-4">
                    <label 
                        class="label-input-form" for="phone">Telefono</label>
                        <input 
                            v-model="customer.phone" 
                            type="tel"
                            id="phone"
                            placeholder="Telefono"
                            class="input-form"
                        />

                        <div v-if="submitted && $v.customer.phone.$error" class="my-1 text-red-700 p-2">
                            <span v-if="!$v.customer.phone.numeric">El campo debe ser un telefono válido</span>
                        </div>
                </div>

                <button 
                    v-if=" !isLoading"
                    class="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900" 
                    type="submit">
                    Registrar Cliente
                </button>
                <Spiner v-else></Spiner>
            </form>
        </div>
  </div>
</template>

<script>
import { required, email, minLength, numeric } from "vuelidate/lib/validators";
import Spiner from './Spiner';
import { mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
    name: 'CustomerForm',
    components: {
        Spiner,
        Swal
    },
    data() {
        return {
            isLoading: false,
            customer: {
                name: null,
                lastName: null,
                company: null,
                email: null,
                phone: null
            },
            submitted: false
        }
    },
    validations: {
        customer: {
            name: { required },
            lastName: { required },
            company: { required },
            email: { required, email },
            phone: { numeric }
        }
    },
    methods: {
        ...mapActions('customers', ['addCustomer']),
        async registerCustomer() {
            this.isLoading = true;
            this.submitted = true;

            this.$v.$touch();
            if (this.$v.$invalid) {
                this.isLoading = false;
                return;
            }
            this.addCustomer({customer:this.customer, apolloClient: this.$apollo})
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
            })
        }
    }
}
</script>

<style>

</style>