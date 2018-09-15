<template>
  <div class="p-2">
    <router-link tag="a" :to="{ name: 'product', params: { id: product._id } }">
      <img :src="product.image" :alt="product.name">
    </router-link>
    <h3 class="text-lg mb-1 leading-tight">{{ product.name }}</h3>
    <p class="text-sm mb-1">Category: <span class="text-capitalize">{{ product.category }}</span></p>
    <p class="text-sm text-grey-darker mb-1">{{ product.description.substring(0, 50) }}</p>
    <p class="font-semibold text-lg">${{ product.price }}</p>
    <button 
      class="block w-full border p-2 rounded mt-2 hover:bg-grey-light" 
      @click="addToCart(product)">
      Buy Now
    </button>
  </div>
</template>

<script>
import addToCart from '@/mixins/addToCart';

export default {
  props: ['product'],
  mixins: [addToCart]
};
</script>
