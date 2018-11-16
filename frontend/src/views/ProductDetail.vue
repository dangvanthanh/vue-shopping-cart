<template>
  <div class="container max-w-xl mx-auto mb-4 px-4">
    <div class="flex bg-white p-2 shadow">
      <div class="w-1/2">
        <img :src="currentProduct.image" :alt="currentProduct.name" class="img-fluid">
      </div>
      <div class="w-1/2 px-2">
        <h2 class="text-2xl mb-2 leading-tight font-medium">{{ currentProduct.name }}</h2>
        <p class="text-lg font-semibold mb-3">{{ currentProduct.price | currency }}</p>
        <p class="text-sm mb-3">Category: <span class="text-capitalize">{{ currentProduct.category }}</span></p>
        <p class="text-base text-grey-darker mb-5">
          {{ currentProduct.description }}
        </p>
        <button 
          class="block w-full border shadow p-2 rounded hover:bg-blue-dark hover:text-white" 
          @click="addToCart(currentProduct)">
          Add To Cart
        </button>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-2xl mb-6">You may also like</h3>
      <div class="cards">
      <div class="flex shadow-lg rounded-lg overflow-hidden bg-white" v-for="product in products" :key="product._id">
        <Product :product="product"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/product';
import addToCart from '@/mixins/addToCart';
import Product from '@/components/Product.vue';

export default {
  props: ['id'],
  components: { Product },
  mixins: [addToCart],
  data() {
    return {
      products: [],
      currentProduct: {}
    };
  },
  watch: {
    $route(to, from) {
      if (from.params.id !== to.params.id) {
        this.fetch();
      }
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      ProductService.getProductsById(this.id).then(res => {
        this.currentProduct = res.data.product;
      });

      ProductService.getProductsRelatedById(this.id).then(res => {
        this.products = res.data.products;
      });
    }
  }
};
</script>

