<template>
  <div class="App">
    <header role="banner" class="bg-blue-500">
      <div class="container mx-auto flex flex-wrap items-center p-5">
        <router-link to="/" class="flex items-center">
          <span class="text-xl">Shopyyy</span>
        </router-link>
        <nav class="flex flex-1 flex-wrap items-center text-right">
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">Signup</router-link>
        </nav>
      </div>
    </header>
    <main role="main">
      <div class="container mx-auto">
        <div class="flex flex-wrap -m-3">
          <div v-for="n in 8" :key="n" class="w-full p-3 md:w-1/2 lg:w-1/4">
            <product />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Product from './components/Product';

export default {
  components: { Product }
};
</script>

<style></style>
