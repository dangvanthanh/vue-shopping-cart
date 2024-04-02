import { categoriesData } from '../config/sampleDB.ts'
import { Hono } from '../deps.ts'

const categories = new Hono()

categories.get('/', (c) => c.json({ ok: true, data: categoriesData }))

export { categories }
