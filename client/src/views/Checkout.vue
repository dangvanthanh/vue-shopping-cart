<template>
  <div>
    <NavBar :isCategory="false" />
    <div class="max-w-5xl mx-auto px-6 py-12">
      <h2 class="text-3xl text-gray-900 font-medium mb-8">My Cart</h2>
      <template v-if="totalCart">
        <div class="flex flex-wrap -mx-5 b">
          <div class="w-full md:w-2/3 px-5">
            <div class="hidden pb-5 md:flex flex-wrap items-center">
              <div class="flex-1 w-0">Item</div>
              <div class="w-32 text-center">Price</div>
              <div class="w-32 text-center px-3">Qty</div>
              <div class="w-32 text-right">Subtotal</div>
            </div>
            <template v-for="item in carts">
              <ProductCart class="border-b border-gray-300 mb-2 rounded" :key="item.id" :product="item" />
            </template>
          </div>
          <div class="w-full md:w-1/3 px-5">
            <div class="bg-white rounded p-3">
              <h3 class="text-xl font-semibold mb-3">Order Summary</h3>
              <div class="flex flex-wrap py-3">
                <div class="flex-1 w-0">
                  <span class="text-base">Subtotal</span>
                </div>
                <div class="text-right">
                  <strong class="text-base">$ {{ totalAmount }}</strong>
                </div>
              </div>
              <div class="flex flex-wrap py-3 border-t border-gray-300">
                <div class="flex-1 w-0">
                  <span class="text-base">Incl. {{ tax }} % Tax </span>
                </div>
                <div class="text-right">
                  <strong class="text-base">$ {{ totalTax }}</strong>
                </div>
              </div>
              <div class="flex flex-wrap py-3 border-t border-gray-300">
                <div class="flex-1 w-0">
                  <span class="text-base">Order Total</span>
                </div>
                <div class="text-right">
                  <strong class="text-base">$ {{ totalGrand }}</strong>
                </div>
              </div>
              <button class="button button-blue rounded-md mt-5 w-full" disabled>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <p>You have no items in your shopping cart.</p>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import NavBar from '@/components/Shared/NavBar.vue'
import ProductCart from '@/components/Product/ProductCart.vue'

export default {
  name: 'Checkout',
  components: { NavBar, ProductCart },
  computed: {
    ...mapState('cart', ['carts', 'tax']),
    ...mapGetters('cart', ['totalTax', 'totalCart', 'totalAmount', 'totalGrand']),
  },
}
</script>
