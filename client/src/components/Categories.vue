<template>
  <div class="block box-shadow bg-white mr-4 rounded">
    <div v-for="(category, index) in categories" :key="category._id" class="block">
      <router-link 
        tag="a" 
        :to="{ name: 'category', params: { category: category.title } }" 
        :class="{ 
          'bg-blue-dark text-white': currentCategory == category.title, 
          'rounded rounded-b-none': index == 0,
          'rounded rounded-t-none': index == categories.length - 1,
        }"
        class="block no-underline p-3 text-grey-dark text-capitalize" >
        {{ category.title  }}
      </router-link>
    </div>
  </div>
</template>

<script>
import CategoryService from '@/services/category';

export default {
  data() {
    return {
      categories: [],
      currentCategory: ''
    };
  },
    watch: {
    $route(to, from) {
      this.getCurrentCategory();
    }
  },
  created() {
    CategoryService.getCategories().then(res => {
      this.categories = res.data.categories;
    });

    this.getCurrentCategory();
  },
  methods: {
    getCurrentCategory() {
      if (this.$route.params.category) {
        this.currentCategory = this.$route.params.category
      } else {
        this.currentCategory = '';
      }
    }
  }
}
</script>

<style scoped>
</style>

