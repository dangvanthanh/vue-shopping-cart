<template>
  <div class="container mw-7 mx-auto">
    <img :src="product.image" :alt="product.name" class="img-fluid">
    <h2>{{ product.name }}</h2>
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
import addToCart from '../mixins/addToCart';

export default {
  props: ['id'],
  mixins: [addToCart],
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
  }
};
</script>

