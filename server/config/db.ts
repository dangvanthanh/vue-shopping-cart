import { Database } from '../deps/denodb.ts';
import { CategoryModel } from '../models/category.model.ts';
import { ProductModel } from '../models/product.model.ts';

export const db = new Database('mongo', {
  uri: 'mongodb://localhost:27017',
  database: 's_db',
});

db.link([CategoryModel, ProductModel]);
