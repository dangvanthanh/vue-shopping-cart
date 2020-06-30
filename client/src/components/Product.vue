<template>
  <div class="bg-white shadow rounded-lg py-6">
    <div class="px-6">
      <div class="block relative h-48 rounded overflow-hidden">
        <img :src="product.thumbnail" class="object-cover object-center w-full h-full block" />
      </div>
    </div>
    <div class="px-3">
      <h2 class="text-gray-900 text-base font-medium my-3">{{ product.title }}</h2>
      <p class="mb-3 text-blue-600 text-lg font-bold text-orange">$ {{ product.price }}</p>
      <router-link
        :to="`/product/${product.id}`"
        class="button button-primary w-full"
      >View Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
};
</script>
