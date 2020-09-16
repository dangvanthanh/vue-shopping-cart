<template>
  <div class="px-3 py-2 mb-3 text-white text-sm rounded">{{ message }}</div>
</template>

<script>
export default {
  name: 'BaseAlert',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
