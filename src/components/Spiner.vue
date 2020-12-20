<template>
    <div v-show="show" class="flex justify-center mt-6">
        <div 
            :style="{'border-top-color': color}"
            class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"
            >
        </div>
    </div>
</template>

<script>
export default {
    props:{
        color: {
            type: String,
            default: '#053758'
        },
        show: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
.loader {
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(180deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>