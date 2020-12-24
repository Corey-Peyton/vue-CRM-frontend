<template>
    <section>
        <h1 class="section-title">Nuevo Cliente</h1>

        <customer-form></customer-form>
    </section>
</template>

<script>
import CustomerForm from '../components/CustomerForm';
export default {
    components: { CustomerForm },
}
</script>
