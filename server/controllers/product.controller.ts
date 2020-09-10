import {
  Controller,
  Get,
  Param,
} from '../deps.ts';
import { products } from '../config/sampleDb.ts';

@Controller('/product')
class ProductController {
  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    return products.get(id);
  }
}

export default ProductController;
