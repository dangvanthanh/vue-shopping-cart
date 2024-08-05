import { Hono } from 'hono'
import { productsData } from '../config/sampleDB.ts'

const product = new Hono()

product.get('/:id', (c) => {
	const id = c.req.param('id')
	const product = productsData.find((p) => p.id === id)

	return c.json({
		ok: true,
		data: product,
	})
})

export { product }
