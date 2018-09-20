<template>
  <div class="container max-w-lg mx-auto mb-4">
    <div class="flex bg-white p-2 shadow">
      <div class="w-1/2">
        <img :src="product.image" :alt="product.name" class="img-fluid">
      </div>
      <div class="w-1/2 px-2">
        <h2 class="text-2xl mb-2 leading-tight font-medium">{{ product.name }}</h2>
        <p class="text-lg font-semibold mb-3">{{ product.price | currency }}</p>
        <p class="text-sm mb-3">Category: <span class="text-capitalize">{{ product.category }}</span></p>
        <p class="text-base text-grey-darker mb-5">
          {{ product.description }}
        </p>
        <button 
          class="block w-full border shadow p-2 rounded hover:bg-blue-dark hover:text-white" 
          @click="addToCart(product)">
          Add To Cart
        </button>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-2xl">You may also like</h3>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/product';
import addToCart from '@/mixins/addToCart';

export default {
  props: ['id'],
  mixins: [addToCart],
  data() {
    return {
      product: {}
    };
  },
  created() {
    ProductService.getProductsById(this.id).then(res => {
      this.product = res.data.product
    });
  }
};
</script>

