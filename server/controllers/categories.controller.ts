import {
  Controller,
  Get,
} from '../deps.ts';
import { categories } from '../config/sampleDb.ts';

@Controller('/categories')
class CategoriesController {
  @Get('/')
  async getAllCategories() {
    return Array.from(categories.values());
  }
}

export default CategoriesController;
