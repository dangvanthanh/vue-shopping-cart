<template>
  <div class="mb-4 mt-6" v-if="totalPages > 1">
    <div class="flex align-center justify-center">
      <div class="flex">
        <PaginationItem 
          class="rounded rounded-r-none" 
          @hanlder-click="handlerPage(_currentPage - 1)" 
          v-if="isFirst">
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
          v-if="isLast">
          Next
        </PaginationItem>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
  props: ['currentPage', 'pageLimit', 'pages'],
  components: { PaginationItem },
  data() {
    return {
      isHasTotalPages: false,
      isFirst: false,
      isLast: false,
      _pages: []
    };
  },
  computed: {
    _currentPage() {
      return this.currentPage;
    },
    _pageLimit() {
      return this.pageLimit || 5
    },
    totalPages() {
      if (this.pages && !this.isHasTotalPages) {
        this.isHasTotalPages = true;
        this.pagination(1, this.pages);
      }

      return this.pages;
    }
  },
  methods: {
    handlerPage(page) {
      this.$emit('handler-page', page);
      this.pagination(page, this.totalPages);
    },
    pagination(current, total) {
      this._pages = [];
      let upperLimit, lowerLimit;
      const currentPage = (lowerLimit = upperLimit = Math.min(current, total));

      for (let b = 1; b < this._pageLimit && b < total; ) {
        if (lowerLimit > 1) {
          lowerLimit--;
          b++;
        }

        if (b < this._pageLimit && upperLimit < total) {
          upperLimit++;
          b++;
        }
      }

      for (let i = lowerLimit; i <= upperLimit; i++) {
        this._pages.push(i);
      }

      this.isFirst = this._pages.indexOf(1) === -1;
      this.isLast = this._pages.indexOf(total) === -1;
    }
  }
};
</script>

<style scoped>
</style>
