<template>
  <div class="inline-block">
    <div v-for="category in categories" :key="category._id" class="inline-block">
      <router-link 
        tag="a" 
        :to="{ name: 'category', params: { category: category.title } }" 
        class="block no-underline p-3 text-grey-dark text-capitalize" >
        {{ category.title  }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['categories']
}
</script>

<style scoped>
</style>

