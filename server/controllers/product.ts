const products = new Map<string, any>();

products.set('1', {
  id: '1',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 45.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 1,
});

products.set('2', {
  id: '2',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 75.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
});

products.set('3', {
  id: '3',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 95.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 5,
});

products.set('4', {
  id: '4',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 195.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 3,
});

products.set('5', {
  id: '5',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 945.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
});

products.set('6', {
  id: '6',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 50.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
});

products.set('7', {
  id: '7',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 950.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
});

products.set('8', {
  id: '8',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 195.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 3,
});

class ProductController {
  async index({ response }: { response: any }) {
    response.body = Array.from(products.values());
  }

  async show({ params, response }: { params: { id: string }; response: any }) {
    response.body = products.get(params.id);
  }

  // async create({ request, response }) {}

  // async update({ params, request, response }) {}

  // async delete({ params, response }) {}
}

export default new ProductController();
