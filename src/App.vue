<template>
  <component :is="layout"></component>
</template>

<script>
import DefaultLayout from '../src/components/layouts/DefaultLayout';
import PrincipalLayout from '../src/components/layouts/PrincipalLayout';

import { mapState } from "vuex";
export default {
  components: {DefaultLayout, PrincipalLayout},
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
 