<template>
  <div>
    <img :src="product.image" :alt="product.name" class="img-fluid">
    <h5>{{ product.name }}</h5>
    <p><span class="font-weight-bold">Category</span>: {{ product.category }}</p>
    <p class="text-danger font-weight-bold">${{product.price}}</p>
    <p>
      {{ product.description }}
    </p>
    <button class="btn btn-outline-primary mb-5" @click="addToCart(product)">Buy Now</button>
  </div>
</template>

<script>
import Api from '../config/api';

export default {
  props: ['id'],
  data() {
    return {
      product: {}
    };
  },
  created() {
    Api()
      .get(`/products/${this.id}`)
      .then(res => {
        this.product = res.data;
      });
  },
  methods: {
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length === 0) {
        let item = {
          id: product._id,
          name: product.name,
          price: product.price,
          subtotal: product.price * 1,
          qty: 1
        };
        cart.push(item);
        this.$store.commit('setCart', item);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item = cart.find(item => {
          return item.id === product._id;
        });
        if (item) {
          // check if is not new item
          item.qty++;
          item.subtotal = item.price * item.qty;
          this.$store.commit('setQuantity', item);
          this.$store.commit('setPrice', item);
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let item = {
            id: product._id,
            name: product.name,
            price: product.price,
            subtotal: product.price * 1,
            qty: 1
          };
          cart.push(item);
          this.$store.commit('setCart', item);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    }
  }
};
</script>

