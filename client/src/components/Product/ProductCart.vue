<template>
  <div class="bg-white shadow py-3 flex flex-wrap items-center">
    <div class="w-full lg:w-0 flex-1 px-3">
      <div class="flex flex-wrap items-center">
        <div class="w-24">
          <img
            :src="product.thumbnail"
            loading="lazy"
            class="object-cover object-center w-full h-full block bg-gray-500 rounded"
          />
        </div>
        <div class="flex-1 w-0 px-3">{{ product.title }}</div>
      </div>
    </div>
    <div
      class="
        bg-gray-200
        rounded
        w-full
        flex
        items-center
        justify-center
        mx-3
        mt-3
        px-3
        lg:bg-transparent
        lg:px-0
        lg:m-0
        lg:w-auto
      "
    >
      <div class="w-1/3 md:w-32 text-center">$ {{ product.price }}</div>
      <div class="w-1/3 md:w-32 text-center px-3">
        <div class="text-center md:text-auto md:flex md:flex-wrap md:items-center md:justify-center">
          <button class="button" @click.prevent="removeProductFromCart(product)">-</button>
          <span class="block md:flex md:flex-1 md:w-0 px-3 text-gray-800">{{ product.quantity }}</span>
          <button class="button" @click.prevent="addProductToCart(product)">+</button>
        </div>
      </div>
      <div class="w-1/3 text-center md:w-32 md:text-right px-3">$ {{ product.price * product.quantity }}</div>
    </div>
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
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product)
    },
    removeProductFromCart(product) {
      this.$store.dispatch('cart/removeProductFromCart', product)
    },
  },
}
</script>
