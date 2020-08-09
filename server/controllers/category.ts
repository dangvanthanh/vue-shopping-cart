import { categories } from '../config/sampleDb.ts';

class CategoryController {
  async index({ response }: { response: any }) {
    response.body = Array.from(categories.values());
  }
}

export default new CategoryController();
