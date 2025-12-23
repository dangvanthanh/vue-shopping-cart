import { Hono } from 'hono'
import { vValidator } from 'hono/valibot-validator'
import { object, string } from 'valibot'
import { categoriesData, productsData } from '@/config/sampleDB.ts'
import type { Category, Product } from '../types'

const products = new Hono()

const categorySchema = object({
	category: string(),
})

const productSchema = object({
	id: string(),
})

products
	.get('/', (c) => c.json({ ok: true, data: productsData }))
	.get('/:category', vValidator('param', categorySchema), (c) => {
		const { category } = c.req.valid('param')
		const newCatategory = categoriesData.find(
			(cat: Category) => cat.slug === category,
		)
		const newProducts = productsData.filter(
			(product: Product) => product.category === newCatategory?.id,
		)

		return c.json({
			ok: true,
			data: newProducts,
		})
	})
	.get('/others/:id', vValidator('param', productSchema), (c) => {
		const { id } = c.req.valid('param')
		const product = productsData.find((p) => p.id === id)
		const newProducts = productsData.filter(
			(p: Product) => p.category === product?.category && p.id !== id,
		)
		const othersProduct = Array.from({ length: 3 }, () => {
			const randomIndex = Math.floor(Math.random() * newProducts.length)
			return newProducts.splice(randomIndex, 1)[0]
		})

		return c.json({
			ok: true,
			data: othersProduct,
		})
	})

export { products }
