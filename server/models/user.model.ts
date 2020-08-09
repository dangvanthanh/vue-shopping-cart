import { Model, DataTypes } from '../deps/denodb.ts';

export class User extends Model {
  static table = 'user';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  };
}

