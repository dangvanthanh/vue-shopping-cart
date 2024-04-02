<script setup lang="ts">
import { css } from '../../styled-system/css'
</script>

<template>
  <div
    :class="
      css({
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      })
    "
  >
    <slot></slot>
  </div>
</template>
