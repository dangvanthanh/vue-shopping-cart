<template>
  <div class="container mw-7 mx-auto">
    <div class="cards">
      <div class="flex shadow-lg rounded-lg overflow-hidden" v-for="product in products" :key="product._id">
        <div class="px-6 py-4">
          <Product :product="product"/>
        </div>
      </div>
    </div>
    <p class="text-center mt-6 mb-0">{{currentPage+1 }} / {{ pages }}</p>
    <ul class="flex list-reset align-center justify-center mb-4 mt-4">
      <li>
        <button class="block p-2 mx-2 border border-grey-light rounded" @click="checkPage(prevUrl)" :disabled="prevUrl === ''">Previous</button>
      </li>
      <li>
        <button class="block p-2 mx-2 border border-grey-light rounded" @click="checkPage(nextUrl)" :disabled="nextUrl === ''">Next</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from '../config/api';
import Product from './product/Product.vue';

export default {
  components: {Product},
  data() {
    return {
      products: [],
      currentPage: 0,
      pages: 0,
      prevUrl: '',
      nextUrl: ''
    };
  },
  created() {
    Api()
      .get('/products')
      .then(res => {
        this.products = res.data.products;
        this.currentPage = res.data.currentPage;
        this.pages = res.data.pages;
        this.prevUrl = res.data.prevUrl;
        this.nextUrl = res.data.nextUrl;
      });
  },
  methods: {
    checkPage(url) {
      Api()
        .get(url)
        .then(res => {
          this.products = res.data.products;
          this.currentPage = res.data.currentPage;
          this.pages = res.data.pages;
          this.prevUrl = res.data.prevUrl;
          this.nextUrl = res.data.nextUrl;
        });
    }
  }
};
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
