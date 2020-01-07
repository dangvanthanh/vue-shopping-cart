<template>
  <div class="max-w-6xl mx-auto mb-4 px-4">
    <Categories :categories="categories" />
    <div class="flex flex-wrap">
      <div class="w-full mt-6">
        <div class="cards">
          <div
            class="flex shadow-lg rounded-lg overflow-hidden bg-white"
            v-for="product in products"
            :key="product._id"
          >
            <Product :product="product" />
          </div>
        </div>
        <div class="text-center mt-6">
          <a
            href="#"
            class="w-full rounded inline-block px-4 py-3 bg-blue-dark text-white no-underline rounded"
            @click.prevent="loadMoreProduct"
            v-if="isLoadMoreBtn"
          >Load more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductService from '@/services/product';
import CategoryService from '@/services/category';
import Product from '@/components/Product.vue';
import Categories from '@/components/Categories.vue';

export default {
  components: { Product, Categories },

  data() {
    return {
      bottom: false,
      products: [],
      currentPage: 0,
      pages: 0,
      isLoadMoreBtn: true,
      isLoadMoreFinish: false
    };
  },
  watch: {
    bottom(bottom) {
      if (bottom && !this.isLoadMoreFinish) {
        this.loadMoreProduct();
      }
    }
  },

  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  },

  async created() {
    try {
      const [products, categories] = await Promise.all([
        ProductService.getProducts(),
        CategoryService.getCategories()
      ])

      console.log(products);

      this.products = products.data.products;
      this.currentPage = products.data.currentPage;
      this.pages = products.data.pages;
      this.getAllCategories(categories.data.categories);
    } catch (__) {}
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });
  },
  methods: {
    ...mapActions(['getAllCategories']),
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    async clickHandlerPage(page) {
      try {
        const { data } = await ProductService.getProductsByPage(page);
        this.products = data.products;
        this.currentPage = data.currentPage;
        this.pages = data.pages;
      } catch (__) {}
    },
    async loadMoreProduct() {
      try {
        const page = this.currentPage + 1;
        const { data } = await ProductService.getProductsByPage(page);
        if (!data.products.length) {
          this.isLoadMoreBtn = false;
          this.isLoadMoreFinish = true;
          return;
        }

        data.products.forEach(product => {
          this.products.push(product);
        });

        this.currentPage = page;
      } catch (__) {}
    }
  }
};
</script>

<style scoped></style>
