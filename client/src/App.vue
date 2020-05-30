<template>
  <div class="app">
    <header role="banner" class="bg-blue-500">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center px-5 py-3">
        <router-link
          to="/"
          class="flex items-center text-xl text-white leading-none uppercase"
        >
          <span>Shopyyy</span>
        </router-link>
        <nav class="flex-1 flex-wrap items-center text-right">
          <router-link to="/login" class="inline-block text-white"
            >Login</router-link
          >
          <router-link to="/signup" class="inline-block text-white ml-3">
            Signup</router-link
          >
        </nav>
      </div>
    </header>
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
}
</script>

<style>

</style>
