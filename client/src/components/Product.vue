<template>
  <div>
    <router-link
      to="/product/1"
      class="block relative h-48 rounded overflow-hidden"
    >
      <img
        src="https://dummyimage.com/423x263"
        class="object-cover object-center w-full h-full block"
      />
    </router-link>
    <div class="mt-3">
      <h2 class="text-gray-900 text-lg font-medium">Shifty Boa White 2020</h2>
      <p class="mt-1">$ 75.90</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
};
</script>
