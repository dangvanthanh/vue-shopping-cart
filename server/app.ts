import { Application } from './deps.ts';
import CategoriesController from './controllers/categories.controller.ts';
import ProductController from './controllers/product.controller.ts';
import ProductsController from './controllers/products.controller.ts';
import UserController from './controllers/user.controller.ts';
import UserService from './services/UserService.ts';

const app: Application = new Application({
  controllers: [
    CategoriesController,
    ProductController,
    ProductsController,
    UserController,
  ],
  injectables: [UserService],
});

app.useLogger().useCors().useTiming();

const PORT = 3000;
console.log(`Listening on port ${PORT}`);
await app.run(PORT);
