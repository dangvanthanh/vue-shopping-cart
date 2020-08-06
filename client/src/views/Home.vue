<template>
  <div class="flex flex-wrap -m-3">
    <div v-for="product in products" :key="product.id" class="w-full p-3 md:w-1/2 lg:w-1/4">
      <product :product="product" />
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: { Product },
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
        const categories = {
          'all': '1',
          'road-bikes': '2',
          'mountain-bikes': '3',
          'electric-bikes': '4',
          'touring-bikes': '5',
        };

        const res = await fetch(
          `http://localhost:3000/products/${categories[this.slug]}`
        );
        const json = await res.json();
        this.products = json;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
