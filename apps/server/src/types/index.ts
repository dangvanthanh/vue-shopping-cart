export type Product = {
	id: string
	title: string
	description: string
	price: number
	thumbnail: string
	rating: number
	category: string
	colors: string[]
	favorite?: number
}

export type Category = {
	id: string
	slug: string
	name: string
}
