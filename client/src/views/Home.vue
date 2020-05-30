<template>
  <div class="flex flex-wrap -m-3">
    <div v-for="n in 16" :key="n" class="w-full p-3 md:w-1/2 lg:w-1/4">
      <product />
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: { Product },
};
</script>
