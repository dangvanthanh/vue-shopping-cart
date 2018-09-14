<template>
  <div class="container mw-7 mx-auto mt-4">
    <nav class="flex">
      <div class="flex">
        <router-link
          tag="a" 
          :to="{ name: 'home' }" 
          class="block no-underline text-grey-dark mt-3">
          Vue Shopping Cart
        </router-link>
      </div>
      <div class="flex-grow">
        <div class="flex-grow text-right">
          <Category :categories="categories"/>
          <router-link 
            tag="a" 
            :to = "{name: 'checkout'}" 
            class="inline-block">
            Cart(<span class="badge badge-light">{{ cart.length }}</span>)
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Api from '../config/api';
import Category from './category/Category.vue';

export default {
  components: {Category},
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
      });
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    }
  }
};
</script>

<style>
.text-capitalize {
  text-transform: capitalize;
}
</style>

