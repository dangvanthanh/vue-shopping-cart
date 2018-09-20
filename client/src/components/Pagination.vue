<template>
  <div class="mb-4 mt-6" v-if="_pages > 1">
    <div class="flex align-center justify-center">
      <div class="flex">
        <PaginationItem 
          class="rounded rounded-r-none" 
          @hanlder-click="handlerPage(_currentPage - 1)" 
          :class="{ 'cursor-default text-grey-light pointer-events-none': _currentPage === 1 }">
          Previous
        </PaginationItem>
      </div>
      <div class="flex">
        <PaginationItem 
          v-for="page in _pages" :key="page"
          @hanlder-click="handlerPage(page)" 
          :class="{ 'cursor-default text-white pointer-events-none bg-blue-dark': _currentPage === page }">
          {{ page }}
        </PaginationItem>
      </div>
      <div class="flex">
        <PaginationItem 
          @hanlder-click="handlerPage(_currentPage + 1)" 
          :class="{ 'cursor-default text-grey-light pointer-events-none': _currentPage === _pages }">
          Next
        </PaginationItem>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
  props: ['currentPage', 'pages'],
  components: { PaginationItem },
  computed: {
    _currentPage() {
      return this.currentPage;
    },
    _pages() {
      return this.pages;
    },
    _limit() {
      return this.limit || 3;
    }
  },
  methods: {
    handlerPage(page) {
      this.$emit('handler-page', page);
    },
    pagination(page) {
      return (
        Math.abs(page - this._currentPage) < this._limit ||
        page == this._pages - 1 ||
        page == 0
      );
    }
  }
};
</script>

<style scoped>
</style>
