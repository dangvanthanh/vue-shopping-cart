<template>
  <div class="flex flex-wrap -m-3">
    <div
      v-for="product in products"
      :key="product.id"
      class="w-full p-3 md:w-1/2 lg:w-1/4"
    >
      <product :product="product" />
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: { Product },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/products');
    const json = await res.json();
    this.products = json;
  },
};
</script>
