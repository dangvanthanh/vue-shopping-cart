import type { Category, Product } from '@/types'
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
	transformData: transformData<Category>(),
})

export const getProducts = alovaInstance.Get('/products', {
	transformData: transformData<Product>(),
})

export const getProductsByCategory = (category: string) =>
	alovaInstance.Get(`/products/${category}`, {
		transformData: transformData<Product>(),
	})

export const getOthersProductsById = (id: string) =>
	alovaInstance.Get(`/products/others/${id}`, {
		transformData: transformData<Product>(),
	})

export const getProductById = (id: string) =>
	alovaInstance.Get(`/product/${id}`, {
		transformData: ({ data }: { data: Product }) => data,
	})
