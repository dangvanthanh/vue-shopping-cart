<template>
  <a 
    href="#" 
    class="inline-block no-underline text-grey-darker bg-white p-2 px-3 shadow-md" 
    @click.prevent="handlerClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  methods: {
    handlerClick() {
      this.$emit('hanlder-click');
    }
  }
}
</script>

