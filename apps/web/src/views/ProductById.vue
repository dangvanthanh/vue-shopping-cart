<script setup lang="ts">
import { getOthersProductsById, getProductById } from '@/api'
import Product from '@/components/Product.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductDetailSkeleton from '@/components/ProductDetailSkeleton.vue'
import ProductSkeleton from '@/components/ProductSkeleton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { useRequest } from 'alova'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { css } from '../../styled-system/css'
import { grid } from '../../styled-system/patterns'

const route = useRoute()

const id = ref(route.params.id as string)

const { loading, data: product, error } = useRequest(getProductById(id.value))
const {
	loading: loadingOthersProducts,
	data: othersProducts,
	error: errorOthersProducts,
} = useRequest(getOthersProductsById(id.value))

watch(
	() => route.params.id,
	async (newId) => {
		const { data: newProduct, onSuccess: onSuccessProduct } = useRequest(
			getProductById(newId as string),
		)

		const { data: newOthersProducts, onSuccess: onSuccessOthersProducts } =
			useRequest(getOthersProductsById(newId as string))

		onSuccessProduct(() => {
			product.value = newProduct.value
		})

		onSuccessOthersProducts(() => {
			othersProducts.value = newOthersProducts.value
		})

		id.value = newId as string
	},
)
</script>

<template>
  <BaseLayout>
    <div v-if="loading">
      <ProductDetailSkeleton />
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <template v-if="product">
        <ProductDetail :product="product" />
      </template>
    </div>
    <h2 :class="css({
      fontSize: '2xl',
      fontWeight: '600',
      mb: 8,
    })
      ">
      Others bike
    </h2>
    <div v-if="loadingOthersProducts" :class="grid({
      columns: { base: 1, md: 2, lg: 3 },
      gap: { base: 4, md: 5, lg: 6 },
    })
      ">
      <template v-for="_ in 3">
        <ProductSkeleton />
      </template>
    </div>
    <div v-else-if="errorOthersProducts">{{ errorOthersProducts.message }}</div>
    <div v-if="othersProducts" :class="grid({
      columns: { base: 1, md: 2, lg: 3 },
      gap: { base: 4, md: 5, lg: 6 },
    })
      ">
      <template v-for="otherProduct in othersProducts">
        <Product :product="otherProduct" />
      </template>
    </div>
  </BaseLayout>
</template>
