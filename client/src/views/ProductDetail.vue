<template>
  <div class="container max-w-lg mx-auto mb-4">
    <div class="flex bg-white p-2">
      <div class="w-1/2">
        <img :src="product.image" :alt="product.name" class="img-fluid">
      </div>
      <div class="w-1/2 px-2">
        <h2 class="text-2xl mb-2 leading-tight">{{ product.name }}</h2>
        <p class="text-sm mb-2">Category: <span class="text-capitalize">{{ product.category }}</span></p>
        <p class="text-lg font-semibold mb-2">${{product.price}}</p>
        <p class="text-base text-grey-darker mb-2">
          {{ product.description }}
        </p>
        <button 
          class="block w-full border p-2 rounded mt-2 hover:bg-grey-light" 
          @click="addToCart(product)">
          Buy Now
        </button>
      </div>
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
      this.product = res.data;
    });
  }
};
</script>

