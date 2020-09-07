<template>
  <div>
    <NavBar :isCategory="false" />
    <div class="max-w-5xl mx-auto px-6 py-12">
      <h2 class="text-3xl text-gray-900 font-medium mb-8">My Cart</h2>
      <template v-if="carts.length">
        <div v-for="cart in carts" :key="cart.id">
          <ProductCart
             class="mb-3"
            :cart="cart"
            @decrement="decrementProduct"
            @increment="incrementProduct"
          />
        </div>
      </template>
      <template v-else>
        <p>You have no items in your shopping cart.</p>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from '../components/Shared/NavBar.vue';
import ProductCart from '../components/Product/ProductCart.vue';

export default {
  name: 'Checkout',
  components: { NavBar, ProductCart },
  computed: {
    ...mapState('cart', ['carts']),
  },
  methods: {
    decrementProduct(id) {
      console.log(id);
      this.$store.dispatch('cart/decrementProduct', id);
    },
    incrementProduct(id) {
      this.$store.dispatch('cart/incrementProduct', id);
    },
  },
};
</script>
