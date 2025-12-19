import { Effect } from 'effect'
import { Hono } from 'hono'
import { categoriesData, productsData } from '@/config/sampleDB.ts'
import type { Category, Product } from '../types/index.ts'

const products = new Hono()

// Error types using tagged union pattern
type ProductsError =
	| { _tag: 'InvalidCategoryError'; message: string }
	| { _tag: 'InvalidProductIdError'; message: string }
	| { _tag: 'CategoryNotFoundError'; category: string; message: string }

// Result types
type SuccessResult<T> = { ok: true; data: T }
type ErrorResult = { ok: false; error: string }
type ApiResult<T> = SuccessResult<T> | ErrorResult

// Effect-based service layer
const ProductsService = {
	getAllProducts: Effect.sync(() => productsData as Product[]),

	getProductsByCategory: (
		category: string,
	): Effect.Effect<Product[], ProductsError> =>
		Effect.gen(function* () {
			if (!category || category.trim() === '') {
				yield* Effect.fail({
					_tag: 'InvalidCategoryError',
					message: 'Category parameter is required',
				} as ProductsError)
			}

			const categoryObj = categoriesData.find(
				(cat: Category) => cat.slug === category,
			)
			if (!categoryObj) {
				yield* Effect.fail<ProductsError>({
					_tag: 'CategoryNotFoundError',
					category,
					message: `Category ${category} not found`,
				})
			}

			const categoryId = categoryObj?.id
			return productsData.filter(
				(product: Product) => product.category === categoryId,
			)
		}),

	getProductById: (id: string): Effect.Effect<Product, ProductsError> =>
		Effect.gen(function* () {
			if (!id || id.trim() === '') {
				yield* Effect.fail({
					_tag: 'InvalidProductIdError',
					message: 'Product ID parameter is required',
				} as ProductsError)
			}

			const product = productsData.find((p: Product) => p.id === id)
			if (!product) {
				yield* Effect.fail({
					_tag: 'InvalidProductIdError',
					message: `Product with ID ${id} not found`,
				} as ProductsError)
			}
			return product
		}),

	getRelatedProducts: (
		productId: string,
	): Effect.Effect<Product[], ProductsError> =>
		Effect.gen(function* () {
			if (!productId || productId.trim() === '') {
				yield* Effect.fail({
					_tag: 'InvalidProductIdError',
					message: 'Product ID parameter is required',
				} as ProductsError)
			}

			console.log(productId)

			const product = yield* ProductsService.getProductById(productId)
			if (!product) {
				yield* Effect.fail({
					_tag: 'InvalidProductIdError',
					message: `Product with ID ${productId} not found`,
				} as ProductsError)
			}

			const relatedProducts = productsData.filter(
				(p: Product) => p.category === product?.category && p.id !== productId,
			)

			// Get 3 random products from related products
			const shuffled = [...relatedProducts].sort(() => 0.5 - Math.random())
			return shuffled.slice(0, 3)
		}),
}

products
	.get('/', async (c) => {
		const result = await Effect.runPromise(
			ProductsService.getAllProducts.pipe(
				Effect.map(
					(products): ApiResult<Product[]> => ({ ok: true, data: products }),
				),
				Effect.catchAll(() =>
					Effect.succeed({
						ok: false,
						error: 'Failed to fetch products',
					}),
				),
			),
		)

		return c.json(result, result.ok ? 200 : 500)
	})
	.get('/category/:category', async (c) => {
		const category = c.req.param('category')
		console.log(category)

		const result = await Effect.runPromise(
			ProductsService.getProductsByCategory(category).pipe(
				Effect.map(
					(products): ApiResult<Product[]> => ({ ok: true, data: products }),
				),
				Effect.catchAll(() =>
					Effect.succeed({
						ok: false,
						error: 'Failed to fetch products by category',
					}),
				),
			),
		)

		const statusCode = result.ok
			? 200
			: (result as ErrorResult).error.includes('required')
				? 400
				: (result as ErrorResult).error.includes('not found')
					? 404
					: 500

		return c.json(result, statusCode)
	})
	.get('/related/:id', async (c) => {
		const id = c.req.param('id')

		const result = await Effect.runPromise(
			ProductsService.getRelatedProducts(id).pipe(
				Effect.map(
					(products): ApiResult<Product[]> => ({ ok: true, data: products }),
				),
				Effect.catchAll(() =>
					Effect.succeed({
						ok: false,
						error: 'Failed to fetch related products',
					}),
				),
			),
		)

		const statusCode = result.ok
			? 200
			: (result as ErrorResult).error.includes('required')
				? 400
				: 500

		return c.json(result, statusCode)
	})

export { products }
