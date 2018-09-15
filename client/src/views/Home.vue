<template>
  <div class="container max-w-lg mx-auto mb-4">
    <div class="cards">
      <div class="flex shadow-lg rounded-lg overflow-hidden bg-white" v-for="product in products" :key="product._id">
        <Product :product="product"/>
      </div>
    </div>
    <!-- <p class="text-center mt-6 mb-0">{{ currentPage }} / {{ pages }}</p> -->
    <ul class="flex list-reset align-center justify-center mb-4 mt-4">
      <li>
        <button 
          class="block bg-white p-2 mx-2 border border-grey-light rounded"
          @click="checkPage(currentPage - 1)" 
          v-if="currentPage !== 1">
          Previous
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <button 
          class="block bg-white p-2 mx-2 border border-grey-light rounded"
          :disabled="currentPage === page"
          @click="checkPage(page)" >
          {{ page }}
        </button>
      </li>
      <li>
        <button 
          class="block bg-white p-2 mx-2 border border-grey-light rounded"
          @click="checkPage(currentPage + 1)" 
          v-if="currentPage !== pages">
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from '@/config/api';
import Product from '@/components/Product.vue';

export default {
  components: {Product},
  data() {
    return {
      products: [],
      currentPage: 0,
      pages: 0
    };
  },
  created() {
    Api()
      .get('/products')
      .then(res => {
        this.products = res.data.products;
        this.currentPage = res.data.currentPage;
        this.pages = res.data.pages;
      });
  },
  methods: {
    checkPage(page) {
      Api()
        .get(`/products?page=${page}`)
        .then(res => {
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
