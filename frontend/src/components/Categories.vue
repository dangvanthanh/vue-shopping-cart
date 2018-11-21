<template>
  <div class="block box-shadow bg-white rounded md:mr-4">
    <div
      v-for="(category, index) in categories"
      :key="category._id"
      class="block"
    >
      <router-link
        tag="a"
        :to="{ name: 'category', params: { category: category.title } }"
        :class="{
          'bg-blue-dark text-white': currentCategory == category.title,
          'border-t border-grey-lighter': index === 0
        }"
        class="block no-underline p-3 text-grey-dark capitalize"
      >
        {{ category.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
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
  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
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
