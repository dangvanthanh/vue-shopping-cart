<template>
  <div>
    <NavBar />
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="flex flex-wrap -m-3">
        <div v-for="product in products" :key="product.id" class="flex w-full p-3 md:w-1/2 lg:w-1/4">
          <Product :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: { NavBar, Product },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug ? this.$route.params.slug : 'all';
    },
  },
  watch: {
    $route: 'getProducts',
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const res = await fetch(`http://localhost:3000/products`);
        const json = await res.json();
        this.products = json;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
