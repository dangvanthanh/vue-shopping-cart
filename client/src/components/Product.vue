<template>
  <div class="py-2 px-3">
    <router-link tag="a" :to="{ name: 'product', params: { id: product._id } }">
      <img :src="product.image" :alt="product.name">
    </router-link>
    <h3 class="text-lg mb-1 leading-tight">{{ product.name }}</h3>
    <p class="text-sm mb-1">Category: <span class="text-capitalize">{{ product.category }}</span></p>
    <p class="text-sm text-grey-darker mb-1">{{ product.description.substring(0, 50) }}</p>
    <p class="font-semibold text-lg">{{ product.price | currency }}</p>
    <button 
      class="block w-full border shadow p-2 rounded mt-2 hover:bg-blue-dark hover:text-white" 
      @click="addToCart(product)">
      Add To Cart
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
