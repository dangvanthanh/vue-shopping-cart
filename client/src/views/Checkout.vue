<template>
  <div>
    <NavBar :isCategory="false" />
    <div class="max-w-5xl mx-auto px-6 py-12">
      <h2 class="text-3xl text-gray-900 font-medium mb-8">My Cart</h2>
      <p>You have no items in your shopping cart.</p>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/Shared/NavBar.vue';

export default {
  name: 'Checkout',
  components: { NavBar },
};
</script>
