<template>
  <div class="bg-white mb-4">
    <div class="container max-w-lg mx-auto">
      <nav class="flex">
        <div class="flex">
          <router-link
            tag="a" 
            :to="{ name: 'home' }" 
            class="block no-underline text-grey-dark mt-4">
            Cartyyy
          </router-link>
        </div>
        <div class="flex-grow">
          <div class="flex-grow text-right">
            <Category :categories="categories"/>
            <router-link 
              tag="a" 
              :to = "{name: 'checkout'}" 
              class="inline-block no-underline p-3 text-grey-dark text-capitalize">
              <span class="align-middle inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6.305-15l-3.432 12H5.945L3.008 8H14.17l-1.412 5h2.078l1.977-7H0l4.615 11h13.239l3.474-12h1.929L24 3h-4.195z"/></svg></span>
              (<span class="badge badge-light">{{ cart.length }}</span>)
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

