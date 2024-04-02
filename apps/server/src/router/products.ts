import { categoriesData, productsData } from '../config/sampleDB.ts'
import { Hono } from '../deps.ts'

const products = new Hono()

products
	.get('/', (c) => c.json({ ok: true, data: productsData }))
	.get('/:category', (c) => {
		const category = c.req.param('category')
		const newCatategory = categoriesData.find((cat) => cat.slug === category)
		const newProducts = productsData.filter(
			(product) => product.category === newCatategory.id,
		)

		return c.json({
			ok: true,
			data: newProducts,
		})
	})
	.get('/others/:id', (c) => {
		const id = c.req.param('id')
		const product = productsData.find((p) => p.id === id)
		const newProducts = productsData.filter(
			(p) => p.category === product?.category && p.id !== id,
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
