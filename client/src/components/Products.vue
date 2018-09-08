<template>
  <div class="container mw-7 mx-auto">
    <div class="cards">
      <div class="shadow-lg rounded-lg overflow-hidden" v-for="product in products" :key="product._id">
        <div class="px-6 py-4">
          <router-link tag="a" :to="{ name: 'product', params: { id: product._id } }">
            <img :src="product.image" :alt="product.name">
          </router-link>
          <h3>{{ product.name }}</h3>
          <p>Category: {{ product.category }}</p>
          <p>{{ product.description.substring(0, 50) }}</p>
          <p>${{ product.price }}</p>
          <router-link tag="a" :to="{ name: 'product', params: { id: product._id }}">Desciption</router-link>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
    <p class="text-center mt-4 mb-0">{{currentPage+1 }} / {{ pages }}</p>
    <ul class="flex list-reset">
      <li>
        <button class="block" @click="checkPage(prevUrl)" :disabled="prevUrl === ''">Previous</button>
      </li>
      <li>
        <button class="block" @click="checkPage(nextUrl)" :disabled="nextUrl === ''">Next</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from '../config/api';

export default {
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
  grid-template-columns: 32% 32% 32%;
  grid-gap: 1rem;
}
</style>
