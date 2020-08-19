import {
  Controller,
  Get,
  Param,
} from '../deps/dactyl.ts';
import { products } from '../config/sampleDb.ts';

@Controller('/products')
class ProductsController {
  @Get('/')
  async getAllProducts() {
    return Array.from(products.values());
  }

  @Get('/:id')
  async getAllProductsByCategory(@Param('id') id: string) {
    const newProducts = [];

    for (let product of products.values()) {
      if (product.category === id) {
        newProducts.push(product);
      }
    }

    return newProducts;
  }
}

export default ProductsController;
