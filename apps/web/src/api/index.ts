import type { CategoryProps, ProductProps } from '@/types'
import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

const alovaInstance = createAlova({
	baseURL: import.meta.env.VITE_BASE_URL_API,
	statesHook: VueHook,
	requestAdapter: GlobalFetch(),
	responded: (response) => response.json(),
})

const transformData =
	<T>() =>
	({ data }: { data: T[] }) =>
		data.map((item) => ({ ...item }))

export const getCategories = alovaInstance.Get('/categories', {
	transformData: transformData<CategoryProps>(),
})

export const getProducts = alovaInstance.Get('/products', {
	transformData: transformData<ProductProps>(),
})

export const getProductsByCategory = (category: string) =>
	alovaInstance.Get(`/products/${category}`, {
		transformData: transformData<ProductProps>(),
	})

export const getOthersProductsById = (id: string) =>
	alovaInstance.Get(`/products/others/${id}`, {
		transformData: transformData<ProductProps>(),
	})

export const getProductById = (id: string) =>
	alovaInstance.Get(`/product/${id}`, {
		transformData: ({ data }: { data: ProductProps }) => data,
	})
