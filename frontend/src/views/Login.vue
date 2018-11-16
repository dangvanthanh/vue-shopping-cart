<template>
  <div class="container max-w-sm mx-auto mt-32">
    <form class="bg-white rounded box-shadow p-6 pt-8">
      <div
        class="mb-8 p-3 border border-red bg-red-light"
        v-if="msgError != ''"
      >
        <span class="text-white font-semibold" v-text="msgError"></span>
      </div>
      <div class="block mb-8 relative">
        <input
          type="text"
          placeholder="Username"
          class="Input-text w-full border border-grey-light p-3 rounded box-shadow"
          autocomplete="username"
          v-model="username"
        />
        <label class="Input-label">Username</label>
      </div>
      <div class="block mb-3 relative">
        <input
          type="password"
          placeholder="Password"
          class="Input-text w-full border border-grey-light p-3 rounded box-shadow"
          autocomplete="current-password"
          v-model="password"
        />
        <label class="Input-label">Password</label>
      </div>
      <button
        class="w-full border box-shadow bg-blue-dark text-white p-3 font-semibold rounded box-shadow"
        :class="{ 'opacity-75 pointer-events-none': isDisabled }"
        @click.prevent="login"
      >
        Login
      </button>
      <div class="text-center mt-6">
        <router-link
          tag="a"
          :to="{ name: 'signup' }"
          :class="{ 'opacity-75 pointer-events-none': isDisabled }"
          class="inline-block no-underline text-blue-dark hover:text-grey"
        >
          Create new a account?
        </router-link>
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

<style scoped>
.Input-label {
  display: block;
  position: absolute;
  bottom: 50%;
  left: 1rem;
  opacity: 0;
  transform: translate3d(0, 50%, 0) scale(1);
  transform-origin: 0 0;
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0ms cubic-bezier(0.645, 0.045, 0.355, 1),
    z-index 0ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.Input-text:placeholder-shown + .Input-label {
  visibility: hidden;
  z-index: -1;
}

.Input-text:not(:placeholder-shown) + .Input-label,
.Input-text:focus:not(:placeholder-shown) + .Input-label {
  visibility: visible;
  z-index: 1;
  opacity: 1;
  transform: translate3d(-14px, -24px, 0) scale(0.8);
  transition: transform 300ms, visibility 0ms, z-index 0ms;
}
</style>
