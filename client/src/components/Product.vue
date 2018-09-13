<template>
  <div>
    <router-link tag="a" :to="{ name: 'product', params: { id: product._id } }">
      <img :src="product.image" :alt="product.name">
    </router-link>
    <h3>{{ product.name }}</h3>
    <p>{{ product.description.substring(0, 50) }}</p>
    <p>Category: {{ product.category }}</p>
    <p>${{ product.price }}</p>
    <router-link tag="a" :to="{ name: 'product', params: { id: product._id }}">Desciption</router-link>
    <button @click="addToCart(product)">Buy Now</button>
  </div>
</template>

<script>
import addToCart from '../mixins/addToCart';

export default {
  props: ['product'],
  mixins: [addToCart]
};
</script>
