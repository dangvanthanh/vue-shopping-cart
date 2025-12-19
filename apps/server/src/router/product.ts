import { Effect } from 'effect'
import { Hono } from 'hono'
import { productsData } from '@/config/sampleDB.ts'
import type { Product } from '../types/index.ts'

const product = new Hono()

// Error types using tagged union pattern
type ProductError =
	| { _tag: 'ProductNotFoundError'; id: string; message: string }
	| { _tag: 'InvalidProductIdError'; message: string }

// Result types
type SuccessResult<T> = { ok: true; data: T }
type ErrorResult = { ok: false; error: string }
type ApiResult<T> = SuccessResult<T> | ErrorResult

// Effect-based service layer
const ProductService = {
	getProductById: (id: string): Effect.Effect<Product, ProductError> =>
		Effect.gen(function* () {
			if (!id || id.trim() === '') {
				return yield* Effect.fail<ProductError>({
					_tag: 'InvalidProductIdError',
					message: 'Product ID parameter is required',
				})
			}

			const foundProduct = productsData.find((p: Product) => p.id === id)
			if (!foundProduct) {
				return yield* Effect.fail<ProductError>({
					_tag: 'ProductNotFoundError',
					id,
					message: `Product with id ${id} not found`,
				})
			}

			return foundProduct
		}),
}

product.get('/:id', async (c) => {
	const id = c.req.param('id')

	const result = await Effect.runPromise(
		ProductService.getProductById(id).pipe(
			Effect.map(
				(product): ApiResult<Product> => ({ ok: true, data: product }),
			),
			Effect.catchAll(() =>
				Effect.succeed({
					ok: false,
					error: 'Failed to fetch product',
				}),
			),
		),
	)

	const errorResult = result as ErrorResult
	const statusCode = result.ok
		? 200
		: errorResult.error.includes('not found')
			? 404
			: errorResult.error.includes('required')
				? 400
				: 500

	return c.json(result, statusCode)
})

export { product }
