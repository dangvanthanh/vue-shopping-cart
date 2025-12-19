import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { categories } from '@/router/categories.ts'
import { product } from '@/router/product.ts'
import { products } from '@/router/products.ts'

const app = new Hono()

// Middleware setup
app.use('*', logger(), prettyJSON(), cors())

// Route setup
app.route('/product', product)
app.route('/products', products)
app.route('/categories', categories)

Deno.serve(app.fetch)
