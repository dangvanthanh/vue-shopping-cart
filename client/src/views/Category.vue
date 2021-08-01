<template>
  <div>
    <NavBar />
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="flex flex-wrap -m-3">
        <div
          v-for="product in products"
          :key="product.id"
          class="flex w-full p-3 md:w-1/2 lg:w-1/4"
        >
          <Product :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Shared/NavBar.vue'
import Product from '@/components/Product/Product.vue'

export default {
  name: 'Category',
  components: { NavBar, Product },
  data() {
    return {
      products: [],
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug ? this.$route.params.slug : 'all'
    },
  },
  watch: {
    $route: 'getProducts',
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      try {
        const categories = {
          all: '1',
          'road-bikes': '2',
          'mountain-bikes': '3',
          'electric-bikes': '4',
          'touring-bikes': '5',
        }

        const res = await fetch(
          `http://localhost:3000/products/${categories[this.slug]}`
        )
        const json = await res.json()
        this.products = json
      } catch (e) {
        this.$router.push({
          name: 'home',
        })
      }
    },
  },
}
</script>
