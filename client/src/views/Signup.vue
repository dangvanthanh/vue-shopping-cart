<template>
  <div class="container max-w-sm mx-auto mt-32">
    <form class="bg-white p-6">
      <label class="block mb-2">
        <input type="text" placeholder="Username" class="w-full border border-grey-light p-3" v-model="username">
      </label>
      <label class="block mb-2">
        <input type="password" placeholder="Password" class="w-full border border-grey-light p-3" v-model="password">
      </label>
      <button class="w-full border box-shadow bg-blue-dark text-white p-3 font-semibold" @click.prevent="signup">Create a account</button>
      <div class="text-center mt-8">
        <router-link
          tag="a" 
          :to="{ name: 'login' }" 
          class="inline-block no-underline text-blue-dark hover:text-grey">
          Back to Login
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
      password: ''
    };
  },
  methods: {
    signup() {
      const username = this.username;
      const password = this.password;

      UserService.signup({ username, password }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>
