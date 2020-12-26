<template>
  <section>
        <h1 class="section-title">Actualizar Cliente</h1>

        <customer-form 
            v-if="currentCustomer"
            @edit-customer="update" 
            :myCustomer="currentCustomer">
        </customer-form>
    </section>
</template>

<script>
import CustomerForm from '../components/CustomerForm';
import { mapState, mapActions } from "vuex";
export default {
    name: 'UpdateCustomerView',
    components: { CustomerForm },

    async created() {
        await this.getCustomer({ 
            id: this.$route.params.customerId,
            apolloClient: this.$apollo
        });

        if (this.currentCustomer === null ) {
            this.$router.push({name: 'dashboard'});
        }
    },
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapState('customers', ['currentCustomer']),
    },
    methods: {
        ...mapActions('customers', ['getCustomer', 'updateCustomer']),
        update(customer) {
            this.isLoading = true;
            this.updateCustomer({ customer, apolloClient: this.$apollo})
            .then(() => {
                this.isLoading = false;
                this.$router.push({name: 'dashboard'});
            })
        }
    }
}
</script>

<style>

</style>