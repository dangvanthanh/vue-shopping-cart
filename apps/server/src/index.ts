import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { categories } from '@/router/categories.ts'
import { product } from '@/router/product.ts'
import { products } from '@/router/products.ts'

const app = new Hono()

app
	.use('*', logger(), prettyJSON(), cors())
	.route('/categories', categories)
	.route('/product', product)
	.route('/products', products)

Deno.serve(app.fetch)
