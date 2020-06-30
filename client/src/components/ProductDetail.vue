<template>
  <section class="bg-white shadow rounded-lg p-6">
    <div class="flex flex-wrap">
      <img
        alt=""
        class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        :src="product.thumbnail"
      />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 class="text-gray-900 text-3xl font-medium mb-1">
          {{ product.title }}
        </h1>
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
              ></path>
            </svg>
            <span class="text-gray-700 ml-3"
              >{{ product.rating }}
              {{ product.rating > 1 ? 'Reviews' : 'Review' }}</span
            >
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a class="text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                ></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">
          {{ product.description }}
        </p>

        <div class="flex mt-6">
          <span class="font-semibold text-2xl text-orange"
            >$ {{ product.price }}</span
          >
          <button
            class="flex ml-auto button button-primary px-6"
          >
            Add to cart
          </button>
          <button
            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
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
              ></path>
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
  props: ['product'],
  methods: {
    fillStar(n, rating) {
      return n <= rating ? 'currentColor' : 'none';
    },
  },
};
</script>
