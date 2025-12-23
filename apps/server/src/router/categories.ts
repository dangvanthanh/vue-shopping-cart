import { Hono } from 'hono'
import { categoriesData } from '@/config/sampleDB.ts'

const categories = new Hono()

categories.get('/', (c) => c.json({ ok: true, data: categoriesData }))

export { categories }
