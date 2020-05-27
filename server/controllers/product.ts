const products = new Map<string, any>();
products.set('1', {
  id: '1',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 45.9,
  thumbnail: ''
});

products.set('2', {
  id: '2',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 75.9,
  thumbnail: ''
});

products.set('3', {
  id: '3',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility',
  price: 95.9,
  thumbnail: ''
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
