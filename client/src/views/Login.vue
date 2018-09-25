<template>
  <div class="container max-w-sm mx-auto mt-32">
    <form class="bg-white rounded box-shadow p-6">
      <div class="mb-3 p-3 border border-red bg-red-light" v-if="msgError != ''">
        <span class="text-white font-semibold" v-text="msgError"></span>
      </div>
      <label class="block mb-3">
        <input type="text" placeholder="Username" class="w-full border border-grey-light p-3 rounded box-shadow" v-model="username">
      </label>
      <label class="block mb-3">
        <input type="password" placeholder="Password" class="w-full border border-grey-light p-3 rounded box-shadow" v-model="password">
      </label>
      <button 
        class="w-full border box-shadow bg-blue-dark text-white p-3 font-semibold rounded box-shadow" 
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
import {mapActions} from 'vuex';
import UserService from '@/services/user';

export default {
  data() {
    return {
      username: '',
      password: '',
      isDisabled: false,
      msgError: ''
    };
  },
  methods: {
    ...mapActions(['logIn']),
    login() {
      const vm = this;
      const username = vm.username;
      const password = vm.password;

      vm.isDisabled = true;

      UserService.login({ username, password })
        .then(res => {
          vm.isDisabled = false;

          if (res.data.success) {
            vm.msgError = '';
            vm.logIn();
            localStorage.setItem('loggedIn', true);
            this.$router.push('home');
          } else {
            vm.msgError = res.data.msg;
          }
        })
        .catch(err => {
          vm.isDisabled = false;
        });
    }
  }
};
</script>
