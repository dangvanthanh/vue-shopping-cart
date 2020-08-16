<template>
  <div>
    <header role="banner" class="bg-blue">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center px-5 py-5">
        <router-link
          to="/"
          class="flex items-center text-3xl text-white leading-none uppercase relative"
        >
          <span>S</span>
        </router-link>
        <div class="flex-1 w-0 text-right">
          <router-link to="/login" class="ml-2 font-medium text-white p-3">Login</router-link>
          <router-link to="/signup" class="ml-2 font-medium text-white p-3">Signup</router-link>
        </div>
      </div>
    </header>
    <nav class="bg-white shadow">
      <div class="max-w-5xl mx-auto px-5">
        <ol>
          <li class="inline-block align-middle" v-for="category in categories" :key="category.id">
            <router-link
              :to="`/category/${category.slug}`"
              class="block text-lg border-b-2 border-transparent p-3 hover:border-orange p-3"
            >{{ category.name }}</router-link>
          </li>
        </ol>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState('category', ['categories']),
  },
};
</script>

<style scoped>
nav .router-link-exact-active.router-link-active {
  @apply border-orange;
}
</style>
