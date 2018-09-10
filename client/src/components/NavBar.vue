<template>
  <div class="container mw-7 mx-auto mt-4">
    <nav class="flex">
      <div class="flex">
        <router-link class="block no-underline text-grey-dark mt-3" tag="a" :to="{ name: 'home' }">Vue Shopping Cart</router-link>
      </div>
      <div class="flex-grow">
        <div class="flex-grow text-right">
          <div v-for="category in categories" :key="category._id" class="inline-block">
            <router-link class="block no-underline p-3 text-grey-dark" tag="a" :to="{ name: 'category', params: { category: category.title } }">
              {{ category.title }}
            </router-link>
          </div>
          <router-link tag="a" :to = "{name: 'checkout'}" class="inline-block">Cart(<span class="badge badge-light">{{ cart.length }}</span>)</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Api from '../config/api';

export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    Api()
      .get('/categories')
      .then(res => {
        this.categories = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    }
  }
};
</script>
