<template>
  <section class="bg-white shadow rounded overflow-hidden">
    <div class="flex flex-wrap">
      <img
        alt
        class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center bg-gray-500"
        :src="product.thumbnail"
      />
      <div class="lg:w-1/2 w-full p-6">
        <h1 class="text-gray-900 text-3xl font-medium mb-1">{{ product.title }}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg
              :fill="fillStar(n, product.rating)"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 text-orange"
              viewBox="0 0 24 24"
              v-for="n in 5"
              :key="n"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
            <span class="text-gray-700 ml-3">
              {{ product.rating }}
              {{ product.rating > 1 ? 'Reviews' : 'Review' }}
            </span>
          </span>
        </div>
        <p class="leading-relaxed">{{ product.description }}</p>

        <p class="mt-6">
          <span class="font-semibold text-2xl text-orange">$ {{ product.price }}</span>
        </p>

        <div class="flex flex-wrap items-center mt-6">
          <div class="flex-1 w-0">
            <button class="button button-primary w-full">Add to cart</button>
          </div>
          <button
            class="rounded-full w-12 h-12 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    fillStar(n, rating) {
      return n <= rating ? 'currentColor' : 'none';
    },
  },
};
</script>
