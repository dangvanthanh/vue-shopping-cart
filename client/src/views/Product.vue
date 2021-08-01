<template>
  <div>
    <NavBar />
    <div class="max-w-5xl mx-auto px-6 py-12">
      <ProductDetail
        :product="product"
        @addProductToCart="handlerAddProductToCart"
      />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Shared/NavBar.vue'
import ProductDetail from '@/components/Product/ProductDetail.vue'

export default {
  name: 'Product',
  components: { NavBar, ProductDetail },
  data() {
    return {
      product: {},
    }
  },
  async mounted() {
    try {
      const res = await fetch(
        `http://localhost:3000/product/${this.$route.params.id}`
      )
      const json = await res.json()
      this.product = json
    } catch (e) {
      this.$router.push({
        name: 'home',
      })
    }
  },
  methods: {
    handlerAddProductToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product)
    },
  },
}
</script>
