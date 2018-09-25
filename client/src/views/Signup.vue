<template>
  <div class="container max-w-sm mx-auto mt-32">
    <form class="bg-white rounded box-shadow p-6">
      <label class="block mb-3">
        <input type="text" placeholder="Username" class="w-full border border-grey-light p-3 rounded box-shadow" v-model="username">
      </label>
      <label class="block mb-3">
        <input type="password" placeholder="Password" class="w-full border border-grey-light p-3 rounded box-shadow" v-model="password">
      </label>
      <button 
        class="w-full border box-shadow bg-blue-dark text-white p-3 font-semibold" 
        :class="{ 'opacity-75 pointer-events-none': isDisabled }"
        @click.prevent="signup">
        Create a account
      </button>
      <div class="text-center mt-6">
        <router-link
          tag="a" 
          :to="{ name: 'login' }" 
          :class="{ 'opacity-75 pointer-events-none': isDisabled }"
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
      password: '',
      isDisabled: false
    };
  },
  methods: {
    signup() {
      const username = this.username;
      const password = this.password;

      this.isDisabled = true;

      UserService.signup({ username, password })
        .then(res => {
          this.isDisabled = false;
        })
        .catch(err => {
          this.isDisabled = false;
        });
    }
  }
};
</script>
