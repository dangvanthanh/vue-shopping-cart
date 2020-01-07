<template>
  <div class="max-w-6xl mx-auto mb-4 px-4">
    <div
      v-for="category in categories"
      :key="category._id"
      class="inline-block"
    >
      <router-link
        tag="a"
        :to="{ name: 'category', params: { category: category.title } }"
        :class="{
          'border-blue-600 text-blue-600': currentCategory == category.title
        }"
        class="block no-underline p-3 text-grey-600 capitalize border-b-4 border-transparent hover:border-blue-600"
      >
        {{ category.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['categories'],
  data() {
    return {
      currentCategory: ''
    };
  },
  watch: {
    $route() {
      this.getCurrentCategory();
    }
  },
  created() {
    this.getCurrentCategory();
  },
  methods: {
    getCurrentCategory() {
      if (this.$route.params.category) {
        this.currentCategory = this.$route.params.category;
      } else {
        this.currentCategory = '';
      }
    }
  }
};
</script>

<style scoped></style>
