import type { Product, ProductCart } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
	const cart = ref<ProductCart[]>([])

	function addToCart(product: Product) {
		const productExist = cart.value.find((c) => c.id === product.id)

		if (productExist) {
			productExist.quantity += 1
		} else {
			const newProduct: ProductCart = { ...product, quantity: 1 }
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
