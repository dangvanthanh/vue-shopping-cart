<template>
  <div class="container max-w-lg mx-auto mb-4">
    <div class="cards">
      <div class="shadow-lg rounded-lg overflow-hidden bg-white" v-for="product in products" :key="product._id">
        <Product :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/config/api';
import Product from '@/components/Product.vue';

export default {
  props: ['category'],
  components: { Product },
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

<style scoped>
</style>

