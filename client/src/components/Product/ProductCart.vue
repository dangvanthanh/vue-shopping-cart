<template>
  <div class="bg-white shadow p-3 flex flex-wrap items-center">
    <div class="w-16">
      <img
        :src="cart.thumbnail"
        class="object-cover object-center w-full h-full block bg-gray-500 rounded"
      />
    </div>
    <div class="flex-1 w-0 px-3">{{ cart.title }}</div>
    <div class="w-24 text-center font-bold text-orange">$ {{ cart.price }}</div>
    <div class="w-32 text-center px-3">
      <div class="flex flex-wrap items-center">
        <span
          class="w-8 h-8 rounded-full border border-gray-300 text-gray-500 cursor-pointer"
          @click.prevent="decrementProduct(cart.id)"
        >-</span>
        <span class="flex-1 w-0 px-3 text-gray-500">{{ cart.quantity }}</span>
        <span
          class="w-8 h-8 rounded-full border border-gray-300 text-gray-500 cursor-pointer"
          @click.prevent="incrementProduct(cart.id)"
        >+</span>
      </div>
    </div>
    <div class="w-32 text-right font-bold text-orange">$ {{ cart.price * cart.quantity }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart',
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  methods: {
    decrementProduct(id) {
      this.$emit('decrement', id);
    },
    incrementProduct(id) {
      this.$emit('increment', id);
    },
  },
};
</script>
