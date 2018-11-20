<template>
  <div class="container max-w-sm mx-auto mt-32">
    <form class="bg-white rounded box-shadow">
      <fieldset class="bg-grey-light p-4">
        <h2 class="text-xl mb-0">Login</h2>
      </fieldset>
      <div class="p-4">
        <div
          class="mb-3 p-3 border border-red bg-red-light"
          v-if="msgError != ''"
        >
          <span class="text-white font-semibold" v-text="msgError"></span>
        </div>
        <div class="block mb-3 relative">
          <input
            type="text"
            placeholder="Username"
            class="Input-text w-full border border-grey-light p-3 rounded box-shadow"
            autocomplete="username"
            v-model="username"
          />
        </div>
        <div class="block mb-3 relative">
          <input
            type="password"
            placeholder="Password"
            class="Input-text w-full border border-grey-light p-3 rounded box-shadow"
            autocomplete="current-password"
            v-model="password"
          />
        </div>
        <button
          class="w-full border box-shadow bg-blue-dark text-white p-3 font-semibold rounded box-shadow"
          :class="{ 'opacity-75 pointer-events-none': isDisabled }"
          @click.prevent="login"
        >
          Login
        </button>
      </div>
      <div class="bg-blue-darker p-4">
        <p class="mb-0 text-white">
          Haven't account?
          <router-link
            tag="a"
            :to="{ name: 'signup' }"
            :class="{ 'opacity-75 pointer-events-none': isDisabled }"
            class="inline-block no-underline font-bold text-white hover:underline"
          >
            Create new a account
          </router-link>
          instead
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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

      const body = { username, password };

      this.logIn(body)
        .then(data => {
          vm.isDisabled = false;

          if (data.success) {
            this.$router.push('home');
          } else {
            vm.msgError = data.msg;
          }
        })
        .catch(() => {
          vm.isDisabled = false;
        });
    }
  }
};
</script>

<style scoped></style>
