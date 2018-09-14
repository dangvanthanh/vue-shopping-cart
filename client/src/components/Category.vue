<template>
  <div class="container mw-7 mx-auto">
    <div class="cards">
      <div class="shadow-lg rounded-lg overflow-hidden" v-for="product in products" :key="product._id">
        <div class="px-6 py-4">
          <Product :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../config/api';
import Product from './product/Product.vue';

export default {
  props: ['category'],
  components: {Product},
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

