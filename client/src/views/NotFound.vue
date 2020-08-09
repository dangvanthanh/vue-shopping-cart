<template>
  <div class="h-screen flex items-center">
    <div class="w-full max-w-md mx-auto py-12 px-6">
      <p class="text-2xl text-base leading-5 text-center text-gray-900">404 - Page not found.</p>
      <div class="text-center mt-10">
        <router-link
          to="/"
          class="relative inline-block align-middle py-3 px-8 leading-5 border border-transparent rounded-md text-white font-semibold bg-blue focus:outline-none focus:shadow-outline"
        >Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
