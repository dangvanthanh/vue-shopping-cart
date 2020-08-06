const products = new Map<string, any>();

products.set('1', {
  id: '1',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 45.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 1,
  category: '3',
});

products.set('2', {
  id: '2',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 75.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
  category: '2',
});

products.set('3', {
  id: '3',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 95.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 5,
  category: '4',
});

products.set('4', {
  id: '4',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 195.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 3,
  category: '5',
});

products.set('5', {
  id: '5',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 945.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
  category: '2',
});

products.set('6', {
  id: '6',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 50.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
  category: '4',
});

products.set('7', {
  id: '7',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 950.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
  category: '5',
});

products.set('8', {
  id: '8',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 195.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 3,
  category: '3',
});

products.set('9', {
  id: '9',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 45.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
  category: '5',
});

products.set('10', {
  id: '10',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 145.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 5,
  category: '2',
});

products.set('11', {
  id: '11',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 25.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 5,
  category: '3',
});

products.set('12', {
  id: '12',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 125.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
  category: '4',
});

products.set('13', {
  id: '13',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 75.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 2,
  category: '4',
});

products.set('14', {
  id: '14',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 175.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 3,
  category: '2',
});

products.set('15', {
  id: '15',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 75.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
  category: '5',
});

products.set('16', {
  id: '16',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 75.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
  category: '2',
});

products.set('17', {
  id: '17',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 15.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 1,
  category: '3',
});

products.set('18', {
  id: '18',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 65.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
  category: '3',
});

products.set('19', {
  id: '19',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 1165.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
  category: '5',
});

products.set('20', {
  id: '20',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 2165.9,
  thumbnail: 'https://dummyimage.com/400x400',
  rating: 4,
  category: '2',
});

class ProductController {
  async index({ params, response }: { params: { id: string }; response: any }) {
    if (params.id === '1') {
      response.body = Array.from(products.values());
      return;
    }

    const newProducts = [];

    for (let product of products.values()) {
      if (product.category === params.id) {
        newProducts.push(product);
      }
    }

    response.body = newProducts;
  }

  async show({ params, response }: { params: { id: string }; response: any }) {
    response.body = products.get(params.id);
  }

  // async create({ request, response }) {}

  // async update({ params, request, response }) {}

  // async delete({ params, response }) {}
}

export default new ProductController();
