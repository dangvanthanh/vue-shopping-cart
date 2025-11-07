<script setup lang="ts">
import { getOthersProductsById, getProductById } from '@/api'
import ProductDetail from '@/components/product/Detail.vue'
import ProductDetailSkeleton from '@/components/product/DetailSkeleton.vue'
import ProductItem from '@/components/product/Item.vue'
import ProductItemSkeleton from '@/components/product/ItemSkeleton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { css } from '@styled-system/css'
import { grid } from '@styled-system/patterns'
import { useRequest } from 'alova/client'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const {
	loading: loadingProduct,
	data: product,
	error: errorProduct,
} = useRequest(() => getProductById(id))

const {
	loading: loadingOthersProducts,
	data: othersProducts,
	error: errorOthersProducts,
} = useRequest(() => getOthersProductsById(id))

watch(
	() => route.params.id,
	(newId) => {
		const newSlugId = newId as unknown as string

		const { onSuccess: onSuccessProduct } = useRequest(() =>
			getProductById(newSlugId),
		)

		const { onSuccess: onSuccessOthersProducts } = useRequest(() =>
			getOthersProductsById(newSlugId),
		)

		onSuccessProduct((response) => {
			product.value = response.data
		})

		onSuccessOthersProducts((response) => {
			othersProducts.value = response.data
		})
	},
)
</script>

<template>
	<BaseLayout>
		<div v-if="loadingProduct">
			<ProductDetailSkeleton/>
		</div>
		<div v-else-if="errorProduct">{{ errorProduct.message }}</div>
		<div v-else>
			<template v-if="product">
				<ProductDetail :product="product"/>
			</template>
		</div>
		<h2
			:class="css({
      fontSize: '2xl',
      fontWeight: '600',
      mb: 8,
    })
      "
		>
			Others bike
		</h2>
		<div
			v-if="loadingOthersProducts"
			:class="grid({
      columns: { base: 1, md: 2, lg: 3 },
      gap: { base: 4, md: 5, lg: 6 },
    })
      "
		>
			<template v-for="_ in 3">
				<ProductItemSkeleton/>
			</template>
		</div>
		<div v-else-if="errorOthersProducts">{{ errorOthersProducts.message }}</div>
		<div
			v-if="othersProducts"
			:class="grid({
      columns: { base: 1, md: 2, lg: 3 },
      gap: { base: 4, md: 5, lg: 6 },
    })
      "
		>
			<template v-for="otherProduct in othersProducts">
				<ProductItem :product="otherProduct"/>
			</template>
		</div>
	</BaseLayout>
</template>
