<template>
  <div class="app">
    <header role="banner" class="bg-blue">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center px-5 py-5">
        <router-link
          to="/"
          class="flex items-center text-3xl text-white leading-none uppercase relative"
        >
          <span>S</span>
        </router-link>
      </div>
    </header>
    <nav class="bg-white shadow">
      <div class="max-w-5xl mx-auto px-5">
        <ol>
          <li class="inline-block align-middle" v-for="category in categories" :key="category.id">
            <router-link
              :to="`/${category.slug}`"
              class="block text-lg border-b-2 border-transparent p-3 hover:border-orange p-3"
            >{{ category.name }}</router-link>
          </li>
        </ol>
      </div>
    </nav>
    <main role="main">
      <div class="max-w-5xl mx-auto px-5 py-12">
        <router-view />
      </div>
    </main>
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
      this.categories = json;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
nav .router-link-exact-active.router-link-active {
  @apply border-orange;
}
</style>
