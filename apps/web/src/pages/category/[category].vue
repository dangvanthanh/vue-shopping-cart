<script setup lang="ts">
import { getCategories, getProductsByCategory } from '@/api'
import ProductItem from '@/components/product/Item.vue'
import ProductItemSkeleton from '@/components/product/ItemSkeleton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { css } from '@styled-system/css'
import { grid } from '@styled-system/patterns'
import { useRequest } from 'alova/client'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { category } = route.params

const {
	loading: loadingProducts,
	data: products,
	error: errorProducts,
} = useRequest(getProductsByCategory(category))
const { data: categories } = useRequest(getCategories)

watch(
	() => route.params.category,
	(newCategory) => {
		const newSlugCategory = newCategory as unknown as string

		const { onSuccess } = useRequest(getProductsByCategory(newSlugCategory))

		onSuccess((response) => {
			products.value = response.data
		})
	},
)
</script>

<template>
  <BaseLayout>
    <h2 :class="css({ fontSize: '3xl', lineHeight: 1, fontWeight: 600, mb: 6, mt: 2 })" v-if="categories">
      {{ categories.find(c => c.slug === category)?.name }}
    </h2>
    <div v-if="loadingProducts" :class="grid({
      columns: { base: 1, md: 2, lg: 3 },
      gap: { base: 4, md: 5, lg: 6 },
    })
      ">
      <template v-for="_ in 6">
        <ProductItemSkeleton />
      </template>
    </div>
    <div v-else-if="errorProducts">{{ errorProducts.message }}</div>
    <div v-else>
      <div v-if="products" :class="grid({
        columns: { base: 1, md: 2, lg: 3 },
        gap: { base: 4, md: 5, lg: 6 },
      })
        ">
        <template v-for="product in products">
          <ProductItem :product="product" />
        </template>
      </div>
    </div>
  </BaseLayout>
</template>
