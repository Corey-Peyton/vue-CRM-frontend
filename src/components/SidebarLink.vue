<template>
  <router-link :to="`/${path}`">
    <a 
        :class="{'bg-gray-400': active}"
        class="flex justify-center sm:justify-start px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:shadow-outline" href="#"
    >
    <slot></slot>
    </a>
</router-link>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>