import { Controller, Post, Body, Inject } from '../deps.ts';
import UserService from '../services/UserService.ts';

@Controller('/user')
class UsersController {
  @Post('/create')
  createUser(
    @Body() body: any,
    @Inject('UserService') userService: UserService
  ) {
    userService.createUser(body);
    return {
      message: `Created a user sucssfully`,
    };
  }
}

export default UsersController;
