<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import appwrite from './services/appwrite';

export default {
  name: 'App',
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    if (localStorage.getItem('cookieFallback')) {
      const response = await appwrite.account.get();
      this.$store.dispatch('auth/authenticated', response);
    }
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost:3000/categories');
      const json = await res.json();
      this.$store.dispatch('category/getCategories', json);
    } catch {
      this.$store.dispatch('category/getCategories', []);
    }
  },
};
</script>

<style>
</style>
