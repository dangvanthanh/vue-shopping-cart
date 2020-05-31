<template>
  <div>
    <product-detail :product="product" />
  </div>
</template>

<script>
import ProductDetail from '../components/ProductDetail.vue';

export default {
  name: 'Product',
  components: { ProductDetail },
  data() {
    return {
      product: {},
    };
  },
  async mounted() {
    try {
      const res = await fetch(
        `http://localhost:3000/product/${this.$route.params.id}`
      );
      const json = await res.json();
      this.product = json;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
