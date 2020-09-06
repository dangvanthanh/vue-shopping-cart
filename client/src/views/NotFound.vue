<template>
  <div class="h-screen flex items-center">
    <div class="w-full max-w-lg mx-auto py-12 px-6">
      <div class="text-center">
        <IconDonutLove class="inline-block align-middle w-128" />
        <h3 class="text-3xl my-10">Page not found</h3>
        <router-link
          to="/"
          class="relative inline-block align-middle py-3 px-8 leading-5 border border-transparent rounded-md text-white font-semibold bg-blue focus:outline-none focus:shadow-outline"
        >Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import IconDonutLove from '../components/Icons/IconDonutLove.vue';

export default {
  name: 'NotFound',
  components: { IconDonutLove },
};
</script>
