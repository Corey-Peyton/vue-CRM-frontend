<template>
    <div class="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-x-60">
        <div class="col-span-4 sm:col-span-1">
            <Sidebar />
        </div>
        <div class="col-span-4 sm:col-span-5 bg-gray-200 h-full">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '../Sidebar';
export default {
  components: {
    Sidebar
  },
}
</script>