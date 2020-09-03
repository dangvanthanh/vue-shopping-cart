<template>
  <div class="h-screen flex items-center">
    <div class="w-full max-w-md mx-auto py-12 px-6">
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
              class="border-gray-300 placeholder-gray-500 appearance-none relative block w-full p-3 border text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              placeholder="First name"
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="block mb-2 text-sm text-gray-900">Last Name *</label>
            <input
              id="lastName"
              type="text"
              class="border-gray-300 placeholder-gray-500 appearance-none relative block w-full p-3 border text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              placeholder="Last name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="block mb-2 text-sm text-gray-900">Email *</label>
            <input
              id="email"
              type="email"
              class="border-gray-300 placeholder-gray-500 appearance-none relative block w-full p-3 border text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="block mb-2 text-sm text-gray-900">Password *</label>
            <input
              id="password"
              type="password"
              class="border-gray-300 placeholder-gray-500 appearance-none relative block w-full p-3 border text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              placeholder="Password"
            />
          </div>
          <div class="mt-5">
            <button
              type="submit"
              class="relative block w-full p-3 leading-5 border border-transparent rounded-md text-white font-semibold bg-blue focus:outline-none focus:shadow-outline"
            >Create An Account</button>
          </div>
        </div>
      </form>
      <div class="mt-6">
        <p>
          <router-link to="/login" class="text-blue underline hover:no-underline">Back to login?</router-link>
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
