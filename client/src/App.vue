<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      categories: [],
    };
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
