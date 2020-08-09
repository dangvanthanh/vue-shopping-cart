import { Model, DataTypes, Values } from '../deps/denodb.ts';

export class ProductModel extends Model {
  static table = 'product';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    thumbnail: DataTypes.STRING,
    rating: DataTypes.INT,
    category: DataTypes.STRING
  };
}

export interface Product extends Values {
  title: string,
  description: string,
  price: number,
}
