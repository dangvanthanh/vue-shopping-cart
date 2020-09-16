import { Controller, Post, Body, Inject } from '../deps.ts';
import UserService from '../services/UserService.ts';

@Controller('/user')
class UsersController {
  @Post('/create')
  async createUser(
    @Body() body: any,
    @Inject('UserService') userService: UserService
  ) {
    const user = await userService.createUser(body);
    return user;
  }
}

export default UsersController;
