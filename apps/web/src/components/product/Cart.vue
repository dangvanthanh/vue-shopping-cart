<script setup lang="ts">
import IconClose from '@/components/icon/Close.vue'
import { formatcurrency } from '@/lib'
import { useCartStore } from '@/store'
import type { ProductCart } from '@/types'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'

defineProps<{
	product: ProductCart
}>()

const { removeFromCart } = useCartStore()
</script>

<template>
  <div :class="flex({ gap: 3, py: 3, borderBottomWidth: 1, borderColor: 'gray.200' })">
    <div :class="css({ minW: 24, h: 20, bg: 'gray.100', p: 2 })">
      <img :src="product.thumbnail" alt="" :class="css({ w: 'full', h: 'full', objectFit: 'contain' })"
        loading="lazy" />
    </div>
    <div :class="flex({ direction: 'column', gap: 1 })">
      <h3 :class="css({ fontWeight: 500, lineClamp: 1 })">
        {{ product.title }}
      </h3>
      <p :class="css({ color: 'gray.600', lineClamp: 1 })">
        {{ product.description }}
      </p>
      <div :class="flex({ align: 'center', justify: 'space-between' })">
        <p>{{ formatcurrency(product.price) }}</p>
        <p>
          {{ product.quanlity }}</p>
      </div>
    </div>
    <div :class="css({ mt: '2px' })">
      <button type="button" @click="removeFromCart(product.id)" :class="css({ cursor: 'pointer' })">
        <IconClose :class="css({ w: 4, h: 4 })" />
      </button>
    </div>
  </div>
</template>
