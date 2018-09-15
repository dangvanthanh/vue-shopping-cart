<template>
  <div class="bg-white mb-4">
    <div class="container max-w-lg mx-auto">
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
              class="inline-block no-underline p-3 text-grey-dark text-capitalize">
              Cart(<span class="badge badge-light">{{ cart.length }}</span>)
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Api from '@/config/api';
import Category from '@/components/Category.vue';

export default {
  components: { Category },
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

