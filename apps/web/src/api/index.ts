import { createAlova } from 'alova'
import fetchAdapter from 'alova/fetch'
import VueHook from 'alova/vue'
import type { Category, Product } from '@/types'

const alovaInstance = createAlova({
	baseURL: import.meta.env.VITE_BASE_URL_API,
	statesHook: VueHook,
	requestAdapter: fetchAdapter(),
	responded: (response) => response.json(),
})

const transformData =
	<T>() =>
	({ data }: { data: T[] }) =>
		data.map((item) => ({ ...item }))

export const getCategories = alovaInstance.Get('/categories', {
	transform: transformData<Category>(),
})

export const getProducts = alovaInstance.Get('/products', {
	transform: transformData<Product>(),
})

export const getProductsByCategory = (category: string) =>
	alovaInstance.Get(`/products/${category}`, {
		transform: transformData<Product>(),
	})

export const getOthersProductsById = (id: string) =>
	alovaInstance.Get(`/products/others/${id}`, {
		transform: transformData<Product>(),
	})

export const getProductById = (id: string) =>
	alovaInstance.Get(`/product/${id}`, {
		transform: ({ data }: { data: Product }) => data,
	})
