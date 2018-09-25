<template>
  <div class="container max-w-xl mx-auto mb-4">
    <div class="bg-white p-6" v-if="cart.length == 0">
      <p>Your cart is empty</p>
    </div>
    <div class="bg-white rounded box-shadow p-4" v-else>
      <table class="table-fixed w-full border border-grey-light text-center">
        <thead>
          <tr class="bg-grey-light uppercase text-sm">
            <th></th>
            <th class="px-2 py-3 text-left">Product</th>
            <th class="px-2 py-3">Price</th>
            <th class="px-2 py-3">Quantity</th>
            <th class="px-2 py-3">Sub Total</th>
            <th class="px-2 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id" class="border shadow">
            <td class="p-2"><img :src="item.image" alt="" class="w-16"></td>
            <td class="p-2 text-left">{{ item.name }}</td>
            <td class="p-2">{{ item.price | currency }}</td>
            <td class="p-2">
              <button class="inline-block px-2" @click="action('min', item)">-</button>
              <span class="inline-block w-8">{{ item.qty }}</span>
              <button class="inline-block px-2" @click="action('max', item)">+</button>
            </td>
            <td class="p-2">{{ item.subtotal | currency }}</td>
            <td class="p-2">
              <button class="px-2" @click="action('clear', item)">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="text-right text-xl mt-4">Total: {{ cartTotal | currency }}</h4> 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      cart: 'getCart',
      cartTotal: 'getCartTotal'
    })
  },
  methods: {
    ...mapActions(['incrementCart', 'decrementCart']),
    action(event, item) {
      switch (event) {
        case 'max':
          this.incrementCart(item);
          localStorage.setItem('cart', JSON.stringify(this.cart));
          break;
        case 'min':
          this.decrementCart(item);
          localStorage.setItem('cart', JSON.stringify(this.cart));

          if (item.qty === 0) {
            this.clearFromCart(item);
          }

          break;
        case 'clear':
          this.clearFromCart(item);
          break;
        default:
          break;
      }
    },
    clearFromCart(product) {
      let item = this.cart.find(item => {
        return item.id === product.id;
      });
      let index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
};
</script>

<style scoped>
</style>
