<template>
  <div class="container max-w-sm mx-auto mt-32">
    <form class="bg-white p-6">
      <label class="block mb-2">
        <input type="text" placeholder="Username" class="w-full border border-grey-light p-3" v-model="username">
      </label>
      <label class="block mb-2">
        <input type="password" placeholder="Password" class="w-full border border-grey-light p-3" v-model="password">
      </label>
      <button 
        class="w-full border box-shadow bg-blue-dark text-white p-3 font-semibold" 
        :class="{ 'opacity-75 pointer-events-none': isDisabled }"
        @click.prevent="login">
        Login
      </button>
      <div class="text-center mt-6">
        <router-link
          tag="a" 
          :to="{ name: 'signup' }" 
          :class="{ 'opacity-75 pointer-events-none': isDisabled }"
          class="inline-block no-underline text-blue-dark hover:text-grey">
          Create new a account?
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from '@/services/user';

export default {
  data() {
    return {
      username: '',
      password: '',
      isDisabled: false
    };
  },
  methods: {
    login() {
      const username = this.username;
      const password = this.password;

      this.isDisabled = true;

      UserService.login({ username, password })
        .then(res => {
          console.log(res);
          this.isDisabled = false;
        })
        .catch(err => {
          console.log(err);
          this.isDisabled = false;
        });
    }
  }
};
</script>
