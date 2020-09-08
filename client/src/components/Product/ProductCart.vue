<template>
  <div class="bg-white shadow py-3 flex flex-wrap items-center">
    <div class="flex-1 w-0 px-3">
      <div class="flex flex-wrap items-center">
        <div class="w-16">
          <img
            :src="product.thumbnail"
            class="object-cover object-center w-full h-full block bg-gray-500 rounded"
          />
        </div>
        <div class="flex-1 w-0 px-3">{{ product.title }}</div>
      </div>
    </div>
    <div class="w-24 text-center">$ {{ product.price }}</div>
    <div class="w-32 text-center px-3">
      <div class="flex flex-wrap items-center">
        <button class="button">-</button>
        <span class="flex-1 w-0 px-3 text-gray-800">{{ product.quantity }}</span>
        <button class="button">+</button>
      </div>
    </div>
    <div class="w-32 text-right px-3">$ {{ product.price * product.quantity }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
