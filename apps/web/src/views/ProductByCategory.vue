<script setup lang="ts">
import { getCategories, getProductsByCategory } from '@/api'
import Product from '@/components/Product.vue'
import ProductSkeleton from '@/components/ProductSkeleton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useRequest } from 'alova'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { css } from '../../styled-system/css'
import { grid } from '../../styled-system/patterns'

const route = useRoute()
const category = ref(route.params.category as string)

const {
	loading,
	data: products,
	error,
} = useRequest(getProductsByCategory(category.value))
const { data: categories } = useRequest(getCategories)

watch(
	() => route.params.category,
	async (newCategory) => {
		const { data: newProducts, onSuccess: onSuccessNewProducts } = useRequest(
			getProductsByCategory(newCategory as string),
		)
		const { data: newCategories, onSuccess: onSuccessNewCategories } =
			useRequest(getCategories)

		onSuccessNewProducts(() => {
			products.value = newProducts.value
		})

		onSuccessNewCategories(() => {
			categories.value = newCategories.value
		})

		category.value = newCategory as string
	},
)
</script>

<template>
  <BaseLayout>
    <h2 :class="css({fontSize: '3xl', lineHeight: 1, fontWeight: 600, mb: 6, mt: 2})" v-if="categories">
      {{ categories.find(c => c.slug === category)?.name }}
    </h2>
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
    <div v-else>
      <div v-if="products" :class="grid({
        columns: { base: 1, md: 2, lg: 3 },
        gap: { base: 4, md: 5, lg: 6 },
      })
        ">
        <template v-for="product in products">
          <Product :product="product" />
        </template>
      </div>
    </div>
  </BaseLayout>
</template>
