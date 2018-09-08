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
  </div>
</template>

<script>
import Api from '../config/api';

export default {
  props: ['category'],
  data() {
    return {
      products: []
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
  methods: {
    fetch() {
      Api()
        .get(`/categories/${this.category}`)
        .then(res => {
          this.products = res.data;
        });
    }
  }
};
</script>

