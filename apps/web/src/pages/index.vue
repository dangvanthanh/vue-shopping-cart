<script setup lang="ts">
import { getProducts } from '@/api'
import Product from '@/components/Product.vue'
import ProductSkeleton from '@/components/ProductSkeleton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useRequest } from 'alova/client'
import { css } from '../../styled-system/css'
import { grid } from '../../styled-system/patterns'

const { loading, data: products, error } = useRequest(getProducts)
</script>

<template>
  <BaseLayout>
    <h2 :class="css({ fontSize: '3xl', lineHeight: 1, fontWeight: 600, mb: 6, mt: 2 })">All Bikes</h2>
    <div v-if="loading" :class="grid({
      columns: { base: 1, md: 2, lg: 3 },
      gap: { base: 4, md: 5, lg: 6 },
    })
      ">
      <template v-for="_ in 6">
        <ProductSkeleton />
      </template>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <template v-else>
      <div v-if="products" :class="grid({
        columns: { base: 1, md: 2, lg: 3 },
        gap: { base: 4, md: 5, lg: 6 },
      })
        ">
        <template v-for="product in products">
          <Product :product="product" />
        </template>
      </div>
    </template>
  </BaseLayout>
</template>
