import { products } from '../config/sampleDb.ts';

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
}

export default new ProductController();
