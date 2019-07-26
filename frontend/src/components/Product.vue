<template>
  <div>
    <router-link
      tag="a"
      :to="{ name: 'product', params: { id: product._id } }"
      class="block"
    >
      <img :src="product.image" :alt="product.name" />
    </router-link>
    <div class="p-3">
      <h3 class="text-lg mb-1 leading-tight font-medium">{{ product.name }}</h3>
      <p class="font-semibold text-md mb-2">{{ product.price | currency }}</p>
      <p class="text-sm text-grey-darker mb-2">
        {{ product.description.substring(0, 50) }}
      </p>
      <button
        class="block w-full border shadow p-2 rounded mt-2 hover:bg-blue-600 hover:text-white"
        @click="addToCart(product)"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script>
import addToCart from '@/mixins/addToCart';

export default {
  props: ['product'],
  mixins: [addToCart]
};
</script>
