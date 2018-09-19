<template>
  <div class="mb-4 mt-6" v-if="_pages > 1">
    <span class="block text-center mb-2">{{ _currentPage }} of {{ _pages }}</span>
    <ul class="flex list-reset align-center justify-center">
      <li>
        <a
          href="#"
          class="inline-block no-underline text-grey-darker bg-white p-2 px-3 shadow-md rounded rounded-r-none"
          @click.prevent="handlePageClick(_currentPage - 1)" 
          :class="{ 'cursor-default text-grey-light pointer-events-none': _currentPage === 1 }">
          Previous
        </a>
      </li>
      <li v-for="page in _pages" :key="page" v-if="pagination(page)">
        <a
          href="#"
          class="inline-block no-underline text-grey-darker bg-white p-2 px-3 shadow-md"
          :class="{ 'cursor-default text-white pointer-events-none bg-blue-dark': _currentPage === page }"
          @click.prevent="handlePageClick(page)" >
          {{ page }}
        </a>
      </li>
      <li>
        <a 
          href="#"
          class="inline-block no-underline text-grey-darker bg-white p-2 px-3 shadow-md rounded rounded-l-none"
          @click.prevent="handlePageClick(_currentPage + 1)" 
          :class="{ 'cursor-default text-grey-light pointer-events-none': _currentPage === _pages }">
          Next
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['currentPage', 'pages', 'onPageChange'],
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
    handlePageClick(page) {
      this.onPageChange(page);
    },
    pagination(page) {
      return Math.abs(page - this._currentPage) < this._limit || page == this._pages - 1 || page == 0;
    }
  }
};
</script>

<style scoped>
</style>
