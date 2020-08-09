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
      <p class="my-5 text-base leading-5 text-center text-gray-900">Log in to your account</p>
      <form>
        <div class="rounded-md shadow-sm">
          <div>
            <input
              type="email"
              class="border-gray-300 placeholder-gray-500 appearance-none rounded-none relative block w-full p-3 border text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              type="password"
              class="border-gray-300 placeholder-gray-500 appearance-none rounded-none relative block w-full p-3 border text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              placeholder="Password"
            />
          </div>
          <div class="mt-5">
            <button
              type="submit"
              class="relative block w-full p-3 leading-5 border border-transparent rounded-md text-white font-semibold bg-blue focus:outline-none focus:shadow-outline"
            >Log in</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
