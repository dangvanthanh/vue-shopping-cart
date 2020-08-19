<template>
  <div class="bg-white shadow rounded pb-5 flex flex-col overflow-hidden">
    <div class="block relative h-48 overflow-hidden">
      <v-lazy-image :src="product.thumbnail" class="object-cover object-center w-full h-full block" />
    </div>
    <div class="px-3 flex-1">
      <h2 class="text-gray-900 text-base font-medium my-3">{{ product.title }}</h2>
      <p class="mb-3 text-blue-600 text-lg font-bold text-orange">$ {{ product.price }}</p>
    </div>
    <div class="px-3">
      <router-link :to="`/product/${product.id}`" class="button button-primary w-full">View Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
};
</script>
