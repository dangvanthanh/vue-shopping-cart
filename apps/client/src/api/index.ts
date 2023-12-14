import { ICategory, IProduct } from '@/types'
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
	transformData: transformData<ICategory>(),
})

export const getProducts = alovaInstance.Get('/products', {
	transformData: transformData<IProduct>(),
})

export const getProductsByCategory = (category: string) =>
	alovaInstance.Get(`/products/${category}`, {
		transformData: transformData<IProduct>(),
	})

export const getOthersProductsById = (id: string) =>
	alovaInstance.Get(`/products/others/${id}`, {
		transformData: transformData<IProduct>(),
	})

export const getProductById = (id: string) =>
	alovaInstance.Get(`/product/${id}`, {
		transformData: ({ data }: { data: IProduct }) => data,
	})
