import { Hono } from 'hono'
import { vValidator } from 'hono/valibot-validator'
import { object, string } from 'valibot'
import { productsData } from '@/config/sampleDB.ts'
import type { Product } from '../types'

const product = new Hono()

const productSchema = object({
	id: string(),
})

product.get('/:id', vValidator('param', productSchema), (c) => {
	const { id } = c.req.valid('param')
	const product = productsData.find((p: Product) => p.id === id)

	return c.json({
		ok: true,
		data: product,
	})
})

export { product }
