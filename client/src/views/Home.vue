<template>
  <div class="container max-w-lg mx-auto mb-4">
    <div class="cards">
      <div class="flex shadow-lg rounded-lg overflow-hidden bg-white" v-for="product in products" :key="product._id">
        <Product :product="product"/>
      </div>
    </div>
    <ul class="flex list-reset align-center justify-center mb-4 mt-6" v-if="pages > 1">
      <li>
        <button 
          class="block bg-white p-2 px-3 border border-grey-light rounded rounded-r-none hover:outline-none"
          @click="checkPage(currentPage)" 
          :disabled="currentPage === 1">
          Previous
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <button 
          class="block bg-white p-2 px-3 border border-grey-light hover:outline-none"
          :disabled="currentPage === page"
          @click="checkPage(page)" >
          {{ page }}
        </button>
      </li>
      <li>
        <button 
          class="block bg-white p-2 px-3 border border-grey-light rounded rounded-l-none hover:outline-none"
          @click="checkPage(currentPage + 1)" 
          :disabled="currentPage === pages">
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import ProductService from '@/services/product';

export default {
  components: { Product },
  data() {
    return {
      products: [],
      currentPage: 0,
      pages: 0
    };
  },
  created() {
    ProductService.getProducts().then(res => {
      this.products = res.data.products;
      this.currentPage = res.data.currentPage;
      this.pages = res.data.pages;
    });
  },
  methods: {
    checkPage(page) {
      ProductService.getProductsByPage(page).then(res => {
        this.products = res.data.products;
        this.currentPage = res.data.currentPage;
        this.pages = res.data.pages;
      });
    }
  }
};
</script>

<style scoped>
</style>
