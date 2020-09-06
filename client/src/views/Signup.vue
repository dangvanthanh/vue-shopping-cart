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
      <form>
        <div class="rounded-md shadow-sm">
          <div class="mb-3">
            <label for="firstName" class="block mb-2 text-sm text-gray-900">First Name *</label>
            <input
              id="firstName"
              type="text"
              class="text-field"
              placeholder="First name"
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="block mb-2 text-sm text-gray-900">Last Name *</label>
            <input
              id="lastName"
              type="text"
              class="text-field"
              placeholder="Last name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="block mb-2 text-sm text-gray-900">Email *</label>
            <input
              id="email"
              type="email"
              class="text-field"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="block mb-2 text-sm text-gray-900">Password *</label>
            <input
              id="password"
              type="password"
              class="text-field"
              placeholder="Password"
            />
          </div>
          <div class="mt-5">
            <button
              type="submit"
              class="button button-blue w-full rounded-md"
            >Create An Account</button>
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
export default {
  name: 'Signup',
};
</script>
