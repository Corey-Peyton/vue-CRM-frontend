<template>
  <div >
    <h1 class="text-center text-2xl font-light">Login</h1>

    <div class="flex justify-center mt-5">
      <div class="w-full max-w-sm">
        <form 
          @submit.prevent="doLogin"
          class="bg-gray-200 rounded shadow-md px-8 pt-6 pb-8 mb-4"
        >
          <div>
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
              :class="{ 'is-invalid': submitted && $v.user.email.$error }"
            >

            <div v-if="submitted && $v.user.email.$error" class="my-1 text-red-700 p-2">
                <span v-if="!$v.user.email.required">El campo email es obligatorio</span>
                <span v-if="!$v.user.email.email">Email Inválido</span>
            </div>
          </div>
          
          <div>
            <label 
              for="password" 
              class="block text-gray-700 text-sm-font-bold mb-2 mt-3"
            >
              Password
            </label>
            <input 
              v-model="user.password"
              type="password" 
              class="shadow appearance-none-border-rounded w-full py-2 px-3 text-gray-700 leading-tight 
              focus:shadow-outline"
            >

            <div v-if="submitted && $v.user.password.$error" class="my-1 text-red-700 p-2">
                <span v-if="!$v.user.password.required">El campo contraseña es obligatorio</span>
                <span v-if="!$v.user.password.minLength">La contraseña debe ser de al menos 4 caracteres</span>
            </div>
          </div>

          <button 
            v-if=" !isLoading"
            class="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900" 
            type="submit">
              Iniciar Sesión
            </button>
            <Spiner v-else></Spiner>
        </form> 
      </div>
    </div>
  </div>
</template>

<script>
import { AUTHENTICATE_USER, NEW_USER } from '../graphql/mutations/userMutations';
import gql from 'graphql-tag';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Spiner from '../components/Spiner';


export default {
  components: { Spiner },
  name: 'Home',

  data() {
    return {
      isLoading: false,
      user: {
        email: 'julioale04031981@gmail.com',
        password: 'emma2017'
      },
      submitted: false,
    }
  },
  validations : {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(4)},
    }
  },
  methods: {
    async doLogin() {
      this.isLoading = true;
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }

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
      this.isLoading = false;
      const { token } = data.autenticarUsuario;
      localStorage.setItem('token', token);  
      this.$router.push({name: 'dashboard'});
    }
  }
}
</script>

<style scoped>
.is-invalid {
  border: 1px solid red;
}


</style>
