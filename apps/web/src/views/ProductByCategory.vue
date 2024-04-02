<script setup lang="ts">
import { getProductsByCategory } from '@/api'
import Categories from '@/components/Categories.vue'
import Product from '@/components/Product.vue'
import ProductSkeleton from '@/components/ProductSkeleton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useRequest } from 'alova'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { grid } from '../../styled-system/patterns'

const route = useRoute()
const category = ref(route.params.category as string)

const {
	loading,
	data: products,
	error,
} = useRequest(getProductsByCategory(category.value))

watch(
	() => route.params.category,
	async (newCategory) => {
		const { data: newData, onSuccess } = useRequest(
			getProductsByCategory(newCategory as string),
		)

		onSuccess(() => {
			products.value = newData.value
		})

		category.value = newCategory as string
	},
)
</script>

<template>
  <BaseLayout>
    <Categories :category="(category as string)" />
    <div
      v-if="loading"
      :class="
        grid({
          columns: { base: 1, md: 2, lg: 3 },
          gap: { base: 4, md: 5, lg: 6 },
        })
      "
    >
      <template v-for="_ in 6">
        <ProductSkeleton />
      </template>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <div
        v-if="products"
        :class="
          grid({
            columns: { base: 1, md: 2, lg: 3 },
            gap: { base: 4, md: 5, lg: 6 },
          })
        "
      >
        <template v-for="product in products">
          <Product :product="product" />
        </template>
      </div>
    </div>
  </BaseLayout>
</template>
