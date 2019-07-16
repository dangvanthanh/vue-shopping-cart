<template>
  <div class="max-w-sm mx-auto mt-24">
    <form class="bg-white">
      <fieldset class="p-4">
        <h2 class="text-xl mb-0">Signup</h2>
      </fieldset>
      <div class="p-4">
        <div class="block mb-3">
          <input
            type="text"
            placeholder="Username"
            class="Input-text w-full border border-grey-light p-3 rounded shadow"
            autocomplete="username"
            v-model="username"
          />
        </div>
        <div class="block mb-3">
          <input
            type="password"
            placeholder="Password"
            class="Input-text w-full border border-grey-light p-3 rounded shadow"
            autocomplete="current-password"
            v-model="password"
          />
        </div>
        <button
          class="w-full border shadow bg-blue-600 text-white p-3 font-semibold"
          :class="{ 'opacity-75 pointer-events-none': isDisabled }"
          @click.prevent="signup"
        >
          Create a account
        </button>
      </div>
      <div class="p-4">
        <p class="mb-0 text-black">
          Already signed up?
          <router-link
            tag="a"
            :to="{ name: 'login' }"
            :class="{ 'opacity-75 pointer-events-none': isDisabled }"
            class="inline-block no-underline font-bold text-black hover:underline"
          >
            Back to Login
          </router-link>
          instead
        </p>
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
        .then(() => {
          this.isDisabled = false;
        })
        .catch(() => {
          this.isDisabled = false;
        });
    }
  }
};
</script>

<style>
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
