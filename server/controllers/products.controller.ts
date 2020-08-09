import {
  Controller,
  Get
} from '../deps/dactyl.ts';
import { products } from '../config/sampleDb.ts';

@Controller('/products')
class ProductsController {
  @Get('/')
  async getAllProducts() {
    return Array.from(products.values())
  }
}

export default ProductsController;
