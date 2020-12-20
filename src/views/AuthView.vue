<template>
  <div class="">
    <h1 class="text-center text-2xl font-light">Login</h1>

    <div class="flex justify-center mt-5">
      <div class="w-full max-w-sm">
        <form 
          @submit.prevent="doLogin"
          class="bg-gray-200 rounded shadow-md px-8 pt-6 pb-8 mb-4"
        >
          <label 
            for="email" 
            class="block text-gray-700 text-sm-font-bold mb-2"
          >
            Email
          </label>
          <input 
            v-model="user.email"
            type="email" 
            class="shadow appearance-none-border-rounded w-full py-2 px-3 text-gray-700 leading-tight 
            focus:shadow-outline"
          >

          <label 
            for="password" 
            class="block text-gray-700 text-sm-font-bold mb-2 mt-5"
          >
            Password
          </label>
          <input 
            v-model="user.password"
            type="password" 
            class="shadow appearance-none-border-rounded w-full py-2 px-3 text-gray-700 leading-tight 
            focus:shadow-outline"
          >

          <button class="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900" type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { AUTHENTICATE_USER, NEW_USER } from '../graphql/mutations/userMutations';
import gql from 'graphql-tag';

export default {
  name: 'Home',
  data() {
    return {
      user: {
        email: 'julioale04031981@gmail.com',
        password: 'emma2017'
      }
    }
  },
  methods: {
    async doLogin() {
      if (this.user.email === null || this.user.password === null) return
      const { data } = await this.$apollo.mutate({
        mutation: AUTHENTICATE_USER,
        variables: {
          input: {
            email: this.user.email,
            password: this.user.password
          }
        }
      });

      const { token } = data.autenticarUsuario;
      localStorage.setItem('token', token);  
      console.log(token);
      this.$router.push({name: 'dashboard'});
    }
  }
}
</script>
