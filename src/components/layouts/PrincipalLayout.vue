<template>
    <div class="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-x-60">
        <div class="col-span-4 md:col-span-1">
            <Sidebar />
        </div>
        <div class="col-span-4 md:col-span-5 bg-gray-200">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '../Sidebar';
import { mapMutations } from "vuex";
export default {
  components: {
    Sidebar
  },
}
</script>