import { Model, DataTypes, Values } from '../deps/denodb.ts';

export class CategoryModel extends Model {
  static table = 'category';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, type: DataTypes.STRING },
    slug: DataTypes.STRING,
    name: DataTypes.STRING,
  };
}

export interface Category extends Values {
  id: string,
  slug: string,
  name: string
}
