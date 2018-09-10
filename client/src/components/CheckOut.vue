<template>
  <div class="container mw-7 mx-auto">
    <div v-if="cart.length == 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <table class="table-fixed w-full border border-grey-light text-center">
        <thead>
          <tr class="bg-grey">
            <th class="p-3">Product</th>
            <th class="p-3">Price</th>
            <th class="p-3">Quantity</th>
            <th class="p-3">Sub Total</th>
            <th class="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id" class="border hover:bg-grey-lighter">
            <td class="p-2">{{ item.name }}</td>
            <td class="p-2">${{ item.price }}</td>
            <td class="p-2">{{ item.qty }}</td>
            <td class="p-2">${{ item.subtotal }}</td>
            <td class="p-2">
              <button class="inline-block px-2" @click="action('min', item)">-</button>
              <button class="inline-block px-2" @click="action('clear', item)">Clear</button>
              <button class="inline-block px-2" @click="action('max', item)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="text-right mt-4">Total: ${{ total }}</h4> 
    </div>
  </div>
</template>

<script>
import Api from '../config/api';

export default {
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    total() {
      let total = 0;
      this.cart.map(item => {
        total += item.subtotal;
      });

      return total;
    }
  },
  methods: {
    action(event, item) {
      switch(event) {
        case 'max':
          item.qty++;
          item.subtotal = item.price * item.qty;
          this.$store.commit('setQuantity', item);
          this.$store.commit('setPrice', item);
          localStorage.setItem('cart', JSON.stringify(this.cart));
          break;
        case 'min':
          item.qty--;
          item.subtotal = item.price * item.qty;
          this.$store.commit('setQuantity', item);
          this.$store.commit('setPrice', item);
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
}
</script>
