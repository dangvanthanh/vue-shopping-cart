<template>
  <div class="block">
    <div v-for="category in categories" :key="category._id" class="block">
      <router-link 
        tag="a" 
        :to="{ name: 'category', params: { category: category.title } }" 
        class="block no-underline py-3 text-grey-dark text-capitalize" >
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
      categories: []
    };
  },
  created() {
    CategoryService.getCategories().then(res => {
      this.categories = res.data.categories;
    });
  },
}
</script>

<style scoped>
</style>

