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
          <li class="inline-block align-middle">
            <a href="#" class="block text-lg border-b-2 border-orange p-3">Road Bikes</a>
          </li>
          <li class="inline-block align-middle">
            <a href="#" class="block text-lg border-b-2 border-transparent p-3 hover:border-orange">Mountain Bikes</a>
          </li>
          <li class="inline-block align-middle">
            <a href="#" class="block text-lg border-b-2 border-transparent p-3 hover:border-orange">Electric Bikes</a>
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
}
</script>

<style>
</style>
