<template>
  <div class="container max-w-lg mx-auto mb-4">
    <div class="bg-white p-6" v-if="cart.length == 0">
      <p>Your cart is empty</p>
    </div>
    <div class="bg-white p-2" v-else>
      <table class="table-fixed w-full border border-grey-light text-center">
        <thead>
          <tr class="bg-grey-light uppercase text-sm">
            <th class="px-2 py-3">Product</th>
            <th class="px-2 py-3">Price</th>
            <th class="px-2 py-3">Quantity</th>
            <th class="px-2 py-3">Sub Total</th>
            <th class="px-2 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id" class="border hover:bg-grey-lighter">
            <td class="p-2 text-left">{{ item.name }}</td>
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
      <h4 class="text-right text-2xl mt-6">Total: ${{ total }}</h4> 
    </div>
  </div>
</template>

<script>
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

<style scoped>
</style>
