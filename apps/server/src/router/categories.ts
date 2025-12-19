import { Effect } from 'effect'
import { Hono } from 'hono'
import { categoriesData } from '@/config/sampleDB.ts'
import type { Category } from '../types/index.ts'

const categories = new Hono()

// Effect-based service layer
const CategoriesService = {
	getAllCategories: Effect.sync(() => categoriesData as Category[]),
}

categories.get('/', async (c) => {
	const result = await Effect.runPromise(
		CategoriesService.getAllCategories.pipe(
			Effect.map((categories) => ({ ok: true, data: categories })),
			Effect.catchAll((error) =>
				Effect.succeed({
					ok: false,
					error:
						typeof error === 'string' ? error : 'Failed to fetch categories',
				}),
			),
		),
	)

	return c.json(result, result.ok ? 200 : 500)
})

export { categories }
