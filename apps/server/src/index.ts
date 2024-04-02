import { Hono, cors, logger, prettyJSON } from './deps.ts'
import { categories } from './router/categories.ts'
import { product } from './router/product.ts'
import { products } from './router/products.ts'

const app = new Hono()

app
	.use('*', logger())
	.use('*', prettyJSON())
	.use('*', cors())
	.route('/categories', categories)
	.route('/product', product)
	.route('/products', products)

Deno.serve(app.fetch)
