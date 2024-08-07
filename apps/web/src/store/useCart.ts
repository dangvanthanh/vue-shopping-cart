import type { Product, ProductCart } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
	const cart = ref<ProductCart[]>([])

	function addToCart(product: Product) {
		const newProduct = Object.assign({}, product) as ProductCart
		const productExist = cart.value.find((c) => c.id === newProduct.id)

		if (productExist) {
			productExist.quanlity += 1
		} else {
			newProduct.quanlity = 1
			cart.value.push(newProduct)
		}
	}

	function removeFromCart(id: string) {
		const index = cart.value.findIndex((c) => c.id === id)

		if (index > -1) {
			cart.value.splice(index, 1)
		}
	}

	return {
		cart,
		addToCart,
		removeFromCart,
	}
})
