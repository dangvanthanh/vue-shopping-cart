<template>
  <div class="container max-w-xl mx-auto mb-4">
    <div class="flex">
      <div class="w-1/4">
        <Categories/>
      </div>
      <div class="w-3/4">
        <div class="cards">
          <div class="flex shadow-lg rounded-lg overflow-hidden bg-white" v-for="product in products" :key="product._id">
            <Product :product="product"/>
          </div>
        </div>
        <Pagination :currentPage="currentPage" :pages="pages" @handler-page="clickHandlerPage"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/product';
import Product from '@/components/Product.vue';
import Pagination from '@/components/Pagination.vue';
import Categories from '@/components/Categories.vue';

export default {
  components: { Product, Pagination, Categories },
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
    clickHandlerPage(page) {
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
