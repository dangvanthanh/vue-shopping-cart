import { Injectable, EInjectionScope, Users } from '../deps.ts';
import client from '../config/db.ts';

@Injectable(EInjectionScope.SINGLETON)
export default class UserService {
  async login(body: any) {
  }

  async createUser(body: any) {
    const users = new Users(client);
    const newBody = JSON.parse(body);
    const user = await users.create(
      newBody.email,
      newBody.password,
      newBody.name
    );
    return user;
  }
}
