import type { Category, Product } from '@/types/index.ts'

export const productsSample = new Map<string, Product>()

productsSample.set('1', {
	id: '1',
	title: 'Moustache Samedi 27 Trail 8',
	description: 'Focused around comfort and flexibility',
	price: 5399,
	thumbnail: '/images/mountain-bike.png',
	rating: 1,
	category: '3',
	colors: ['yellow', 'cyan'],
	favorite: 1,
})

productsSample.set('2', {
	id: '2',
	title: 'Sonder Colibri Ti Force 22',
	description:
		'An excellent-value, comfortable all-rounder that will last for years',
	price: 2449,
	thumbnail: '/images/bike.png',
	rating: 4,
	category: '2',
	colors: ['red', 'cyan'],
	favorite: 0,
})

productsSample.set('3', {
	id: '3',
	title: 'MiRider One electric folding bike',
	description: 'Focused around comfort and flexibility',
	price: 1300,
	thumbnail: '/images/electric-bike.png',
	rating: 5,
	category: '4',
	colors: ['blue', 'black'],
	favorite: 1,
})

productsSample.set('4', {
	id: '4',
	title: 'Giant Revolt Advanced 0 (2020)',
	description: 'Focused around comfort and flexibility',
	price: 3249,
	thumbnail: '/images/touring-bike.png',
	rating: 3,
	category: '5',
	colors: ['green', 'gray'],
	favorite: 0,
})

productsSample.set('5', {
	id: '5',
	title: 'Liv Avail Advanced Pro 2',
	description: 'A light and agile bike that feels fast over long distances',
	price: 3499,
	thumbnail: '/images/bike.png',
	rating: 4,
	category: '2',
	colors: ['yellow'],
	favorite: 1,
})

productsSample.set('6', {
	id: '6',
	title: 'Emu Mini Folding Electric bike',
	description: 'Focused around comfort and flexibility',
	price: 999,
	thumbnail: '/images/electric-bike.png',
	rating: 2,
	category: '4',
	colors: ['black', 'red'],
	favorite: 0,
})

productsSample.set('7', {
	id: '7',
	title: 'Enigma Escape',
	description: 'Focused around comfort and flexibility',
	price: 3888,
	thumbnail: '/images/touring-bike.png',
	rating: 2,
	category: '5',
	colors: ['black', 'red'],
	favorite: 1,
})

productsSample.set('8', {
	id: '8',
	title: 'Carrera Titan X',
	description: 'Focused around comfort and flexibility',
	price: 850,
	thumbnail: '/images/mountain-bike.png',
	rating: 3,
	category: '3',
	colors: ['green', 'yellow'],
	favorite: 1,
})

productsSample.set('9', {
	id: '9',
	title: 'Vielo all-road all-rounder V',
	description: 'Focused around comfort and flexibility',
	price: 5499,
	thumbnail: '/images/touring-bike.png',
	rating: 4,
	category: '5',
	colors: ['yellow', 'cyan'],
	favorite: 0,
})

productsSample.set('10', {
	id: '10',
	title: 'Orbea Terra M20-D1x GRX',
	description: 'Stunning looks matched to a top-class ride',
	price: 2599,
	thumbnail: '/images/bike.png',
	rating: 5,
	category: '2',
	colors: ['red', 'black'],
})

productsSample.set('11', {
	id: '11',
	title: 'Canyon Exceed CF SL 7.0',
	description: 'Focused around comfort and flexibility',
	price: 2499,
	thumbnail: '/images/mountain-bike.png',
	rating: 5,
	category: '3',
	colors: ['violet'],
	favorite: 0,
})

productsSample.set('12', {
	id: '12',
	title: 'GoCycle GXi folding ebike',
	description: 'Focused around comfort and flexibility',
	price: 3699,
	thumbnail: '/images/electric-bike.png',
	rating: 2,
	category: '4',
	colors: ['yellow', 'green'],
	favorite: 1,
})

productsSample.set('13', {
	id: '13',
	title: 'Vitus E-Escarpe VRX',
	description: 'Focused around comfort and flexibility',
	price: 5000,
	thumbnail: '/images/electric-bike.png',
	rating: 5,
	category: '4',
	colors: ['red', 'green'],
	favorite: 1,
})

productsSample.set('14', {
	id: '14',
	title: 'Thorn Club Tour MK5',
	description: 'Focused around comfort and flexibility',
	price: 2071,
	thumbnail: '/images/bike.png',
	rating: 3,
	category: '2',
	colors: ['black', 'violet'],
	favorite: 1,
})

productsSample.set('15', {
	id: '15',
	title: 'Canyon Grail CF SL 8.0 eTap',
	description: 'Focused around comfort and flexibility',
	price: 3349,
	thumbnail: '/images/touring-bike.png',
	rating: 4,
	category: '5',
	colors: ['white', 'yellow'],
	favorite: 0,
})

productsSample.set('16', {
	id: '16',
	title: 'Ridgeback Panorama',
	description: 'Focused around comfort and flexibility',
	price: 1400,
	thumbnail: '/images/bike.png',
	rating: 4,
	category: '2',
	colors: ['black', 'cyan'],
})

productsSample.set('17', {
	id: '17',
	title: 'Merida One-Twenty 9.7000 (2020)',
	description: 'Focused around comfort and flexibility',
	price: 3600,
	thumbnail: '/images/mountain-bike.png',
	rating: 1,
	category: '3',
	colors: ['red'],
	favorite: 0,
})

productsSample.set('18', {
	id: '18',
	title: 'Giant Anthem Advanced Pro 29 1',
	description: 'Focused around comfort and flexibility',
	price: 4299,
	thumbnail: '/images/mountain-bike.png',
	rating: 4,
	category: '3',
	colors: ['black'],
})

productsSample.set('19', {
	id: '19',
	title: 'Cannondale Topstone',
	description: 'Focused around comfort and flexibility',
	price: 3500,
	thumbnail: '/images/touring-bike.png',
	rating: 4,
	category: '5',
	colors: ['yellow', 'green'],
	favorite: 0,
})

productsSample.set('20', {
	id: '20',
	title: 'Bianchi Infinito XE Ultegra',
	description: 'Focused around comfort and flexibility',
	price: 3200,
	thumbnail: '/images/bike.png',
	rating: 4,
	category: '2',
	colors: ['black', 'red'],
	favorite: 1,
})

export const categoriesSample = new Map<string, Category>()

categoriesSample.set('2', {
	id: '2',
	slug: 'road-bikes',
	name: 'Road Bikes',
})

categoriesSample.set('3', {
	id: '3',
	slug: 'mountain-bikes',
	name: 'Mountain Bikes',
})

categoriesSample.set('4', {
	id: '4',
	slug: 'electric-bikes',
	name: 'Electric Bikes',
})

categoriesSample.set('5', {
	id: '5',
	slug: 'touring-bikes',
	name: 'Touring Bikes',
})

export const productsData = Array.from(productsSample.values())
export const categoriesData = Array.from(categoriesSample.values())
