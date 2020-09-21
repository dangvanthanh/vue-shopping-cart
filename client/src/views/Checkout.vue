<template>
  <div>
    <NavBar :isCategory="false" />
    <div class="max-w-5xl mx-auto px-6 py-12">
      <h2 class="text-3xl text-gray-900 font-medium mb-8">My Cart</h2>
      <template v-if="totalCart">
        <div class="py-3 flex flex-wrap items-center">
          <div class="flex-1 w-0">Item</div>
          <div class="w-24 text-center">Price</div>
          <div class="w-32 text-center px-3">Qty</div>
          <div class="w-32 text-right">Subtotal</div>
        </div>
        <template v-for="item in carts">
          <ProductCart class="border-b border-gray-300" :key="item.id" :product="item" />
        </template>
        <hr class="my-5 border border-b border-gray-300" />
        <div class="flex flex-wrap">
          <div class="flex-1 w-0">
            <strong class="text-lg">Subtotal</strong>
          </div>
          <div class="text-right">
            <strong class="text-lg">$ {{ totalAmount }}</strong>
          </div>
        </div>
        <button class="button button-blue rounded-md mt-5 w-full">Proceed to Checkout</button>
      </template>
      <template v-else>
        <p>You have no items in your shopping cart.</p>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import NavBar from '@/components/Shared/NavBar.vue';
import ProductCart from '@/components/Product/ProductCart.vue';

export default {
  name: 'Checkout',
  components: { NavBar, ProductCart },
  computed: {
    ...mapState('cart', ['carts']),
    ...mapGetters('cart', ['totalCart', 'totalAmount']),
  },
};
</script>
