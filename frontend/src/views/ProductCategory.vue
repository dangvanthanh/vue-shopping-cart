<template>
  <div class="max-w-6xl mx-auto mb-4 px-4">
    <Categories :categories="categories" />
    <div class="flex flex-wrap">
      <div class="w-full mt-6">
        <div class="cards">
          <div
            class="shadow-lg rounded-lg overflow-hidden bg-white"
            v-for="product in products"
            :key="product._id"
          >
            <Product :product="product" />
          </div>
        </div>
        <Pagination
          :currentPage="currentPage"
          :pages="pages"
          pageLimit="5"
          @handler-page="clickHandlerPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CategoryService from '@/services/category';
import Product from '@/components/Product.vue';
import Pagination from '@/components/Pagination.vue';
import Categories from '@/components/Categories.vue';

export default {
  props: ['category'],
  components: { Product, Pagination, Categories },
  data() {
    return {
      products: [],
      currentPage: 0,
      pages: 0
    };
  },
  created() {
    this.fetch();
  },
  watch: {
    $route(to, from) {
      if (from.params.category !== to.params.category) {
        this.fetch();
      }
    }
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  },
  methods: {
    async fetch() {
      try {
        const { data } = await CategoryService.getCategoriesByTitle(
          this.category
        );
        this.products = data.products;
        this.currentPage = data.currentPage;
        this.pages = data.pages;
      } catch (__) {}
    },
    async clickHandlerPage(page) {
      try {
        const { data } = CategoryService.getCategoriesByPage(
          this.category,
          page
        );
        this.products = data.products;
        this.currentPage = data.currentPage;
        this.pages = data.pages;
      } catch (__) {}
    }
  }
};
</script>

<style scoped></style>
