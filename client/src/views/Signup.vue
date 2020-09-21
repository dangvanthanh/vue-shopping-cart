<template>
  <div class="h-screen flex items-center">
    <div class="w-full max-w-md mx-auto py-12 px-6 bg-white shadow rounded-md">
      <h2 class="flex justify-center">
        <router-link
          to="/"
          class="flex items-center text-6xl text-blue leading-none uppercase relative"
        >
          <span>S</span>
        </router-link>
      </h2>
      <p class="my-5 text-base leading-5 text-center text-gray-900">Create new an account</p>
      <form @submit.prevent="onSubmit">
        <div class="rounded-md shadow-sm">
          <BaseAlert v-if="error" :message="error" class="bg-red-500"/>
          <div class="mb-3">
            <label for="name" class="block mb-2 text-sm text-gray-900">Full Name *</label>
            <input id="name" type="text" class="text-field" placeholder="Full name" v-model="name" />
          </div>
          <div class="mb-3">
            <label for="email" class="block mb-2 text-sm text-gray-900">Email *</label>
            <input
              id="email"
              type="email"
              class="text-field"
              placeholder="Email address"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="block mb-2 text-sm text-gray-900">Password *</label>
            <input
              id="password"
              type="password"
              class="text-field"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="mt-5">
            <button type="submit" class="button button-blue w-full rounded-md">Create An Account</button>
          </div>
        </div>
      </form>
      <div class="mt-10">
        <p class="text-center">
          Already have an account?
          <router-link to="/login" class="text-blue underline hover:no-underline">Back to login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseAlert from '@/components/Base/BaseAlert.vue';

export default {
  name: 'Signup',
  components: { BaseAlert },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async onSubmit() {
      try {
        const res = await fetch(`http://localhost:3000/user/create`, {
          method: 'POST',
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        });
        const json = await res.json();

        if (json.message) {
          this.error = json.message;
        }
      } catch (e) {
        this.error = e.message ? e.message : 'Invalid signup.';
      }
    },
  },
};
</script>
